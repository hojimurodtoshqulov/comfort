import scss from "./HomeAbout.module.scss";
import img1 from "../../../public/comfortAbout.png";
import Title from "../title";
import { useTranslation } from "react-i18next";
const HomeAbout = () => {
const { t } = useTranslation();
	return (
		<>
			<div className="container">
				<div className={scss.about}>
					<div className={scss.about_title}>
						<Title
							titleName={t("home.about.title")}
							width={100}
							number={"01"}
						/>
					</div>
					<div className={scss.about_imgtext}>
						<div className={scss.about_imgtextImgdiv}>
							<img src={img1} alt={img1} />
						</div>
						<p>
							{t("home.about.text")}
						</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default HomeAbout;
