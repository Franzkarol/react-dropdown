import React from "react";
import { Acordion } from "./styles";

const AcordionContainer = ({ visible, data }) => {
  return <Acordion open={visible}>{JSON.stringify(data)}</Acordion>;
};

export default AcordionContainer;
