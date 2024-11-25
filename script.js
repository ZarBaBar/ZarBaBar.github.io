import {
  functionPencarianF1,
  pemilihSurat,
  penampilKeWeb,
} from "./function.js";
const btn = document.querySelector(".btn");
const inputSurat = document.querySelector(".surat");
// Fetch

btn.addEventListener("click", () => {
  let id_surat = document.querySelector(".surat").value;
  let ayat_dicari = document.querySelector(".ayat").value;
  const URL_ENDPOINT = `https://raw.githubusercontent.com/penggguna/QuranJSON/master/surah/${id_surat}.json`;

  fetch(URL_ENDPOINT)
    .then((response) => response.json()) // Parse the response as JSON
    .then((data) => {
      // Handle the data here
      // console.log(data);
      const kumpulanDataHasilSorting = functionPencarianF1(data, ayat_dicari);
      const {
        namaSurat,
        namaSuratId,
        jenisSurat,
        ayatYangDiCari,
        terjemahYangDiCari,
        tafsirYangDiCari,
      } = kumpulanDataHasilSorting;
      const tempatPenampilHasil = document.querySelector(".hasil");
      penampilKeWeb(
        tempatPenampilHasil,
        namaSurat,
        namaSuratId,
        jenisSurat,
        ayatYangDiCari,
        terjemahYangDiCari,
        tafsirYangDiCari
      );
    })
    .catch((error) => {
      // Handle any errors here
      console.error(error);
    });
});
// function untuk mencari ayat, terjemah dan tafsir
pemilihSurat(inputSurat);
