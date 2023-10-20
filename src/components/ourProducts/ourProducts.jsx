import Button from "../button/button";
import Title from "../title";
import scss from "./ourProducts.module.scss";
import img1 from "../../../public/ourProducts.png";
import { motion } from "framer-motion";
import { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const OurProducts = () => {
	const [select, setSelect] = useState(0);
	const data = [
		{
			img: "/ourProducts.png",
			text: "Yingli Solar Panda 3.0 PRO Bifacial Пиковая мощность: 550 Вт-144 ячеек Напряжение холостого хода: 50.26 В Напряжение максимальной мощности: 41.57 В Ток максимальной мощности: 13,24 А Ток короткого замыкания: 13,99 А Температурный коэффициент -0.3%/°С Размеры: 2278*1134*30мм Bec: 32 кг",
		},
		{
			img: "/works2.png",
			text: "Solar Panda 3.0 PRO Bifacial Пиковая мощность: 550 Вт-144 ячеек Напряжение холостого хода: 50.26 В Напряжение максимальной мощности: 41.57 В Ток максимальной мощности: 13,24 А Ток короткого замыкания: 13,99 А Температурный коэффициент -0.3%/°С Размеры: 2278*1134*30мм Bec: 32 кг",
		},
		{
			img: "/works3.png",
			text: " Panda 3.0 PRO Bifacial Пиковая мощность: 550 Вт-144 ячеек Напряжение холостого хода: 50.26 В Напряжение максимальной мощности: 41.57 В Ток максимальной мощности: 13,24 А Ток короткого замыкания: 13,99 А Температурный коэффициент -0.3%/°С Размеры: 2278*1134*30мм Bec: 32 кг",
		},
	];
	const tLength = data.length;
	return (
		<div className={scss.ourProducts}>
			<motion.div className={scss.ourProducts_imgDiv}>
				<motion.img
					key={select}
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 0.2 }}
					src={data[select].img}
					alt={data[select]}
				/>
			</motion.div>
			<div className={scss.ourProducts_titles}>
				<Title titleName={"Наши товары"} number="03" />
				<motion.p
					key={select}
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 0.2 }}
				>
					{data[select].text}
				</motion.p>
				{/* <Button btnName={"Подробнее"} bg={"#FFA336"} /> */}
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
	);
};

export default OurProducts;
