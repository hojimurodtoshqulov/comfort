import Title from "../title";
import scss from "./partners.module.scss";

const Partners = () => {
	return (
		<div className="container">
			{" "}
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
