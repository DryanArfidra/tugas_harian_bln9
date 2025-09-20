export const users = [  
    {id: 1, nama: "dryanz", umur: 20},
    {id: 2, nama: "budi", umur: 21},
    {id: 3, nama: "susi", umur: 19}
];

export function login(username, password) {
    const user = users.find(u => u.nama === username && u.password === password);
    if (user) {
        console.log("Login berhasil");
        return true;
    }else{
        console.log("Login gagal");
        return false;
    }
}



export function register(username, password) {
    const existing = users.find(u => u.nama === username);
    if (existing) {
        console.log("Username sudah terdaftar");
        return false;
    }
    users.push({id: users.length + 1, nama: username, password: password});
    console.log("Registrasi berhasil");
    return true;
}