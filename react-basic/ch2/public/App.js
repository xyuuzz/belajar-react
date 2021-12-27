const root = document.querySelector("#root");

const clock = () => {
  const el = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "Jam WIB =", ">", " Waktu Indonesia Barat"), /*#__PURE__*/React.createElement("p", null, new Date().toLocaleTimeString()), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement("div", {
    style: {
      /**
          Jika sebuah property dapat memiliki satuan nilai pixel, di dalam React, kita dapat hanya menuliskan angkanya saja tanpa menuliskan satuan px (pixel), karena React sudah mengerti bahwa kita akan menggunakan satuan px (jika kita tidak menuliskan satunya)
      */
      width: 400,
      height: 200,
      backgroundColor: "red"
    }
  }), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement("img", {
    className: "center img",
    src: "https://images.unsplash.com/photo-1639426090332-69e939822d99?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    alt: "gambar acak"
  }), /*#__PURE__*/React.createElement("hr", null));
  ReactDOM.render(el, root);
};

{
  /* 
     Sekarang kita masuk ke materi Event Handling.
     Di JSX, cara mendefinisikan event handling adalah ditulis di bagian props pada tag HTML / React Component.
     Jika ada element yang saat di klik ada aksi(fungsi) yang mau dijalankan, maka nama props nya adalah onClick, jika hover maka onMouseOver, dan lain sebagainya (silahkan cek di MDN, W3School dan website lainya)
  */
}

const saatDiKlik = () => {
  alert("Halo! Pak Yusuf");
};

const el2 =
/*#__PURE__*/
// Saat element p di klik, maka panggil fungsi saatDiKlik
React.createElement("p", {
  className: "center-text",
  onClick: saatDiKlik.bind(this)
}, "Click Aku Mas!");
ReactDOM.render(el2, root);
/**
    Sekarang kita akan belajar tentang Component dan State
    State adalah data di dalam component react yang ketika nilai datanya diubah, maka secara otomatis element state tersebut akan di render ulang.
    
    Cara menggunakan State adalah dengan menggunakan method useState yang ada di dalam objek React, lalu mengirimkan 1 nilai parameter yaitu nilai dari state itu sendiri.
*/

function ReactState() {
  /**
      Method useState mengembalikan array yang berisi 2 element, element pertama berisi nilai yang diterima dari parameter dan element terakhir berisi sebuah fungsi yang berguna untuk mengatur kembali nilai dari state tersebut.
      
      Kita dapat menggunakan konsep destructuring untuk assignment variabel dari method useState karena method tsb mengembalikan nilai array.
   */
  const [count, setCount] = React.useState(1);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("button", {
    onClick: setCount.bind(this, count + 1)
  }, " + "), /*#__PURE__*/React.createElement("span", null, count), /*#__PURE__*/React.createElement("button", {
    onClick: setCount.bind(this, count - 1)
  }, " - "));
}

ReactDOM.render( /*#__PURE__*/React.createElement(ReactState, null), root);
/**
    Disini, kita akan belajar Component Lifecycle (Effect hooks)
    Pertama kita akan belajar tentang method useEffect yang disediakan oleh obj React. Fungsi useEffect menerima 2 parameter. parameter pertama berisi callback function dan parameter ke dua berupa array (opsional), yang berisi kumpulan nama state yang nanti ketika di atur kembali nilai state tsb, callback function yang didefinisikan sebagai parameter method useEffect akan dijalankan.
    Jika method useEffect hanya diberi 1 argument saja, yaitu berupa callback function, maka sama saja kita menulis parameter kedua berupa array yang berisi kumpulan semua state yang didefinisikan di dalam component.
    
    Method useEffect harus ditulis di dalam component dan setelah pendefinisian component state.
*/

