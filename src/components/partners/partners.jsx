import Title from "../title";
import scss from "./partners.module.scss";
import { useTranslation } from "react-i18next";
const Partners = () => {
	const { t } = useTranslation();
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
						src="/Shapes.png"
						alt="Shapes"
						className={scss.partners_col2_leftImg}
					/>
					<p>{t("home.partners.comment1")}</p>
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
