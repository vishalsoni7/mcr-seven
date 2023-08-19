import { useContext } from "react";
import { useParams, NavLink, useNavigate } from "react-router-dom";
import { TripContext } from "../componet/TripContext";
import { Card } from "./Card";

export const Country = () => {
  const {
    trip: { continents },
  } = useContext(TripContext);

  const navigate = useNavigate();

  const { continent } = useParams();

  const findCoutry = continents.find(({ name }) => name === continent);

  return (
    <div>
      <h1> Top Countries in {findCoutry?.name} for your next holiday </h1>

      <div className="continents">
        {findCoutry?.countries?.map((card) => (
          <div
            className="card"
            key={card.id}
            onClick={() => navigate(`/${continent}/${card.name}`)}
          >
            <Card {...card} />{" "}
          </div>
        ))}
      </div>
    </div>
  );
};
