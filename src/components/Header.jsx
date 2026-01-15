import { useState } from "react";

//Creo un array di oggetti
const comics = [

    {
        id: 1,
        nome: "Characters",
        link: "#",
        active: false        //per ogni oggetto, oltre alle altre chiavi, creo anche una chiave che sia booleana, 
        //per capire qual è l'oggetto attivo
    },

    {
        id: 2,
        nome: "Comics",
        link: "#",
        active: true
    },

    {
        id: 3,
        nome: "Movies",
        link: "#",
        active: false
    },

    {
        id: 4,
        nome: "tv",
        link: "#",
        active: false

    },

    {
        id: 5,
        nome: "Games",
        link: "#",
        active: false
    },

    {
        id: 6,
        nome: "collectibles",
        link: "#",
        active: false
    },

    {
        id: 7,
        nome: "videos",
        link: "#",
        active: false
    },

    {
        id: 8,
        nome: "fans",
        link: "#",
        active: false
    },

    {
        id: 9,
        nome: "news",
        link: "#",
        active: false
    },

    {
        id: 10,
        nome: "shop",
        link: "#",
        active: false
    }

]

//Creo la funzione
function Header() {

    return (

        <div id="container">
            <header>
                <img id="logo-piccolo" src="dc-logo.png" alt="Logo Navbar" />
                <nav class="navbar-nav">

                    {
                        comics.map((comic, i) => { //con il metodo map prendo l'elemento e l'indice

                            let varClass = (comic.active === true) ? "link-top" : ""; //creo una variabile d'appoggio per
                            //l'operatore ternario

                            /* let varClass = "";         
                            if (product.active === true) {     //alternativa all'operatore ternario
                                varClass = "link-top";
                                }  */


                            return <li key={i} className={varClass}>{comic.nome}</li>
                        })

                    }

                </nav>
            </header>
        </div>

    )


}
//Esporto la funzione
export default Header; 
