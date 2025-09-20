//ambil data pengguna dari API publik
async function ambilDataPengguna() {
    try {
        let response = await fetch("https://jsonplaceholder.typicode.com/users/1");
        let data = await response.json();
        console.log(data);
    } catch (error) {
        console.error("Error:", error);
    }
}

// ambil daftar postingan, periksa jumlahnya
async function ambilDaftarPostingan() {
    try {
        let response = await fetch("https://jsonplaceholder.typicode.com/posts");
        let data = await response.json();
        console.log(`Jumlah postingan: ${data.length}`);
    } catch (error) {
        console.error("Error:", error);
    }
}

// janji manual dengan setTimeout
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
    console.log("mulai menunggu...");

    await delay(2000);

    console.log("selesai menunggu setelah 2 detik");
}

main();

// fetch dengan URL salah
async function URLsalah() {
    try {
        let response = await fetch("https://api.myquran.com/v2/sholat/jadwal/:kota/:dae");
        let data = await response.json();
        console.log(data)
    }catch (error) {
        console.error("Error:", error);
    }
}

// cek status API
async function cekStatusAPI() {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    if (response.ok === true) {
        let data = await response.json();
        console.log(data);
    } else {
        console.log("Error: " + response.status);
    }
}
cekStatusAPI();

// promise.all
async function fetchMultipleAPIs() {
    const urls = [
        "https://jsonplaceholder.typicode.com/users",
        "https://jsonplaceholder.typicode.com/posts",
    ];

    try {
        const responses = await Promise.all(urls.map(url => fetch(url)));
        const data = await Promise.all(responses.map(res => res.json()));
        console.log(data);
    } catch (error) {
        console.error("Error:", error);
    }
}
fetchMultipleAPIs();

// janji berantai 
const angkapromise = Promise.resolve(5);
angkapromise
    .then(angka => angka * 2)
    .then(angka => {
        console.log(angka); // Output: 10
        return angka * 3;
    })
    .then(angka => {
        console.log(angka); // Output: 30
    })
    .catch(error => {
        console.error("Error:", error);
});

// fungsi async dengan throw error
async function checkNumber(num) {
    try {
        if ( num % 2 === 0 ) {
            throw new Error("Angka genap tidak diizinkan");
        }
    } catch (error) {
        console.error("Error:", error);
    }
}

fungsiAsyncDenganError(4);
fungsiAsyncDenganError(5);

// fetch dengan parameter
async function getPostById(Id) {
    try {
        let response = await fetch(`https://jsonplaceholder.typicode.com/posts/${Id}`);
        let data = await response.json();
        console.log(data);
    } catch (error) {
        console.error("Error:", error);
    }
}
getPostById(3);
getPostById(8);

// pengembalian loop dengan async/await
async function fetchUsers() {
    for (let i = 1; i <= 3; i++) {
        try {
            let response = await fetch(`https://jsonplaceholder.typicode.com/users/${i}`);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            let data = await response.json();
            console.log(data);
        } catch (error) {
            console.error("Error:", error);
        }
    }
}
fetchUsers();

// ambil data yang harus dilakukan 
async function checkTodoStatus() {
    try {
        const response = await fetch(`https://jsonplacer.typicode.com/todos/5`)
        if (!response.ok) {
            throw new eror(`http error status: ${response.status}`)
    }
    const todo = await response.json()

    if (todo.completed === true) {
        console.log("selesai")
    }else {
        console.log("belum selesai")
    }

    }catch (error) {
        console.log("error mengambil data =:", error.message);
    }
}
checkTodoStatus();

// coba/tangkap bersarang
async function fetchtry() {
    try {
        const response = await fetch(`https://api.example.com/salah`);

        try {
            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.log(error.message);
        }
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

fetchtry();

// ambil gambar
async function fetchImage() {
    try {
        const response = await fetch(`https://picsum.photos/200/300`);
        console.log(`status:`, response.status);

        if (!response.ok) throw new error(`gagal ambil gambar`);

        const blob = await response.blob();
        console.log(`gambar berhasil diambil`);
    }catch (error) {
        console.log(error.message)
    }
}

fetchImage();

// delay dengan fetch
async function delayFetch(url, ms) {
    await new Promise(resolve => setTimeout(resolve, ms));
    const response = await fetch(url)
    return response.json
}
delayFetch(`https://jsonplaceholder.typicode.com/posts/1`, 2000)
    .then(data => console.log(data))
    .catch(err => console.log(err))

// janji race
async function raceRequest() {
    const api1 = fetch(`https://api.example.com/1`)
    const api2 = fetch(`https://api.example.com/2`)

    try {
        const winner = await Promise.race([api1, api2])
        console.log(`request tercepat:`, winner.url);
    }catch (error) {
        console.log(`semua request gagal`);
    }
}
raceRequest()

// ambil json yang tidak valid
async function invalidjson() {
    try {
        const response = await fetch(`https://example.com/non-json`);
        const data = await response.json()
        console.log(`error parsing:`, error.message)
    }catch (error) {
        console.log(`error parsing:`, error.message)
    }
}

// fungsi async recursive
async function recursive(count = 0) {
    if (count >= 3) return;

    await new promise(resolve => setTimeout(resolve, 1000));
    console.log(`panggilan ke-${count + 1}`)

    await recursive(count + 1)
}
recursive()

// error manual di fetch
async function checkEmail() {
    try {
        const response = await fetch("https://jsonplaceholder.typecode.com/comments/1")
        const data = await response.json()

        if (!data.email) {
            throw new error("email tidak ada")
        }
        console.log(data.email)
    }catch (error) {
        console.log(error.message)
    }
}
checkEmail()

// kombinasi promise + async
function getData() {
    return new promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`data berhasil diambil`)
        }, 1000)
    })
}

async function processData() {
    try {
        const result = await getData();
        console.log(result)
    }catch (error) {
        console.log("error"+ error.message)
    }
}
processData()