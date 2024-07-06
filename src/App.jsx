import Navbar from "./components/Navbar";
import Stripes from "./components/Stripes";
import Work from "./components/Work";
import Products from "./components/Products";
import Marquees from "./components/Marquees";

const App = () => {
  return (
    <div className="w-full max-h-fit bg-zinc-900 font-['satoshi'] text-white  ">
      <Navbar />
      <Work />
      <Stripes />
      <Products />
      <Marquees />
    </div>
  );
};

export default App;
