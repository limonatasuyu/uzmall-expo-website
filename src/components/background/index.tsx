'use client';

import { usePathname } from 'next/navigation';

export default function Background() {
  const pathname = usePathname();
  const isCreAwardsPage = pathname === '/cre-awards';
  const isSpeakersPage = pathname === '/speakers';
  return (
    <div className="absolute inset-0 -z-10">
      <div className="h-screen bg-gradient-to-b from-[#095d66] to-[#15bacc]" />
      {!isCreAwardsPage && !isSpeakersPage && (
        <div className="h-[400vh] min-[650px]:h-[300vh] bg-[#15bacc]" />
      )}
    </div>
  );
} 