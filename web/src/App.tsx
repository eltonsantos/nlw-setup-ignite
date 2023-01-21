import { Habit } from "./components/Habit";

function App() {
  return (
    <>
      <Habit completed={2} />
      <Habit completed={4} />
      <Habit completed={10} />
    </>
  );
}

export default App;
