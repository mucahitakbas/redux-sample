import React from "react";
import { decremented, incremented } from "./stores/counter";
import { useDispatch } from "react-redux";
import { Button } from "antd";

export default function CounterAction() {
  const dispatch = useDispatch();
  return (
    <div>
      <Button type="primary" onClick={() => dispatch(incremented())}>
        Increase
      </Button>
      <Button type="primary" onClick={() => dispatch(decremented())}>
        Decrease
      </Button>
    </div>
  );
}
