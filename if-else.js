let nama = "Rama"
let peran = "Penyihir"

if (nama == "" && peran == "") {
	console.log(`Nama Harus Di Isi`)
}else if (nama != "" && peran == "") {
	console.log(`Halo ${nama}, Pilih Peranmu Untuk Memulai Game!`)
}else{
	if (peran == "Ksatria") {
		console.log(`Selamat Datang Di Dunia Proxytia, ${nama}`)
		console.log(`Halo ${peran} ${nama}, Kamu Dapat Menyerang Dengan Senjatamu!`)
	}else if (peran == "Tabib") {
		console.log(`Selamat Datang Di Dunia Proxytia, ${nama}`)
		console.log(`Halo ${peran} ${nama}, Kamu Akan Membantu Temanmu Yang Terluka.`)
	}else if (peran == "Penyihir") {
		console.log(`Selamat Datang Di Dunia Proxytia, ${nama}`)
		console.log(`Halo ${peran} ${nama}, Ciptakan Keajaiban Yang Membantu Kemenanganmu!`)
	}
}