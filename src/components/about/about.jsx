import Company from "../company/company";
import Logos from "../logos/logos";
import Title from "../title";
import scss from "./about.module.scss";

const AboutUs = () => {
	return (
		<div className="container">
			<div className="container">
				<div className={scss.about}>
					<h5>Компания</h5>
					<Title titleName={"ООО 'Comfort Sunpower'"} />
					<p>
						Динамично и успешно развивающаяся компания, специализирующаяся на
						возобновляемой энергетике. Наша компания, одна из лидирующих в сфере
						экологической энергетики и лидирующих технологий в Узбекистане.
					</p>
					<div>
						<img src="/Image 1.png" alt="image 1" />
						<img src="/Image 2.png" alt="image 2" />
						<img src="/Image 3.png" alt="image 3" />
					</div>
				</div>
				<Company />
				<Logos />
			</div>
		</div>
	);
};

export default AboutUs;
