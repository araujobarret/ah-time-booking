import { FunctionComponent } from "react";
import styled from "styled-components";
import Badge from "../../components/core/Badge";
import BaseButton from "../../components/core/Button";
import { CompanyTimeSlotsGrouped, TimeSlotDate } from "../../types/interfaces";
import { getFormattedTimes } from "../../utils/dates";

const Column = styled.div`
  padding: 0 16px;
`;

const DateWrapper = styled.div`
  border: 2px solid ${({ theme }) => theme.borders.primary};
  border-radius: 4px;
  padding: 4px;
  margin-bottom: 16px;
`;

const DateTitle = styled.div`
  text-align: center;
`;

const Button = styled(BaseButton)`
  margin: 8px 0;
`;
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
    <Column>
      <Badge type="primary">{company.name}</Badge>
      <Badge type="secondary">{badgeText}</Badge>

      {company.time_slots.indexes.map((key) => (
        <DateWrapper key={`company_${company.id}_${key}`}>
          <DateTitle>{company.time_slots[key].day}</DateTitle>
          {company.time_slots[key].time_slots.map((timeSlot) => (
            <Button
              key={timeSlot.id}
              disabled={timeSlot.conflicted}
              onClick={() => onSelectTimeSlot(company, timeSlot)}
            >
              {`${getFormattedTimes(timeSlot.start_time, timeSlot.end_time)} ${
                company.bookedSlot?.id === timeSlot.id ? " (unselect)" : ""
              }`}
            </Button>
          ))}
        </DateWrapper>
      ))}
    </Column>
  );
};

export default TimeSlotsColumn;
