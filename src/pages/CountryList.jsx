import { useContext } from "react";
import { useParams, NavLink, useNavigate } from "react-router-dom";
import { TripContext } from "../componet/TripContext";
import { Card } from "./Card";

export const CountryList = () => {
  const {
    trip: { continents },
  } = useContext(TripContext);

  const { continent, country } = useParams();

  const navigate = useNavigate();

  const filteredCountry = continents.flatMap(({ countries }) =>
    countries.filter(({ name }) => name === country)
  );

  return (
    <div>
      <h1> Top Countries in {filteredCountry?.name} for your next holiday </h1>

      <div className="continents">
        {filteredCountry.map(({ destinations }) =>
          destinations.map((card) => (
            <div
              className="card"
              key={card.id}
              onClick={() => navigate(`/${continent}/${country}/${card.name}`)}
            >
              {" "}
              <Card {...card} />{" "}
            </div>
          ))
        )}
      </div>
    </div>
  );
};
