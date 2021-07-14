import { useState, useCallback } from "react";
import { useCompanies } from "./useCompanies";
import { CompanyTimeSlotsGrouped, TimeSlotDate } from "../types/interfaces";

const checkOverlappingDate = (
  date1: TimeSlotDate,
  date2: TimeSlotDate
): Boolean =>
  date1.start_time <= date2.end_time && date1.end_time >= date2.start_time;

export const useTimeBooking = () => {
  const { companiesNormalized } = useCompanies();
  const [bookedSlots, setBookedSlot] = useState<TimeSlotDate[]>([]);
  const [keysOfBookedSlots, setKeysOfBookedSlots] = useState<string[]>([]);

  const bookSlot = useCallback(
    (slot: TimeSlotDate) => {
      if (!keysOfBookedSlots.includes(slot.id)) {
        setBookedSlot((slots) => [...slots, slot]);
        setKeysOfBookedSlots((keysof) => [...keysof, slot.id]);
      }
    },
    [keysOfBookedSlots]
  );

  const dropSlot = useCallback((slot: TimeSlotDate) => {
    setBookedSlot((bookedSlots) =>
      bookedSlots.filter((bookedSlot) => bookedSlot.id !== slot.id)
    );
    setKeysOfBookedSlots((keysof) => keysof.filter((key) => key !== slot.id));
  }, []);

  const conflictingSlots: string[] = [];

  // Derived state of conflicting time slots
  // traverse all companies checking for the conflicts accordingly to the booked slots
  bookedSlots.map((slot) => {
    companiesNormalized?.map((company) => {
      company.time_slots.indexes.map((index) => {
        company.time_slots[index].time_slots.map((timeSlot) => {
          if (slot.id === timeSlot.id) {
            return null;
          }

          if (checkOverlappingDate(slot, timeSlot)) {
            conflictingSlots.push(timeSlot.id);
          }
        });
      });
    });
  });

  // Derived state companies data with slots marked as conflicting and the current slot
  // of each company
  const companiesWithBookedSlots: CompanyTimeSlotsGrouped[] =
    companiesNormalized?.map((company) => {
      const newCompany: CompanyTimeSlotsGrouped = {
        ...company,
        bookedSlot: null,
      };

      company.time_slots.indexes.map((index) => {
        newCompany.time_slots[index].time_slots = company.time_slots[
          index
        ].time_slots.map((timeSlot) => {
          if (keysOfBookedSlots.includes(timeSlot.id)) {
            newCompany.bookedSlot = timeSlot;
          }

          return {
            ...timeSlot,
            conflicted: conflictingSlots.includes(timeSlot.id),
          };
        });
      });

      return newCompany;
    }) as CompanyTimeSlotsGrouped[];

  return {
    bookedSlots,
    keysOfBookedSlots,
    bookSlot,
    dropSlot,
    conflictingSlots,
    companiesWithBookedSlots,
  };
};
