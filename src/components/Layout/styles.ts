import styled from "styled-components";

import { LayoutProps } from "./types";

const Main = styled.main`
  background: ${(props: LayoutProps) =>
    `linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${props.backgroundImage}) no-repeat`};
  background-size: cover;
  background-position: center center;
  height: 100vh;
  position: relative;
`;

const LeftTopCorner = styled.div`
  position: absolute;
  top: 16px;
  left: 16px;
  z-index: 2;
`;

const RightTopCorner = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  z-index: 2;
`;

const LeftBottomCorner = styled.div`
  position: absolute;
  bottom: 16px;
  left: 16px;
  z-index: 2;
`;

const RightBottomCorner = styled.div`
  position: absolute;
  bottom: 16px;
  right: 16px;
`;

export default {
  Main,
  LeftBottomCorner,
  LeftTopCorner,
  RightTopCorner,
  RightBottomCorner,
};
