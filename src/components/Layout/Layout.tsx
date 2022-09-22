import LayoutStyles from "./styles";
import { LayoutProps } from "./types";

const Layout = ({
  backgroundImage,
  leftBottomCorner,
  rightBottomCorner,
  leftTopCorner,
  rightTopCorner,
}: LayoutProps) => (
  <LayoutStyles.Main backgroundImage={backgroundImage}>
    <LayoutStyles.LeftTopCorner>{leftTopCorner}</LayoutStyles.LeftTopCorner>
    <LayoutStyles.RightTopCorner>{rightTopCorner}</LayoutStyles.RightTopCorner>
    <LayoutStyles.LeftBottomCorner>
      {leftBottomCorner}
    </LayoutStyles.LeftBottomCorner>
    <LayoutStyles.RightBottomCorner>
      {rightBottomCorner}
    </LayoutStyles.RightBottomCorner>
  </LayoutStyles.Main>
);

export default Layout;
