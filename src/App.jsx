import Pickoptions from "./components/PickOptions";
import ThemeToggle from "./components/ThemeToggle";
import ThemeProvider from "./context/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <div className="bg-gray-50 dark:bg-gray-900 flex items-start justify-center h-screen p-4">
        <Pickoptions />
        <ThemeToggle />
      </div>
    </ThemeProvider>
  );
}

export default App;
