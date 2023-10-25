import scss from "./map.module.scss";
const Map = () => {
	return (
		<div className={scss.map}>
			<iframe
				src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2995.9082115246642!2d69.31173830773325!3d41.33260926658954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aef54b61dc067f%3A0xc598be5d8128ba3!2sComfort%20Sunpower!5e0!3m2!1sru!2s!4v1697452300556!5m2!1sru!2s"
				width="100%"
				height="100%"
				style={{ border: 0 }}
				allowfullscreen=""
				loading="lazy"
				referrerpolicy="no-referrer-when-downgrade"
			></iframe>
		</div>
	);
};

export default Map;
