function dataHandling(argument){
  var input = [
  ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
  ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
  ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
  ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
];
   for(var i = 0; i < input.length; i++){
     if(argument === input[i][0]){
     console.log("Nomor ID: " + input[i][0]);
     console.log("Nama Lengkap: " + input[i][1]);
     console.log("TTL: " + input[i][2] + " " + input[1][3]);
     console.log("Hobi: " + input[i][4]);
      }
     }
   }
dataHandling("0003");


