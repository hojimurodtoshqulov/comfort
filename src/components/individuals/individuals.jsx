import Button from "../button/button";
import Title from "../title";
import scss from "./individuals.module.scss";
import img1 from "../../../public/individuals.png";
import Modal from "../modal";
import { useState } from "react";

const Individuals = () => {
	const [openForm, setOpenForm] = useState(false);
	return (
		<>
			<div className={scss.individuals}>
				<div className={scss.individuals_titles}>
					<Title titleName={"Физические лица"} number="03" />
					{/* Юридическое лицо Legal entity */}
					<p>
						Мы устанавливаем наши солнечные панели в жилые дома, предоставляя
						полный спектр услуг по проектированию, установке и обслуживанию
						систем возобновляемой энергетики. Начинаем с консультации клиента,
						где определяем его потребности в солнечной энергии. Затем
						проектируем систему, выбираем подходящее оборудование и определяем
						стоимость. После согласования с клиентом, мы производим установку
						солнечных панелей и обеспечиваем клиентов инструкциями по
						использованию. Мы также предоставляем услуги по регулярному
						обслуживанию и поддержке систем солнечной энергии.
					</p>
					<span
						onClick={() => {
							setOpenForm(true);
						}}
					>
						<Button btnName={"Подробнее"} bg={"#FFA336"} />
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
						<Title titleName={"Физические лица"} number="03" />
						{/* Юридическое лицо Legal entity */}
						<p>
							Мы устанавливаем наши солнечные панели в жилые дома, предоставляя
							полный спектр услуг по проектированию, установке и обслуживанию
							систем возобновляемой энергетики. Начинаем с консультации клиента,
							где определяем его потребности в солнечной энергии. Затем
							проектируем систему, выбираем подходящее оборудование и определяем
							стоимость.
						</p>
					</div>
				</div>
			</Modal>
		</>
	);
};

export default Individuals;
