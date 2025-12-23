import { useState } from "react";

//Creo un array di oggetti
const products = [ 

    {
        id: 1,              
        testo: "Characters",
        link: "#",
        active: false        //per ogni oggetto, oltre alle altre chiavi, creo anche una chiave che sia booleana, 
                            //per capire qual è l'oggetto attivo
    },

    {
        id: 2,
        testo: "Comics",
        link: "#",
        active: true
    },

    {
        id: 3,
        testo: "Movies",
        link: "#",
        active: false
    },

    {
        id: 4,
        testo: "tv",
        link: "#",
        active: false

    },

    {
        id: 5,
        testo: "Games",
        link: "#",
        active: false
    },

    {
        id: 6,
        testo: "collectibles",
        link: "#",
        active: false
    },

    {
        id: 7,
        testo: "videos",
        link: "#",
        active: false
    },

    {
        id: 8,
        testo: "fans",
        link: "#",
        active: false
    },

    {
        id: 9,
        testo: "news",
        link: "#",
        active: false
    },

    {
        id: 10,
        testo: "shop",
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
                        products.map((product, i) => { //con il metodo map prendo l'elemento e l'indice

                            let classeDaUsare = (product.active === true) ? "link-top" : ""; //creo una variabile d'appoggio per
                                                                                            //l'operatore ternario

                            /* let classeDaUsare = "";         
                            if (product.active === true) {     //alternativa all'operatore ternario
                                classeDaUsare = "link-top";
                                }  */
                          

                            return <li key={i} className={classeDaUsare}>{product.testo}</li>
                        })

                    }

                </nav>
            </header>
        </div>

    )


}
//Esporto la funzione
export default Header; 
