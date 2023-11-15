import scss from "./products.module.scss";
import { useTranslation } from "react-i18next";
import Modal from "../modal";
import axios from "axios";
import { useState, useRef } from "react";
import Button from "../button/button";
const Products = () => {
	const ref = useRef(null);
	const { t } = useTranslation();
	const [select, setSelect] = useState(0);
	const [openModal, setOpenModal] = useState(false);
	const [formValues, setFormValues] = useState({
		name: "",
		phone: "",
		comment: "",
		product: "",
	});
	const imgDatas = [
		{
			id: "1",
			logo: "/comfortLogoWhite.png",
			img: "/IMG_9193.png",
			title: t("products.productTitle1"),
		},
		{
			id: "2",
			logo: "/comfortLogoWhite.png",
			img: "/ourProjects5.jpg",
			title: t("products.productTitle2"),
		},
		{
			id: "3",
			logo: "/comfortLogoWhite.png",
			img: "/ourProjects8.jpg",
			title: t("products.productTitle3"),
		},
		{
			id: "4",
			logo: "/comfortLogoWhite.png",
			img: "/invert4.png",
			title: t("products.productTitle4"),
		},
		{
			id: "5",
			logo: "/comfortLogoWhite.png",
			img: "/invert2.png",
			title: t("products.productTitle5"),
		},
		{
			id: "6",
			logo: "/comfortLogoWhite.png",
			img: "/invert5.png",
			title: t("products.productTitle6"),
		},
		{
			id: "7",
			logo: "/comfortLogoWhite.png",
			img: "/accum1,1.png",
			title: t("products.productTitle7"),
		},
		{
			id: "8",
			logo: "/comfortLogoWhite.png",
			img: "/accum1.2.png",
			title: t("products.productTitle8"),
		},
		{
			id: "9",
			logo: "/comfortLogoWhite.png",
			img: "/accum1.3.png",
			title: t("products.productTitle9"),
		},
		{
			id: "10",
			logo: "/comfortLogoWhite.png",
			img: "/akssesuar1.png",
			title: t("products.productTitle10"),
		},
		{
			id: "11",
			logo: "/comfortLogoWhite.png",
			img: "/akssesuar2.webp",
			title: t("products.productTitle11"),
		},
		{
			id: "12",
			logo: "/comfortLogoWhite.png",
			img: "/akssesuar3.jpg",
			title: t("products.productTitle12"),
		},
	];
	const handle = (e) => {
		const newData = { ...formValues };
		newData[e.target.id] = e.target.value;
		newData.product = imgDatas?.map((item) =>
			item.id == select ? item.title : null
		);
		setFormValues(newData);
		console.log(newData);
	};
	const onSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = `https://api.telegram.org/bot6624056078:AAFNCrZW2Pfv-VhrKYNfXPv61Jf3Qsmq0ZA/sendMessage?chat_id=-1001813491900&text=${
				"\n              Product:" +
				formValues.product +
				" " +
				"\n              Ismi:" +
				formValues.name +
				" " +
				"\n              Tel:" +
				formValues.phone +
				"\n              Comment:" +
				formValues.comment
			}`;
			await axios
				.post(url, {
					name: formValues.name,
					phone: formValues.phone,
					// project: formProject,
				})
				.then((res) => {
					console.log(res.data);
				});
		} catch (error) {
			console.error(error);
		}
		console.log("submit", formValues);
		setFormValues({ name: "", phone: "", comment: "", product: "" });
		setOpenModal(false);
	};

	const openData = (el) => {
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
								<form action="" onSubmit={onSubmit}>
									<input
										id="product"
										onChange={(e) => handle(e)}
										value={item.title}
										type="text"
										name="product"
										placeholder={t("home.form.input1")}
										required
										style={{ display: "none" }}
									/>
									<input
										id="name"
										onChange={(e) => handle(e)}
										value={formValues.name}
										type="text"
										placeholder={t("home.form.input1")}
										required
									/>
									<input
										id="phone"
										onChange={(e) => handle(e)}
										value={formValues.phone}
										type="text"
										placeholder={t("home.form.input2")}
										required
									/>
									<input
										id="comment"
										onChange={(e) => handle(e)}
										value={formValues.comment}
										type="text"
										placeholder={t("home.form.input3")}
										required
									/>
									<button type="submit">
										<Button
											btnName={t("btn.btn2")}
											bg={"#1395D8"}
											width={100}
											height={60}
										/>
									</button>
								</form>
							</div>
						</div>
					) : null
				)}
			</Modal>
		</>
	);
};

export default Products;
