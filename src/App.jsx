import styles from "./App.module.css";
import { BookList } from "./BookList";
import { AddBook } from "./AddBook";
import { Show, createSignal } from "solid-js";
import { useI18n } from "./I18nProvider";

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
  const [t, changeLanguage] = useI18n();

  return (
    <>
      <div>
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            changeLanguage("ar");
          }}
        >
          Arabic
        </a>
      </div>
      <Bookshelf name={t("hello")} />
    </>
  );
}

export default App;
