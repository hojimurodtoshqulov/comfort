import { Suspense } from "react";
import { Nav } from "../components/navbar/nav";
import { useEffect, useState } from "react";
import Footer from "../components/footer";
// import i18next from "i18next";
import MobileNav from "../components/mobileNav";
import Form from "../components/form/form";

const Layout = ({ children }) => {
	// const handleClick = (e) => {
	//   i18next.changeLanguage(e.target.value);
	// };
	// useEffect(() => {
	// 	if (window !== null) {
	// 		Aos.init({ duration: 1000, mirror: true });
	// 	}
	// }, []);
	const [active, setActive] = useState(true);
	useEffect(() => {
		setTimeout(() => {
			setActive(false);
		}, 4000);
	}, []);
	return (
		<Suspense fallback="loading">
			<div className="app-wrap">
				{active ? (
					<div
						className="BG_video"
						style={{
							width: "100%",
							height: "100vh",
							position: "fixed",
							inset: 0,
							background: "white",
							zIndex: 100,
						}}
					>
						{/* <video
							src={video}
							autoPlay
							muted
							playsInline
							style={{
								width: "70%",
								height: "80vh",
								position: "fixed",
								margin: "5% 15%",
								inset: 0,
								background: "white",
								zIndex: 101,
							}}
						></video> */}
						<img
							src="/comfort.gif"
							alt="comfort"
							style={{
								width: "70%",
								height: "80vh",
								position: "fixed",
								margin: "5% 15%",
								inset: 0,
								background: "white",
								zIndex: 101,
								objectFit: "cover",
							}}
						/>
					</div>
				) : (
					<>
						<Nav />
					</>
				)}
				{children}
				<div style={{ margin: "100px 0 0 0" }}>
					<Form />
				</div>
				<Footer />
			</div>
		</Suspense>
	);
};

export default Layout;
