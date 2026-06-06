"use client";

import React, { createContext, useContext, useState, useCallback, useEffect } from "react";

// Tipos básicos
export interface Vehicle {
  model: string;
  color: string;
  plate: string;
}

export interface Payment {
  type: "credit_card" | "debit_card" | "wallet";
  description: string;
}

export interface RideDetail {
  id: string;
  title: string;
  driver: { name: string; photo: string; rating: number };
  vehicle: Vehicle & { year: string };
  origin: string;
  destination: string;
  date: string;
  time: string;
  seats: string;
  price: string;
}

export interface MyRide {
  id: string;
  title: string;
  status: "Confirmado" | "Recusado" | "Pendente" | "Finalizada";
  driver: { name: string; photo: string; rating: number };
  vehicle: Vehicle & { year: string };
  origin: string;
  destination: string;
  date: string;
  time: string;
  seats: string;
  price: string;
  cancelable: boolean;
}

export interface DriverRide {
  id: string;
  title: string;
  status: "Ativa";
  driver: { name: string; photo: string; rating: number };
  vehicle: Vehicle & { year: string };
  origin: string;
  destination: string;
  date: string;
  time: string;
  seats: string;
  price: string;
  cancelable: boolean;
  passengers: string[];
}

export interface Notification {
  id: number;
  title: string;
  message: string;
  time: string;
  icon: string;
  color: string;
  read: boolean;
}

export interface ChatMessage {
  sender: string;
  avatar: string;
  text: string;
  time: string;
}

export interface ChatContact {
  avatar: string;
  messages: ChatMessage[];
}

interface AppContextType {
  user: { name: string; email: string; phone: string; rating: number };
  vehicles: Vehicle[];
  payments: Payment[];
  rideDetails: Record<string, RideDetail>;
  myRides: Record<string, MyRide>;
  driverRides: Record<string, DriverRide>;
  pendingRequests: Record<string, { name: string; photo: string; rating: number; requestDate: string }[]>;
  chatData: Record<string, ChatContact>;
  notifications: Notification[];
  // Funções
  addVehicle: (vehicle: Vehicle) => void;
  updateVehicle: (index: number, vehicle: Vehicle) => void;
  addPayment: (payment: Payment) => void;
  updatePayment: (index: number, payment: Payment) => void;
  addDriverRide: (ride: Omit<DriverRide, "id" | "title" | "status" | "driver" | "passengers">) => void;
  updateDriverRide: (id: string, updates: Partial<DriverRide>) => void;
  acceptPassenger: (rideId: string, passengerIndex: number) => void;
  rejectPassenger: (rideId: string, passengerIndex: number) => void;
  sendChatMessage: (contactName: string, text: string) => void;
  markNotificationRead: (id: number) => void;
  markAllNotificationsRead: () => void;
  getUnreadCount: () => number;
  requestPasswordReset: (email: string) => Promise<void>;
  resetPassword: (token: string, newPassword: string) => Promise<void>;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  // Dados mockados (baseados no HTML original)
  const [vehicles, setVehicles] = useState<Vehicle[]>([
    { model: "Ford Ka", color: "Branco", plate: "ABC-1234" },
    { model: "Honda Civic", color: "Preto", plate: "XYZ-5678" },
  ]);

  const [payments, setPayments] = useState<Payment[]>([
    { type: "credit_card", description: "Visa terminando em 8890" },
    { type: "wallet", description: "Carteira Kiwidi (R$ 45,00)" },
  ]);

