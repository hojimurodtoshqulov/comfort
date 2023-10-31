import scss from "./contactForm.module.scss";
import Title from "../title";
import Button from "../button/button";
import Map from "../map/map";
import {
	FaFacebook,
	FaInstagram,
	FaLinkedin,
	FaTelegramPlane,
	FaChevronRight,
} from "react-icons/fa";
import { useTranslation } from "react-i18next";
const ContactForm = () => {
	const { t } = useTranslation();
	return (
		<div className={`container`}>
			<div className="container">
				<div className={scss.contactForm}>
					<div className={scss.contactFormCol1}>
						<h5>{t("contact.contact")}</h5>
						<Title titleName={t("contact.title")} width={100} />
						<p>{t("contact.text")}</p>
						<form action="">
							<input type="text" placeholder={t("contact.input1")} />
							<input type="text" placeholder={t("contact.input2")} />
							<input type="text" placeholder={t("contact.input3")} />
							<br />
							<Button btnName={t("btn.btn2")} bg={"#1395D8"} />
						</form>
					</div>
					<div className={scss.contactFormCol2}>
						<h5>{t("contact.locationTitle")}</h5>
						<div className={scss.line}></div>
						<p>{t("contact.location")}</p>
						<h5>{t("contact.timeTitle")}</h5>
						<div className={scss.line}></div>
						<p>{t("contact.timeWeek")}</p>
						<p>{t("contact.time")}</p>
						<h5>{t("contact.timeText")}</h5>
						<br />
						<h5>{t("contact.contact")}</h5>
						<div className={scss.line}></div>
						<p>
							<a href="tel:+998910024242">+998 91 002 42 42</a>
						</p>
						<p>
							<a href="mailto:info@comfortsunpower.uz">info@comfortsunpower.uz</a>
						</p>
						<div className={scss.icons}>
							<a href="https://telegram.com">
								<FaTelegramPlane />
							</a>
							<a href="https://facebook.com">
								<FaFacebook />
							</a>
							<a href="https://instagram.com">
								<FaInstagram />
							</a>
							<a href="https://linkedin.com">
								<FaLinkedin />
							</a>
						</div>
					</div>
				</div>
				<Map />
			</div>
		</div>
	);
};

export default ContactForm;
