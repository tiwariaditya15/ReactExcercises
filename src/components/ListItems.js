import { useState } from "react";
const sports = [
  { id: 1, sport: "Tennis", like: 1 },
  { id: 2, sport: "Swimming", like: 1 },
  { id: 3, sport: "Squash", like: 1 },
  { id: 4, sport: "Gym", like: 1 },
  { id: 5, sport: "Badminton", like: 1 },
  { id: 6, sport: "Table Tennis", like: 1 },
  { id: 7, sport: "Snooker", like: 1 }
];
function Item({ item, addLike }) {
  return (
    <section
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "1rem"
      }}
    >
      <span>{item.sport}</span>
      <span>{item.like}</span>
      <span>
        <button onClick={(e) => addLike(e, item.id)}>Like</button>
      </span>
    </section>
  );
}
export default function ListItems({}) {
  const [lists, setLists] = useState([...sports]);
  const addLike = (e, id) => {
    setLists(
      lists.map((list) => {
        if (list.id === id) {
          return {
            ...list,
            like: list.like + 1
          };
        }
        return {
          ...list
        };
      })
    );
  };
  return (
    <div>
      <section
        style={{
          display: "flex",
          justifyContent: "space-between"
        }}
      >
        <span>Sport</span>
        <span>Do you like?</span>
        <span>Likes</span>
      </section>
      {lists.map((listItem, index) => {
        return <Item key={listItem.id} item={listItem} addLike={addLike} />;
      })}
    </div>
  );
}
