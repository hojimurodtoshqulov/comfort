import Button from "../button/button";
import Title from "../title";
import scss from "./legal.module.scss";
import img1 from "../../../public/works5.png";
import Modal from "../modal";
import { useState } from "react";

const Legal = () => {
	const [openForm, setOpenForm] = useState(false);
	return (
		<>
			<div className={scss.legal}>
				<div className={scss.legal_imgDiv}>
					<img src={img1} alt={img1} />
				</div>
				<div className={scss.legal_titles}>
					<Title titleName={"Юридическое лицо"} number="02" />
					{/*  Legal entity */}
					<p>
						Мы устанавливаем наши солнечные панели в жилые дома, предоставляя
						полный спектр услуг по проектированию, установке и обслуживанию
						систем возобновляемой энергетики. Начинаем с консультации клиента,
						где определяем его потребности в солнечной энергии. Затем
						проектируем систему, выбираем подходящее оборудование и определяем
						стоимость.
					</p>
					<span
						onClick={() => {
							setOpenForm(true);
						}}
					>
						<Button btnName={"Подробнее"} bg={"#FFA336"} />
					</span>
				</div>
			</div>
			<Modal open={openForm} setOpen={setOpenForm} width={90}>
				<div className={scss.modal_legal}>
					<div className={scss.modal_legal_imgDiv}>
						<img src={img1} alt={img1} />
					</div>
					<div className={scss.modal_legal_titles}>
						<Title titleName={"Юридическое лицо"} number="02" />
						{/*  Legal entity */}
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

export default Legal;
