import Title from "../title";
import scss from "./partners.module.scss";

const Partners = () => {
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
	return (
		<div className="container">
			<div className={scss.partners}>
				<div className={scss.partners_col1}>
					<Title
						titleName={"Наши клиенты дорожат нашей работой"}
						width={100}
						number={"06"}
					/>
					<p>
						It is a long established fact that a reader will be distracted by
						the readable content of a page when looking at its layout. Lorem
						ipsum dolor, sit amet consectetur adipisicing elit. Adipisci,
						impedit.
					</p>
				</div>
				<div className={scss.partners_col2}>
					<img
						src="/Shapes.png"
						alt="Shapes"
						className={scss.partners_col2_leftImg}
					/>
					<p>
						Мы сотрудничаем с командой Comfort Sunpower уже несколько лет, и мы
						очень довольны результатами их работы. Они проявляют глубокое
						понимание нашего бизнеса и всегда стремятся предложить нам
						инновационные решения.
					</p>
					<div>
						<img src="./user1.png" alt="user1" />
						<h5>
							Johnny Andro
							<br /> <span>Director, Company</span>
						</h5>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Partners;
