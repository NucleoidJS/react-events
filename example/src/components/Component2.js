import React from "react";
import { useEvent } from "@nucleoidjs/synapses";
import styles from "./styles";

const Component2 = () => {
  const [event] = useEvent("BUTTON_CLICKED", { string: "blue" });

  return (
    <div className={"card"}>
      <div className={"card-body"}>
        <h5 className={"card-title"}>"{event.string}"</h5>
      </div>
    </div>
  );
};

export default Component2;
