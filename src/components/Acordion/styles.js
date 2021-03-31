import styled from "styled-components";

export const Acordion = styled.div`
  top: 120px;
  left: 15px;
  width: 50%;
  height: 80vh;
  position: fixed;
  background: #22bad9;
  transition: transform 0.3s ease-out 0s;
  transform: translateX(${({ open }) => (open ? "100%" : "0")});
`;
