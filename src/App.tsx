import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RecoilRoot } from "recoil";
import Header from "./components/Header";
import Contents from "./components/Contents";
import Footer from "./components/Footer";
import Fashion from "./components/Fashion";
import Accessory from "./components/Accessory";
import Digital from "./components/Digital";
import Cart from "./components/Cart";
import ProductDetail from "./components/ProductDetail";
import NotFound from "./components/NotFound";

function App() {
  return (
    <div className="App">
      <RecoilRoot>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" Component={Contents} />
            <Route path="/fashion/" Component={Fashion} />
            <Route path="/fashion/product/:id" Component={ProductDetail} />
            <Route path="/accessories" Component={Accessory} />
            <Route path="/accessories/product/:id" Component={ProductDetail} />
            <Route path="/digital" Component={Digital} />
            <Route path="/digital/product/:id" Component={ProductDetail} />
            <Route path="/cart" Component={Cart} />
            <Route path="/:category/product/:id" Component={ProductDetail} />
            <Route path="/*" Component={NotFound} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </RecoilRoot>
    </div>
  );
}

export default App;