function UseEffect() {
  const [kurang, setKurang] = React.useState(100);
  const [tambah, setTambah] = React.useState(100);
  React.useEffect(() => {
    console.log("state bernama tambah telah di render ulang");
  }, [tambah]);
  /**
      Kode dibawah disebut dengan istilah | component did update |. Apa artinya? artinya adalah callback function dijalankan ketika component dirender pertama kali dan ketika ada perubahan salah satu state yang dimiliki oleh component tsb.
  */

  React.useEffect(() => {
    console.log("di render ulang");
  });
  /**
      Sedangkan kode dibawah disebut dengan | component did mount |. Artinya adalah callback function akan dijalankan hanya ketika component dirender pertama kali.
      
      Kenapa di parameter ke-2 kita memberi nilai array kosong? Karena nilai kosong melambangkan bahwa semua state yang didefinisikan tidak akan bisa men-trigger callback function yang didefinisikan sehingga callback function hanya akan dijalankan ketika component di render pertama kali saja.
  */

  React.useEffect(() => {
    console.log("component sukses dirender");
  }, []);
  /**
      Ada sebuah masalah ketika kita menggunakan method useEffect, yaitu callback function akan dijalankan berulang kali sehingga akan menyebabkan penumpukan memori yang tidak diinginkan. 
      Jadi misalnya ketika component a dirender, jalankan callback function yang ada di useEffect yang berisi inisialisasi library b.
      Nah library b akan terus di inisialisasi ketika state dari component a berubah nilainya, sehingga penumpukan memori pun terjadi.
      
      Untungnya, React menyediakan cara agar tragedi yang disebutkan diatas tidak terjadi.
      Yaitu kita mengembalikan function pada callback function yang isinya adalah penghapusan library / component yang sudah kita inisialisai sebelumnya.
  */

  React.useEffect(() => {
    // ketika dirender pertama kali, kode dibawah akan dijalankan
    console.log("inisialisasi library b"); // dan ketika di render ulang, fungsi di bawah akan dipanggil terlebih dahulu, baru setelah itu react akan menjalankan kode yang ada di dalam callback function

    return function () {
      console.log("menghapus library b");
    };
  }, [tambah]);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "Sedang belajar konsep hooks lifecycle pada React"), /*#__PURE__*/React.createElement("button", {
    onClick: setKurang.bind(this, kurang - 1)
  }, "Kurangi Nilaiku - ", kurang), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("button", {
    onClick: setTambah.bind(this, tambah + 1)
  }, "Tambah Nilaiku - ", tambah));
}

ReactDOM.render( /*#__PURE__*/React.createElement(UseEffect, null), root);
/**
    Sekarang kita akan belajar tentang Conditional rendering.
    hmm, conditional rendering? iya, itu adalah sebuah kondisi dimana akan merender sebuah component jika kondisi yang kita tulis terpenuhi.
    
    Misal kita akan membuat sistem pemesanan makanan menggunakan button. Ketika user load hal pertama kali, maka akan ada tulisan pesan makanan dan ketika di klik akan berubah menjadi makanan telah dipesan.
    
    Check code in below!
*/

function PesanMakanan() {
  // mendefinisikan state
  const [pesan, setPesan] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", null, pesan ? /*#__PURE__*/React.createElement("h1", null, "Makanan telah dipesan! Tunggu makananya datang ya!") : /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "Pesan makananmu dengan klik tombol dibawah"), /*#__PURE__*/React.createElement("button", {
    onClick: setPesan.bind(this, true)
  }, "Pesan Sekarang")));
}

ReactDOM.render( /*#__PURE__*/React.createElement(PesanMakanan, null), root);
/**
    Sekarang kita akan belajar tentang DOM Manipulation menggunakan ref hooks. 
    Apa method yang akan kita gunakan? 
    => Di dalam obj React, terdapat method yang bernama useRef. Ref disini berarti Reference atau referensi. Method ini menerima 1 parameter dan biasanya saat kita pertama kali mendeklarasikan method useRef ini, kita isi parameter nya dengan nilai NULL. 
    Kenapa? karena kita nanti kita akan menghubungkanya dengan el HTML menggunakan atribut ref dan mengisinya dengan value yang sama dengan nama var yang menyimpan method useRef ini. 
    
    Method useRef menghasilkan node dari el HTML yang diintegrasikan. Cara mengaksesnya tidak bisa langsung memanggil variabel nya, namun kita harus menambahkan property current untuk mengakses node HTML yang kita integrasikan
    
    namaVarPenampungMethodUseRef.current === node HTML yg kita integrasikan
    
    Saat kita mengubah nilai dari method useRef dari null menjadi node HTML, component tidak akan melakukan render ulang, berbeda dengan ketika kita mengubah nilai dari method useState.
    
    
    Daritadi kita mendengar terminologi hooks, sebenarnya apa sih hooks itu di dalam React?
    => hooks adalah cara React agar membawa fitur - fitur react dari class component ke function component. Fitur ini tidak bekerja (doesn't work) di dalam class.
*/

function RefReact() {
  // mendeklarasikan var halo untuk menyimpan nilai dari method useRef
  const halo = React.useRef(null);
  React.useEffect(() => {
    halo.current.textContent = "Oh, Selamat Pagi bro";
  }, []);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    ref: halo
  }, "HALO Bung"), /*#__PURE__*/React.createElement("p", null, "Selamat Pagi"));
}

ReactDOM.render( /*#__PURE__*/React.createElement(RefReact, null), root);
/**
    Disini kita akan belajar tentang cara membuat multiple components menggunakan konsep lists and keys dengan looping. 
    
    kak, maksudnya multiple components itu apa? kok aku g make sense sama sekali
    Contoh sederhana dari multiple components adalah tag li yang ada di dalam tag ul atau ol. Nah tag li yang didefinisikan tsb akan disebut multiple components jika didefinisikan lebih dari 2.
*/

