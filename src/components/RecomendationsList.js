import React from "react";
import RecomendationCard from "./RecomendationCard";

function RecomendationList(recomendation) {
  return (
    <div>
      {recomendation.map((recomendation, index) => (
        <RecomendationCard
          key={index}
          sName={recomendation.sName}
          date={recomendation.type}
          comments={recomendation.score}
        />
      ))}
    </div>
  );
}
export default RecomendationList;
