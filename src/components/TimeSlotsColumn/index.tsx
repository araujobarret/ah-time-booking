import { FunctionComponent } from "react";
import Badge from "../../components/core/Badge";
import Button from "../../components/core/Button";
import { CompanyTimeSlotsGrouped, TimeSlotDate } from "../../types/interfaces";
import { getFormattedTimes } from "../../utils/dates";

interface TimeSlotsColumnProps {
  company: CompanyTimeSlotsGrouped;
  onSelectTimeSlot: (
    company: CompanyTimeSlotsGrouped,
    slot: TimeSlotDate
  ) => void;
}

const TimeSlotsColumn: FunctionComponent<TimeSlotsColumnProps> = ({
  company,
  onSelectTimeSlot,
}) => {
  const badgeText = company.bookedSlot
    ? getFormattedTimes(
        company.bookedSlot.start_time,
        company.bookedSlot.end_time
      )
    : "Book a time";
  return (
    <div>
      <Badge>{company.name}</Badge>
      <Button>{badgeText}</Button>

      {company.time_slots.indexes.map((key) => (
        <div key={`company_${company.id}_${key}`}>
          <div>{company.time_slots[key].day}</div>
          {company.time_slots[key].time_slots.map((timeSlot) => (
            <Button
              key={timeSlot.id}
              className="button-time"
              disabled={timeSlot.conflicted}
              onClick={() => onSelectTimeSlot(company, timeSlot)}
            >
              {getFormattedTimes(timeSlot.start_time, timeSlot.end_time)}
            </Button>
          ))}
        </div>
      ))}
    </div>
  );
  // return <div className="column">{children}</div>;
};

export default TimeSlotsColumn;
