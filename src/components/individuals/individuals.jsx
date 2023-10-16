import Button from "../button/button";
import Title from "../title";
import scss from "./individuals.module.scss";
import img1 from "../../../public/individuals.png";

const Individuals = () => {
	return (
		<div className={scss.individuals}>
			<div className={scss.individuals_titles}>
				<Title titleName={"Физические лица"} number="02" />
				<p>
					Мы устанавливаем наши солнечные панели в жилые дома, предоставляя
					полный спектр услуг по проектированию, установке и обслуживанию систем
					возобновляемой энергетики. Начинаем с консультации клиента, где
					определяем его потребности в солнечной энергии. Затем проектируем
					систему, выбираем подходящее оборудование и определяем стоимость.
					После согласования с клиентом, мы производим установку солнечных
					панелей и обеспечиваем клиентов инструкциями по использованию. Мы
					также предоставляем услуги по регулярному обслуживанию и поддержке
					систем солнечной энергии.
				</p>
				<Button btnName={"Подробнее"} bg={"#FFA336"} />
			</div>
			<img src={img1} alt={img1} />
		</div>
	);
};

export default Individuals;
