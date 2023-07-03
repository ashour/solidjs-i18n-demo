import { useContext } from "solid-js";
import { useMyContext } from "./MyContext";

export function BookList(props) {
  const [value] = useMyContext();
  const bookCount = () => props.books.length;

  return (
    <>
      <h2>{bookCount} books</h2>
      <h3>Context value: {value}</h3>
      <ul>
        <For each={props.books}>
          {(book) => (
            <li>
              {book.title}{" "}
              <span style={{ "font-style": "italic" }}>({book.author})</span>
            </li>
          )}
        </For>
      </ul>
    </>
  );
}
