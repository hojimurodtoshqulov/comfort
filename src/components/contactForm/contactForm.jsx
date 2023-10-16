import scss from "./contactForm.module.scss";
import Title from "../title";
import Button from "../button/button";
import Map from "../map/map";
import {
	FaFacebook,
	FaInstagram,
	FaLinkedin,
	FaTelegramPlane,
} from "react-icons/fa";
const ContactForm = () => {
	return (
		<div className={`container`}>
			<div className="container">
				<div className={scss.contactForm}>
					<div className={scss.contactFormCol1}>
						<h5>КОНТАКТЫ</h5>
						<Title titleName={"Остались вопросы?"} width={100} />
						<p>Оставьте свои данные, для обратной связи</p>
						<form action="">
							<input type="text" placeholder="Имя" />
							<input type="text" placeholder="Номер телефона" />
							<input type="text" placeholder="Type your Messege" />
							<br />
							<Button btnName={"Отправить >"} bg={"#1395D8"} />
						</form>
					</div>
					<div className={scss.contactFormCol2}>
						<h5>Локация</h5>
						<div className={scss.line}></div>
						<p>Малая кольцевая дорога, 15</p>
						<h5>Рабочее время</h5>
						<div className={scss.line}></div>
						<p>Пн-пт </p>
						<p>9:00-18:00 </p>
						<h5>Наша служба поддержки доступна 24 часа в сутки</h5>
						<br />
						<h5>Контакты</h5>
						<div className={scss.line}></div>
						<p>
							<a href="tel:+998910024242">+998 91 002 42 42</a>
						</p>
						<p>
							<a href="mailto:u.isakov@gmail.com">u.isakov@gmail.com</a>
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
