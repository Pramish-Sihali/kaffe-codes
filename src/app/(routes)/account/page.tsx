// app/(routes)/account/page.tsx
"use client";

import { useState } from 'react';
import AccountProfile from '@/components/account/AccountProfile';

// This would typically come from your API/backend
const mockProfile = {
  name: "Smarika Karki",
  gender: "Female",
  dob: "2000-03-01",
  mobile: "+977 98123456987",
  email: "smarikakarki@gmail.com",
  image: "/path/to/profile/image.jpg",
  address: "Bishalnagar, Kathmandu",
  zipCode: "4600"
};

export default function AccountPage() {
  const handleUpdateProfile = (type: 'profile' | 'personal' | 'address') => {
    // Handle profile updates
    console.log('Update', type);
  };

  return (
    <AccountProfile
      profile={mockProfile}
      onUpdateProfile={handleUpdateProfile}
    />
  );
}