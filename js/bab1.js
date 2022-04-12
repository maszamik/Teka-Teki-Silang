//code dibwah adalah untuk memanggil semua button yang ada dibody dan menambahkan nya event listener, 
//sehingga kita tidak perlu  menambahkan eventlistener pada masing-masing button.  
const btn = document.querySelectorAll("body button");

btn.forEach(function (pil) {
  pil.addEventListener("click", function () {
    let namebtn = pil.getAttribute("name");
    geserCek(namebtn);
  });
});

//terdapat juga fungsi geserCek dengan para meter namebtn. namebtn disini adalah attribut name dari button, 
//jika button nya mengandung attribut name d1, maka input akan tetuju ke kotak yang memiliki class name d1.
function geserCek(nbtn) {
  const table = document.querySelectorAll("." + nbtn);
  if (table[0].disabled === true) {
    autoNext(0, nbtn);
  } else {
    table[0].select();
  }

  for (let i = 0; i < table.length; i++) {
    table[i].addEventListener("input", function () {
      if (i == table.length - 1) {
        var concatString = catString(nbtn);
        submitString(concatString, nbtn, table);
      } else if (
        i == table.length - 2 &&
        table[table.length - 1].disabled === true
      ) {
        var concatString = catString(nbtn);
        submitString(concatString, nbtn, table);
      } else {
        autoNext(i, nbtn);
        var concatString = catString(nbtn);
        submitString(concatString, nbtn, table);
      }
    });
  }
}
//autonext fungsi ini memiliki dua parameter i adalah untuk mengambil index mana yang saat ini sedang diisi, 
//maka fungsi ini akan menambah indexnya sehingga bisa berpindah ke input kotak selanjutnya
function autoNext(i, cn) {
  let d = document.querySelectorAll("." + cn);
  if (d[i + 1].disabled === true) {
    d[i + 2].select();
  } else {
    d[i + 1].select();
  }
}

//cat string fungsi ini memiliki parameter cn yaitu classname dari input yang akan kita gabung isinya, 
//fungsi ini akan menyeleksi semua input yang memiliki classname sesuai paramter dan menggabungkan isinya menjadi satu yang disini disimpan dalam variabel concat,
function catString(cn) {
  var concat = "";
  let d = document.querySelectorAll("." + cn);
  for (let i = 0; i < d.length; i++) {
    concat += d[i].value;
  }
  return concat;
}

//getElemenById ini menggambil value Scire yang sudah kita tentukan atau sudah kita buat di HTML
let score = 0;

function scoring() {
  document.getElementById("score").innerHTML = score;
}

//SubmitString memiliki 3 parameter. concat adalah string isian yang sudah digabung, tipe adalah nama btn, 
//dan table adalah seluruh input yang memiliki nama class yang sesuai namabtn dalam bentuk array. jika concat sesuai dengan jawabannya dan tipe sesuai dengan soalnya maka fungsi pengulangan table akan dijalankan
function submitString(concat, tipe, tabel) {
  if (concat.toUpperCase() == "GAS" && tipe == "t2") {
    alert("Selamat Jawaban Anda Benar!");
    tableRepeat(tabel);
    return;
  } else if (concat.toUpperCase() == "OKSIGEN" && tipe == "t3") {
    alert("Selamat Jawaban Anda Benar!");
    tableRepeat(tabel);
    return;
  } else if (concat.toUpperCase() == "BRONKUS" && tipe == "t6") {
    alert("Selamat Jawaban Anda Benar!");
    tableRepeat(tabel);
    return;
  } else if (concat.toUpperCase() == "ALVEOLUS" && tipe == "d2") {
    alert("Selamat Jawaban Anda Benar!");
    tableRepeat(tabel);
    return;
  } else if (concat.toUpperCase() == "HIDUNG" && tipe == "d4") {
    alert("Selamat Jawaban Anda Benar!");
    tableRepeat(tabel);
    return;
  } else if (concat.toUpperCase() == "EPIGLOTIS" && tipe == "d5") {
    alert("Selamat Jawaban Anda Benar!");
    tableRepeat(tabel);
    return;
  } else if (concat.toUpperCase() == "PLEURA" && tipe == "d7") {
    alert("Selamat Jawaban Anda Benar!");
    tableRepeat(tabel);
    return;
  } else if (concat.toUpperCase() == "TITLE" && tipe == "d4") {
    alert("Selamat Jawaban Anda Benar!");
    tableRepeat(tabel);
    return;
  }
}

//fungsi ini berguna untuk membuat tabel yang isinya benar tidak bisa diisi lagi, untuk sementara tampilannya akan menjadi abu abu
// score disini jika benar maka nilai nya akan ditambah +10
function tableRepeat(table) {
  for (let j = 0; j < table.length; j++) {
    table[j].disabled = true;
  }
  score += 10;
  scoring();
}

$(document).ready(function () {
  $(".target").hide();

  $("#toggle").click(function () {
    $(".target").show();
  });

  $("#toggleHide").click(function () {
    $(".target").hide();
  });
});
