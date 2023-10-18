import scss from "./ourProjects.module.scss";
import { Link } from "react-router-dom";
import Title from "../title";
const OurProjects = () => {
	const scrollToTop = () => {
		window.scrollTo(0, 0);
	};
	return (
		<>
			<div className={scss.title}>
				<Title titleName={"НАШИ ПРОЕКТЫ"} width={100} />
			</div>
			<div className={scss.ourProjects}>
				<span className={scss.ourProjects_number}>04</span>
				{/* <div className={scss.ourProjects_titles}>
					<h2>НАШИ ПРОЕКТЫ</h2>
					<p>
						Мы гордимся тем, что наши проекты отличаются высоким качеством и
						соответствуют ожиданиям наших клиентов. Наша цель - создавать
						продукты и услуги, которые удовлетворяют потребности пользователей и
						приносят успех нашим клиентам
					</p>
				</div> */}
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
			<p className={scss.text}>
				Мы гордимся тем, что наши проекты отличаются высоким качеством и
				соответствуют ожиданиям наших клиентов. Наша цель - создавать продукты и
				услуги, которые удовлетворяют потребности пользователей и приносят успех
				нашим клиентам
			</p>
		</>
	);
};

export default OurProjects;
