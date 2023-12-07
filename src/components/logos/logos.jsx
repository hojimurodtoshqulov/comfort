import scss from "./logos.module.scss";

const Logos = () => {
	return (
		<div className={scss.logos}>
			<a href="">
				<img src="/beeline.png" alt="logo 1" />
			</a>
			<a href="">
				<img src="/fido.png" alt="logo 2" />
			</a>
			<a href="">
				<img src="/cho'lquvar.png" alt="logo 3" />
			</a>
			<a href="">
				<img src="/neftegaz.png" alt="logo 4" />
			</a>
			<a href="">
				<img src="/logo_head.png" alt="logo 5" />
			</a>
		</div>
	);
};

export default Logos;
