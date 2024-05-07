"use client"
import React from 'react';
import { FloatingWhatsApp } from 'react-floating-whatsapp';

const Floating = () => {
  return (
    <div>
      <FloatingWhatsApp
        accountName="DevTrekker"
        phoneNumber="6201414631"
      />
    </div>
  );
};

export default Floating;
