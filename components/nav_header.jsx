function NavbarHeader() {
    return (<div className="navbar-header">
        <a href="index.html" className="navbar-brand"><span className="navbar-logo"></span> <b>Zep </b> RE (IMS)</a>
        <button type="button" className="navbar-mobile-toggler" data-toggle="app-sidebar-mobile">
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
        </button>
    </div>);
}

export default NavbarHeader;