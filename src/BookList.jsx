import { useContext } from "solid-js";
import { useMyContext } from "./MyContext";
import { useI18n } from "./I18nProvider";

export function BookList(props) {
  const [t] = useI18n();
  const bookCount = () => props.books.length;

  return (
    <>
      <h2>{bookCount} books</h2>
      <h3>{t("hello")}</h3>
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
