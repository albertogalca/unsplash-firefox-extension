import styled from "styled-components";

import {
  Button,
  Icon,
  Profile,
  Layout,
  Popover,
  Text,
  List,
} from "./components";

import { useGetRandomPhoto } from "./hooks";
import { PhotoDataType } from "./types";
import { download } from "./utils";

const StyledLogo = styled(Icon)`
  opacity: 0.8;
  transition: opacity 0.1s ease-in-out;

  &:hover {
    opacity: 1;
  }
`;

const Info = styled.a`
  display: flex;
  align-items: center;
`;

const StyledIcon = styled(Icon)`
  fill: #fff;
  opacity: 0.8;
  transition: opacity 0.1s ease-in-out;
  margin-right: 4px;

  &:hover {
    opacity: 1;
  }
`;

function App() {
  const photo: PhotoDataType | undefined = useGetRandomPhoto();

  if (!photo) return <div></div>;

  return (
    <Layout
      backgroundImage={photo.urls.photo}
      leftTopCorner={
        <a
          href={photo.urls.unplash}
          className="logo"
          target="_blank"
          title="View photo on Unsplash"
          rel="noreferrer"
        >
          <StyledLogo name="logo" />
        </a>
      }
      rightTopCorner={
        <Button onClick={() => download(photo.urls.download)}>Download</Button>
      }
      leftBottomCorner={<Profile user={photo.user} location={photo.location} />}
      rightBottomCorner={
        <Popover
          position="top"
          popoverContent={<List items={photo.exif} />}
          popoverTrigger={
            <Info>
              <StyledIcon name="info" />
              <Text color="#fff">Info</Text>
            </Info>
          }
        />
      }
    />
  );
}

export default App;
