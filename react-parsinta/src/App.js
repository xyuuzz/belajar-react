// Impoer Class Component dan React dari module react
import React, { Component } from "react"

class App extends Component 
{
  /*
   seperti pada b.pemrog lainya, di js fungsi constructor 
   akan dijalankan secara otomatis setelah objek di instansiasi
   */
  constructor() {
    super()
    
    this.state = {
      anakKe: 6
    }
  }

  // fungsi render mengembalikan elemen html yang akan ditampilkan ketika component ini dipanggil
  render()
  {
    // kita bisa menyimpan state yang sudah dibuat ke dalam variabel
    const anakKe = this.state.anakKe;
    return (
      <div>
        {/* atau kita juga bisa mengakses state secara langsung seperti ini
        <div>Halo Namaku Yusuf dan aku adalah anak ke-{this.state.anakKe}</div> */}
        <div>Halo Namaku Yusuf dan aku adalah anak ke-{anakKe}</div>
      </div>
    ) 
  }
}

/*
  Ketika kita ingin agar class App digunakan di class lain, maka kita harus meng-export nya menggunakan syntax JSX export default
*/
export default App;