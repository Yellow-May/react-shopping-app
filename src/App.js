import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// import shop context
import { ShopProvider } from "./context/ShopContext";

// import components
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Home } from "./components/Pages/Home";
import { Shop } from "./components/Pages/Shop";
import { Goods } from "./components/Pages/Goods";
import { Cart } from "./components/Pages/Cart";

// import css
import "./css/app.css";

const App = () => {
  return (
    <Router>
      <ShopProvider>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/shop" component={Shop} />
          <Route path="/shop/:id" component={Goods} />
          <Route path="/cart" component={Cart} />
        </Switch>
        <Footer />
      </ShopProvider>
    </Router>
  );
};

export default App;
