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
import { useTranslation } from "react-i18next";
const Home = () => {
const { t } = useTranslation();
	return (
		<div>
			<Header
				head1={t("home.showcase.title")}
				paragraph={t("home.showcase.text")}
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
