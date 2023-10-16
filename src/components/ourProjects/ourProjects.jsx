import scss from "./ourProjects.module.scss";
import { Link } from "react-router-dom";
const OurProjects = () => {
	const scrollToTop = () => {
		window.scrollTo(0, 0);
	};
	return (
		<div className={scss.ourProjects}>
			<span className={scss.ourProjects_number}>04</span>
			<div className={scss.ourProjects_titles}>
				<h2>НАШИ ПРОЕКТЫ</h2>
				<p>
					Мы гордимся тем, что наши проекты отличаются высоким качеством и
					соответствуют ожиданиям наших клиентов. Наша цель - создавать продукты
					и услуги, которые удовлетворяют потребности пользователей и приносят
					успех нашим клиентам
				</p>
			</div>
			<Link
				onClick={scrollToTop}
				to={"/projects"}
				className={`${scss.ourProjectsImgDiv} ${scss.ourProjectsImgDiv1}`}
			>
				<h5>2023</h5>
				<p>UNG petrol .</p>
			</Link>
			<Link
				onClick={scrollToTop}
				to={"/projects"}
				className={`${scss.ourProjectsImgDiv} ${scss.ourProjectsImgDiv2}`}
			>
				<h5>2023</h5>
				<p>RS Clinic .</p>
			</Link>
			<Link
				onClick={scrollToTop}
				to={"/projects"}
				className={`${scss.ourProjectsImgDiv} ${scss.ourProjectsImgDiv3}`}
			>
				<h5>2023</h5>
				<p>Turon Textile .</p>
			</Link>
		</div>
	);
};

export default OurProjects;
