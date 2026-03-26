'use client';

import { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

interface PropertyMapProps {
  location: string;
}

export default function PropertyMap({ location }: PropertyMapProps) {
  useEffect(() => {
    // Basic Leaflet initialization
    // For a real app, we'd geocode the location string or use lat/lng from DB
    // Here we'll just center on a default (Palo Alto as in the design)
    const map = L.map('map').setView([37.4419, -122.1430], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker([37.4419, -122.1430]).addTo(map)
      .bindPopup(location)
      .openPopup();

    return () => {
      map.remove();
    };
  }, [location]);

  return (
    <div id="map" className="w-full h-full min-h-[300px] rounded-lg overflow-hidden" />
  );
}
