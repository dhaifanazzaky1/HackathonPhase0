let userlogin = JSON.parse(localStorage.getItem("currentUser"));
let namae = document.getElementById("nama");
let emaill = document.getElementById("email");
let passwordd = document.getElementById("password");

function masukindata() {
        namae.innerText = userlogin.name;
        emaill.innerText = userlogin.email;
        passwordd.innerText = userlogin.password;
}

masukindata()

let userTerdaftar = JSON.parse(localStorage.getItem("users"));
// console.log(userTerdaftar);
    

function editNama() {
        let namaBaru = prompt("Masukkan nama baru:", userlogin.name);

        if (!namaBaru) {
            return
        }
        if (namaBaru.trim() === "") {
            alert("Nama tidak boleh kosong");
            return;
        }

        userlogin.name = namaBaru;
        localStorage.setItem("currentUser", JSON.stringify(userlogin));

        for (let i = 0; i < userTerdaftar.length; i++) {
            const perUserTerdaftar = userTerdaftar[i];
            if (perUserTerdaftar.email === userlogin.email) {
                perUserTerdaftar.name = userlogin.name
                break
            }
        }

        localStorage.setItem("users", JSON.stringify(userTerdaftar));

        masukindata();
        alert("Nama berhasil diubah");
}

function editPassword() {
        let pwBaru = prompt("Masukkan nama baru:", userlogin.password);

        if (!pwBaru) {
            return
        }
        if (pwBaru.trim() === "") {
            alert("Nama tidak boleh kosong");
            return;
        }

        userlogin.password = pwBaru;
        localStorage.setItem("currentUser", JSON.stringify(userlogin));

        for (let i = 0; i < userTerdaftar.length; i++) {
            const perUserTerdaftar = userTerdaftar[i];
            if (perUserTerdaftar.email === userlogin.email) {
                perUserTerdaftar.password = userlogin.password
                break
            }
        }

        localStorage.setItem("users", JSON.stringify(userTerdaftar));

        masukindata();
        alert("Nama berhasil diubah");
}

function keluar() {
        localStorage.removeItem("currentUser")
        window.location.href = "login.html";
}

function balik() {
        window.location.href = "homepage.html";
}