  const rideDetailsData: Record<string, RideDetail> = {
    "ride-mossoro-1": {
      id: "KIW-001",
      title: "Kiwidi Express - Mossoró",
      driver: {
        name: "Rafael Fernandes",
        photo: "https://lh3.googleusercontent.com/aida-public/AB6AXuDcC3IhLdXUf0oxN_AVlMYLpo7A1vT1tEmhQoS3zfEIaPuor4bHCLS4ye9F0GFysVV849x2tI_MaQEQhkrXEEeOQ6D8VoSyA70eIYxGIj5FsAk-a_2ncGQT6tLIt9vDHqmL-ZDcigr5fS0RsggLBxtwCy9SpKbx94tMiz0JWP42YNSSnF_jO5zKzq8Mu1KIKSh_mzo9DWYo9SMtunzO6cMhF0pufxUXh3IkDvqJrXS0H1l8iXSU9BQX9Fhl2bwm2DIWbTeBZ6XcZlqX",
        rating: 4.8,
      },
      vehicle: { model: "Ford Ka", color: "Branco", plate: "ABC-1234", year: "2022" },
      origin: "Pau dos Ferros",
      destination: "Mossoró",
      date: "15/12/2024",
      time: "08:00",
      seats: "4/6",
      price: "R$ 49,99",
    },
    "ride-caico-2": {
      id: "KIW-002",
      title: "Kiwidi Trip - Caicó",
      driver: {
        name: "Rafael Fernandes",
        photo: "https://lh3.googleusercontent.com/aida-public/AB6AXuDcC3IhLdXUf0oxN_AVlMYLpo7A1vT1tEmhQoS3zfEIaPuor4bHCLS4ye9F0GFysVV849x2tI_MaQEQhkrXEEeOQ6D8VoSyA70eIYxGIj5FsAk-a_2ncGQT6tLIt9vDHqmL-ZDcigr5fS0RsggLBxtwCy9SpKbx94tMiz0JWP42YNSSnF_jO5zKzq8Mu1KIKSh_mzo9DWYo9SMtunzO6cMhF0pufxUXh3IkDvqJrXS0H1l8iXSU9BQX9Fhl2bwm2DIWbTeBZ6XcZlqX",
        rating: 4.8,
      },
      vehicle: { model: "Honda Civic", color: "Preto", plate: "XYZ-5678", year: "2023" },
      origin: "Pau dos Ferros",
      destination: "Caicó",
      date: "16/12/2024",
      time: "09:30",
      seats: "3/6",
      price: "R$ 55,00",
    },
    "ride-natal-3": {
      id: "KIW-003",
      title: "Kiwidi Express - Natal",
      driver: {
        name: "Mariana Kiwidi",
        photo: "https://lh3.googleusercontent.com/aida-public/AB6AXuDpUwLlQgB0-a2yub7CKhX42ESR5GGzghPIiSzwLgRPypUtKqDdxzEByiexHEYZaFX1j0u5RAiAcl3JYRhB-GFrVvZAUvRy3zHFYgmyXh1jJB8iHXo3QdMXwebOfQOPwkSqQTO1VAXp-bUI-a-OKYkN4vAKAJi9lyGyCujV2ejEhCs7XFtRwBysRdFJW3qRNRlXGuX2QGKyJ6wmBHAkaoIY6mWt5mDqOIYF1K9OVH-sk30tGILkwy_bwdNXbYM2UI6mcxM0yfuuxZL8",
        rating: 4.9,
      },
      vehicle: { model: "Toyota Corolla", color: "Prata", plate: "DEF-9012", year: "2024" },
      origin: "Mossoró",
      destination: "Natal",
      date: "17/12/2024",
      time: "14:00",
      seats: "2/6",
      price: "R$ 39,90",
    },
    "ride-mossoro-4": {
      id: "KIW-004",
      title: "Kiwidi Express - Mossoró",
      driver: {
        name: "João Silva",
        photo: "https://lh3.googleusercontent.com/aida-public/AB6AXuADtPMQEGhzVrKl9yWhjG8pHpR6c9q0uiNJ308XvUxHUivipya_MRCcsjqqm8nA2bsxHfS9DFFmfWP4_NfR1_wy6MsowKVpdbhKpelA5sSFErytweWsBVtCOlJ5wAuT7gDWMtChPHMT3WFd4Tex9xvHFFN3KG6mFJgYgWG7Ng44VS3ucfVsGAAsXuV_kJGkdCxqYDvkokDFgbD5KrUb3-hMf1YUs3hHMaujzU8wcdnYPtMs04ztvnG3UF1yltpzZQKf1LvbfY_NuAOc",
        rating: 4.6,
      },
      vehicle: { model: "Chevrolet Onix", color: "Azul", plate: "GHI-3456", year: "2021" },
      origin: "Pau dos Ferros",
      destination: "Mossoró",
      date: "15/12/2024",
      time: "10:00",
      seats: "4/6",
      price: "Grátis",
    },
    "ride-caico-5": {
      id: "KIW-005",
      title: "Kiwidi Trip - Caicó",
      driver: {
        name: "Rafael Fernandes",
        photo: "https://lh3.googleusercontent.com/aida-public/AB6AXuDcC3IhLdXUf0oxN_AVlMYLpo7A1vT1tEmhQoS3zfEIaPuor4bHCLS4ye9F0GFysVV849x2tI_MaQEQhkrXEEeOQ6D8VoSyA70eIYxGIj5FsAk-a_2ncGQT6tLIt9vDHqmL-ZDcigr5fS0RsggLBxtwCy9SpKbx94tMiz0JWP42YNSSnF_jO5zKzq8Mu1KIKSh_mzo9DWYo9SMtunzO6cMhF0pufxUXh3IkDvqJrXS0H1l8iXSU9BQX9Fhl2bwm2DIWbTeBZ6XcZlqX",
        rating: 4.8,
      },
      vehicle: { model: "Ford Ka", color: "Branco", plate: "ABC-1234", year: "2022" },
      origin: "Pau dos Ferros",
      destination: "Caicó",
      date: "18/12/2024",
      time: "07:00",
      seats: "3/6",
      price: "R$ 49,99",
    },
  };

