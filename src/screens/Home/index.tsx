import { FunctionComponent } from "react";
import TimeSlotsColumn from "../../components/TimeSlotsColumn";
import { useTimeBooking } from "../../hooks/useTimeBooking";
import { CompanyTimeSlotsGrouped, TimeSlotDate } from "../../types/interfaces";

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
    <div className="column-block">
      {companiesWithBookedSlots?.map((company) => (
        <TimeSlotsColumn
          key={`company_${company.id}`}
          company={company}
          onSelectTimeSlot={(company, slot) =>
            handleOnSelectTimeSlot(company, slot)
          }
        />
      ))}
    </div>
  );
};

export default Home;
