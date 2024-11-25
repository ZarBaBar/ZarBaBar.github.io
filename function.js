export const functionPencarianF1 = (datas, ayatDicari) => {
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

export const pemilihSurat = (inputSurat) => {
  const surat = document.querySelectorAll("li");
  surat.forEach((item, index) => {
    item.addEventListener("click", () => {
      inputSurat.value = index + 1; // Menambahkan 1 agar sesuai dengan urutan// Menampilkan elemen yang diklik
    });
  });
};

export const penampilKeWeb = (tempatHasil, ...sisa) => {
  tempatHasil.innerHTML = `<div class="namaSurat">${sisa[0]}</div>
          <div class="namaSuratId">${sisa[1]}</div>
          <div class="jenisSurat">${sisa[2]}</div>
          <div class="teksArab">${sisa[3]}</div>
          <p>Arti Ayat</p>
          <div class="terjemahIndo">${sisa[4]}</div>
          <p>Tafsir Ayat</p>
          <div class="tafsirAyat">${sisa[5]}</div>`;
};
