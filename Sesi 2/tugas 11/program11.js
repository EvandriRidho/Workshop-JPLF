var mahasiswa = {
    nama: 'Ajay Alfredo Almani',
    npm: 50420093,
    kelas: '2IA16',
    jurusan: 'Teknik Informatika',
    IPSemester: [3.14, 3.20, 3.67, 3.73, 3.74],
    IPKumulatif: function () {
        let total = 0;
        let ip = this.IPSemester;
        for (var i = 0; i < ip.length; i++) {
            total += ip[i];
        }
        return total / ip.length;
    }
}
mahasiswa.IPKumulatif();