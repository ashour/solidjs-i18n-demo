import { Show, createResource, createSignal } from "solid-js";
import { searchBooks } from "./searchBooks";
import { useMyContext } from "./MyContext";

export function AddBook(props) {
  const [input, setInput] = createSignal("");
  const [query, setQuery] = createSignal("");

  const [data] = createResource(query, searchBooks);

  const [, setValue] = useMyContext();

  return (
    <>
      <form>
        <div>
          <label for="title">Search books</label>
          <input
            type="text"
            id="title"
            value={input()}
            onInput={(e) => {
              setInput(e.currentTarget.value);
            }}
          />
        </div>
        <button
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            setQuery(input());
          }}
        >
          Search
        </button>
      </form>

      <button
        onClick={(e) => {
          e.preventDefault();
          setValue("add book value");
        }}
      >
        Set value
      </button>

      <Show when={!data.loading} fallback={<>Searching...</>}>
        <ul>
          <For each={data()}>
            {(book) => (
              <li>
                {book.title} by {book.author}{" "}
                <button
                  aria-label={`Add ${book.title} by ${book.author} to the bookshelf`}
                  onClick={(e) => {
                    e.preventDefault();
                    props.setBooks((books) => [...books, book]);
                  }}
                >
                  Add
                </button>
              </li>
            )}
          </For>
        </ul>
      </Show>
    </>
  );
}
