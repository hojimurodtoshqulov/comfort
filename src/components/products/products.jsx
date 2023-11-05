import scss from "./products.module.scss";
import { useTranslation } from "react-i18next";
import Modal from "../modal";
import { useState, useRef } from "react";
const Products = () => {
	const ref = useRef(null);
	const { t } = useTranslation();
	const [select, setSelect] = useState(0);
	const [openModal, setOpenModal] = useState(false);
	const imgDatas = [
		{
			id: "1",
			logo: "/clientLogo4.png",
			img: "/IMG_9193.png",
			title: t("products.productTitle1"),
		},
		{
			id: "2",
			logo: "/clientLogo4.png",
			img: "/IMG_9212.png",
			title: t("products.productTitle2"),
		},
		{
			id: "3",
			logo: "/clientLogo4.png",
			img: "/IMG_9202.png",
			title: t("products.productTitle3"),
		},
		{
			id: "4",
			logo: "/clientLogo4.png",
			img: "/sola1.png",
			title: t("products.productTitle4"),
		},
		{
			id: "5",
			logo: "/clientLogo4.png",
			img: "/sola4.webp",
			title: t("products.productTitle5"),
		},
		{
			id: "6",
			logo: "/clientLogo4.png",
			img: "/sola5.webp",
			title: t("products.productTitle6"),
		},
		{
			id: "7",
			logo: "/clientLogo4.png",
			img: "/accum1.jpg",
			title: t("products.productTitle7"),
		},
		{
			id: "8",
			logo: "/clientLogo4.png",
			img: "/accum2.jpg",
			title: t("products.productTitle8"),
		},
		{
			id: "9",
			logo: "/clientLogo4.png",
			img: "/accum3.jpg",
			title: t("products.productTitle9"),
		},
		{
			id: "10",
			logo: "/clientLogo4.png",
			img: "/akssesuar1.png",
			title: t("products.productTitle10"),
		},
		{
			id: "11",
			logo: "/clientLogo4.png",
			img: "/akssesuar2.webp",
			title: t("products.productTitle11"),
		},
		{
			id: "12",
			logo: "/clientLogo4.png",
			img: "/akssesuar3.jpg",
			title: t("products.productTitle12"),
		},
	];
	const openData = (el) => {
		console.log("ref>>>", el.target.id);
		setSelect(el.target.id);
		setOpenModal(true);
	};
	return (
		<>
			<div className={scss.products}>
				<h2 className={scss.products_title}>{t("products.title")}</h2>
				{imgDatas?.map((item, index) => (
					<div
						key={index}
						className={scss.card}
						onClick={(el) => {
							openData(el);
						}}
					>
						<div className={scss.divId} id={item.id}></div>
						<div>
							<img className={scss.logo} src={item.logo} alt="client Logo" />
							<img className={scss.imgBG} src={item.img} alt="works image" />
							<h3>{item.title}</h3>
						</div>
					</div>
				))}
			</div>
			<Modal open={openModal} setOpen={setOpenModal} width={90}>
				{imgDatas?.map((item, index) =>
					select === item.id ? (
						<div className={scss.products_imgModal} key={index}>
							<img className={scss.modalImg} src={item.img} alt="client Logo" />
							<div>
								<img src={item.logo} alt="client Logo" />
								<h2>{item.title}</h2>
							</div>
						</div>
					) : null
				)}
			</Modal>
		</>
	);
};

export default Products;
