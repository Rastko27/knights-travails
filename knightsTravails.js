class Chessboard {
   constructor(size = 8) {
      this.size = size;
      this.movesList = [
         [-2, 1],
         [-2, -1],
         [-1, 2],
         [-1, -2],
         [2, 1],
         [2, -1],
         [1, 2],
         [1, -2],
      ];
   }

   knightMoves(squareOne, squareTwo) {
      let q = [];
      let visited = new Set();
      q.push([squareOne, [squareOne]]);
      visited.add(squareOne.toString());

      while (q.length !== 0) {
         let [currentSquare, path] = q.shift();

         for (let [r, c] of this.movesList) {
            let rr = currentSquare[0] + r;
            let cc = currentSquare[1] + c;
            let newSquare = [rr, cc];

            if (this.moveIsValid(newSquare) && !visited.has(newSquare.toString())) {
               if (rr === squareTwo[0] && cc === squareTwo[1]) {
                  // Adds newSquare to path and returns path
                  return path.concat([newSquare]);
               } else {
                  // Push newSquare to queue alongside the path to that square
                  q.push([newSquare, path.concat([newSquare])]);
                  visited.add(newSquare.toString());
               }
            }
         };
      }
   }

   moveIsValid([r, c]) {
      if (r < 0 || r > this.size - 1 || c < 0 || c > this.size - 1) {
         return false;
      } else {
         return true;
      }
   }
}