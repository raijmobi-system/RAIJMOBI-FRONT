"use client";

import { useState } from "react";
import { PageHeader } from "../organisms/pageHeader";
import { SearchBarWithFilters } from "../organisms/searchBarWithFilters";
import { HorizontalRideCarousel } from "../organisms/horizontalRideCarousel";
import { AvailableRidesGrid } from "../organisms/availableRidesGrid";
import { FilterModal } from "../organisms/filterModal";
import { NotificationModal } from "../organisms/notificationModal";
import { RideDetailModal } from "../organisms/rideDetailModal";
import { useApp } from "@/hooks/useApp";

export const HomeTemplate = () => {
  const { rideDetails, notifications, getUnreadCount, markNotificationRead, markAllNotificationsRead } = useApp();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [selectedRide, setSelectedRide] = useState<string | null>(null);
  const featuredRides = ["ride-mossoro-1", "ride-caico-2", "ride-natal-3"].map(id => rideDetails[id]);
  const availableRides = ["ride-mossoro-4", "ride-caico-5"].map(id => rideDetails[id]);

  const handleParticipate = (rideId: string) => {
    alert("✅ Participação confirmada!");
  };

  const handleAISearch = (query: string) => {
    alert(`Busca IA: ${query}`);
  };

  return (
    <>
      <PageHeader title="Olá, Fernando!" subtitle="Para onde vai hoje?" onNotificationsClick={() => setIsNotificationOpen(true)} notificationCount={getUnreadCount()} />
      <div className="px-4 md:px-8 py-6 space-y-8 max-w-[1400px] mx-auto">
        <SearchBarWithFilters onSearch={() => {}} onOpenFilters={() => setIsFilterOpen(true)} onAISearch={handleAISearch} />
        <HorizontalRideCarousel rides={featuredRides} onRideClick={setSelectedRide} onParticipate={handleParticipate} />
        <section>
          <h3 className="text-headline-md-mobile md:text-headline-md text-on-background mb-4">🚘 Disponíveis agora</h3>
          <AvailableRidesGrid rides={availableRides} onRideClick={setSelectedRide} onParticipate={handleParticipate} />
        </section>
      </div>
      <FilterModal isOpen={isFilterOpen} onClose={() => setIsFilterOpen(false)} onApply={(filters) => console.log(filters)} />
      <NotificationModal isOpen={isNotificationOpen} onClose={() => setIsNotificationOpen(false)} notifications={notifications} onMarkRead={markNotificationRead} onMarkAllRead={markAllNotificationsRead} />
      {selectedRide && (
        <RideDetailModal
          isOpen={!!selectedRide}
          onClose={() => setSelectedRide(null)}
          ride={rideDetails[selectedRide]}
          context="search"
          onParticipate={() => handleParticipate(selectedRide)}
        />
      )}
    </>
  );
};