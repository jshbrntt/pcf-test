const ControlCharacter = {
  LEFT_TO_RIGHT: ">",
  RIGHT_TO_LEFT: "<",
  BOTTOM_TO_TOP: "^",
  TOP_TO_BOTTOM: "v",
};

const EntryPattern = new RegExp(
  `^(?<controlCharacter>[${Object.values(ControlCharacter).join(
    ""
  )}])?(?<value>.+)$`
);

const DirectionMap = {
  [ControlCharacter.LEFT_TO_RIGHT]: { x: 1, y: 0 },
  [ControlCharacter.RIGHT_TO_LEFT]: { x: -1, y: 0 },
  [ControlCharacter.BOTTOM_TO_TOP]: { x: 0, y: -1 },
  [ControlCharacter.TOP_TO_BOTTOM]: { x: 0, y: 1 },
};

const parseEntry = (entryString) => {
  try {
    const {
      groups: { controlCharacter, value },
    } = EntryPattern.exec(entryString);
    const direction = DirectionMap[controlCharacter];
    return {
      value,
      ...(direction && { direction }),
    };
  } catch (error) {
    throw new Error(`Failed to parse grid entry: [${entryString}]`);
  }
};

const parseGrid = (gridString) => {
  try {
    const rows = gridString.trim().split(/\n/);
    const entries = rows.map((row) => row.trim().split(/ +/));
    const grid = entries.map((row) => row.map(parseEntry));
    if (!grid.length) {
      throw new Error("Failed to parse grid: no rows found");
    }
    if (!grid[0].length) {
      throw new Error("Failed to parse grid: no columns found");
    }
    if (!grid.every((row) => row.length === grid[0].length)) {
      throw new Error("Failed to parse grid: inconsistent row length");
    }
    return grid;
  } catch (error) {
    console.error(error);
  }
};

const cursorIsWithinGridBounds = (cursor, grid) =>
  cursor.x >= 0 &&
  cursor.x < grid[0].length &&
  cursor.y >= 0 &&
  cursor.y < grid.length;
const getGridEntry = (cursor, grid) => grid[cursor.y][cursor.x];
const moveCursor = (cursor, direction) => ({
  x: cursor.x + direction.x,
  y: cursor.y + direction.y,
});

const walkGrid = (
  grid,
  direction = DirectionMap[ControlCharacter.LEFT_TO_RIGHT],
  cursor = { x: 0, y: 0 }
) => {
  const values = [];
  const history = [];
  while (cursorIsWithinGridBounds(cursor, grid)) {
    history.push(`${cursor.x}${cursor.y}`);
    const entry = getGridEntry(cursor, grid);
    values.push(entry.value);
    if (entry.direction) {
      direction = entry.direction;
    }
    cursor = moveCursor(cursor, direction);
    if (history.includes(`${cursor.x}${cursor.y}`)) {
      values.push("LOOP");
      break;
    }
  }
  return values.join(", ");
};

const traverseGrid = (gridString) => {
  const grid = parseGrid(gridString);
  const path = walkGrid(grid);
  return path;
};

if (require.main === module) {
  const gridString = `
    HI  1  2  3   v4
    >9  10 11 v12 13
    ^14 15 16 17  <18
    `;
  console.log(`Grid to be walked:${gridString}`);
  const path = walkGrid(parseGrid(gridString));
  console.log(`Path taken:\n${path}`);
}

module.exports = {
  traverseGrid,
};
