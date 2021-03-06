import trans from './gettext.cjs.min.js';

export const i18n = trans();
export function _(msgid) {return i18n.gettext(msgid)};

export const LANGUAGES = {
    en: "English",
    de: "Deutsch",
    es: "Español",
    fr: "Français",
    hu: "Magyar",
    it: "Italiano",
    ja: "日本語",
    ko: "한국어",
    pt: "Português",
    th: "ไทย",
    zh: "繁體中文",
};

const LANGUAGETEXT = {
    en: "Language",
    de: "Sprache",
    es: "Idioma",
    fr: "Langue",
    hu: "Nyelv",
    it: "Lingua",
    ja: "言語",
    ko: "언어",
    pt: "Lingua",
    th: "ภาษา",
    zh: "語言",
};

export var translatedLanguage = 'Language';

const preferredLang = window.navigator.language.slice(0, 2);
if (LANGUAGES.hasOwnProperty(preferredLang)) {
    translatedLanguage = LANGUAGETEXT[preferredLang]
}