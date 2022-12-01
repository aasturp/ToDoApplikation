export function MapLoopList() {
  const numbers = [0, 1, 4, 5, 6, 7];

  const listItems = numbers.map((item, key) => <li key={key}>Item number {item}</li>);
  
  return <ul>{listItems}</ul>;
}
