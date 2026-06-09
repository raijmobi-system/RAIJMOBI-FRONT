"use client";

import { useState } from "react";
import { PageHeader } from "../organisms/pageHeader";
import { MyRidesSection } from "../organisms/myRidesSection";
import { NotificationModal } from "../organisms/notificationModal";
import { RideDetailModal } from "../organisms/rideDetailModal";
import { RideFormModal } from "../organisms/rideFormModal";
import { RequestsModal } from "../organisms/requestsModal";
import { RatingModal } from "../organisms/ratingModal";
import { useApp } from "@/hooks/useApp";

export const MyRidesTemplate = () => {
  const {
    myRides,
    driverRides,
    pendingRequests,
    vehicles,
    addDriverRide,
    updateDriverRide,
    acceptPassenger,
    rejectPassenger,
    notifications,
    getUnreadCount,
    markNotificationRead,
    markAllNotificationsRead,
    submitRating,
  } = useApp();

  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [selectedRide, setSelectedRide] = useState<{ id: string; isDriver: boolean } | null>(null);
  const [isCreateRideOpen, setIsCreateRideOpen] = useState(false);
  const [isEditRideOpen, setIsEditRideOpen] = useState(false);
  const [editingRideId, setEditingRideId] = useState<string | null>(null);
  const [requestsRideId, setRequestsRideId] = useState<string | null>(null);

  // Estados para avaliação
  const [ratingDriverModal, setRatingDriverModal] = useState<{
    isOpen: boolean;
    rideId: string;
    driverName: string;
  }>({ isOpen: false, rideId: "", driverName: "" });

  const [ratingPassengerModal, setRatingPassengerModal] = useState<{
    isOpen: boolean;
    passengerName: string;
  }>({ isOpen: false, passengerName: "" });

  const upcomingRides = Object.values(myRides).filter(r => r.status !== "Finalizada");
  const pastRides = Object.values(myRides).filter(r => r.status === "Finalizada");
  const driverRidesList = Object.values(driverRides);

  const pendingCountMap = Object.fromEntries(
    Object.keys(driverRides).map(id => [id, pendingRequests[id]?.length || 0])
  );

  // Handlers de avaliação
  const handleRateDriver = (rideId: string, driverName: string) => {
    setRatingDriverModal({ isOpen: true, rideId, driverName });
  };

  const handleRatePassenger = (name: string) => {
    setRatingPassengerModal({ isOpen: true, passengerName: name });
  };

  const handleCreateRide = (data: any) => {
    const selectedVehicle = vehicles[data.vehicleId];
    addDriverRide({
      origin: data.origin,
      destination: data.destination,
      date: data.date,
      time: data.time,
      price: data.price,
      seats: data.seats,
      vehicle: selectedVehicle,
    });
  };

  const handleEditRide = (data: any) => {
    if (editingRideId) {
      const selectedVehicle = vehicles[data.vehicleId];
      updateDriverRide(editingRideId, {
        origin: data.origin,
        destination: data.destination,
        date: data.date,
        time: data.time,
        price: data.price,
        seats: data.seats,
        vehicle: selectedVehicle,
        title: `${data.origin} → ${data.destination}`,
      });
    }
  };

  return (
    <>
      <PageHeader
        title="Minhas Caronas"
        onNotificationsClick={() => setIsNotificationOpen(true)}
        notificationCount={getUnreadCount()}
      />
      <div className="px-4 md:px-8 py-6 max-w-[1400px] mx-auto">
        <MyRidesSection
          upcomingRides={upcomingRides}
          driverRides={driverRidesList}
          pastRides={pastRides}
          pendingCountMap={pendingCountMap}
          onCreateRide={() => setIsCreateRideOpen(true)}
          onEditRide={(id) => {
            setEditingRideId(id);
            setIsEditRideOpen(true);
          }}
          onRequests={(id) => setRequestsRideId(id)}
          onRideClick={(id, isDriver) => setSelectedRide({ id, isDriver })}
          onRateDriver={handleRateDriver}
        />
      </div>

      {/* Modais */}
      <NotificationModal
        isOpen={isNotificationOpen}
        onClose={() => setIsNotificationOpen(false)}
        notifications={notifications}
        onMarkRead={markNotificationRead}
        onMarkAllRead={markAllNotificationsRead}
      />

      {selectedRide && (
        <RideDetailModal
          isOpen={!!selectedRide}
          onClose={() => setSelectedRide(null)}
          ride={selectedRide.isDriver ? driverRides[selectedRide.id] : myRides[selectedRide.id]}
          context={selectedRide.isDriver ? "driver" : "myrides"}
          onRatePassenger={handleRatePassenger}
          onCancel={() => {
            alert("Cancelado");
            setSelectedRide(null);
          }}
          onEdit={() => {
            setEditingRideId(selectedRide.id);
            setIsEditRideOpen(true);
            setSelectedRide(null);
          }}
        />
      )}

      <RideFormModal
        isOpen={isCreateRideOpen}
        onClose={() => setIsCreateRideOpen(false)}
        onSubmit={handleCreateRide}
        vehicles={vehicles}
        mode="create"
      />

      {editingRideId && (
        <RideFormModal
          isOpen={isEditRideOpen}
          onClose={() => {
            setIsEditRideOpen(false);
            setEditingRideId(null);
          }}
          onSubmit={handleEditRide}
          initialData={driverRides[editingRideId]}
          vehicles={vehicles}
          mode="edit"
        />
      )}

      {requestsRideId && (
        <RequestsModal
          isOpen={!!requestsRideId}
          onClose={() => setRequestsRideId(null)}
          requests={pendingRequests[requestsRideId] || []}
          onAccept={(idx) => acceptPassenger(requestsRideId, idx)}
          onReject={(idx) => rejectPassenger(requestsRideId, idx)}
        />
      )}

      {/* Modal de avaliação do motorista */}
      <RatingModal
        isOpen={ratingDriverModal.isOpen}
        onClose={() => setRatingDriverModal({ isOpen: false, rideId: "", driverName: "" })}
        title={`Avaliar ${ratingDriverModal.driverName}`}
        subtitle="Como foi sua viagem com este motorista?"
        onSubmit={(rating, comment) => {
          submitRating("driver", ratingDriverModal.rideId, rating, comment);
          setRatingDriverModal({ isOpen: false, rideId: "", driverName: "" });
        }}
      />

      {/* Modal de avaliação do passageiro */}
      <RatingModal
        isOpen={ratingPassengerModal.isOpen}
        onClose={() => setRatingPassengerModal({ isOpen: false, passengerName: "" })}
        title={`Avaliar ${ratingPassengerModal.passengerName}`}
        subtitle="Como foi a viagem com este passageiro?"
        onSubmit={(rating, comment) => {
          submitRating("passenger", ratingPassengerModal.passengerName, rating, comment);
          setRatingPassengerModal({ isOpen: false, passengerName: "" });
        }}
      />
    </>
  );
};