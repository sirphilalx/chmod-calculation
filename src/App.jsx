import "./App.css";
import Board from "./components/Board";
import Chmod from "./components/Chmod";

function App() {
  const individuals = ["Owner", "Group", "Public"];
  return (
    <>
      <main className="w-full px-4 flex flex-col justify-center items-center">
        <header className="flex flex-col md:flex-row border-b-2 p-4 justify-between items-center w-full bg-white shadow-sm">
          <img
            src="public/logomark v2 - blue bg.svg"
            className="w-16 h-16 md:w-20 md:h-20"
            alt="logo"
          />
          <h1 className="text-xl md:text-4xl font-bold text-gray-800 my-2 md:my-0">
            Chmod calculator
          </h1>
          <div className="text-sm md:text-base text-blue-500 cursor-pointer">
            Search Blog
          </div>
        </header>
        <h2 className="my-8 flex justify-center md:text-2xl">
          An awesome Chmod Calculator to convert Linux file permissions between
          different formats.
        </h2>
        <section className="flex flex-col gap-20 justify-center sm:flex-row">
          {individuals &&
            individuals.map((individual) => (
              <Chmod title={individual} key={individual} />
            ))}
        </section>
        <Board className="flex flex-col justify-center items-center" />
      </main>
      <footer className="flex justify-center items-center mt-8">
        <p>By: </p>
        <img
          src="public/wordmark v1 - white bg.svg"
          alt="logo"
          className="h-6"
        />
      </footer>
    </>
  );
}

export default App;
