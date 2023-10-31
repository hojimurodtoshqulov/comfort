import Button from "../button/button";
import Title from "../title";
import scss from "./legal.module.scss";
import img1 from "../../../public/works5.png";
import Modal from "../modal";
import { useState } from "react";
import { useTranslation } from "react-i18next";
const Legal = () => {
	const { t } = useTranslation();
	const [openForm, setOpenForm] = useState(false);
	return (
		<>
			<div className={scss.legal}>
				<div className={scss.legal_imgDiv}>
					<img src={img1} alt={img1} />
				</div>
				<div className={scss.legal_titles}>
					<Title titleName={t("home.legal.title")} number="02" />
					{/*  Legal entity */}
					<p>{t("home.legal.text")}</p>
					<span
						onClick={() => {
							setOpenForm(true);
						}}
					>
						<Button btnName={t("btn.btn1")} bg={"#FFA336"} />
					</span>
				</div>
			</div>
			<Modal open={openForm} setOpen={setOpenForm} width={90}>
				<div className={scss.modal_legal}>
					<div className={scss.modal_legal_imgDiv}>
						<img src={img1} alt={img1} />
					</div>
					<div className={scss.modal_legal_titles}>
						<Title titleName={t("home.legal.title")} number="02" />
						<p>{t("home.legal.text")}</p>
					</div>
				</div>
			</Modal>
		</>
	);
};

export default Legal;
