import Button from "../button/button";
import Title from "../title";
import scss from "./form.module.scss";

const Form = () => {
	return (
		<div className="container">
			<div className={scss.form}>
				<div className={scss.formTitles}>
					<Title
						titleName={"Оставить свою заявку можете тут"}
						color={"white"}
						width={100}
					/>
					<p>
						Наши специалисты свяжутся с вами в скором времени Свяжитесь с нами и
						получите бесплатную консультацию
					</p>
				</div>
				<form action="">
					<input type="text" placeholder="Имя" />
					<input type="text" placeholder="Номер" />
					<Button
						btnName={"Отправить"}
						bg={"#FFA336"}
						width={100}
						height={60}
					/>
				</form>
			</div>
		</div>
	);
};

export default Form;
