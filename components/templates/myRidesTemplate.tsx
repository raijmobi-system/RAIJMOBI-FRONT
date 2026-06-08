"use client";

import { useState } from "react";
import { PageHeader } from "../organisms/pageHeader";
import { MyRidesSection } from "../organisms/myRidesSection";
import { NotificationModal } from "../organisms/notificationModal";
import { RideDetailModal } from "../organisms/rideDetailModal";
import { RideFormModal } from "../organisms/rideFormModal";
import { RequestsModal } from "../organisms/requestsModal";
import { useApp } from "@/hooks/useApp";

export const MyRidesTemplate = () => {
  const { myRides, driverRides, pendingRequests, vehicles, addDriverRide, updateDriverRide, acceptPassenger, rejectPassenger, notifications, getUnreadCount, markNotificationRead, markAllNotificationsRead } = useApp();
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [selectedRide, setSelectedRide] = useState<{ id: string; isDriver: boolean } | null>(null);
  const [isCreateRideOpen, setIsCreateRideOpen] = useState(false);
  const [isEditRideOpen, setIsEditRideOpen] = useState(false);
  const [editingRideId, setEditingRideId] = useState<string | null>(null);
  const [requestsRideId, setRequestsRideId] = useState<string | null>(null);

  const upcomingRides = Object.values(myRides).filter(r => r.status !== "Finalizada");
  const pastRides = Object.values(myRides).filter(r => r.status === "Finalizada");
  const driverRidesList = Object.values(driverRides);

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
      <PageHeader title="Minhas Caronas" onNotificationsClick={() => setIsNotificationOpen(true)} notificationCount={getUnreadCount()} />
      <div className="px-4 md:px-8 py-6 max-w-[1400px] mx-auto">
        {/* <MyRidesSection
          upcomingRides={upcomingRides}
          driverRides={driverRidesList}
          pastRides={pastRides}
          onCreateRide={() => setIsCreateRideOpen(true)}
          onEditRide={(id) => {
            setEditingRideId(id);
            setIsEditRideOpen(true);
          }}
          onRequests={(id) => setRequestsRideId(id)}
          // onRideClick={(id, isDriver) => setSelectedRide({ id, isDriver })}
        /> */}
        <MyRidesSection
  upcomingRides={upcomingRides}
  driverRides={driverRidesList}
  pastRides={pastRides}
  onCreateRide={() => setIsCreateRideOpen(true)}
  onEditRide={(id) => {
    setEditingRideId(id);
    setIsEditRideOpen(true);
  }}
  onRequests={(id) => setRequestsRideId(id)}
  onRideClick={(id, isDriver) => setSelectedRide({ id, isDriver })}   // ← adicione esta linha

/>
      </div>
      <NotificationModal isOpen={isNotificationOpen} onClose={() => setIsNotificationOpen(false)} notifications={notifications} onMarkRead={markNotificationRead} onMarkAllRead={markAllNotificationsRead} />
      {selectedRide && (
        <RideDetailModal
          isOpen={!!selectedRide}
          onClose={() => setSelectedRide(null)}
          ride={selectedRide.isDriver ? driverRides[selectedRide.id] : myRides[selectedRide.id]}
          context={selectedRide.isDriver ? "driver" : "myrides"}
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
    </>
  );
};