  const myRidesDetails: Record<string, MyRide> = {
    "myride-confirmed": {
      id: "KIW-001",
      title: "Kiwidi Express S01",
      status: "Confirmado",
      driver: {
        name: "Rafael Fernandes",
        photo: "https://lh3.googleusercontent.com/aida-public/AB6AXuDcC3IhLdXUf0oxN_AVlMYLpo7A1vT1tEmhQoS3zfEIaPuor4bHCLS4ye9F0GFysVV849x2tI_MaQEQhkrXEEeOQ6D8VoSyA70eIYxGIj5FsAk-a_2ncGQT6tLIt9vDHqmL-ZDcigr5fS0RsggLBxtwCy9SpKbx94tMiz0JWP42YNSSnF_jO5zKzq8Mu1KIKSh_mzo9DWYo9SMtunzO6cMhF0pufxUXh3IkDvqJrXS0H1l8iXSU9BQX9Fhl2bwm2DIWbTeBZ6XcZlqX",
        rating: 4.8,
      },
      vehicle: { model: "Ford Ka", color: "Branco", plate: "ABC-1234", year: "2022" },
      origin: "Pau dos Ferros",
      destination: "Rafael Fernandes",
      date: "15/12/2024",
      time: "08:00",
      seats: "4/6",
      price: "R$ 49,99",
      cancelable: true,
    },
    "myride-rejected": {
      id: "KIW-002",
      title: "Kiwidi Express S01",
      status: "Recusado",
      driver: {
        name: "Rafael Fernandes",
        photo: "https://lh3.googleusercontent.com/aida-public/AB6AXuDcC3IhLdXUf0oxN_AVlMYLpo7A1vT1tEmhQoS3zfEIaPuor4bHCLS4ye9F0GFysVV849x2tI_MaQEQhkrXEEeOQ6D8VoSyA70eIYxGIj5FsAk-a_2ncGQT6tLIt9vDHqmL-ZDcigr5fS0RsggLBxtwCy9SpKbx94tMiz0JWP42YNSSnF_jO5zKzq8Mu1KIKSh_mzo9DWYo9SMtunzO6cMhF0pufxUXh3IkDvqJrXS0H1l8iXSU9BQX9Fhl2bwm2DIWbTeBZ6XcZlqX",
        rating: 4.8,
      },
      vehicle: { model: "Ford Ka", color: "Branco", plate: "ABC-1234", year: "2022" },
      origin: "Pau dos Ferros",
      destination: "Rafael Fernandes",
      date: "15/12/2024",
      time: "08:00",
      seats: "4/6",
      price: "R$ 49,99",
      cancelable: false,
    },
    "myride-pending": {
      id: "KIW-003",
      title: "Kiwidi Express S01",
      status: "Pendente",
      driver: {
        name: "Rafael Fernandes",
        photo: "https://lh3.googleusercontent.com/aida-public/AB6AXuDcC3IhLdXUf0oxN_AVlMYLpo7A1vT1tEmhQoS3zfEIaPuor4bHCLS4ye9F0GFysVV849x2tI_MaQEQhkrXEEeOQ6D8VoSyA70eIYxGIj5FsAk-a_2ncGQT6tLIt9vDHqmL-ZDcigr5fS0RsggLBxtwCy9SpKbx94tMiz0JWP42YNSSnF_jO5zKzq8Mu1KIKSh_mzo9DWYo9SMtunzO6cMhF0pufxUXh3IkDvqJrXS0H1l8iXSU9BQX9Fhl2bwm2DIWbTeBZ6XcZlqX",
        rating: 4.8,
      },
      vehicle: { model: "Ford Ka", color: "Branco", plate: "ABC-1234", year: "2022" },
      origin: "Pau dos Ferros",
      destination: "Rafael Fernandes",
      date: "15/12/2024",
      time: "08:00",
      seats: "4/6",
      price: "R$ 49,99",
      cancelable: true,
    },
    "myride-finished": {
      id: "KIW-004",
      title: "Natal → Mossoró",
      status: "Finalizada",
      driver: {
        name: "João Silva",
        photo: "https://lh3.googleusercontent.com/aida-public/AB6AXuADtPMQEGhzVrKl9yWhjG8pHpR6c9q0uiNJ308XvUxHUivipya_MRCcsjqqm8nA2bsxHfS9DFFmfWP4_NfR1_wy6MsowKVpdbhKpelA5sSFErytweWsBVtCOlJ5wAuT7gDWMtChPHMT3WFd4Tex9xvHFFN3KG6mFJgYgWG7Ng44VS3ucfVsGAAsXuV_kJGkdCxqYDvkokDFgbD5KrUb3-hMf1YUs3hHMaujzU8wcdnYPtMs04ztvnG3UF1yltpzZQKf1LvbfY_NuAOc",
        rating: 4.6,
      },
      vehicle: { model: "Chevrolet Onix", color: "Azul", plate: "GHI-3456", year: "2021" },
      origin: "Natal",
      destination: "Mossoró",
      date: "12/10/2024",
      time: "14:30",
      seats: "6/6",
      price: "R$ 0,00",
      cancelable: false,
    },
  };

