import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import langRu from "./locales/ru/translation.json";
import langUz from "./locales/uz/translation.json";
import langEn from "./locales/en/translation.json";
import langCh from "./locales/ch/translation.json";

i18n.use(initReactI18next).init({
	resources: {
		ru: {
			translation: langRu,
		},
		uz: {
			translation: langUz,
		},
		en: {
			translation: langEn,
		},
		ch: {
			translation: langCh,
		},
	},
	lng: "ru",
	fallbackLng: "ru",

	interpolation: {
		escapeValue: false,
	},
});
