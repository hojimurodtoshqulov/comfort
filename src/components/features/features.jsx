import scss from "./features.module.scss";

const Features = () => {
	return (
		<div className="container">
			<div className={scss.features}>
				<div className={scss.featuresCol1}>
					<h5>Наши особенности</h5>
					<h3>
						Мы предлагаем высококачественные продукты и услуги, с фокусом на
						индивидуальный подход и экологическую ответственность, обеспечивая
						профессионализм, опыт и превосходный сервис.
					</h3>
					<p>
						Мы готовы решить любые вызовы в области солнечной энергии и помочь
						вам осуществить переход к энергоэффективным и экологически чистым
						решениям!
					</p>
				</div>
				<div className={scss.featuresCol2}>
					<div className={scss.el}>
						<span>
							<img src="/quality 1.png" alt="quality 1" />
						</span>
						<div>
							<h6>Гарантия качества</h6>
							<p>
								Мы предлагаем высококачественные продукты и услуги, с фокусом на
								индивидуальный подход и экологическую ответственность.
							</p>
						</div>
					</div>
					<div className={scss.el}>
						<span>
							<img src="/manufacturing 1.png" alt="manufacturing " />
						</span>
						<div>
							<h6>Проверенные производители</h6>
							<p>
								Мы сотрудничаем только с проверенными производителями,
								гарантирующими высокое качество и надежность своих продуктов.
							</p>
						</div>
					</div>
					<div className={scss.el}>
						<span>
							<img src="/user 1.png" alt="user 1" />
						</span>
						<div>
							<h6>Квалифицированные специалисты</h6>
							<p>
								Наша команда - эксперты солнечной энергетики, готовые решить
								самые сложные задачи. Обратитесь к нам для профессионального
								сопровождения.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Features;
