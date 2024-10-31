import React from "react";

const Navbar = () => {
    return (
        <div>
            <nav className="navbar bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand text-white">Start Bootstrap</a>
                    <form className="d-flex" role="search">
                        <p className="m-2 text-white">Home</p>
                        <p className="m-2 text-white">About</p>
                        <p className="m-2 text-white">Services</p>
                        <p className="m-2 text-white">Contact</p>
                    </form>
                </div>
            </nav>
        </div>
    )
}
export default Navbar