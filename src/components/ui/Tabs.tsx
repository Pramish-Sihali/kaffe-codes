"use client";
import { useState } from 'react';
import Image from 'next/image';

interface TabItem {
  id: string;
  label: string;
  icon: string;
}

interface TabsProps {
  items: TabItem[];
  activeTab: string | null;
  onTabChange: (tabId: string | null) => void;
}

export function Tabs({ items, activeTab, onTabChange }: TabsProps) {
  const handleTabClick = (id: string) => {
    onTabChange(activeTab === id ? null : id);
  };

  return (
    <div className="flex justify-start md:justify-center gap-4 md:gap-6 lg:gap-8 mb-6 md:mb-8 lg:mb-10 overflow-x-auto no-scrollbar px-4">
      {items.map((item) => (
        <button
          key={item.id}
          onClick={() => handleTabClick(item.id)}
          className="flex flex-col items-center flex-shrink-0"
        >
          <div
            className={`relative w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center mb-2 transition-colors ${
              activeTab === item.id
                ? 'bg-custom-brown'
                : 'bg-gray-100 hover:bg-gray-200'
            }`}
          >
            <Image
              src={item.icon}
              alt={item.label}
              width={24}
              height={24}
              className={`w-6 h-6 md:w-7 md:h-7 transition-colors ${
                activeTab === item.id ? 'filter brightness-0 invert' : ''
              }`}
            />
          </div>
          <span
            className={`text-xs md:text-sm whitespace-nowrap ${
              activeTab === item.id
                ? 'text-custom-brown font-medium'
                : 'text-gray-600'
            }`}
          >
            {item.label}
          </span>
        </button>
      ))}
    </div>
  );
}