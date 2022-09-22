import styled from "styled-components";

import Text from "../Text";

const Container = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const Item = styled.li`
  padding: 8px 16px;
`;

const Content = styled(Text)`
  margin: 0;
`;

export default { Container, Item, Content };
