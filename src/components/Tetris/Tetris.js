import React, { useState } from "react";

import { useStage } from "../../hooks/useStage";
import { usePlayer } from "../../hooks/usePlayer";

import Stage from "../Stage/Stage";
import Display from "../Display/Display";
import StartButton from "../StartButton/StartButton";
// import { createStage } from "../../gameHelpers";

import { StyledTetrisWrapper, StyledTetris } from "../styles/StyledTetris";

const Tetris = ({ callback }) => {
  const [dropTime, setDropTime] = useState(null);
  const [gameOver, setGameOver] = useState(false);
  const [player] = usePlayer();
  const [stage, setStage] = useStage(player);

  console.log("re-render");
  return (
    <StyledTetrisWrapper>
      <StyledTetris>
        <Stage stage={stage} />
        <aside>
          {gameOver ? (
            <Display gameOver={gameOver} text="Game Over" />
          ) : (
            <div>
              <Display text="Score" />
              <Display text="Rows" />
              <Display text="Level" />
            </div>
          )}

          <StartButton />
        </aside>
      </StyledTetris>
    </StyledTetrisWrapper>
  );
};

export default Tetris;
