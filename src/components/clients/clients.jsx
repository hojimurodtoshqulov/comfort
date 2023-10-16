import Title from "../title";
import scss from "./clients.module.scss";

const Clients = () => {
	return (
		<div className={scss.Clients}>
			<div className="container">
				<div className={scss.clients}>
					<span className={scss.clientsNumber}>05</span>
					<Title titleName={"НАШИ КЛИЕНТЫ"} color={"white"} />
					<div className={scss.clientsImages}>
						<div className={scss.clientsImagesRow}>
							<div>
								<img src="/clientLogo1.png" alt="clientLogo1" />
							</div>
							<span></span>
							<div>
								<img src="/clientLogo2.png" alt="/clientLogo2" />
							</div>
							<span></span>
							<div>
								<img src="/clientLogo3.png" alt="/clientLogo3" />
							</div>
						</div>
						<div className={scss.clientsImagesRow}>
							<div>
								<img src="/clientLogo4.png" alt="/clientLogo4" />
							</div>
							<span></span>
							<div>
								<img src="/clientLogo5.png" alt="/clientLogo5" />
							</div>
							<span></span>
							<div>
								<img src="/clientLogo6.png" alt="/clientLogo6" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Clients;