import React from "react";

import Stage from "../Stage/Stage";
import Display from "../Display/Display";
import StartButton from "../StartButton/StartButton";
import { createStage } from "../../gameHelpers";

const Tetris = ({ callback }) => {
  return (
    <div>
      <Stage stage={createStage()}/>
      <aside>
        <div>
          <Display text="Score" />
          <Display text="Rows" />
          <Display text="Level" />
        </div>
        <StartButton />
      </aside>
    </div>
  );
};

export default Tetris;
