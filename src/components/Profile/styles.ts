import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;

const UserInfo = styled.div`
  display: flex;
  flex-flow: wrap column;
`;

const Avatar = styled.img`
  width: 32px;
  height: 32px;
  margin-right: 10px;
  border-radius: 50%;
  box-shadow: 0 0 1px rgb(0 0 0 / 50%);
  background-color: rgba(0, 0, 0, 0.2);
  opacity: 0.8;

  &:hover {
    opacity: 1;
  }
`;

const UserName = styled.a`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-decoration: none;
  text-shadow: 0 1px rgb(0 0 0 / 4%);
  opacity: 0.8;
  transition: opacity 0.1s ease-in-out;
  cursor: pointer;

  &:hover {
    opacity: 1;
  }
`;

const UserLocation = styled.a`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-decoration: none;
  text-shadow: 0 1px rgb(0 0 0 / 4%);
  opacity: 0.8;
  transition: opacity 0.1s ease-in-out;
  cursor: pointer;

  &:hover {
    opacity: 1;
  }
`;

export default { Container, UserInfo, UserLocation, UserName, Avatar };
