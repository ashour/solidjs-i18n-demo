export function BookList(props) {
  const bookCount = () => props.books.length;

  return (
    <>
      <h2>{bookCount} books</h2>
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
