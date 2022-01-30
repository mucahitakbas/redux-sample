import { setLanguage, setDarkMode } from "./stores/main";
import { useDispatch, useSelector } from "react-redux";
import { Button } from 'antd';
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
      <div>
        {languages.map((lang, index) => (
          <Button
            onClick={() => handleLanguage(lang)}
            type={lang === main.language ? "primary" : ""}
            key={index}
          >
            {lang}
          </Button>
        ))}
      </div>
      <div>
        <Button type="primary" onClick={() => dispatch(setDarkMode())}>
          {main.dark ? "Switch Light Mode" : "Switch Dark Mode"}
        </Button>
        
      </div>
    </div>
  );
}

export default Footer;
