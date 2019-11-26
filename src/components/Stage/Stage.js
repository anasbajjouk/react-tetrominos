import React from "react";
import Cell from "../Cell/Cell";

const Stage = ({ stage }) => (
  <div>
    {stage.map(row => row.map((cell, x) => <Cell type={cell[0]} key={x} />))}
  </div>
);

export default Stage;
