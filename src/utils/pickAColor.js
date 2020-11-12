const colorsMap = {
  aqua: "#00ffff",
  blue: "#0000ff",
  brown: "#a52a2a",
  darkblue: "#00008b",
  darkcyan: "#008b8b",
  darkgreen: "#006400",
  darkkhaki: "#bdb76b",
  darkmagenta: "#8b008b",
  darkolivegreen: "#556b2f",
  darkorange: "#ff8c00",
  darkred: "#8b0000",
  darksalmon: "#e9967a",
  gold: "#ffd700",
  green: "#008000",
  indigo: "#4b0082",
  khaki: "#f0e68c",
  lightgreen: "#90ee90",
  lime: "#00ff00",
  magenta: "#ff00ff",
  maroon: "#800000",
  navy: "#000080",
  olive: "#808000",
  orange: "#ffa500",
  pink: "#ffc0cb",
  violet: "#800080",
  red: "#ff0000",
  yellow: "#ffff00",
};

let colorsArray = Array.from(Object.values(colorsMap));

const pickAColor = () => {
  if (colorsArray.length === 0) {
    colorsArray = Array.from(Object.values(colorsMap));
  }
  return colorsArray.shift();
};
export default pickAColor;
