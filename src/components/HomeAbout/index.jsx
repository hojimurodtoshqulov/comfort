import scss from "./HomeAbout.module.scss";
import img1 from "../../../public/comfortAbout1.png";
import Title from "../title";
import { useTranslation } from "react-i18next";
import Modal from "../modal";
import { useState } from "react";
const HomeAbout = () => {
	const { t } = useTranslation();
	const [openForm, setOpenForm] = useState(false);
	return (
		<>
			<div className="container">
				<div className={scss.about}>
					<div className={scss.about_title}>
						<Title
							titleName={t("home.about.title")}
							width={100}
							number={"01"}
						/>
					</div>
					<div className={scss.about_imgtext}>
						<div
							className={scss.about_imgtextImgdiv}
							onClick={() => {
								setOpenForm(true);
							}}
						>
							<img src={img1} alt={img1} />
						</div>
						<p>{t("home.about.text")}</p>
					</div>
				</div>
			</div>
			<Modal open={openForm} setOpen={setOpenForm} width={90}>
				<div
					className={scss.about_imgModal}
					onClick={() => {
						setOpenForm(false);
					}}
				>
					<img src={img1} alt={img1} />
				</div>
			</Modal>
		</>
	);
};

export default HomeAbout;
