import Navbar from "./components/Navbar";
import Stripes from "./components/Stripes";
import Work from "./components/Work";

const App = () => {
  return (
    <div className="w-full h-screen bg-zinc-900 font-['satoshi'] text-white  ">
      <Navbar />
      <Work />
      <Stripes />
    </div>
  );
};

export default App;
