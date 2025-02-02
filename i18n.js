import RNLanguages from "react-native-languages";
import i18n from "i18n-js";

import en from "./translations/en.json";
import fr from "./translations/fr.json";
import de from "./translations/de.json";
import es from "./translations/es.json";
import hi from "./translations/hi.json";
import nl from "./translations/nl.json";
import zh from "./translations/zh.json";
import pt from "./translations/pt.json";
import ptBR from "./translations/pt-BR.json";

i18n.locale = RNLanguages.language;
i18n.fallbacks = true;
i18n.translations = {
  en,
  fr,
  de,
  es,
  hi,
  nl,
  zh,
  pt,
  ptBR
};
i18n.currentLocale();

export default i18n;
