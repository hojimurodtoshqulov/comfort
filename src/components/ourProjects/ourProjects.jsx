import scss from "./ourProjects.module.scss";
import { Link } from "react-router-dom";
import Title from "../title";
import { useTranslation } from "react-i18next";
import Modal from "../modal";
import { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const OurProjects = () => {
	const { t } = useTranslation();
	const [openModal, setOpenModal] = useState(false);
	const [select, setSelect] = useState(0);
	const [correct, setCorrect] = useState(1);
	const data = [
		{
			id: "1",
			img: "/ourProjects1.png",
			imgBG: ["/ourProjects1.png", "/ourProjects2.png", "/ourProjects3.png"],
			logo: "/clientLogo2.png",
			title: "UNG petrol .",
			year: "2023",
		},
		{
			id: "2",
			img: "/ourProjects2.png",
			imgBG: ["/ourProjects1.png", "/ourProjects2.png", "/ourProjects3.png"],
			logo: "/clientLogo4.png",
			title: "UNG petrol .",
			year: "2023",
		},
		{
			id: "3",
			img: "/ourProjects3.png",
			imgBG: ["/ourProjects1.png", "/ourProjects2.png", "/ourProjects3.png"],
			logo: "/clientLogo5.png",
			title: "UNG petrol .",
			year: "2023",
		},
	];
	const tLength = data.length;
	const scrollToTop = () => {
		window.scrollTo(0, 0);
	};
	const openData = (el) => {
		setCorrect(el.target.id);
		console.log("el.target>>>", el.target.id);
		// return el.target.id;
	};
	return (
		<>
			<div className={scss.OurProjects}>
				<div className={scss.title}>
					<Title
						titleName={t("home.projects.title")}
						width={100}
						number={"05"}
					/>
				</div>
				<div
					className={scss.ourProjects}
					onClick={(el) => {
						openData(el);
					}}
				>
					{data?.map((item, index) => (
						<>
							<div
								key={index}
								onClick={(el) => {
									setOpenModal(true);
								}}
								className={`${scss.ourProjectsImgDiv} ${scss.ourProjectsImgDiv1}`}
								id={item.id}
							>
								<img
									className={scss.imgBG}
									src={item.img}
									alt={item.img}
									id={item.id}
								/>
								<img
									className={scss.logo}
									src={item.logo}
									alt={item.logo}
									id={item.id}
								/>
								<h5 id={item.id}>{item.year}</h5>
								<p id={item.id}>{item.title}</p>
							</div>
						</>
					))}
					{/* <div
						onClick={(el) => {
							// openData(el);
							setOpenModal(true);
						}}
						className={`${scss.ourProjectsImgDiv} ${scss.ourProjectsImgDiv2}`}
						id="2"
					>
						<img
							className={scss.imgBG}
							src="/ourProjects2.png"
							alt="ourProjects2"
						/>
						<img
							className={scss.logo}
							src="/clientLogo4.png"
							alt="clientLogo4"
						/>
						<h5>2023</h5>
						<p>RS Clinic .</p>
					</div>
					<div
						onClick={(el) => {
							// openData(el);
							setOpenModal(true);
						}}
						className={`${scss.ourProjectsImgDiv} ${scss.ourProjectsImgDiv3}`}
						id="3"
					>
						<img
							className={scss.imgBG}
							src="/ourProjects3.png"
							alt="ourProjects3"
						/>
						<img
							className={scss.logo}
							src="/clientLogo5.png"
							alt="clientLogo5"
						/>
						<h5>2023</h5>
						<p>Turon Textile .</p>
					</div> */}
				</div>
				<p className={scss.text}>{t("home.projects.text")}</p>
			</div>
			<Modal open={openModal} setOpen={setOpenModal} width={90}>
				{data?.map((item, index) =>
					correct === item.id ? (
						<div className={scss.modal_projects} key={index}>
							<div className={scss.modal_projects_imgDiv}>
								<img src={item.imgBG[select]} alt={item.imgBG[select]} />
								<div className={scss.buttonDiv}>
									<button
										onClick={() => {
											select === 0
												? setSelect(item.imgBG.length - 1)
												: setSelect((prev) => prev - 1);
										}}
									>
										<span>
											<FiChevronLeft />
										</span>
									</button>
									<button
										onClick={() => {
											select === item.imgBG.length - 1
												? setSelect(0)
												: setSelect((prev) => prev + 1);
										}}
									>
										<span>
											<FiChevronRight />
										</span>
									</button>
								</div>
							</div>
							<div className={scss.modal_projects_titles}>
								<Title titleName={item.title} number={`0${item.id}`} />
								<img src={item.logo} alt={item.logo} />
								<p>{t("home.legal.text")}</p>
								<h3>{item.year}</h3>
							</div>
						</div>
					) : null
				)}
			</Modal>
		</>
	);
};

export default OurProjects;
