import { useSelector } from "react-redux";
function Header() {
  const main = useSelector((state) => state.main);
  console.log(main);
  return <div>header
    <div>
      Dark mod={main.dark?"evet":"hayır"}<br/>
      Mevcut dil={main.language}
    </div>
  </div>;
}

export default Header;
