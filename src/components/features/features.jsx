import scss from "./features.module.scss";
import { useTranslation } from "react-i18next";
const Features = () => {
	const { t } = useTranslation();
	return (
		<div className="container">
			<div className={scss.features}>
				<div className={scss.featuresCol1}>
					<h5>{t("about.features.ourFeatures")}</h5>
					<h3>{t("about.features.title")}</h3>
					<p>{t("about.features.text")}</p>
				</div>
				<div className={scss.featuresCol2}>
					<div className={scss.el}>
						<span>
							<img src="/quality 1.png" alt="quality 1" />
						</span>
						<div>
							<h6>{t("about.features.title2")}</h6>
							<p>{t("about.features.text2")}</p>
						</div>
					</div>
					<div className={scss.el}>
						<span>
							<img src="/manufacturing 1.png" alt="manufacturing " />
						</span>
						<div>
							<h6>{t("about.features.title3")}</h6>
							<p>{t("about.features.text3")}</p>
						</div>
					</div>
					<div className={scss.el}>
						<span>
							<img src="/user 1.png" alt="user 1" />
						</span>
						<div>
							<h6>{t("about.features.title4")}</h6>
							<p>
								{t("about.features.text4")}
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Features;
