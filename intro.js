// Data Tipe
/* 

ini comment multi line
- TIPE DATA / DATA TYPE

'Ricky' ini tulisan
100 ini adalah angka

- serangkaian kumpulan data / huruf
- kesimpulan, tipe data adalah mendeklarasikan bentuk / jenis / tipe data yang ingin kita pakai

"ricky" -> string
1 -> integer (angka)

"1" -> string

*/

console.log(typeof "1")
console.log(typeof 0)
console.log(typeof [])


// Variabel
/* 
  variabel - toples
  - Wadah / penampung
  - di dalam variabel / toples kita bisa menyimpan sesuatu / menyimpan nilai

*/

//  cara deklarasi variabel

// let, var, const
// key namavariabel = "isi"

var kipas = 10
// variabel var 
// namavariabel kipas 
// nilai = 10 // number


var harga = 1400000
var ongkoskirim = 18000
var asuransi = 5700
var namalengkap = "iman"

var totalTagihan = harga + ongkoskirim + asuransi

console.log(totalTagihan)
console.log(typeof totalTagihan)

var harga1 = "20"
var harga2 = "40"

var totalTagihan2 = harga1 + harga2 

console.log(totalTagihan2)
// hasil 2040
// concatenation
/* "20" + "40" */
// "2040"


var namaLagi = "iman"


//  bedanya apa
// let
/* 
 - bisa dirubah / bisa direassign -> Bener
 
*/
// var
/* 
	- global variabel
 - bisa dirubah / bisa direassign -> Bener
 */
// Const
/* 
  - const tidak bisa diubah

 */
 
 
// melakukan assign
let ubahlet = "let"
var ubahvar = "var"
const ubahconst = "const"

// cetak variabel ubahlet
console.log('ini nilai awal ubahlet', ubahlet)
// reassign
ubahlet = "ubahlet"
console.log('hasil sesudah reassign', ubahlet)

console.log('ini nilai awal ubahvar')
console.log(ubahvar)
// reassign
ubahvar = 'ubahvar'
console.log('hasil sesudah reassign')
console.log(ubahvar)


console.log('ini nilai awal ubahconst')
console.log(ubahconst)
// reassign
ubahvar = 'ubahconst'
console.log('hasil sesudah reassign')
console.log(ubahconst)
// phi = 3,14 -> konstanta -> const


// kapan kita pake let kapan kita pake var

// block scope
// 

// kita anggap beda
// adalah sebuah negara
let diskon = 500 // deklarasi variabel
if (true) { 
 // sebuah provinsi
 let diskon = 300
 console.log('ini adalah variabel di dala scope')
 console.log(diskon) 
} 

console.log('ini diluar scope')
console.log(diskon) 

let totalharga = 100000
var diskon2 = 10 // Global scope


if (true){
 var diskon2 = 50 // Global scope
 console.log('ini diluar scope var')
 console.log(diskon2)
 console.log('harga setelah diskon')
 console.log(totalharga - (totalharga * diskon2 / 100))

}
/* console.log('ini diluar scope var')
console.log(diskon2)  */


const assignlet = "let"
console.log(assignlet)

if (true){
	const assignlet = "ubahlet"
  console.log('ini adalah variabel yang di reassign')
  console.log(assignlet)
}


// bentuk array
// kereta
const  deklarstring = "kue"
const arrayCoba = ["kue", "permen", "sayur", "buah", "daging"]
//
console.log(arrayCoba)
console.log(arrayCoba[2])

const products = ["logitect mouse", "logitect keyboard", "logitech kamera"]

// bentuk object
const object = {
	nama : "riyo"
}






















