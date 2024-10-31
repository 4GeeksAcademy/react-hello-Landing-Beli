import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Navbar from "./navbar.jsx";
import Jumbotron from "./jumbotron.jsx";
import Cards from "./cards.jsx";
import Footer from "./footer.jsx"

//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<Navbar/>
			<Jumbotron/>
			<div className="container">
  <div className="row">
    <div className="col-sm col-3">
      <Cards/>
    </div>
    <div className="col-sm col-3">
      <Cards/>
    </div>
    <div className="col-sm col-3">
      <Cards/>
    </div>
	<div className="col-sm col-3">
      <Cards/>
    </div>
  </div>
</div>
<Footer/>
		</div>
	);
};

export default Home;
