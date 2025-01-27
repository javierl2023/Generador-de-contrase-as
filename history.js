const passwordHistory = [];

function addPassword(password) {
    if (!passwordHistory.includes(password)) {
        passwordHistory.push(password);
    }
}

function getHistory() {
    return passwordHistory;
}

function clearHistory() {
    passwordHistory.length = 0;
}

export { addPassword, getHistory, clearHistory };