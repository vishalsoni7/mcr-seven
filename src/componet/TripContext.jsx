import { createContext, useState } from "react";
import { data } from "../data";

export const TripContext = createContext();

export const TripProvider = ({ children }) => {
  const [trip, setTrip] = useState(data);

  const values = { trip, setTrip };

  return (
    <>
      <TripContext.Provider value={values}>{children}</TripContext.Provider>
    </>
  );
};
