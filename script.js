// const id_surat = document.querySelector(".surat").values;
// let ayat_dicari = document.querySelector(".ayat").value;
const btn = document.querySelector(".btn");
const inputSurat = document.querySelector(".surat");
// Fetch

btn.addEventListener("click", () => {
  const id_surat = document.querySelector(".surat").value;
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
      console.log(
        namaSurat,
        namaSuratId,
        jenisSurat,
        ayatYangDiCari,
        terjemahYangDiCari,
        tafsirYangDiCari
      );
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
const functionPencarianF1 = (datas, ayatDicari) => {
  const hasilSorting = {
    namaSurat: datas.name,
    namaSuratId: datas.name_translations.id,
    jenisSurat: datas.type,
    ayatYangDiCari: datas.verses[ayatDicari - 1].text,
    terjemahYangDiCari: datas.verses[ayatDicari - 1].translation_id,
    tafsirYangDiCari: datas.tafsir.id.kemenag.text[ayatDicari],
  };
  return hasilSorting;
};

const penampilKeWeb = (
  tempatHasil,
  namaSurat,
  namaSuratId,
  jenisSurat,
  ayatYangDiCari,
  terjemahYangDiCari,
  tafsirYangDiCari
) => {
  tempatHasil.innerHTML = `<div class="namaSurat">${namaSurat}</div>
        <div class="namaSuratId">${namaSuratId}</div>
        <div class="jenisSurat">${jenisSurat}</div>
        <div class="teksArab">${ayatYangDiCari}</div>
        <p>Arti Ayat</p>
        <div class="terjemahIndo">${terjemahYangDiCari}</div>
        <p>Tafsir Ayat</p>
        <div class="tafsirAyat">${tafsirYangDiCari}</div>`;
};

const pemilihSurat = (inputSurat) => {
  const surat = document.querySelectorAll("li");
  surat.forEach((item, index) => {
    item.addEventListener("click", () => {
      inputSurat.value = index++; // Menambahkan 1 agar sesuai dengan urutan// Menampilkan elemen yang diklik
    });
  });
};
pemilihSurat(inputSurat);
