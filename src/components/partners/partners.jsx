import Title from "../title";
import scss from "./partners.module.scss";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { motion } from "framer-motion";

const Partners = () => {
	const { t } = useTranslation();
	const [select, setSelect] = useState(0);
	const data = [
		{
			img: "./user1.png",
			text: t("home.partners.comment1"),
			name: " Andro",
			job: "Director, Company",
		},
		{
			img: "./user1.png",
			text: t("home.partners.comment1"),
			name: "Johnny Andro",
			job: "Director, ",
		},
		{
			img: "./user1.png",
			text: t("home.partners.comment1"),
			name: "Johnny ",
			job: ", Company",
		},
	];
	const tLength = data.length;

	return (
		<div className="container">
			<div className={scss.partners}>
				<div className={scss.partners_col1}>
					<Title
						titleName={t("home.partners.title")}
						width={100}
						number={"06"}
					/>
					<p>{t("home.partners.text")}</p>
				</div>
				<div className={scss.partners_col2}>
					<img
						className={scss.partners_col2_leftImg}
						src="/Shapes.png"
						alt="Shapes"
					/>
					<motion.p
						key={select}
						initial={{ opacity: 0, x: -100 }}
						animate={{ opacity: 1, x: 0 }}
						exit={{ opacity: 0, x: -100 }}
						transition={{ duration: 0.2 }}
					>
						{data[select].text}
					</motion.p>
					<div >
						<motion.img
							src={data[select].img}
							alt="user"

						/>
						<motion.h5
							// key={select}
							initial={{ opacity: 0, x: -100 }}
							animate={{ opacity: 1, x: 0 }}
							exit={{ opacity: 0, x: -100 }}
							transition={{ duration: 0.2 }}
						>
							{data[select].name}
							<br />
							<motion.span
								// key={select}
								initial={{ opacity: 0, x: -100 }}
								animate={{ opacity: 1, x: 0 }}
								exit={{ opacity: 0, x: -100 }}
								transition={{ duration: 0.2 }}
							>
								{data[select].job}
							</motion.span>
						</motion.h5>
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
				</div>
			</div>
		</div>
	);
};

export default Partners;
