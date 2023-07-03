import styles from "./App.module.css";
import { BookList } from "./BookList";
import { AddBook } from "./AddBook";
import { Show, createSignal } from "solid-js";
import { MyContext } from "./MyContext";

const initialBooks = [
  { title: "Code Complete", author: "Steve McConnell" },
  { title: "The Hobbit", author: "J.R.R. Tolkien" },
  { title: "Living a Feminist Life", author: "Sarah Ahmed" },
];

function Bookshelf(props) {
  const [books, setBooks] = createSignal(initialBooks);
  const [showForm, setShowForm] = createSignal(false);

  const toggleForm = () => setShowForm(!showForm());

  return (
    <div class={styles.App}>
      <h1>{props.name}'s Bookshelf</h1>
      <BookList books={books()} />

      <Show
        when={showForm()}
        fallback={<button onClick={toggleForm}>Add a book</button>}
      >
        <AddBook setBooks={setBooks} />
        <button onClick={toggleForm}>Close</button>
      </Show>
    </div>
  );
}

function App() {
  const [value, setValue] = createSignal("app value");

  return (
    <MyContext.Provider value={[value, setValue]}>
      <Bookshelf name="Momo" />
    </MyContext.Provider>
  );
}

export default App;
