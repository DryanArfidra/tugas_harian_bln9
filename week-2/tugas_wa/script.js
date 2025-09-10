let usernames = [];
let passwords = [];

function register() {
    let username = prompt("Masukkan username:");
    let password = prompt("Masukkan password:");
    usernames.push(username);
    passwords.push(password);
}

function login() {
    let username = prompt("Masukkan username:");
    let password = prompt("Masukkan password:");

    let index = usernames.indexOf(username);
    if (index !== -1 && passwords[index] === password) {
        alert("Login berhasil!");
    } else {
        alert("Login gagal!");
    }
}

function showUsers() {
    let userList = "Daftar Pengguna:\n";
    for (let i = 0; i < usernames.length; i++) {
        userList += usernames[i] + "\n";
    }
    alert(userList);
}

function updateUser() {
    let User = prompt("Masukkan username yang ingin diupdate:");
    let index = usernames.indexOf(User);
    if (index !== -1) {
        let newPassword = prompt("Masukkan password baru:");
        passwords[index] = newPassword;
        alert("Password berhasil diupdate!");
    } else {
        alert("User tidak ditemukan!");
    }
}

function deleteUser() {
    let User = prompt("Masukkan username yang ingin dihapus:");
    let index = usernames.indexOf(User);
    if (index !== -1) {
        usernames.splice(index, 1);
        passwords.splice(index, 1);
        alert("User berhasil dihapus!");
    } else {
        alert("User tidak ditemukan!");
    }
}