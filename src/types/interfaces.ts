export type TimeSlot = {
  start_time: string;
  end_time: string;
};

export type TimeSlotDate = {
  id: string;
  start_time: Date;
  end_time: Date;
  conflicted: boolean;
};

export type Company = {
  id: string;
  name: string;
  type: string;
  time_slots: TimeSlot[];
};

export type TimeSlotByDate = {
  [index: string]: {
    date: string;
    day: string;
    time_slots: TimeSlotDate[];
  };
} & { indexes: string[]; ids: string[] };

export type CompanyTimeSlotsGrouped = Omit<Company, "time_slots"> & {
  time_slots: TimeSlotByDate;
  bookedSlot?: TimeSlotDate | null;
};
