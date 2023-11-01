import Button from "../button/button";
import Title from "../title";
import scss from "./form.module.scss";
import axios from "axios";
import { useState } from "react";
import { useTranslation } from "react-i18next";
const Form = () => {
	const { t } = useTranslation();
	const [formValues, setFormValues] = useState({
		name: "",
		phone: "",
		comment: "",
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
				"\n              Ismi:" +
				formValues.name +
				" " +
				"\n              Tel:" +
				formValues.phone +
				"\n              Comment:" +
				formValues.comment
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
		setFormValues({ name: "", phone: "", comment: "" });
	};
	return (
		<div className="container">
			<div className={scss.form}>
				<div className={scss.formTitles}>
					<Title titleName={t("home.form.title")} color={"white"} width={100} />
					<p>{t("home.form.text")}</p>
				</div>
				<form action="" onSubmit={onSubmit}>
					<input
						id="name"
						onChange={(e) => handle(e)}
						value={formValues.name}
						type="text"
						placeholder={t("home.form.input1")}
						required
					/>
					<input
						id="phone"
						onChange={(e) => handle(e)}
						value={formValues.phone}
						type="text"
						placeholder={t("home.form.input2")}
						required
					/>
					<input
						id="comment"
						onChange={(e) => handle(e)}
						value={formValues.comment}
						type="text"
						placeholder={t("home.form.input3")}
						required
					/>
					<button type="submit">
						<Button
							btnName={t("btn.btn2")}
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
