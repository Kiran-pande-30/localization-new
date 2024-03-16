import logo from './image.png';
import './App.css';
import { useState, Suspense } from 'react';
import i18n, { init } from 'i18next';
import HttpBackend from 'i18next-http-backend';
import { initReactI18next, useTranslation } from 'react-i18next';

i18n
  .use(HttpBackend)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    backend: {
      loadPath: "/locales/{{lng}}/main.json"
    }
  });

function App() {

  const {t} = useTranslation();

  const[language, setLanguage] = useState("English")

  const handleChange = (event) => {
    i18n.changeLanguage(event.target.value);
    setLanguage((language) => language === "English" ? "Spanish" : "English")
  }

  return (
    <Suspense fallback='Loading...'>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>{t("welcome")}</h1>
        <p>{t("firstLine")}</p>
        <p>{t("secondLine")}</p>
        <p>{t("thirdLine")}</p> 
        <p id='language text'>The Language is currently set to <strong>{language}</strong></p>
        <select name='language' onChange={handleChange}>
          <option value="en">English</option>
          <option value="es">Spanish</option>

        </select>
      </header>
    </div>
    </Suspense>
  );
}

export default App;
