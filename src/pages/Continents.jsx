import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { TripContext } from "../componet/TripContext";
import { Card } from "./Card";

export const Continents = () => {
  const {
    trip: { continents },
  } = useContext(TripContext);
  const navigate = useNavigate();

  return (
    <div>
      <h1 className="h1"> Welcome to Trip Advisor </h1>
      <h2> Top Continents for your next holiday </h2>

      <div className="continents">
        {continents.map((card) => (
          <div
            className="card"
            key={card.id}
            onClick={() => navigate(`/${card.name}`)}
          >
            <Card {...card} />{" "}
          </div>
        ))}
      </div>
    </div>
  );
};
