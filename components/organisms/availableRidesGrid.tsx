import { css } from "@/styled-system/css";
import { RideCardVertical } from "../molecules/rideCardVertical";
import { RideDetail } from "@/hooks/useApp";

interface AvailableRidesGridProps {
  rides: RideDetail[];
  onRideClick: (rideId: string) => void;
  onParticipate: (rideId: string) => void;
}

export const AvailableRidesGrid = ({ rides, onRideClick, onParticipate }: AvailableRidesGridProps) => {
  return (
    <div className={css({ display: "grid", gridTemplateColumns: { base: "1fr", lg: "repeat(2, 1fr)" }, gap: "3", md: { gap: "4" } })}>
      {rides.map((ride) => (
        <RideCardVertical
          key={ride.id}
          id={ride.id}
          title={ride.title}
          origin={ride.origin}
          destination={ride.destination}
          driverName={ride.driver.name}
          seats={ride.seats}
          price={ride.price}
          onClick={() => onRideClick(ride.id)}
          onParticipate={() => onParticipate(ride.id)}
        />
      ))}
    </div>
  );
};