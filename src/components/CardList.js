import React from "react";
import Card from "./Card";

const CardList = ({ aliens }) => {
  return (
    <div>
      {aliens.map((user, i) => {
        return (
          <Card
            key={i}
            name={aliens[i].name}
            email={aliens[i].email}
            id={aliens[i].id}
          />
        );
      })}
    </div>
  );
};

export default CardList;
