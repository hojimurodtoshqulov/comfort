import Title from "../title";
import scss from "./clients.module.scss";
import { useTranslation } from "react-i18next";
const Clients = () => {
	const { t } = useTranslation();
	return (
		<div className={scss.Clients}>
			<div className="container">
				<div className={scss.clients}>
					<span className={scss.clientsNumber}>07</span>
					<Title titleName={t("home.clients.title")} color={"white"} />
					<div className={scss.clientsImages}>
						<div className={scss.clientsImagesDiv}>
							<img src="/clientLogo1.png" alt="clientLogo1" />
						</div>
						<span></span>
						<div className={scss.clientsImagesDiv}>
							<img src="/clientLogo2.png" alt="/clientLogo2" />
						</div>
						<span></span>
						<div className={scss.clientsImagesDiv}>
							<img src="/clientLogo3.png" alt="/clientLogo3" />
						</div>
						<div className={scss.clientsImagesDiv}>
							<img src="/clientLogo4.png" alt="/clientLogo4" />
						</div>
						<span></span>
						<div className={scss.clientsImagesDiv}>
							<img src="/clientLogo5.png" alt="/clientLogo5" />
						</div>
						<span></span>
						<div className={scss.clientsImagesDiv}>
							<img src="/clientLogo6.png" alt="/clientLogo6" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Clients;
