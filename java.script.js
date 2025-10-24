const button = document.getElementById("tampilkan");

button.addEventListener("click", () => {
    const nama = document.getElementById("nama").value;
    const umur = document.getElementById("umur").value;
    const hobi = document.getElementById("hobi").value;

    document.getElementById("hasilNama").textContent = nama || "-";
    document.getElementById("hasilUmur").textContent = umur || "-";
    document.getElementById("hasilHobi").textContent = hobi || "-";
});