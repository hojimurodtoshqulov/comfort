import scss from "./HomeAbout.module.scss";
import img1 from "../../../public/comfortAbout.png";
import Title from "../title";
const HomeAbout = () => {
	return (
		<>
			<div className="container">
				<div className={scss.about}>
					<div className={scss.about_title}>
						<Title
							titleName={"Зачем нужны солнечные батареи?"}
							width={100}
							number={"01"}
						/>
					</div>
					<div className={scss.about_imgtext}>
						<img src={img1} alt={img1} />
						<p>
							Солнечные батареи, также известные как солнечные панели. Они
							играют важную роль в области возобновляемой энергетики и
							становятся все более популярными в различных секторах, включая
							жилые дома, коммерческие здания и промышленные комплексы.
						</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default HomeAbout;
