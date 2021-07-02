import React from "react";
import { Switch, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/Home";
import ItemPage from "./pages/Item";
import CartPage from "./pages/Cart";

import GlobalCss from "./styles/globalcss";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
	return (
		<>
			<GlobalCss />
			<ToastContainer />
			<Header />
			<Switch>
				<Route exact path='/' component={HomePage} />
				<Route path='/products/:slug' component={ItemPage} />
				<Route path='/cart' component={CartPage} />
			</Switch>
			<Footer />
		</>
	);
};

export default App;
