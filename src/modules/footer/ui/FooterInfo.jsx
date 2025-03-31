import React from 'react';

export default function FooterInfo() {
  return (
    <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
      <img
        src="https://supabase.zapt.ai/storage/v1/render/image/public/icons/7a7d72c4-32b4-45a8-937b-0d2ab248ae7b/95f5ce22-ae3f-4ad8-af77-d0c3884ee556.png?width=512&height=512"
        alt="ZAPT Logo"
        className="w-12 h-12"
      />
      <p className="text-white text-sm text-center md:text-left">
        Copyright © 2025 Zapt Ltd. All rights reserved.
      </p>
    </div>
  );
}