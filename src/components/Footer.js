import { setLanguage, setDarkMode } from "./stores/main";
import { useDispatch, useSelector } from "react-redux";

function Footer() {
  const dispatch = useDispatch();
  const main = useSelector((state) => state.main);
  console.log(main);
  const languages = ["tr", "en"];
  const handleLanguage = (lang) => {
    dispatch(setLanguage(lang));
  };
  return (
    <div>
      footer
      <div>
        {languages.map((lang, index) => (
          <button
            onClick={() => handleLanguage(lang)}
            className={lang === main.language ? "active" : ""}
            key={index}
          >
            {lang}
          </button>
        ))}
      </div>
      <div>
        <button onClick={() => dispatch(setDarkMode())}>
          {main.dark ? "Switch Light Mode" : "Switch Dark Mode"}
        </button>
      </div>
    </div>
  );
}

export default Footer;
