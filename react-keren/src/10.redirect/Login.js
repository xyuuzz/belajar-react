import React from 'react';
import { useNavigate } from "react-router-dom";

/*
* Redirect adalah sebuah proses mengarahkan user dari halaman saat ini ke halaman yang lain. Redirect di React, konsep nya sama seperti itu namun yang dialihkan adalah component nya sehingga web tidak perlu reload, yang perlu reload adalah component nya.
* Hooks yang digunakan disini adalah useNavigate, kita hanya perlu assign fungsi nya ke variabel, lalu panggil variabel tsb seperti fungsi sambil mengirim path mana yang akan menjadi tujuan user nanti nya.

 const navigate = useNavigate()
 navigate('/namapath')
* */

export default function Login()
{
    // assign fungsi useNavigate ke variabel
    const navigate = useNavigate();

    //buat fungsi untuk mengontrol jalanya aplikasi setelah user klik tombol login
    const loginHandler = function(event) {
        //menghilangkan aksi default dari tag form
        event.preventDefault();

        const attemptLogin = true;
        if(attemptLogin)
        {
            //redirect component login ke path /dashboard
            navigate('/dashboard');
        }
    }
    return (
        <form onSubmit={loginHandler}>
            <label htmlFor="username">Masukan Username:</label>
            <input type="text" name="username" id="username"/>
            <br/><br/>
            <label htmlFor="password">Masukan Password :</label>
            <input type="password" name="password" id="password"/>
            <br/><br/>
            <button type="submit">Login</button>
        </form>
    )
}