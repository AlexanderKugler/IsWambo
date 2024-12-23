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

module.exports = {
  isWambo,
  isNotWambo,
  isWamboCaseSensitive,
  isNotWamboCaseSensitive,
  isWamboWithCapitalW,
  isNotWamboWithCapitalW,
};
