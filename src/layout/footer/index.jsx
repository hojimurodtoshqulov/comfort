import scss from "./footer.module.scss";
import { Link } from "react-router-dom";
import {
	FaFacebook,
	FaInstagram,
	FaLinkedin,
	FaTelegramPlane,
} from "react-icons/fa";
import { useTranslation } from "react-i18next";
const Footer = () => {
	const { t } = useTranslation();
	const scrollToTop = () => {
		window.scrollTo(0, 0);
	};
	return (
		<div className={scss.footer}>
			<div className="container">
				<div className={scss.footer__wrapper}>
					<div className={scss.footer__left}>
						<div>
							<div className={scss.logo}>
								<img src={"/logo_head.png"} alt="logo" />
							</div>
							<div className={scss.link}>
								<a href="tel:+998954124242" target="_blank">
									+998 95 412 42 42
								</a>
								<a href="mailto:info@comfortsunpower.uz" target="_blank">
									info@comfortsunpower.uz
								</a>
							</div>
							<p>
								<a
									href="https://yandex.uz/maps/org/comfort_sunpower/196469771167/?ll=69.313178%2C41.332652&mode=search&sctx=ZAAAAAgBEAAaKAoSCcueBDbnUVFAERGPxMvTp0RAEhIJ%2BWcG8YEd1z8RObh0zHnGxD8iBgABAgMEBSgKOABAo58GSAFqAnV6nQHNzEw9oAEAqAEAvQELoyuUwgEGn5eL9NsF6gEA8gEA%2BAEAggIQY29tZm9ydCBzdW5wb3dlcooCAJICAJoCDGRlc2t0b3AtbWFwcw%3D%3D&sll=69.313178%2C41.332652&sspn=0.012437%2C0.005587&text=comfort%20sunpower&z=16.86"
									target="_blank"
								>
									{t("footer.adress")}
								</a>
							</p>
						</div>
					</div>
					<div className={scss.footer__middle}>
						<h4>{t("footer.links")}</h4>
						<div className={scss.links}>
							<p>
								<Link to="/about" onClick={scrollToTop}>
									{t("nav.about")}
								</Link>
							</p>
							<p>
								<Link to="/products" onClick={scrollToTop}>
									{t("nav.products")}
								</Link>
							</p>
							<p>
								<Link to="/projects" onClick={scrollToTop}>
									{t("nav.projects")}
								</Link>
							</p>
							<p>
								<Link to="/contact" onClick={scrollToTop}>
									{t("nav.contact")}
								</Link>
							</p>
						</div>
					</div>
					<div className={scss.footer__right}>
						<h4>{t("footer.networks")}</h4>
						<div className={scss.links}>
							<p>
								<a href="https://telegram.com">
									<FaTelegramPlane />{" "}
									Telegram
								</a>
							</p>
							<p>
								<a href="https://instagram.com/comfort.sunpower?igshid=NzZlODBkYWE4Ng==">
									<FaInstagram /> {" "} Instagram
								</a>
							</p>
							<p>
								<a href="https://www.facebook.com/profile.php?id=61552214782890&mibextid=LQQJ4d">
									<FaFacebook />{" "}
									Facebook
								</a>
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className={scss.footer_bottom}>
				<p>©2023 COMFORT SUN POWER</p>
				<div className={scss.footer_bottomIcons}>
					<a href="https://telegram.com">
						<FaTelegramPlane />
					</a>
					<a href="https://www.facebook.com/profile.php?id=61552214782890&mibextid=LQQJ4d">
						<FaFacebook />
					</a>
					<a href="https://instagram.com/comfort.sunpower?igshid=NzZlODBkYWE4Ng==">
						<FaInstagram />
					</a>
				</div>
			</div>
		</div>
	);
};

export default Footer;
