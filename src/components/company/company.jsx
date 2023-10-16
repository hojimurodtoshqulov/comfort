import Title from "../title";
import scss from "./company.module.scss";

const Company = () => {
	return (
		<div className={scss.company}>
			<div className={scss.companyCol1}>
				<Title titleName={"Компания “Comfort Sunpower”"} width={100} />
				<p>
					Одна из Лидирующих компаний в Узбекистане над созданием Солнечных
					панелей останется в топе самых популярных компаний. «Comfort Sunpower»
					заботится не только о вас и о вашем бюджете, но и заботиться о
					природе.От полезных ресурсов до экологической технологии
				</p>
			</div>
			<div className={scss.companyCol2}>
				<div>
					<h2>960+</h2>
					<p>
						<span></span>
					</p>
					<h4>Проектов выполнено</h4>
				</div>
				<div>
					<h2>100%</h2>
					<p>
						<span></span>
					</p>
					<h4>Проверенный товар</h4>
				</div>
				<div>
					<h2>974+</h2>
					<p>
						<span></span>
					</p>
					<h4>Клиентов остались довольными</h4>
				</div>
				<div>
					<h2>5 лет</h2>
					<p>
						<span></span>
					</p>
					<h4>Опыта на рынке Узбекистана</h4>
				</div>
			</div>
		</div>
	);
};

export default Company;
