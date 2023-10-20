// import React from "react";
import Header from "../../components/showcase/showcase";
import HomeAbout from "../../components/HomeAbout";
import Individuals from "../../components/individuals/individuals";
import OurProducts from "../../components/ourProducts/ourProducts";
import OurProjects from "../../components/ourProjects/ourProjects";
import Clients from "../../components/clients/clients";
import Map from "../../components/map/map";
import Form from "../../components/form/form";
import Partners from "../../components/partners/partners";
import Legal from "../../components/legal/legal";
// import Adventure from "../../components/adventure";
// import OurWorks from "../../components/our-works";
// import Services from "../../components/services";
// import Quality from "../../components/quality";
// import Perfect from "../../components/perfect";

const Home = () => {
	return (
		<div>
			<Header
				head1={"Comfort Sunpower"}
				head2={""}
				paragraph="Солнечная энергия для вашего удобства"
				titleSize="130"
				textSize="45"
				textWidth="70"
			/>
			<div style={{ margin: "150px 0 0 0" }}>
				<HomeAbout />
			</div>
			<div style={{ margin: "150px 0 0 0" }}>
				<Legal />
			</div>
			<div style={{ margin: "150px 0 0 0" }}>
				<Individuals />
			</div>
			<div style={{ margin: "150px 0 0 0" }}>
				<OurProducts />
			</div>
			<div style={{ margin: "150px 0 0 0" }}>
				<OurProjects />
			</div>
			<div style={{ margin: "150px 0 0 0" }}>
				<Partners />
			</div>
			<div style={{ margin: "150px 0 0 0" }}>
				<Clients />
			</div>
			<Map />

			{/* <div style={{ margin: "150px 0px 100px" }}>
				<Services />
			</div> */}
			{/* <OurWorks />
			<Adventure />
			<Quality /> */}
		</div>
	);
};

export default Home;
