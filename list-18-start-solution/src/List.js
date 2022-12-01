import { ListItem } from "./ListItem";

export function List(props) {
  const items = props.items;
  const listItems = items.map(item => <ListItem key={item} item={item} />);

  return <ul>{listItems}</ul>;
}
