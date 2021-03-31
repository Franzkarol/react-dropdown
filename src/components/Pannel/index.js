import React, { useState } from "react";
import { Pannel, Btn } from "./styles";

const PannelContainer = ({ children, action }) => {
  return (
    <Pannel>
      <Btn onClick={() => action({ info: "info-1" })}>Open 1</Btn>
      <Btn onClick={() => action({ info: "info-2" })}>Open 2</Btn>
      <Btn onClick={() => action({ info: "info-3" })}>Open 3</Btn>
      {children}
    </Pannel>
  );
};

export default PannelContainer;
