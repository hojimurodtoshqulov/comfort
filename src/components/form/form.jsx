import Button from "../button/button";
import Title from "../title";
import scss from "./form.module.scss";
import axios from "axios";
import { useState } from "react";

const Form = () => {
	const [formValues, setFormValues] = useState({
		name: "",
		phone: "",
	});
	const handle = (e) => {
		const newData = { ...formValues };
		newData[e.target.id] = e.target.value;
		setFormValues(newData);
		console.log(newData);
	};
	const onSubmit = async (e) => {
		e.preventDefault();
		const name = formValues.name.value;
		const phone = formValues.phone.value;
		try {
			const url = `https://api.telegram.org/bot6624056078:AAFNCrZW2Pfv-VhrKYNfXPv61Jf3Qsmq0ZA/sendMessage?chat_id=-1001813491900&text=${
				"\n        Ismi:" +
				formValues.name +
				" " +
				"\n        Tel:" +
				formValues.phone
			}`;
			await axios
				.post(url, {
					name: formValues.name,
					phone: formValues.phone,
					// project: formProject,
				})
				.then((res) => {
					console.log(res.data);
				});
		} catch (error) {
			console.error(error);
		}
		console.log("submit", formValues);
		setFormValues({ name: "", phone: "" });
	};
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
				<form action="" onSubmit={onSubmit}>
					<input
						id="name"
						onChange={(e) => handle(e)}
						value={formValues.name}
						type="text"
						placeholder="Имя"
						required
					/>
					<input
						id="phone"
						onChange={(e) => handle(e)}
						value={formValues.phone}
						type="text"
						placeholder="Номер"
						required
					/>
					<button type="submit">
						<Button
							btnName={"Отправить"}
							bg={"#FFA336"}
							width={100}
							height={60}
						/>
					</button>
				</form>
			</div>
		</div>
	);
};

export default Form;
