"use client";

import { useState } from "react";
import { css } from "@/styled-system/css";
import { MyRideCard } from "../molecules/myRideCard";
import { DriverRideCard } from "../molecules/driverRideCard";
import { Button } from "../atoms/button";
import { MyRide, DriverRide } from "@/hooks/useApp";

interface MyRidesSectionProps {
  upcomingRides: MyRide[];
  driverRides: DriverRide[];
  pastRides: MyRide[];
  onCreateRide: () => void;
  onEditRide: (rideId: string) => void;
  onRequests: (rideId: string) => void;
  onRideClick: (rideId: string, isDriver: boolean) => void;
}

export const MyRidesSection = ({
  upcomingRides,
  driverRides,
  pastRides,
  onCreateRide,
  onEditRide,
  onRequests,
  onRideClick,
}: MyRidesSectionProps) => {
  const [activeTab, setActiveTab] = useState<"upcoming" | "driver" | "past">("upcoming");

  return (
    <div>
      <div className={css({ display: "flex", bg: "#363636", rounded: "xl", p: "1", gap: "1", maxW: "2xl", mb: "6" })}>
        {[
          { key: "upcoming", label: "Passageiro" },
          { key: "driver", label: "Motorista" },
          { key: "past", label: "Finalizados" },
        ].map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key as any)}
            className={css({
              flex: 1,
              py: "2",
              px: "3",
              rounded: "lg",
              fontSize: "labelLg",
              transition: "all 200ms",
              bg: activeTab === tab.key ? "primaryContainer" : "transparent",
              color: activeTab === tab.key ? "onPrimaryContainer" : "white/60",
              fontWeight: activeTab === tab.key ? "bold" : "normal",
              _hover: activeTab !== tab.key ? { color: "white" } : {},
            })}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {activeTab === "upcoming" && (
        <div className={css({ display: "grid", gridTemplateColumns: { base: "1fr", lg: "repeat(2, 1fr)" }, gap: "3" })}>
          {upcomingRides.map((ride) => (
            <MyRideCard
              key={ride.id}
              id={ride.id}
              title={ride.title}
              status={ride.status}
              origin={ride.origin}
              destination={ride.destination}
              driverName={ride.driver.name}
              date={ride.date}
              onClick={() => onRideClick(ride.id, false)}
            />
          ))}
        </div>
      )}

      {activeTab === "driver" && (
        <div className={css({ display: "grid", gridTemplateColumns: { base: "1fr", lg: "repeat(2, 1fr)" }, gap: "3" })}>
          <button onClick={onCreateRide} className={css({
            w: "full",
            h: "full",
            bg: "gradient-to-br from-brand-green/10 to-brand-green/5",
            border: "2px dashed",
            borderColor: "brand.green/40",
            rounded: "2xl",
            p: "6",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "3",
            transition: "all 200ms",
            _hover: { bg: "brand.green/20" },
          })}>
            <div className={css({ w: "16", h: "16", rounded: "full", bg: "brand.green/20", display: "flex", alignItems: "center", justifyContent: "center", transition: "transform 200ms", _groupHover: { scale: "1.1" } })}>
              <span className="material-symbols-outlined" style={{ fontSize: 32, color: "#547812" }}>add</span>
            </div>
            <div>
              <p className={css({ fontSize: "titleLg", fontWeight: "bold", color: "brand.green" })}>Criar nova carona</p>
              <p className={css({ fontSize: "bodyMd", color: "onSurfaceVariant", mt: "1" })}>Ofereça uma viagem e ganhe dinheiro</p>
            </div>
          </button>
          {driverRides.map((ride) => (
            <DriverRideCard
              key={ride.id}
              id={ride.id}
              title={ride.title}
              origin={ride.origin}
              destination={ride.destination}
              date={ride.date}
              time={ride.time}
              seats={ride.seats}
              price={ride.price}
              passengers={ride.passengers}
              pendingCount={0} // viria do estado
              onEdit={() => onEditRide(ride.id)}
              onRequests={() => onRequests(ride.id)}
              onClick={() => onRideClick(ride.id, true)}
            />
          ))}
        </div>
      )}

      {activeTab === "past" && (
        <div className={css({ display: "grid", gridTemplateColumns: { base: "1fr", lg: "repeat(2, 1fr)" }, gap: "3" })}>
          {pastRides.map((ride) => (
            <MyRideCard
              key={ride.id}
              id={ride.id}
              title={ride.title}
              status={ride.status}
              origin={ride.origin}
              destination={ride.destination}
              driverName={ride.driver.name}
              date={ride.date}
              onClick={() => onRideClick(ride.id, false)}
            />
          ))}
        </div>
      )}
    </div>
  );
};