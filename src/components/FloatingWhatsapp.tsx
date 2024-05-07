"use client"
import React from 'react';
import { FloatingWhatsApp } from 'react-floating-whatsapp';


const Floating = () => {
  return (
    <div>
      <FloatingWhatsApp
        accountName="DevTrekker"
        phoneNumber="+916206943480"
        statusMessage	 = "Typically replies instantly"
      />
    </div>
  );
};

export default Floating;
