import { Suspense, useRef } from "react";
import { useState, useEffect } from "react";
import navLogo from "../../../public/logo_head.png";
import scss from "./nav.module.scss";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FaPhone } from "react-icons/fa";
import "./dropdown.scss";
import MobileNav from "../mobileNav";
const langs = ["ру", "uz"];
const Nav = () => {
	const route = useLocation();
	const [navColorBg, setnavColorBg] = useState(0);
	const [navSize, setnavSize] = useState("12vh");
	const [navSizeMobile, setnavSizeMobile] = useState("9.4vh");
	const [navBg, setNavBg] = useState("transparent");
	const [navLinkColor, setNavLinkColor] = useState("");
	const [navBoxShadow, setNavBoxShadow] = useState("inset 0px 0px 0px #ff00");
	const ref = useRef(null);
	const [currentLang, setCurrentLang] = useState("ru");
	// const [navContainerBR, setNavContainerBR] = useState("2px solid #fff");
	const listenScrollEvent = () => {
		window.scrollY > 80 ? setnavColorBg(10) : setnavColorBg(0);
		window.scrollY > 80 ? setnavSize("9vh") : setnavSize("11vh");
		window.scrollY > 80 ? setNavLinkColor("#fff") : setNavLinkColor("");
		window.scrollY > 80
			? setnavSizeMobile("10.4vh")
			: setnavSizeMobile("10.4vh");
		window.scrollY > 80 ? setNavBg("#0000001d") : setNavBg("transparent");
		window.scrollY > 80
			? setNavBoxShadow("inset 0px 0px 50px #009D9D")
			: setNavBoxShadow("inset 0px 0px 0px #ff00");
	};
	const { t, i18n } = useTranslation();
	useEffect(() => {
		window.addEventListener("scroll", listenScrollEvent);
		return () => {
			window.removeEventListener("scroll", listenScrollEvent);
		};
	}, []);
	function myFunction() {
		ref.current?.classList.toggle("show");
	}
	const langBtnClick = (lang) => {
		i18n.changeLanguage(lang);
		localStorage.setItem("lang", lang);
		setCurrentLang(lang);
		myFunction();
	};
	useEffect(() => {
		if (!localStorage.getItem("lang")) {
			localStorage.setItem("lang", "ру");
		} else {
			setCurrentLang(localStorage.getItem("lang"));
			i18n.changeLanguage(localStorage.getItem("lang"));
		}
	}, []);
	const scrollToTop = () => {
		window.scrollTo(0, 0);
	};
	const width = () => {
		if (window.innerWidth > 765) {
			return navSize;
		} else {
			return navSizeMobile;
		}
	};
	// console.log("route >>>", route);
	return (
		<Suspense fallback="loading">
			<nav
				className={scss.nav}
				style={{
					backdropFilter: `blur(${navColorBg}px)`,
					background: route.pathname === "/" ? navBg : "#232536",
					transition: "all 0.8s",
					height: width(),
				}}
			>
				<div className="container">
					<div className={scss.nav__container}>
						<Link
							style={{ color: navLinkColor }}
							onClick={scrollToTop}
							className={scss.nav__container_logo}
							to="/"
						>
							<img src={navLogo} alt={navLogo} />
						</Link>
						<div className={scss.nav__container_links}>
							<NavLink
								to="/about"
								onClick={scrollToTop}
							>
								{t("nav.about")} <span></span>
							</NavLink>
							<NavLink
								onClick={scrollToTop}
								className={scss.dropdown}
								to={"projects"}
							>
								{t("nav.projects")}

								<span></span>
							</NavLink>
							<NavLink
								to="/products"
								onClick={scrollToTop}
							>
								{t("nav.products")} <span></span>
							</NavLink>
							<NavLink
								to="/contact"
								onClick={scrollToTop}
							>
								{t("nav.contact")}
							</NavLink>
							<div className={scss.nav__container_lang}>
								<div className="dropdown">
									<button className="dropbtn" onClick={() => myFunction()}>
										{currentLang}
									</button>
									<div id="myDropdown" ref={ref} className="dropdown-content">
										{langs.map((l, i) => (
											<span
												className={currentLang === l ? "active" : ""}
												onClick={() => langBtnClick(l)}
												key={i}
											>
												{l}
											</span>
										))}
									</div>
								</div>
							</div>
						</div>
						<div className={scss.nav__container_phoneLink}>
							<a href="tel:+998954124242">+998 95 412 42 42</a>
							<a href="tel:+998954124242">{<FaPhone />}</a>
						</div>
						<MobileNav />
					</div>
				</div>
			</nav>
		</Suspense>
	);
};
export { Nav };
