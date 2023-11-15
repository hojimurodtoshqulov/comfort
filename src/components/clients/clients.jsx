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
							<img src="/paxtazor.png" alt="clientLogo1" />
						</div>
						<span></span>
						<div className={scss.clientsImagesDiv}>
							<img src="/neftegaz.png" alt="/clientLogo2" />
						</div>
						<span></span>
						<div className={scss.clientsImagesDiv}>
							<img src="/beeline.png" alt="/clientLogo3" />
						</div>
						<div className={scss.clientsImagesDiv}>
							<img src="/cho'lquvar.png" alt="/clientLogo4" />
						</div>
						<span></span>
						<div className={scss.clientsImagesDiv}>
							<img src="/fido.png" alt="/clientLogo5" />
						</div>
						<span></span>
						<div className={scss.clientsImagesDiv}>
							<img src="/smartLogo.png" alt="/clientLogo6" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Clients;
