import ListStyles from "./styles";

import { Item, ListProps } from "./types";

import Text from "../Text";

const List = ({ items }: ListProps) => (
  <ListStyles.Container>
    {items &&
      items.map((item: Item) => (
        <ListStyles.Item>
          <Text as="xs" color="#757575">
            {item.label}
          </Text>
          <ListStyles.Content>{item.content}</ListStyles.Content>
        </ListStyles.Item>
      ))}
  </ListStyles.Container>
);

export default List;
