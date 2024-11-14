const Navigation = () => {
    return(
        <div>
        <header>
        <div className="container">
        <nav>
            <div className="logo">
                <img src="/images/brand_logo.png" alt="nike"/>
            </div>
            <ul>
                <li href="#">Menu</li>
                <li href="#">Location</li>
                <li href="#">About</li>
                <li href="#">Contact</li>
            </ul>
            <button>login</button>
        </nav>
        </div>
        </header>
    <main className="hero">
        <div className="hero-content">
            <h1></h1>
        </div>
        <div className="hero-image "></div>
    </main>
    </div>
    );
}

export default Navigation;