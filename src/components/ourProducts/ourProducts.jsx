import Button from "../button/button";
import Title from "../title";
import scss from "./ourProducts.module.scss";
import img1 from "../../../public/ourProducts1.png";
import { motion } from "framer-motion";
import { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Modal from "../modal";
const OurProducts = () => {
	const scrollToTop = () => {
		window.scrollTo(0, 0);
	};
	const { t } = useTranslation();
	const [select, setSelect] = useState(0);
	const [openModal, setOpenModal] = useState(false);
	const data = [
		{
			img: "/ourProducts1.png",
			text: t("home.products.text"),
		},
		{
			img: "/ourProducts2.png",
			text: t("home.products.text"),
		},
		{
			img: "/ourProducts3.png",
			text: t("home.products.text"),
		},
	];
	const tLength = data.length;
	return (
		<>
			<div className={scss.ourProducts}>
				<motion.div className={scss.ourProducts_imgDiv}>
					<motion.img
						key={select}
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.2 }}
						src={data[select].img}
						alt={data[select].img}
						onClick={() => {
							setOpenModal(true);
						}}
					/>
					<div className={scss.buttonDiv}>
						<button
							onClick={() => {
								select === 0
									? setSelect(tLength - 1)
									: setSelect((prev) => prev - 1);
							}}
						>
							<span>
								<FiChevronLeft />
							</span>
						</button>
						<button
							onClick={() => {
								select === tLength - 1
									? setSelect(0)
									: setSelect((prev) => prev + 1);
							}}
						>
							<span>
								<FiChevronRight />
							</span>
						</button>
					</div>
				</motion.div>
				<div className={scss.ourProducts_titles}>
					<Title titleName={t("home.products.title")} number="04" />
					<motion.p
					// key={select}
					// initial={{ opacity: 0 }}
					// animate={{ opacity: 1 }}
					// exit={{ opacity: 0 }}
					// transition={{ duration: 0.2 }}
					>
						{t("home.products.text")}
					</motion.p>
					<div className={scss.category}>
						<Link onClick={scrollToTop} to={"/products"}>
							<Button btnName={t("home.products.btn1")} bg={"#FFA336"} />
						</Link>
						<Link onClick={scrollToTop} to={"/products"}>
							<Button btnName={t("home.products.btn2")} bg={"#FFA336"} />
						</Link>
						<Link onClick={scrollToTop} to={"/products"}>
							<Button btnName={t("home.products.btn3")} bg={"#FFA336"} />
						</Link>
						<Link onClick={scrollToTop} to={"/products"}>
							<Button btnName={t("home.products.btn4")} bg={"#FFA336"} />
						</Link>
					</div>
				</div>
			</div>
			<Modal open={openModal} setOpen={setOpenModal} width={90}>
				<div className={scss.ourProducts_imgModal}>
					<motion.img
						key={select}
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.2 }}
						src={data[select].img}
						alt={data[select].img}
					/>
					<div className={scss.buttonDiv}>
						<button
							onClick={() => {
								select === 0
									? setSelect(tLength - 1)
									: setSelect((prev) => prev - 1);
							}}
						>
							<span>
								<FiChevronLeft />
							</span>
						</button>
						<button
							onClick={() => {
								select === tLength - 1
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
			</Modal>
		</>
	);
};

export default OurProducts;
