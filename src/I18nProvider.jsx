import { createSignal } from "solid-js";
import i18next from "i18next";
import { createContext, useContext } from "solid-js";

const [translate, setTranslate] = createSignal(i18next.t);

async function changeLanguage(newLang) {
  const t = await i18next.changeLanguage(newLang);
  setTranslate(() => t);
}

export const I18nContext = createContext([translate, changeLanguage]);
export function useI18n() {
  return useContext(I18nContext);
}
i18next.on("loaded", () => {
  setTranslate(() => i18next.t);
});
i18next.on("languageChanged", () => {
  setTranslate(() => i18next.t.bind(i18next));
});

export default function I18nProvider(props) {
  i18next.init(
    {
      lng: "en",
      debug: true,
      resources: {
        en: {
          translation: {
            hello: "hello world",
          },
        },
        ar: {
          translation: {
            hello: "مرحبا",
          },
        },
      },
    },
    (err, t) => {
      setTranslate(() => t);
    }
  );

  return (
    <I18nContext.Provider
      value={[(...args) => translate().apply(null, args), changeLanguage]}
    >
      {props.children}
    </I18nContext.Provider>
  );
}
