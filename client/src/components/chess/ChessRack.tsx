import { useEffect, useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

// Setup
import { piecesPositions, piecesRack } from "../../setup/positions";

// Components
import { ChessPiece } from "./ChessPiece";

// Types
import { PiecePositionType } from "../../setup/positions";

// Component
export const ChessRack = ({playerColor} :{playerColor: string}) => {
  // State
  const [piecesPos, setPiecesPos] = useState<PiecePositionType[]>([]);

  // Functions
  const findPiece = (pos: { row: number; col: number }) => {
    return piecesPos.find((item) => {
      return (
        item.position &&
        item.position.row === pos.row &&
        item.position.col === pos.col
      );
    });
  };

  const renderPiece = (piece: PiecePositionType) => {
    console.log("piece.piece.id", piece.piece.id);
    let type = "";
    switch (piece.piece.id) {
      case 0:
        type = "pawn";
        break;
      case 1:
        type = "rook";
        break;
      case 2:
        type = "knight";
        break;
      case 3:
        type = "bishop";
        break;
      case 4:
        type = "queen";
        break;
      case 5:
        type = "king";
        break;
      default:
        break;
    }

    let color = "";
    if (piece.player === 0) {
      color = "white";
    } else {
      color = "black";
    }

    return <ChessPiece type={type} color={color} />;
  };

  const spawnTiles = (playerColor: string) => {
    const letters = [" ", " ", " ", " ", " "];
    const tiles = [];

    const rows = [];
    for (let i = 0; i < letters.length; i++) {
        const  y = 0;
    //   for (let y = 0; y < letters.length; y++) {
        const isRowEven = i % 2 === 0;
        const isColEven = y % 2 === 0;

        // Get tile color
        let color = "";
        if (isRowEven && isColEven) {
          color = "white";
        } else if (!isRowEven && isColEven) {
          color = "black";
        } else if (isRowEven && !isColEven) {
          color = "black";
        } else {
          color = "white";
        }

        // Check if piece is there
        const tilePos = {
          row: i,
          col: y,
        };
        const piece = findPiece(tilePos);

        rows.push(
          <div
            key={`${i}-${y}`}
            className={`w-80 h-80 relative ${
"bg-purple"            }`}
          >
            {piece ? renderPiece({...piece, player: (playerColor === 'white')?0: 1 }) : null}
              <span
                className={`mx-6 absolute font-grotesk font-bold text-20 ${
                  playerColor === "black" ? "text-dark" : "text-cream"
                }`}
              >
                {/* TODO rotate board if you are black player */}
                {/* {`${letters.length - i}`} */}
                0
              </span>
              <div className="flex justify-end items-end w-full h-full absolute">
                <span
                  className={`mx-6 font-grotesk font-bold text-20 ${
                    playerColor === "black" ? "text-dark" : "text-cream"
                  }`}
                >
                  {/* TODO rotate board if you are black player */}
                  {`${letters[y]}`}
                </span>
              </div>
          </div>
        );
      }
      tiles.push(
        <div key={`${"fsjdkl"}`} className="flex flex-row items-center">
          {rows}
        </div>
      );
    // }

    return tiles;
  };

  useEffect(() => {
    // TODO For active games we need to positions pieces here
    setPiecesPos(piecesRack);
  }, []);

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="flex flex-col w-full align-center h-full my-8 items-center">{spawnTiles(playerColor)}</div>
    </DndProvider>
  );
};