function MultipleComponents() {
  const komponenKomputer = ["proci", "fan", "motherboard", "vga", "sound card"];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h5", null, "Berikut adalah beberapa komponen komputer utama yang wajib dipasang saat kita merakit PC di rumah"), /*#__PURE__*/React.createElement("ol", null, komponenKomputer.map(komponen => /*#__PURE__*/React.createElement("li", {
    key: komponen
  }, komponen))));
}

ReactDOM.render( /*#__PURE__*/React.createElement(MultipleComponents, null), root);
/**
    Yang ditunggu tunggu akhirnya keluar juga, sekarang kita akan belajar tentang form. Ya tag form.
    Di dalam React, penulisan form sama seperti biasanya, namun enaknya, kita tidak usah menggunakan property name untuk input datanya, melainkan menggunakan useRef untuk mengidentifikasi setiap input yang kita definisikan.
*/

function ReactForm() {
  const nameRef = React.useRef(null);
  /* 
      ketika form tersubmit, maka fungsi dibawah ini akan langsung dieksekusi
      TAPI, tapi...
      setelah fungsi dieksekusi, url akan langsung berpindah karena itu adalah sifat alami dari tag form ketika di submit, sehingga kita tidak bisa melihat tulisan console.log yang telah kita buat.
  */

  let formAction = () => {
    const nama = nameRef.current.value;
    console.log(`halo ${nama}`);
  };

  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("form", {
    onSubmit: formAction
  }, /*#__PURE__*/React.createElement("label", {
    className: "mr-20"
  }, "Masukan nama anda"), /*#__PURE__*/React.createElement("input", {
    ref: nameRef,
    type: "text"
  }), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("button", {
    type: "submit"
  }, "Submit")));
}

ReactDOM.render( /*#__PURE__*/React.createElement(ReactForm, null), root);
/**
    Cara diatas sudah benar namun masih ada kesalahan yaitu setelah submit form, halaman akan langsung ter-reload sehingga kita (sebagai user) tidak bisa melihat hasil yang dijalankan oleh fungsi yang dipanggil oleh tag form tersebut. 
    
    untungnya React mengerti akan masalah ini dan mempunyai solusi yang dapat kita aplikasi kan dengan syntax yang ekspresif.
    
    fungsi yang dipanggil ketika form tersubmit sebenarnya menerima 1 parameter yaitu event dari tag form yang sudah tersubmit. Apa artinya? Artinya adalah kita dapat mengakses method preventDefault sehingga ketika form tersubmit, form tidak akan me-redirect kita ke halaman yg lain karena kita sudah mencegah aksi default dari tag form tsb.
*/

function ReactFormPreventDefault() {
  const nameRef = React.useRef(null);
  /**
      Disini kita form tersubmit, fungsi yang dipanggil menerima parameter berupa event dari tag form tersebut. Jika sudah seperti ini, kita tinggal menggunakan method preventDefault() agar ketika form tersubmit, form tidak akan langsung mengarahkan halaman ke halaman yang lain namun tetap di halaman itu sendiri. 
  */

  let formAction = event => {
    event.preventDefault();
    const nama = nameRef.current.value;
    console.log(`halo ${nama}`);
  };

  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("form", {
    onSubmit: formAction
  }, /*#__PURE__*/React.createElement("label", {
    className: "mr-20"
  }, "Masukan nama anda"), /*#__PURE__*/React.createElement("input", {
    ref: nameRef,
    type: "text"
  }), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("button", {
    type: "submit"
  }, "Submit")));
}
/**
    Menurut function diatas, sebenarnya kita sudah bisa menggunakan tag form di dalam React dengan benar, namun masih ada kesalahan kecil yang kita perbuat.
    
    Di dalam React, ada terminologi yang disebut controlled component. Di controller component, form data di handle oleh React Component, disini kita akan menggunakan React useState.
    
    Nah, untuk kode yang diatas kita menggunakan terminologi uncontrolled component, yaitu dimana form data di handle lewat DOM, disini kita menggunakan React useRef.
    
    Dikebanyakan kasus, React lebih merekomendasikan menggunakan controlled component daripada menggunakan uncontrolled component karena nilai dari form data akan dipantau secara langsung dan diatur oleh React Component yang bersangkutan.
*/


function ReactFormControllerComponent() {
  const [name, setName] = React.useState('');

  const formSubmit = event => {
    event.preventDefault();
    console.log(`Nama anda adalah ${name}`);
  };

  return /*#__PURE__*/React.createElement("form", {
    onSubmit: formSubmit
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "name",
    className: "mr-20"
  }, "Masukan Nama"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    name: "name",
    value: name,
    onChange: function (event) {
      setName.bind(this, event.target.value);
    }
  }), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("button", {
    type: "submit"
  }, "Submit"));
}

