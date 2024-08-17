import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Detail from "./pages/Detail";
import Home from "./pages/Home";

const App = () => {
  return (
    <BrowserRouter>
      <div  className="min-h-screen bg-gray px-4 py-6 xl:px-16 md:px-6 md:py-8 lg:px-8 xl:py-8">
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/detail/:id" element={<Detail/>}/>
          <Route/>
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
