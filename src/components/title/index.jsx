import scss from "./title.module.scss";

const Title = ({ titleName, color, spanColor, number, width }) => {
	return (
		<h2
			className={scss.title}
			style={{ color: `${color}`, position: "relative", width: `${width}%` }}
		>
			<span style={{ color: `${spanColor}` }}> {number} </span>
			{titleName}
		</h2>
	);
};

export default Title;
