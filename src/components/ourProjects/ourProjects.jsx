import scss from "./ourProjects.module.scss";
import { Link } from "react-router-dom";
import Title from "../title";
import { useTranslation } from "react-i18next";
const OurProjects = () => {
	const { t } = useTranslation();
	const scrollToTop = () => {
		window.scrollTo(0, 0);
	};
	return (
		<>
			<div className={scss.title}>
				<Title titleName={t("home.projects.title")} width={100} number={"05"} />
			</div>
			<div className={scss.ourProjects}>
				<Link
					onClick={scrollToTop}
					to={"/projects"}
					className={`${scss.ourProjectsImgDiv} ${scss.ourProjectsImgDiv1}`}
				>
					<img
						className={scss.imgBG}
						src="/ourProjects1.png"
						alt="ourProjects1"
					/>
					<img className={scss.logo} src="/clientLogo2.png" alt="clientLogo2" />
					<h5>2023</h5>
					<p>UNG petrol .</p>
				</Link>
				<Link
					onClick={scrollToTop}
					to={"/projects"}
					className={`${scss.ourProjectsImgDiv} ${scss.ourProjectsImgDiv2}`}
				>
					<img
						className={scss.imgBG}
						src="/ourProjects2.png"
						alt="ourProjects2"
					/>
					<img className={scss.logo} src="/clientLogo4.png" alt="clientLogo4" />
					<h5>2023</h5>
					<p>RS Clinic .</p>
				</Link>
				<Link
					onClick={scrollToTop}
					to={"/projects"}
					className={`${scss.ourProjectsImgDiv} ${scss.ourProjectsImgDiv3}`}
				>
					<img
						className={scss.imgBG}
						src="/ourProjects3.png"
						alt="ourProjects3"
					/>
					<img className={scss.logo} src="/clientLogo5.png" alt="clientLogo5" />
					<h5>2023</h5>
					<p>Turon Textile .</p>
				</Link>
			</div>
			<p className={scss.text}>{t("home.projects.text")}</p>
		</>
	);
};

export default OurProjects;
