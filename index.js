function isWambo(string) {
  return string.toLowerCase() === "wambo";
}

function isNotWambo(string) {
  return string.toLowerCase() !== "wambo";
}

function isWamboCaseSensitive(string) {
  return string === "wambo";
}

function isNotWamboCaseSensitive(string) {
  return string !== "wambo";
}

function isWamboWithCapitalW(string) {
  return string === "Wambo";
}

function isNotWamboWithCapitalW(string) {
  return string !== "Wambo";
}

function isWamboWithCapitalWCaseInsensitive(string) {
  return string.toLowerCase() === "wambo" && string[0] === "W";
}

function isNotWamboWithCapitalWCaseInsensitive(string) {
  return !(string.toLowerCase() === "wambo" && string[0] === "W");
}

function toWambo(string) {
  return "wambo";
}

function toWamboWithCapitalW(string) {
  return "Wambo";
}

function toWAMBO(string) {
  return "WAMBO";
}

module.exports = {
  isWambo,
  isNotWambo,
  isWamboCaseSensitive,
  isNotWamboCaseSensitive,
  isWamboWithCapitalW,
  isNotWamboWithCapitalW,
  isWamboWithCapitalWCaseInsensitive,
  isNotWamboWithCapitalWCaseInsensitive,
  toWambo,
  toWamboWithCapitalW,
  toWAMBO,
};
