import { useSelector } from "react-redux";
function Header() {
  const main = useSelector((state) => state.main);
  console.log(main);
  return (
    <>
      Dark mod={main.dark ? "evet" : "hayır"}
      <br />
      Mevcut dil={main.language}
    </>
  );
}

export default Header;
