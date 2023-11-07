import Title from "../title";
import scss from "./company.module.scss";
import { useTranslation } from "react-i18next";
const Company = () => {
	const { t } = useTranslation();
	return (
		<div className={scss.company}>
			<div className={scss.companyCol1}>
				<Title titleName={t("about.company.title")} width={100} />
				<p>{t("about.company.text")}</p>
			</div>
			<div className={scss.companyCol2}>
				<div>
					<h2>20+</h2>
					<p>
						<span></span>
					</p>
					<h4>{t("about.company.advantages.title1")}</h4>
				</div>
				<div>
					<h2>40+</h2>
					<p>
						<span></span>
					</p>
					<h4>{t("about.company.advantages.title2")}</h4>
				</div>
				<div>
					<h2>35+</h2>
					<p>
						<span></span>
					</p>
					<h4>{t("about.company.advantages.title3")}</h4>
				</div>
				<div>
					<h2>2023 </h2>
					<p>
						<span></span>
					</p>
					<h4>{t("about.company.advantages.title4")}</h4>
				</div>
			</div>
		</div>
	);
};

export default Company;
