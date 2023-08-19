import { useContext } from "react";
import { useParams } from "react-router-dom";
import { TripContext } from "../componet/TripContext";

export const CurrentPlace = () => {
  const {
    trip: { continents },
  } = useContext(TripContext);

  const { country, destination } = useParams();

  const findDestination = continents
    .flatMap(({ countries }) => countries)
    .find(({ name }) => name === country)
    .destinations.find(({ name }) => name === destination);

  const {
    name,
    image,
    description,
    ratings,
    reviews,
    location,
    openingHours,
    ticketPrice,
    website,
  } = findDestination;

  return (
    <div className="ab">
      <h1> {name} </h1>

      <div className="currentPlace">
        <img src={image} />
        <div className="current-child">
          <p> Descripthions: {description} </p>
          <p>
            {" "}
            Ratings: <b> {ratings} </b>{" "}
          </p>
          <p>
            {" "}
            Rreview: <b> {reviews} </b>{" "}
          </p>
          <p>
            {" "}
            Location: <b> {location} </b>{" "}
          </p>
          <p>
            {" "}
            Opening Hours: <b> {openingHours} </b>{" "}
          </p>
          <p>
            {" "}
            Ticket Price: <b> {ticketPrice} </b>{" "}
          </p>
          <a target="_blank" href={website}>
            {" "}
            Website{" "}
          </a>
        </div>
      </div>
    </div>
  );
};
