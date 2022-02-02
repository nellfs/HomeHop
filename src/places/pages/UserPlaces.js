import React from "react";
import { useParams } from "react-router-dom";

import PlaceList from "../components/PlaceList";

const DUMMY_PLACES = [
  {
    id: "p1",
    title: "Casinha",
    description: "Casinha bonitinha",
    imageUrl:
      "https://i.pinimg.com/originals/a3/f0/82/a3f082684e2ecbe834b0d6d89525ff9c.jpg",
    address: "Rua 30 de fevereiro",
    location: {
      lat: 40.7484405,
      lgn: -73.7484405,
    },
    creator: "u1",
  },

  {
    id: "p2",
    title: "Casinha",
    description: "Casinha bonitinha",
    imageUrl:
      "https://i.pinimg.com/originals/a3/f0/82/a3f082684e2ecbe834b0d6d89525ff9c.jpg",
    address: "Rua 30 de fevereiro",
    location: {
      lat: 40.7484405,
      lgn: -73.7484405,
    },
    creator: "u2",
  },
];

const UserPlaces = () => {
  const userId = useParams().userId;
  const loadedPlaces = DUMMY_PLACES.filter((place) => place.creator === userId);
  return <PlaceList items={loadedPlaces} />;
};

export default UserPlaces;
