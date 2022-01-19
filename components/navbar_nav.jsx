function NavBar() {
    return (
        <div className="navbar-nav">
            <div className="navbar-item navbar-form">
                <form action="page_blank.html" method="POST" name="search">
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Enter keyword" />
                        <button type="submit" className="btn btn-search"><i className="fa fa-search"></i></button>
                    </div>
                </form>
            </div>           
            <div className="navbar-item navbar-user dropdown">
                <a href="page_blank.html#" className="navbar-link dropdown-toggle d-flex align-items-center"
                    data-bs-toggle="dropdown">
                    <span>
                        <span className="d-none d-md-inline">Adam Schwartz</span>
                        <b className="caret"></b>
                    </span>
                </a>
                <div className="dropdown-menu dropdown-menu-end me-1">
                    <a href=":;" className="dropdown-item">Edit Profile</a>
                   
                    <div className="dropdown-divider"></div>
                    <a href=":;" className="dropdown-item">Log Out</a>
                </div>
            </div>
        </div>
    );
}

export default NavBar;