import useSWR from "swr";
import companiesFetcher from "../api/getCompanies";
import {
  TimeSlotByDate,
  CompanyTimeSlotsGrouped,
  Company,
} from "../types/interfaces";
import { days } from "../utils/dates";

const generateTimeSlotId = (
  companyId: string,
  startTime: Date,
  endTime: Date
) => `${companyId}-${startTime.toISOString()}-${endTime.toISOString()}`;

const groupCompaniesTimeSlot = (
  companies: Company[]
): CompanyTimeSlotsGrouped[] => {
  const companiesWithGroupedTimeSlots: CompanyTimeSlotsGrouped[] = [];

  companies.map((company) => {
    const dates: TimeSlotByDate = {} as TimeSlotByDate;
    dates.indexes = [];
    dates.ids = [];
    const orderedDates: TimeSlotByDate = {} as TimeSlotByDate;

    company.time_slots.map((timeSlot) => {
      const startDate = new Date(timeSlot.start_time);
      const localeDate = startDate.toLocaleDateString("en-gb");
      const day = days[startDate.getUTCDay()];

      const start_time = new Date(timeSlot.start_time);
      const end_time = new Date(timeSlot.end_time);
      const id = generateTimeSlotId(company.id, start_time, end_time);
      dates.ids.push(id);

      if (!dates[localeDate]) {
        dates[localeDate] = {
          date: localeDate,
          day,
          time_slots: [{ start_time, end_time, id, conflicted: false }],
        };
        dates.indexes.push(localeDate);
      } else {
        dates[localeDate].time_slots.push({
          start_time,
          end_time,
          id,
          conflicted: false,
        });
      }
      return null;
    });

    Object.keys(dates)
      .sort()
      .map((date: string) => (orderedDates[date] = dates[date]));

    companiesWithGroupedTimeSlots.push({
      ...company,
      time_slots: orderedDates,
    });

    return null;
  });

  return companiesWithGroupedTimeSlots;
};

export const useCompanies = () => {
  const { data, error } = useSWR("api-companies", companiesFetcher, {
    suspense: true,
  });

  const companiesWithGroupedTimeSlots = groupCompaniesTimeSlot(data ?? []);

  return {
    companies: data,
    companiesNormalized: companiesWithGroupedTimeSlots,
    error,
  };
};
