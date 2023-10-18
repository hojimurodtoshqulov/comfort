import scss from "./ourWorks.module.scss";

const OurWorks = () => {
	return (
		<div className="container">
			<div className={scss.ourWorks}>
				<img
					className={scss.ourWorks_titleImg}
					src="/workstitle.png"
					alt="workstitle"
				/>
				<div>
					<img className={scss.logo} src="/clientLogo4.png" alt="clientLogo4" />
					<img className={scss.imgBG} src="/works1.png" alt="works 1" />
				</div>
				<div>
					<img className={scss.logo} src="/clientLogo4.png" alt="clientLogo4" />
					<img className={scss.imgBG} src="/works2.png" alt="works 2" />
				</div>
				<div>
					<img className={scss.logo} src="/clientLogo4.png" alt="clientLogo4" />
					<img className={scss.imgBG} src="/works3.png" alt="works 3" />
				</div>
				<div>
					<img className={scss.logo} src="/clientLogo4.png" alt="clientLogo4" />
					<img className={scss.imgBG} src="/works4.png" alt="works 4" />
				</div>
				<div>
					<img className={scss.logo} src="/clientLogo4.png" alt="clientLogo4" />
					<img className={scss.imgBG} src="/works5.png" alt="works 5" />
				</div>
				<div>
					<img className={scss.logo} src="/clientLogo4.png" alt="clientLogo4" />
					<img className={scss.imgBG} src="/Image 1.png" alt="works 6" />
				</div>
				<div>
					<img className={scss.logo} src="/clientLogo4.png" alt="clientLogo4" />
					<img className={scss.imgBG} src="/Image 2.png" alt="works 7" />
				</div>
				<div>
					<img className={scss.logo} src="/clientLogo4.png" alt="clientLogo4" />
					<img className={scss.imgBG} src="/Image 3.png" alt="works 8" />
				</div>
				<div>
					<img className={scss.logo} src="/clientLogo4.png" alt="clientLogo4" />
					<img className={scss.imgBG} src="/ourProjects2.png" alt="works 9" />
				</div>
			</div>
		</div>
	);
};

export default OurWorks;
