
const users = [
    { username: "user1", password: "password1" },
    { username: "user2", password: "password2" },
    { username: "user3", password: "password3" },
    { username: "user4", password: "password4" },
    { username: "manager", password: "admin123" }
];

function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
        window.location.href = 'home.html';
        return false; // Prevent form submission
    } else {
        alert("Invalid username or password");
        return false; // Prevent form submission
    }
}

function logAction(action) {
    const logList = document.getElementById("logList");
    const time = new Date().toLocaleString();
    const listItem = document.createElement("li");
    listItem.textContent = `${action} at ${time}`;
    logList.appendChild(listItem);
}
