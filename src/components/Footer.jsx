
//Creo un array di oggetti


function Footer() {

    const comics = [

        { id: 1, nome: "Characters", link: "#" },
        { id: 2, nome: "Comics", link: "#" },
        { id: 3, nome: "Movies", link: "#" },
        { id: 4, nome: "TV", link: "#" },
        { id: 5, nome: "Games", link: "#" },
        { id: 6, nome: "Videos", link: "#" },
        { id: 7, nome: "News", link: "#" },
    ]

    const shop = [

        { id: 1, nome: "Shop DC", link: '#' },
        { id: 1, nome: "Shop DC Collectibles", link: '#' }
    ]

    const dc = [

        { id: 1, nome: "Terms of Use", link: "#" },
        { id: 2, nome: "Privacy polisy (New)", link: "#" },
        { id: 3, nome: "Ad Choises", link: "#" },
        { id: 4, nome: "Advertising", link: "#" },
        { id: 5, nome: "Jobs", link: "#" },
        { id: 6, nome: "Subscriptions", link: "#" },
        { id: 7, nome: "Talent Workshops", link: "#" },
        { id: 8, nome: "CSPC Certificates", link: "#" },
        { id: 9, nome: "Ratings", link: "#" },
        { id: 10, nome: "Shop Help", link: "#" },
        { id: 11, nome: "Contact Us", link: "#" },

    ]


    const sites = [

        { id: 1, nome: "DC", link: '#' },
        { id: 1, nome: "MAD Magazines", link: '#' },
        { id: 1, nome: "DC Kids", link: '#' },
        { id: 1, nome: "DC Universe", link: '#' },
        { id: 1, nome: "DC Power Visa", link: '#' }
    ]

    return (

        <div id ="nav-container">
            

            <div id="nav-mid-bottom">


                <div class="navbar-mid-bottom">

                 <a class="nav-link-bottom" href="#">Digital Comics</a>
                    <a class="nav-link-bottom" href="#">DC Merchandise</a>
                    <a class="nav-link-bottom" href="#">Subscription</a>
                    <a class="nav-link-bottom" href="#">Comic Shop Locator</a>
                    <a class="nav-link-bottom" href="#">DC Power Visa</a>

                   

                </div>
               
                    <h3 id="dc-comics-h3">DC COMICS</h3>




                    {

                        comics.map((comic, i) => {

                            return <div>

                                <a href="" key={i} className="footer-comics">{comic.nome}</a>
                            </div>
                        })
                    }
               


                <h3 id="shop-h3">SHOP</h3>

            



                {

                    shop.map((shopVoci, i) => {

                        return <div>

                            <a href="" key={i} className="footer-links-shop">{shopVoci.nome}</a>
                        </div>
                    })
                }


                <h3 id="dc-h3">DC</h3>

                {
                    dc.map((dcVoci, i) => {

                        return <div>
                            <a href="" key={i} className="footer-links-dc">{dcVoci.nome}</a>
                        </div>


                    })
                }


                <h3 id="sites-h3">SITES</h3>

                {
                    sites.map((dcSites, i) => {

                        return <div>
                            <a href="" key={i} className="footer-links-sites">{dcSites.nome}</a>
                        </div>


                    })
                }


            </div>

            <img id="logo-big-dc" src="dc-logo-bg.png" alt="" />

            <div id="nav-button">
                <button type="button" id ="signup-button">SIGN-UP NOW!</button>


                <div class="navbar-bottom">
                    <div id ="social-buttons">
                    <div id="follow">FOLLOW US</div>

                    <img class="social" src="/public/footer-facebook.png" alt="" />
                    <img class="social" src="/public/footer-twitter.png" alt="" />
                    <img class="social" src="/public/footer-youtube.png" alt="" />
                    <img class="social" src="/public/footer-pinterest.png" alt="" />
                    <img class="social" src="/public/footer-periscope.png" alt="" />
                </div>
</div>

            </div>



        </div>

    )




}

export default Footer;