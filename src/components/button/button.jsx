import scss from "./button.module.scss";

const Button = ({ btnName, bg }) => {
	return (
		<buttton
			className={scss.button}
			style={{ background: bg,  }}
			type="submit"
		>
			{btnName}
		</buttton>
	);
};

export default Button;