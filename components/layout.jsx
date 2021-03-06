import Head from "next/head";
const Layout = ({ children }) => {
    return (
        <>
            <Head>
                <title>IMS | Insurance Management System</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
                {/* <script type="text/javascript" src="assets/js/dx.all.js"></script> */}
                <link rel="stylesheet" href="assets/css/dx.light.css"/>
                <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700" rel="stylesheet" />
                <link href="assets/css/vendor.min.css" rel="stylesheet" />
                <link href="assets/css/default/app.min.css" rel="stylesheet" />


                

                <script src="assets/js/vendor.min.js" type="text/javascript"></script>
                <script src="assets/js/app.min.js" type="text/javascript"></script>
                <script src="assets/js/theme/default.min.js" type="text/javascript"></script>
               
            </Head>


            <div id="app" className="app app-header-fixed app-sidebar-fixed">
                {children}
                <a href=";" className="btn btn-icon btn-circle btn-success btn-scroll-to-top" data-toggle="scroll-to-top"><i
                    className="fa fa-angle-up"></i></a>
            </div>
        </>
    );
}

export default Layout;