// app/account/page.tsx
"use client";

import { useState } from 'react';
import AccountProfile from '@/components/account/AccountProfile';
import EditProfileModal from '@/components/account/EditProfileModal';
import EditProfileImageModal from '@/components/account/EditProfileImageModal';
import { useUser } from '@/context/UserContext';

export default function AccountPage() {
  const [editModalType, setEditModalType] = useState<'profile' | 'personal' | 'address' | null>(null);
  const { profileData, updateProfileData } = useUser();

  const handleProfileUpdate = (type: 'profile' | 'personal' | 'address') => {
    setEditModalType(type);
  };

  const handleSave = (data: any) => {
    updateProfileData(data);
    setEditModalType(null);
  };

  return (
    <>
      <AccountProfile
        profile={profileData}
        onUpdateProfile={handleProfileUpdate}
      />

      {editModalType === 'profile' && (
        <EditProfileImageModal
          isOpen={true}
          onClose={() => setEditModalType(null)}
        />
      )}

      {(editModalType === 'personal' || editModalType === 'address') && (
        <EditProfileModal
          isOpen={true}
          onClose={() => setEditModalType(null)}
          type={editModalType}
          currentData={profileData}
          onSave={handleSave}
        />
      )}
    </>
  );
}
