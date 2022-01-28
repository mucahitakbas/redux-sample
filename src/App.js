import { useSelector } from "react-redux";
import React from "react";
import Counter from "./components/Counter";
import CounterAction from "./components/CounterAction";
import Footer from "./components/Footer";
import Header from "./components/Header";
function App() {
  const main = useSelector((state) => state.main);
  return (
    <div className={main.dark ? "dark" : ""}>
      <Header />
      <Counter />
      <CounterAction />
      <Footer />
    </div>
  );
}
export default App;
