// context/UserContext.tsx
"use client";

import { createContext, useContext, useState, ReactNode } from 'react';

export interface ProfileData {
  name: string;
  gender: string;
  dob: string;
  mobile: string;
  email: string;
  image: string;
  address: string;
  zipCode: string;
}

interface UserContextType {
  profileData: ProfileData;
  updateProfileData: (data: Partial<ProfileData>) => void;
}

const defaultProfile: ProfileData = {
  name: 'Smarika Karki',
  gender: 'Female',
  dob: '2000-03-01',
  mobile: '+977 9812345987',
  email: 'smarikakarki@gmail.com',
  image: '/images/birajDai.jpg',
  address: 'Bishalnagar, Kathmandu',
  zipCode: '4600'
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({ children }: { children: ReactNode }) {
  const [profileData, setProfileData] = useState<ProfileData>(defaultProfile);

  const updateProfileData = (newData: Partial<ProfileData>) => {
    setProfileData(prev => ({ ...prev, ...newData }));
  };

  return (
    <UserContext.Provider value={{ profileData, updateProfileData }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
}