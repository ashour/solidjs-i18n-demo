import { createSignal } from "solid-js";

export function Counter() {
  const [count, setCount] = createSignal(0);

  return (
    <div>
      Current count: {count()}
      <button onClick={() => setCount(count() + 1)}>Increment</button>
    </div>
  );
}
