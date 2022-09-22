import { ProfileProps } from "./types";
import ProfileStyles from "./styles";

import Text from "../Text";

const Profile = ({ user, location }: ProfileProps) => (
  <ProfileStyles.Container>
    <a href={user.url}>
      <ProfileStyles.Avatar
        src={user.picture}
        className="avatar"
        alt="avatar"
      />
    </a>
    <ProfileStyles.UserInfo>
      <ProfileStyles.UserName href={user.url}>
        <Text color="#fff">{user.name}</Text>
      </ProfileStyles.UserName>
      {location && (
        <ProfileStyles.UserLocation
          href={`https://unsplash.com/search/photos/${location}`}
        >
          <Text as="xs" color="#fff">
            {location}
          </Text>
        </ProfileStyles.UserLocation>
      )}
    </ProfileStyles.UserInfo>
  </ProfileStyles.Container>
);

export default Profile;
