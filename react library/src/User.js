import React, {Component} from "react"
import axios from "axios"

class User extends Component
{
    constructor()
    {
        super()
        
        this.state = {
            user: [] // kosongkan state user untuk pertama kali
        };
    }
    
    /* 
        ketika kita ingin menggunakan module axios, 
        maka fungsi pembungkusnya haruslah async, karena module axios itu bersifat async
    */
    getUser = async () => {
        // tunggu req axios, bertipe get dan akses link yang ada di parameter 1
        let response = await axios.get("https://jsonplaceholder.typicode.com/users/1");
        
        // jalankan method setState untuk menghubungkan antara response yang telah didapatkan dan state yang dimiliki oleh component 
        this.setState({
            user: response.data
        });
    }
    
    /*
        fungsi ini di deklarasikan dengan tujuan agar 
        mencatat fungsi mana saja yang akan dijalankan di component ini
    */ 
    componentDidMount()
    {
        this.getUser()
    }
    
    render()
    {
        /**
            karena cara mengakses state user terlalu lama, maka saya akan membuat variabel nya
            nama variabel yang ada didalam kurung kurawal harus sama persis dengan props yang ada di this.state pada constructor.
            
            cara deklarasi variabel dibawah disebut destructuring object.
         */
        const {user} = this.state; 
        
        return (
            <div>
                {/* your code */}
                <h1>Nama saya adalah {user.name}</h1>
                <h2>Email saya adalah {user.email}</h2>
                <br />
                <p>saat ini saya sedang belajar react :)</p>
            </div>
        )
    }
}

export default User;