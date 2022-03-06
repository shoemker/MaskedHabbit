import React from 'react';
import Geocode from "react-geocode";


const apiKey = window.googleAPIKey;

Geocode.setApiKey(apiKey);
Geocode.fromAddress("898 fell st san francisco").then(
  (response) => {
    const { lat, lng } = response.results[0].geometry.location;
    console.log(lat, lng);
  },
  (error) => {
    console.error(error);
  }
);