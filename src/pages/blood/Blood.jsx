import About from "./About";
import Hero from "./Hero";
import Search from "./Search";
import StockReport from "./StockReport";

const Blood = () => {
  return (
    <div className="space-y-4 mb-5">
      <Hero />
      <About />
      <StockReport />
      <Search />
    </div>
  );
};

export default Blood;
