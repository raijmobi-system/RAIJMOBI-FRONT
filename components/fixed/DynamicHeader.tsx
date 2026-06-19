"use client";

import { usePathname } from 'next/navigation';
import StandardHeader from '@/components/fixed/StandardHeader';
import MessageHeader from '@/components/fixed/MessageHeader'; // Certifique-se de importar ele

export default function DynamicHeader() {
  const pathname = usePathname();

  if (pathname === '/chat/conversation') {
    return <MessageHeader />;
  }

  return <StandardHeader />;
}