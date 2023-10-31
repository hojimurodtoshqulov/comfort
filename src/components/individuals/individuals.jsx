import Button from "../button/button";
import Title from "../title";
import scss from "./individuals.module.scss";
import img1 from "../../../public/individuals.png";
import Modal from "../modal";
import { useState } from "react";
import { useTranslation } from "react-i18next";
const Individuals = () => {
	const { t } = useTranslation();
	const [openForm, setOpenForm] = useState(false);
	return (
		<>
			<div className={scss.individuals}>
				<div className={scss.individuals_titles}>
					<Title titleName={t("home.individuals.title")} number="03" />
					{/* Юридическое лицо Legal entity */}
					<p>{t("home.individuals.text")}</p>
					<span
						onClick={() => {
							setOpenForm(true);
						}}
					>
						<Button btnName={t("btn.btn1")} bg={"#FFA336"} />
					</span>
				</div>
				<div className={scss.individuals_imgDiv}>
					<img src={img1} alt={img1} />
				</div>
			</div>
			<Modal open={openForm} setOpen={setOpenForm} width={90}>
				<div className={scss.modal_individuals}>
					<div className={scss.modal_individuals_imgDiv}>
						<img src={img1} alt={img1} />
					</div>
					<div className={scss.modal_individuals_titles}>
						<Title titleName={t("home.individuals.title")} number="03" />
						<p>{t("home.individuals.text")}</p>
					</div>
				</div>
			</Modal>
		</>
	);
};

export default Individuals;
