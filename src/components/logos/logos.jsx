import scss from "./logos.module.scss";

const Logos = () => {
	return (
		<div className={scss.logos}>
			<a href="">
				<img src="/Logo (1).png" alt="logo 1" />
			</a>
			<a href="">
				<img src="/Logo (2).png" alt="logo 2" />
			</a>
			<a href="">
				<img src="/Logo (3).png" alt="logo 3" />
			</a>
			<a href="">
				<img src="/Logo (4).png" alt="logo 4" />
			</a>
			<a href="">
				<img src="/Logo (5).png" alt="logo 5" />
			</a>
		</div>
	);
};

export default Logos;
