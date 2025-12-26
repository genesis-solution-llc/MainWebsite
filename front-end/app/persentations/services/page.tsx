'use client';

import React from 'react';


export default function ServicesPage() {
    return (
        <div className="min-h-screen bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <h1 className="text-4xl font-bold text-gray-900 mb-8">Services</h1>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Service Card */}
                    <div className="border rounded-lg p-6 hover:shadow-lg transition">
                        <h2 className="text-xl font-semibold text-gray-900 mb-4">Service Title</h2>
                        <p className="text-gray-600">Service description goes here.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}