import React from "react";
import {
  Route,
  Link,
  Routes
} from "react-router-dom";
import Home from './menu/Home';
import About from './menu/About';
import DaftarLink from "../8.url-params/DaftarLink";
import Blog from "../8.url-params/Blog";
import Vidio from "../8.url-params/Vidio";
import Parent from "../7.nested-route/components/Parent";
import Child from "../7.nested-route/components/Child";
import NestedRoute from "../7.nested-route/NestedRoute";
import NotFound from '../9.error-page/404';
import ListLink from "../ListLink";
import Login from "../10.redirect/Login";
import Dashboard from "../10.redirect/Dashboard";


/**
    React Router adalah sebuah package yang berguna untuk mengelola component yang akan ditampilkan berdasarkan route yang dikunjungi user saat itu.
    
    Sebelum kita menggunakan package React Router, ketika kita mendefinisikan Component dalam React dan me-render nya, maka otomatis component akan ter-render di bagian route / atau route default.

    Nah, dengan React Router kita dapat mengatur sesuka hati, di route mana component itu di-render. Misal untuk route /pendafataran maka akan ditampilkan component form, dsb.
    
    Disini kita membutuhkan 3 Component dari react-router-dom, yaitu Route, Link dan Routes
    
    Routes => Sebagai pembungkus/parent element dari component Route. 
    
    Route => mendefinisikan component yang akan di tampilkan (ditulis di property element) pada path tertentu yang sudah kita definisikan di property path. Component Route ini harus dibungkus oleh Routes.
    
    Link => Yaitu untuk mendefinisikan link yang akan menuju ke path yang kita tulis (penulisan path di value pada property true).
    
    NB : Perlu diingat bahwa, route yang memiliki nama path sama itu tidak dihitung alias nihil, yang dihitung cuman 1 Route yaitu route yang paling atas.
*/

function ReactRouter() {
  return (
    <>
        <h1>Halo Hai</h1>
        <ListLink />
        <hr/>

        {/*
            Perlu diingat bahwa component Routes dan Route hanya sebuah fragment saja. Artinya component tsb tidak merender child element apapun.
        */}
        <Routes>
            {/* 
                component home akan ditampilkan pada path / , sedangkan component about ditampilkan pada path /about 
            */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path='/kita' element={<DaftarLink />} />
            <Route path='/kita/blog/:slug' element={<Blog />} />
            <Route path='/kita/vidio/:slug' element={<Vidio />} />
            <Route path='/nested/route' element={<NestedRoute />}/>
            <Route path='/parent' element={<Parent />}>
                <Route path='child' element={<Child />}/>
            </Route>
            <Route path='/login' element={<Login />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='*' element={<NotFound />} />
        </Routes>
    </>
  );
}

export default ReactRouter;