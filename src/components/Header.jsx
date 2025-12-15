import style from "../index.css";


function Header() {

    return (
        <header className={style.header}>
            <div id="container">
                <div>
                    <img id="logo-piccolo" src="dc-logo.png" alt="Logo Navbar" />
                    <nav class="navbar-nav">



                        <a class="nav-link-top" href="#">Characters</a>
                        <a class="nav-link-top" href="#">Comics</a>
                        <a class="nav-link-top" href="#">TV</a>
                        <a class="nav-link-top" href="#">Games</a>
                        <a class="nav-link-top" href="#">Collectibles</a>
                        <a class="nav-link-top" href="#">Videos</a>
                        <a class="nav-link-top" href="#">Fans</a>
                        <a class="nav-link-top" href="#">News</a>
                        <a class="nav-link-top" href="#">Shop</a>



                    </nav>
                </div>
            </div>
        </header>
    )


}

export default Header;
