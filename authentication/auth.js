// 
const users = [
    { username: "naya", password: "student" },
    { username: "user2", password: "password2" },
];

//Функція authenticate перевіряє, чи надані ім’я користувача та пароль збігаються з будь-яким користувачем у масиві під назвою «users»
function authenticate() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    //Метод шукає користувача в масиві users, ім’я користувача та пароль якого відповідають значенням, введеним користувачем :
    const authUser = users.find(user => user.username === username && user.password === password);

    if (authUser) {
        document.getElementById("message").textContent = "Login successful!";
    } else {
        document.getElementById("message").textContent = "Login failed";
    }
}
