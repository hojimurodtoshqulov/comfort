import Company from "../company/company";
import Logos from "../logos/logos";
import Title from "../title";
import scss from "./about.module.scss";
import { useTranslation } from "react-i18next";
const AboutUs = () => {
	const { t } = useTranslation();
	return (
		<div className="container">
			<div className="container">
				<div className={scss.about}>
					<h5>{t("about.about.company")}</h5>
					<Title titleName={t("about.about.title")} />
					<p>{t("about.about.text")}</p>
					<div className={scss.about_imgDiv}>
						<div>
							<img src="/Image 1.png" alt="image 1" />
						</div>
						<div>
							<img src="/Image 2.png" alt="image 2" />
						</div>
						<div>
							<img src="/Image 3.png" alt="image 3" />
						</div>
					</div>
				</div>
				<Company />
				<Logos />
			</div>
		</div>
	);
};

export default AboutUs;