ReactDOM.render( /*#__PURE__*/React.createElement(ReactFormControllerComponent, null), root);
/**
    Disini kita akan belajar tentang Data Fetching pada React JS.
    Disini kita akan melakukan request ke API penyedia artikel open source, jadi tanpa autentikasi apapun menggunakan function fetch.
    Setelah berhasil melakukan fetching data terhadap API, kita akan menampilkan data yang sudah kita ambil ke halaman web menggunakan state.
*/

function DataFetch() {
  const [news, setNews] = React.useState([]); // React.useEffect( async () => {
  //     const request = await fetch("https://api.spaceflightnewsapi.net/v3/articles");
  //     const result = await request.json();
  //     setNews(result);
  // }, [])

  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "Data Fetch Article!"), !news.length ? /*#__PURE__*/React.createElement("img", {
    src: "https://c.tenor.com/I6kN-6X7nhAAAAAj/loading-buffering.gif",
    width: "50px"
  }) : news.map(data => {
    return /*#__PURE__*/React.createElement("div", {
      key: data.id
    }, /*#__PURE__*/React.createElement("h4", null, data.title), /*#__PURE__*/React.createElement("img", {
      src: data.imageUrl,
      width: "200px"
    }), /*#__PURE__*/React.createElement("p", null, "Summary : ", data.summary), /*#__PURE__*/React.createElement("hr", null));
  }));
}

ReactDOM.render( /*#__PURE__*/React.createElement(DataFetch, null), root);
/**
    Sekarang kita akan membuat project untuk aplikasi React kita untuk mengakhiri pelajaran
    
    Project yang akan kita buat adalah aplikasi To Do List menggunakan React.js
*/

function ToDoList() {
  const [task, setTask] = React.useState('');
  const [toDo, setToDo] = React.useState([]);
  const [editView, setEditView] = React.useState(false);
  React.useEffect(function () {}, []);

  const create = event => {
    event.preventDefault();

    if (!task) {
      return;
    }

    if (editView) {
      const newResult = toDo.map(el => {
        if (editView === el.id) {
          el.task = task;
        }

        return el;
      });
      setToDo(newResult);
      setEditView(false);
      setTask('');
    } else {
      const data = {
        id: Date.now(),
        task: task,
        done: false
      };
      setToDo([...toDo, data]);
      setTask('');
    }
  };

  const reset = () => {
    setToDo([]);
    setTask('');
  };

  const deleteToDo = id => {
    setToDo(toDo.filter(el => el.id !== id));
  };

  const editToDo = task => {
    setTask(task.task);
    setEditView(task.id);
  };

  const undoToDo = () => {
    setTask('');
    setEditView(false);
  };

  const changeStatus = id => {
    const newResult = toDo.map(el => {
      if (el.id === id) {
        el.done = el.done ? false : true;
      }

      return el;
    });
    setToDo(newResult);
  };

  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "Simple To Do List"), /*#__PURE__*/React.createElement("form", {
    onSubmit: create
  }, /*#__PURE__*/React.createElement("label", {
    className: "mr-20",
    htmlFor: "task"
  }, "Tugas"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    name: "task",
    id: "task",
    value: task,
    onChange: event => setTask(event.target.value),
    autoFocus: true
  }), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("button", {
    type: "submit"
  }, editView ? "Simpan" : "Tambah"), editView && /*#__PURE__*/React.createElement("button", {
    onClick: undoToDo
  }, "Batalkan Perubahan")), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), toDo.length >= 1 && /*#__PURE__*/React.createElement("button", {
    onClick: reset
  }, "Reset Tugas"), /*#__PURE__*/React.createElement("h4", null, "Daftar Tugas"), /*#__PURE__*/React.createElement("ul", null, toDo.map(task => {
    return /*#__PURE__*/React.createElement("li", {
      key: task.id,
      className: "mb-10"
    }, /*#__PURE__*/React.createElement("input", {
      type: "checkbox",
      checked: task.done,
      name: task.id,
      onChange: changeStatus.bind(this, task.id)
    }), /*#__PURE__*/React.createElement("span", {
      className: "mr-20"
    }, task.task), editView !== task.id && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("button", {
      onClick: editToDo.bind(this, task)
    }, "Edit"), /*#__PURE__*/React.createElement("button", {
      onClick: deleteToDo.bind(this, task.id)
    }, "Hapus")));
  })));
}

ReactDOM.render( /*#__PURE__*/React.createElement(ToDoList, null), root);