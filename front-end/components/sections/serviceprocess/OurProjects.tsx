"use client";

import React, { useRef, useState } from "react";


export default function OurProjexts() {

  return (
    <section className="py-20">
            {/* Right: map */}
            <div className="rounded-lg overflow-hidden border border-slate-700/40">
              <iframe
                src="google.com/maps/search/Ulaanbaatar%2C%2014200%2C%20Mongolia"
                className="h-full w-full min-h-110 bg-white"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Location map"
              />
            </div>
    </section>
  );
}
