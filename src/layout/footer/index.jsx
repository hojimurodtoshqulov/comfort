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
								<a href="tel:+998910024242">+998 91 002 42 42</a>
								<a href="mailto:info@comfortsunpower.uz">
									info@comfortsunpower.uz
								</a>
							</div>
							<p> {t("footer.adress")} </p>
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
								<a href="https://telegram.com">Telegram</a>
							</p>
							<p>
								<a href="https://instagram.com">Instagram</a>
							</p>
							<p>
								<a href="https://facebook.com">Facebook</a>
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
					<a href="https://facebook.com">
						<FaFacebook />
					</a>
					<a href="https://instagram.com">
						<FaInstagram />
					</a>
				</div>
			</div>
		</div>
	);
};

export default Footer;
