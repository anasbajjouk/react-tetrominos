import React from "react";
import Cell from "../Cell/Cell";
import { StyledStage } from "../styles/StyledStage";

const Stage = ({ stage }) => (
  <StyledStage width={stage[0].length} height={stage.length}>
    {stage.map(row => row.map((cell, x) => <Cell type={cell[0]} key={x} />))}
  </StyledStage>
);

export default Stage;