  const [driverRides, setDriverRides] = useState<Record<string, DriverRide>>({
    "driver-mossoro": {
      id: "KIW-D01",
      title: "Mossoró → Pau dos Ferros",
      status: "Ativa",
      driver: {
        name: "Fernando",
        photo: "https://lh3.googleusercontent.com/aida-public/AB6AXuD_6pD3UrgnmdQSlbfS5Gu7UKhOqzWj05BJaiirrh7Kk4AZ8JdwMK00ASimxpm6M3wUDl1kVKe0zVqftZtW2u7LoNHeF1epmP8d_IXr9Jwvoo4Vxw-03Hp170_HxXfgZtU--rqpV462PNqmgaDbnoVsmavhLsUV7sWo2IHrQs_OQZL4pkpUUIvm8UB8yL1JUI0sd1cwEkd0WIzpM8gF03rZWTtoq7UY9X9k2J2uFpZvfD68Zh-94vW87HXe9jXbcpBeKhQF_I-8_Kv5",
        rating: 4.8,
      },
      vehicle: { model: "Ford Ka", color: "Branco", plate: "ABC-1234", year: "2022" },
      origin: "Mossoró",
      destination: "Pau dos Ferros",
      date: "2024-12-20",
      time: "07:00",
      seats: "4/6",
      price: "49.99",
      cancelable: true,
      passengers: ["Rafael Fernandes", "Mariana Kiwidi", "João Silva"],
    },
    "driver-caico": {
      id: "KIW-D02",
      title: "Pau dos Ferros → Caicó",
      status: "Ativa",
      driver: {
        name: "Fernando",
        photo: "https://lh3.googleusercontent.com/aida-public/AB6AXuD_6pD3UrgnmdQSlbfS5Gu7UKhOqzWj05BJaiirrh7Kk4AZ8JdwMK00ASimxpm6M3wUDl1kVKe0zVqftZtW2u7LoNHeF1epmP8d_IXr9Jwvoo4Vxw-03Hp170_HxXfgZtU--rqpV462PNqmgaDbnoVsmavhLsUV7sWo2IHrQs_OQZL4pkpUUIvm8UB8yL1JUI0sd1cwEkd0WIzpM8gF03rZWTtoq7UY9X9k2J2uFpZvfD68Zh-94vW87HXe9jXbcpBeKhQF_I-8_Kv5",
        rating: 4.8,
      },
      vehicle: { model: "Honda Civic", color: "Preto", plate: "XYZ-5678", year: "2023" },
      origin: "Pau dos Ferros",
      destination: "Caicó",
      date: "2024-12-22",
      time: "15:00",
      seats: "1/4",
      price: "35.00",
      cancelable: true,
      passengers: ["João Silva"],
    },
  });

