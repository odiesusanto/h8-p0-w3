var input = ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"];

function dataHandling2(array) {
array.splice(1, 2, "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung");
array.splice(4, 1, "Pria", "SMA Internasional Metro");
console.log(array);
}
(dataHandling2(input));


var tanggal = "21/05/1989";
var bulan = input[3].split("/"); //self-note: now that it's split, bulan becomes index 1 because index 0 is the date
switch (bulan[1]){
  case '01':
    bulan = 'Januari';
    break;
  case '02':
    bulan = 'Februari';
    break;
  case '03':
    bulan = 'Maret';
    break;
  case '04':
    bulan = 'April';
    break;
  case '05':
    bulan = 'Mei';
    break;
  case '06':
    bulan = 'Juni';
    break;
  case '07':
    bulan = 'Juli';
    break;
  case '08':
    bulan = 'Agustus';
    break;
  case '09':
    bulan = 'September';
    break;
  case '10':
    bulan = 'Oktober';
    break;
  case '11':
    bulan = 'Nopember';
    break;
  case '12':
    bulan = 'Desember';
    break;  
  default:
    month = 'unknown';
}
console.log(bulan);

var tanggal = ['21', '05', '1989'];
  function sortDesc(a,b){
    return b-a;
  }
  tanggal.sort(sortDesc);
console.log(tanggal);

var tanggal = ['21', '05', '1989'];
var newtgl = tanggal.join("-");
console.log(newtgl);

console.log(input[1].slice(0, 15));
