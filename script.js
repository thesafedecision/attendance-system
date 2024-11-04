
function logAction(action) {
    const logList = document.getElementById("logList");
    const time = new Date().toLocaleString();
    const listItem = document.createElement("li");
    listItem.textContent = `${action} at ${time}`;
    logList.appendChild(listItem);
}
