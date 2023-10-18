import Button from "../button/button";
import Title from "../title";
import scss from "./ourProducts.module.scss";
import img1 from "../../../public/ourProducts.png";

const OurProducts = () => {
	return (
		<div className={scss.ourProducts}>
			<div className={scss.ourProducts_imgDiv}>
				<img src={img1} alt={img1} />
			</div>
			<div className={scss.ourProducts_titles}>
				<Title titleName={"Наши товары"} number="03" />
				<p>
					Yingli Solar Panda 3.0 PRO Bifacial Пиковая мощность: 550 Вт-144 ячеек
					Напряжение холостого хода: 50.26 В Напряжение максимальной мощности:
					41.57 В Ток максимальной мощности: 13,24 А Ток короткого замыкания:
					13,99 А Температурный коэффициент -0.3%/°С Размеры: 2278*1134*30мм
					Bec: 32 кг
				</p>
				<Button btnName={"Подробнее"} bg={"#FFA336"} />
			</div>
		</div>
	);
};

export default OurProducts;