  const [pendingRequests, setPendingRequests] = useState<Record<string, any[]>>({
    "driver-mossoro": [
      { name: "Ana Clara", photo: "https://ui-avatars.com/api/?name=Ana+Clara&background=aad466&color=fff&size=64", rating: 4.7, requestDate: "19/12/2024" },
      { name: "Pedro Lucas", photo: "https://ui-avatars.com/api/?name=Pedro+Lucas&background=547812&color=fff&size=64", rating: 4.5, requestDate: "20/12/2024" },
    ],
    "driver-caico": [
      { name: "Carla Souza", photo: "https://ui-avatars.com/api/?name=Carla+Souza&background=aad466&color=fff&size=64", rating: 4.9, requestDate: "21/12/2024" },
    ],
  });

  const chatDataMock: Record<string, ChatContact> = {
    "Rafael Fernandes": {
      avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuDcC3IhLdXUf0oxN_AVlMYLpo7A1vT1tEmhQoS3zfEIaPuor4bHCLS4ye9F0GFysVV849x2tI_MaQEQhkrXEEeOQ6D8VoSyA70eIYxGIj5FsAk-a_2ncGQT6tLIt9vDHqmL-ZDcigr5fS0RsggLBxtwCy9SpKbx94tMiz0JWP42YNSSnF_jO5zKzq8Mu1KIKSh_mzo9DWYo9SMtunzO6cMhF0pufxUXh3IkDvqJrXS0H1l8iXSU9BQX9Fhl2bwm2DIWbTeBZ6XcZlqX",
      messages: [
        { sender: "Rafael Fernandes", avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuDcC3IhLdXUf0oxN_AVlMYLpo7A1vT1tEmhQoS3zfEIaPuor4bHCLS4ye9F0GFysVV849x2tI_MaQEQhkrXEEeOQ6D8VoSyA70eIYxGIj5FsAk-a_2ncGQT6tLIt9vDHqmL-ZDcigr5fS0RsggLBxtwCy9SpKbx94tMiz0JWP42YNSSnF_jO5zKzq8Mu1KIKSh_mzo9DWYo9SMtunzO6cMhF0pufxUXh3IkDvqJrXS0H1l8iXSU9BQX9Fhl2bwm2DIWbTeBZ6XcZlqX", text: "Fala Fernando, beleza?", time: "14:20" },
        { sender: "Fernando", avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuD_6pD3UrgnmdQSlbfS5Gu7UKhOqzWj05BJaiirrh7Kk4AZ8JdwMK00ASimxpm6M3wUDl1kVKe0zVqftZtW2u7LoNHeF1epmP8d_IXr9Jwvoo4Vxw-03Hp170_HxXfgZtU--rqpV462PNqmgaDbnoVsmavhLsUV7sWo2IHrQs_OQZL4pkpUUIvm8UB8yL1JUI0sd1cwEkd0WIzpM8gF03rZWTtoq7UY9X9k2J2uFpZvfD68Zh-94vW87HXe9jXbcpBeKhQF_I-8_Kv5", text: "Tudo certo! E aí, confirmou a carona?", time: "14:22" },
        { sender: "Rafael Fernandes", avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuDcC3IhLdXUf0oxN_AVlMYLpo7A1vT1tEmhQoS3zfEIaPuor4bHCLS4ye9F0GFysVV849x2tI_MaQEQhkrXEEeOQ6D8VoSyA70eIYxGIj5FsAk-a_2ncGQT6tLIt9vDHqmL-ZDcigr5fS0RsggLBxtwCy9SpKbx94tMiz0JWP42YNSSnF_jO5zKzq8Mu1KIKSh_mzo9DWYo9SMtunzO6cMhF0pufxUXh3IkDvqJrXS0H1l8iXSU9BQX9Fhl2bwm2DIWbTeBZ6XcZlqX", text: "Sim! Tô chegando no ponto de encontro!", time: "14:25" },
      ],
    },
    "Mariana Kiwidi": {
      avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuDpUwLlQgB0-a2yub7CKhX42ESR5GGzghPIiSzwLgRPypUtKqDdxzEByiexHEYZaFX1j0u5RAiAcl3JYRhB-GFrVvZAUvRy3zHFYgmyXh1jJB8iHXo3QdMXwebOfQOPwkSqQTO1VAXp-bUI-a-OKYkN4vAKAJi9lyGyCujV2ejEhCs7XFtRwBysRdFJW3qRNRlXGuX2QGKyJ6wmBHAkaoIY6mWt5mDqOIYF1K9OVH-sk30tGILkwy_bwdNXbYM2UI6mcxM0yfuuxZL8",
      messages: [
        { sender: "Mariana Kiwidi", avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuDpUwLlQgB0-a2yub7CKhX42ESR5GGzghPIiSzwLgRPypUtKqDdxzEByiexHEYZaFX1j0u5RAiAcl3JYRhB-GFrVvZAUvRy3zHFYgmyXh1jJB8iHXo3QdMXwebOfQOPwkSqQTO1VAXp-bUI-a-OKYkN4vAKAJi9lyGyCujV2ejEhCs7XFtRwBysRdFJW3qRNRlXGuX2QGKyJ6wmBHAkaoIY6mWt5mDqOIYF1K9OVH-sk30tGILkwy_bwdNXbYM2UI6mcxM0yfuuxZL8", text: "Oi Fer! Vai rolar aquela viagem?", time: "12:05" },
        { sender: "Fernando", avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuD_6pD3UrgnmdQSlbfS5Gu7UKhOqzWj05BJaiirrh7Kk4AZ8JdwMK00ASimxpm6M3wUDl1kVKe0zVqftZtW2u7LoNHeF1epmP8d_IXr9Jwvoo4Vxw-03Hp170_HxXfgZtU--rqpV462PNqmgaDbnoVsmavhLsUV7sWo2IHrQs_OQZL4pkpUUIvm8UB8yL1JUI0sd1cwEkd0WIzpM8gF03rZWTtoq7UY9X9k2J2uFpZvfD68Zh-94vW87HXe9jXbcpBeKhQF_I-8_Kv5", text: "Claro! Te encontro onde?", time: "12:06" },
        { sender: "Mariana Kiwidi", avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuDpUwLlQgB0-a2yub7CKhX42ESR5GGzghPIiSzwLgRPypUtKqDdxzEByiexHEYZaFX1j0u5RAiAcl3JYRhB-GFrVvZAUvRy3zHFYgmyXh1jJB8iHXo3QdMXwebOfQOPwkSqQTO1VAXp-bUI-a-OKYkN4vAKAJi9lyGyCujV2ejEhCs7XFtRwBysRdFJW3qRNRlXGuX2QGKyJ6wmBHAkaoIY6mWt5mDqOIYF1K9OVH-sk30tGILkwy_bwdNXbYM2UI6mcxM0yfuuxZL8", text: "Combinado, te espero na frente da farmácia.", time: "12:08" },
      ],
    },
    "João Silva": {
      avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuADtPMQEGhzVrKl9yWhjG8pHpR6c9q0uiNJ308XvUxHUivipya_MRCcsjqqm8nA2bsxHfS9DFFmfWP4_NfR1_wy6MsowKVpdbhKpelA5sSFErytweWsBVtCOlJ5wAuT7gDWMtChPHMT3WFd4Tex9xvHFFN3KG6mFJgYgWG7Ng44VS3ucfVsGAAsXuV_kJGkdCxqYDvkokDFgbD5KrUb3-hMf1YUs3hHMaujzU8wcdnYPtMs04ztvnG3UF1yltpzZQKf1LvbfY_NuAOc",
      messages: [
        { sender: "João Silva", avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuADtPMQEGhzVrKl9yWhjG8pHpR6c9q0uiNJ308XvUxHUivipya_MRCcsjqqm8nA2bsxHfS9DFFmfWP4_NfR1_wy6MsowKVpdbhKpelA5sSFErytweWsBVtCOlJ5wAuT7gDWMtChPHMT3WFd4Tex9xvHFFN3KG6mFJgYgWG7Ng44VS3ucfVsGAAsXuV_kJGkdCxqYDvkokDFgbD5KrUb3-hMf1YUs3hHMaujzU8wcdnYPtMs04ztvnG3UF1yltpzZQKf1LvbfY_NuAOc", text: "Obrigado pela carona, Rafael!", time: "Ontem" },
        { sender: "Fernando", avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuD_6pD3UrgnmdQSlbfS5Gu7UKhOqzWj05BJaiirrh7Kk4AZ8JdwMK00ASimxpm6M3wUDl1kVKe0zVqftZtW2u7LoNHeF1epmP8d_IXr9Jwvoo4Vxw-03Hp170_HxXfgZtU--rqpV462PNqmgaDbnoVsmavhLsUV7sWo2IHrQs_OQZL4pkpUUIvm8UB8yL1JUI0sd1cwEkd0WIzpM8gF03rZWTtoq7UY9X9k2J2uFpZvfD68Zh-94vW87HXe9jXbcpBeKhQF_I-8_Kv5", text: "Imagina! Precisando, é só chamar.", time: "Ontem" },
      ],
    },
  };

  const [notifications, setNotifications] = useState<Notification[]>([
    { id: 1, title: "Carona Confirmada", message: "Rafael Fernandes confirmou sua carona para Mossoró.", time: "Agora", icon: "check_circle", color: "text-green-600 bg-green-50", read: false },
    { id: 2, title: "Nova Solicitação", message: "Ana Clara quer participar da sua carona.", time: "Há 5 min", icon: "person_add", color: "text-blue-600 bg-blue-50", read: false },
    { id: 3, title: "Nova Mensagem", message: "Mariana Kiwidi enviou uma mensagem.", time: "Há 15 min", icon: "chat", color: "text-purple-600 bg-purple-50", read: false },
    { id: 4, title: "Promoção Especial", message: "Ganhe 50% de desconto na próxima viagem!", time: "Há 1 h", icon: "local_offer", color: "text-orange-600 bg-orange-50", read: true },
    { id: 5, title: "Lembrete de Viagem", message: "Sua carona para Caicó é amanhã às 09:30.", time: "Há 3 h", icon: "event", color: "text-amber-600 bg-amber-50", read: true },
    { id: 6, title: "Viagem Finalizada", message: "Sua viagem com João Silva foi concluída. Avalie!", time: "Ontem", icon: "star", color: "text-yellow-600 bg-yellow-50", read: true },
    { id: 7, title: "Pagamento Processado", message: "R$ 49,99 foram debitados da sua carteira.", time: "Ontem", icon: "payment", color: "text-gray-600 bg-gray-50", read: true },
  ]);

  // Funções
  const addVehicle = useCallback((vehicle: Vehicle) => {
    setVehicles(prev => [...prev, vehicle]);
  }, []);

  const updateVehicle = useCallback((index: number, vehicle: Vehicle) => {
    setVehicles(prev => prev.map((v, i) => i === index ? vehicle : v));
  }, []);

  const addPayment = useCallback((payment: Payment) => {
    setPayments(prev => [...prev, payment]);
  }, []);

  const updatePayment = useCallback((index: number, payment: Payment) => {
    setPayments(prev => prev.map((p, i) => i === index ? payment : p));
  }, []);

  const addDriverRide = useCallback((ride: Omit<DriverRide, "id" | "title" | "status" | "driver" | "passengers">) => {
    const newId = `driver-${Date.now()}`;
    const newRide: DriverRide = {
      id: `KIW-D${Object.keys(driverRides).length + 1}`,
      title: `${ride.origin} → ${ride.destination}`,
      status: "Ativa",
      driver: {
        name: "Fernando",
        photo: "https://lh3.googleusercontent.com/aida-public/AB6AXuD_6pD3UrgnmdQSlbfS5Gu7UKhOqzWj05BJaiirrh7Kk4AZ8JdwMK00ASimxpm6M3wUDl1kVKe0zVqftZtW2u7LoNHeF1epmP8d_IXr9Jwvoo4Vxw-03Hp170_HxXfgZtU--rqpV462PNqmgaDbnoVsmavhLsUV7sWo2IHrQs_OQZL4pkpUUIvm8UB8yL1JUI0sd1cwEkd0WIzpM8gF03rZWTtoq7UY9X9k2J2uFpZvfD68Zh-94vW87HXe9jXbcpBeKhQF_I-8_Kv5",
        rating: 4.8,
      },
      ...ride,
      cancelable: true,
      passengers: [],
    };
    setDriverRides(prev => ({ ...prev, [newId]: newRide }));
    setPendingRequests(prev => ({ ...prev, [newId]: [] }));
  }, [driverRides]);

  const updateDriverRide = useCallback((id: string, updates: Partial<DriverRide>) => {
    setDriverRides(prev => ({
      ...prev,
      [id]: { ...prev[id], ...updates },
    }));
  }, []);

  const acceptPassenger = useCallback((rideId: string, passengerIndex: number) => {
    const passenger = pendingRequests[rideId]?.[passengerIndex];
    if (passenger) {
      setDriverRides(prev => ({
        ...prev,
        [rideId]: {
          ...prev[rideId],
          passengers: [...prev[rideId].passengers, passenger.name],
        },
      }));
      setPendingRequests(prev => ({
        ...prev,
        [rideId]: prev[rideId].filter((_, i) => i !== passengerIndex),
      }));
    }
  }, [pendingRequests]);

  const rejectPassenger = useCallback((rideId: string, passengerIndex: number) => {
    setPendingRequests(prev => ({
      ...prev,
      [rideId]: prev[rideId].filter((_, i) => i !== passengerIndex),
    }));
  }, []);

  // const sendChatMessage = useCallback((contactName: string, text: string) => {
  //   const now = new Date();
  //   const timeStr = `${now.getHours().toString().padStart(2, "0")}:${now.getMinutes().toString().padStart(2, "0")}`;
  //   const newMsg: ChatMessage = {
  //     sender: "Fernando",
  //     avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuD_6pD3UrgnmdQSlbfS5Gu7UKhOqzWj05BJaiirrh7Kk4AZ8JdwMK00ASimxpm6M3wUDl1kVKe0zVqftZtW2u7LoNHeF1epmP8d_IXr9Jwvoo4Vxw-03Hp170_HxXfgZtU--rqpV462PNqmgaDbnoVsmavhLsUV7sWo2IHrQs_OQZL4pkpUUIvm8UB8yL1JUI0sd1cwEkd0WIzpM8gF03rZWTtoq7UY9X9k2J2uFpZvfD68Zh-94vW87HXe9jXbcpBeKhQF_I-8_Kv5",
  //     text,
  //     time: timeStr,
  //   };
  //   // Atualizar estado do chat - como o estado é mockado, simulamos atualização
  //   console.log(`Mensagem enviada para ${contactName}: ${text}`);
  // }, []);

  // ... dentro do AppProvider

  const [chatData, setChatData] = useState<Record<string, ChatContact>>(chatDataMock);

  const sendChatMessage = useCallback((contactName: string, text: string) => {
    const now = new Date();
    const timeStr = `${now.getHours().toString().padStart(2, "0")}:${now.getMinutes().toString().padStart(2, "0")}`;
    const newMsg: ChatMessage = {
      sender: "Fernando",
      avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuD_6pD3UrgnmdQSlbfS5Gu7UKhOqzWj05BJaiirrh7Kk4AZ8JdwMK00ASimxpm6M3wUDl1kVKe0zVqftZtW2u7LoNHeF1epmP8d_IXr9Jwvoo4Vxw-03Hp170_HxXfgZtU--rqpV462PNqmgaDbnoVsmavhLsUV7sWo2IHrQs_OQZL4pkpUUIvm8UB8yL1JUI0sd1cwEkd0WIzpM8gF03rZWTtoq7UY9X9k2J2uFpZvfD68Zh-94vW87HXe9jXbcpBeKhQF_I-8_Kv5",
      text,
      time: timeStr,
    };
    setChatData(prev => {
      const contact = prev[contactName];
      if (!contact) return prev;
      return {
        ...prev,
        [contactName]: {
          ...contact,
          messages: [...contact.messages, newMsg],
        },
      };
    });
  }, []);

  // No objeto value, inclua chatData e sendChatMessage (já estão)

  const markNotificationRead = useCallback((id: number) => {
    setNotifications(prev => prev.map(n => n.id === id ? { ...n, read: true } : n));
  }, []);

  const markAllNotificationsRead = useCallback(() => {
    setNotifications(prev => prev.map(n => ({ ...n, read: true })));
  }, []);

  const getUnreadCount = useCallback(() => {
    return notifications.filter(n => !n.read).length;
  }, [notifications]);

  // Auth mock
  const requestPasswordReset = useCallback(async (email: string) => {
    console.log("Solicitação de redefinição para:", email);
    // Simular API
    await new Promise(resolve => setTimeout(resolve, 1000));
  }, []);

  const resetPassword = useCallback(async (token: string, newPassword: string) => {
    console.log("Redefinir senha com token:", token, "nova senha:", newPassword);
    await new Promise(resolve => setTimeout(resolve, 1000));
  }, []);

  const value: AppContextType = {
    user: { name: "Fernando", email: "fernando@email.com", phone: "(84) 9 9999-9999", rating: 4.8 },
    vehicles,
    payments,
    rideDetails: rideDetailsData,
    myRides: myRidesDetails,
    driverRides,
    pendingRequests,
    chatData: chatDataMock,
    notifications,
    addVehicle,
    updateVehicle,
    addPayment,
    updatePayment,
    addDriverRide,
    updateDriverRide,
    acceptPassenger,
    rejectPassenger,
    sendChatMessage,
    markNotificationRead,
    markAllNotificationsRead,
    getUnreadCount,
    requestPasswordReset,
    resetPassword,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useApp must be used within an AppProvider");
  }
  return context;
};