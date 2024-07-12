let mobil = {
    nama: "Xpander",
    merek: "Mitsubishi",
    tipemobil: "Mini Jeep",
    tahundibuat: 2007,
    warna: "putih",
    majukencang:  () => {
        console.log("Mobil ini melaju dengan kecepatan 300Km/h");
    },
    majupelan:  () => {
        console.log("Mobil ini melaju dengan kecepatan 10Km/h");
    },
    mundur: () => {
        console.log("Mobil ini melaju kebelakang");
    },
    stop:  () => {
        console.log("Mobil ini berhenti");
    }
};