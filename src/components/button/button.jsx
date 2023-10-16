import scss from "./button.module.scss";

const Button = ({ btnName, bg, width, height }) => {
	return (
		<buttton
			className={scss.button}
			style={{ background: bg, width: `${width}%`, height: `${height}px` }}
			type="submit"
		>
			{btnName}
		</buttton>
	);
};

export default Button;