import { useSelector } from "react-redux";
import React from "react";
import { Layout } from "antd";
import Counter from "./components/Counter";
import CounterAction from "./components/CounterAction";
import Foter from "./components/Footer";
import Head from "./components/Header";
function App() {
  const { Header, Footer, Content } = Layout;
  const main = useSelector((state) => state.main);
  return (
    <div className={main.dark ? "dark" : ""}>
      <Head />
      <Counter />
      <CounterAction />
      <Foter />
    </div>
  );
}
export default App;
