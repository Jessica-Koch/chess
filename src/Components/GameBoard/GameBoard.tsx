import { useState } from 'react';
import {
  BOARD_SQUARE_NUMBER,
  COLORS,
  FILES,
  FILES_BOARD,
  RANKS,
  RANKS_BOARD,
  SQUARES,
} from '../../assets/constants';
import './Board.scss';

type BoardProps = {
  pieces: BRD;
};

const fileRankToSquare = (f, r) => {
  return 21 + f + r * 10;
};

const initFilesAndRanks = () => {
  let file = FILES.FILE_A;
  let rank = RANKS.RANK_1;
  let sq = SQUARES.A1;

  for (let i = 0; i < BOARD_SQUARE_NUMBER; ++i) {
    FILES_BOARD[i] = SQUARES.OFFBOARD;
    RANKS_BOARD[i] = SQUARES.OFFBOARD;
  }

  for (rank = RANKS.RANK_1; rank <= RANKS.RANK_8; ++rank) {
    for (file = FILES.FILE_A; file <= FILES.FILE_H; ++file) {
      sq = fileRankToSquare(file, rank);
      FILES_BOARD[sq] = file;
      RANKS_BOARD[sq] = rank;
    }
  }
};

export const GameBoard = () => {
  const [pieces, setPieces] = useState<number[]>(Array(BOARD_SQUARE_NUMBER));
  const [side, setSide] = useState(COLORS.WHITE);

  // fifty move rule
  const [fiftyMove, setFiftyMove] = useState(0);

  // move history
  const [hisPly, setHisPly] = useState(0);
  const [ply, setPly] = useState(0);

  // castling
  const [castlePerm, setCastlePerm] = useState();

  const [material, setMaterial] = useState([COLORS.WHITE, COLORS.BLACK]);

  // array that keeps track of how many of each type that we have
  const [pieceNumber, setPieceNumber] = useState(new Array(13)); // indexed by pieces
  // for a given square, know what piece is on it
  // sqOfPiece = PieceListArray[index
  // max number of pieces on a chess board at a time is
  // 10 so index them by their potential quantity
  // (8 pawns become a rook, knight or bishop + original 2 and that is 10)
  const [pieceListArray, setPieceListArray] = useState(new Array(10 * 14));

  initFilesAndRanks();
  return <div className='Board'></div>;
};
