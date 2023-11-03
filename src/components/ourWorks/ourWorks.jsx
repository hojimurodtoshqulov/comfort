import scss from "./ourWorks.module.scss";
import { useTranslation } from "react-i18next";
const OurWorks = () => {
	const { t } = useTranslation();
	const imgDatas = [
		{ logo: "/clientLogo4.png", img: "/works1.png" },
		{ logo: "/clientLogo4.png", img: "/works2.png" },
		{ logo: "/clientLogo4.png", img: "/works3.png" },
		{ logo: "/clientLogo4.png", img: "/works4.png" },
		{ logo: "/clientLogo4.png", img: "/IMG_9193.png" },
		{ logo: "/clientLogo4.png", img: "/Image 1.png" },
		{ logo: "/clientLogo4.png", img: "/IMG_9212.png" },
		{ logo: "/clientLogo4.png", img: "/Image 3.png" },
		{ logo: "/clientLogo4.png", img: "/ourProjects2.png" },
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
