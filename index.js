function isWambo(string) {
    return string.toLowerCase() === 'wambo'; 
}

function isNotWambo(string) {
    return string.toLowerCase() !== 'wambo';
}

module.exports = isWambo;