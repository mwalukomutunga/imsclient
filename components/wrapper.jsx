import NavbarHeader from "./nav_header";
import NavBar from "./navbar_nav";
import SidebarBg from "./sidebar_bg";
import AppHeader from "./appheader";
import SideBar from "./sidebar";

function Wrapper() {
    return (
        <>
            <AppHeader>
                <NavbarHeader />
                <NavBar />
            </AppHeader>
            <SideBar />
            <SidebarBg />
        </>
    );
}

export default Wrapper;