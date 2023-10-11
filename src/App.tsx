import { useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";
import { I18nextProvider } from "react-i18next";
import i18n from "./lib/i18n";
import { Router } from "./Router";
import { WhatsAppButton } from "./components/WhatsAppButton";

export function App() {
  // const preferredLanguage =
  //   localStorage.getItem("preferredLanguage") || i18n.language;

  // console.log("Preferred Language:", preferredLanguage);

  // useEffect(() => {
  //   i18n.changeLanguage(preferredLanguage);
  // }, [i18n, preferredLanguage]);

  return (
    <I18nextProvider i18n={i18n}>
      <ThemeProvider theme={defaultTheme}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
        <GlobalStyle />
        <WhatsAppButton />
      </ThemeProvider>
    </I18nextProvider>
  );
}
