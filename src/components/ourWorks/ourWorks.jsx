import scss from "./ourWorks.module.scss";
import { useTranslation } from "react-i18next";
const OurWorks = () => {
	const { t } = useTranslation();
	const imgDatas = [
		{ logo: "/comfortLogoWhite.png", img: "/ourProjects5.jpg" },
		{ logo: "/comfortLogoWhite.png", img: "/ourProjects6.jpg" },
		{ logo: "/comfortLogoWhite.png", img: "/ourProjects7.jpg" },
		{ logo: "/comfortLogoWhite.png", img: "/IMG_9212.png" },
		{ logo: "/comfortLogoWhite.png", img: "/IMG_9193.png" },
		{ logo: "/comfortLogoWhite.png", img: "/ourProjects4.jpg" },
		{ logo: "/comfortLogoWhite.png", img: "/ComfortSunPower1.1.png" },
		{ logo: "/comfortLogoWhite.png", img: "/neftG2.JPG" },
		{ logo: "/comfortLogoWhite.png", img: "/ourProjects8.jpg" },
	];
	return (
		<div className="container">
			<div className={scss.ourWorks}>
				<h2 className={scss.ourWorks_title}>{t("projects.title")}</h2>
				{imgDatas?.map((item, index) => (
					<div key={index}>
						<img className={scss.logo} src={item.logo} alt="client Logo" />
						<img className={scss.imgBG} src={item.img} alt="works image" />
					</div>
				))}
			</div>
		</div>
	);
};

export default OurWorks;
