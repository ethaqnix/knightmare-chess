export const rows = ["8", "7", "6", "5", "4", "3", "2", "1"];
export const columns = ["a", "b", "c", "d", "e", "f", "g", "h"];

export const arrayToBoard = (array) =>
  array.reduce(
    (board, currentrow, rowIndex) => ({
      ...board,
      ...currentrow.reduce((rowPosition, value, columnIndex) => {
        if (!value) return rowPosition;
        return {
          ...rowPosition,
          [`${columns[columnIndex]}${rows[rowIndex]}`]: value,
        };
      }, {}),
    }),
    {}
  );
