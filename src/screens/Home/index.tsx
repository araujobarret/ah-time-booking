import { FunctionComponent } from "react";
import styled from "styled-components";
import TimeSlotsColumn from "../../components/TimeSlotsColumn";
import { useTimeBooking } from "../../hooks/useTimeBooking";
import { CompanyTimeSlotsGrouped, TimeSlotDate } from "../../types/interfaces";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

const Home: FunctionComponent = () => {
  const { companiesWithBookedSlots, bookSlot, dropSlot } = useTimeBooking();

  const handleOnSelectTimeSlot = (
    company: CompanyTimeSlotsGrouped,
    slot: TimeSlotDate
  ) => {
    if (!company.bookedSlot) {
      return bookSlot(slot);
    }

    if (company.bookedSlot.id === slot.id) {
      return dropSlot(slot);
    }
  };

  return (
    <Wrapper>
      {companiesWithBookedSlots?.map((company) => (
        <TimeSlotsColumn
          key={`company_${company.id}`}
          company={company}
          onSelectTimeSlot={(company, slot) =>
            handleOnSelectTimeSlot(company, slot)
          }
        />
      ))}
    </Wrapper>
  );
};

export default Home;
