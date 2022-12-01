## Create a new component in App.js that does this

const elements = [];
for(let i = 0; i < 5; i++) {
  elements.push(<li>Item number {i}</li>)
}
return <ul>{elements}</ul>;

Hint: https://reactjs.org/docs/lists-and-keys.html

# alternativ path

If you're comfortable with Array map method:​
Insert map expression in JSX

const numbers = [0, 1, 4, 5, 6, 7];
return (

  <ul>
    {numbers.map(i => <li>Item number {i}</li>)}
  </ul>
);

## Bonus Task

- Create a List component that takes an array of numbers or strings as props.
- Inside the List component .map() over the array you passed down in props to create an <ul> list containing an <li> for each element in the array. Similiar to the _alternative path_ above.

## Bonus Task - Stretch

- Create a ListItem component that takes an item as props and returns an <li></li> element that includes the item from props.
- Update List component from the previous Bonus Task so it returns an ListItem component instead of an <li> element for each item in your array.
