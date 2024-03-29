import React from "react";
import Header from "./layout/header";
import Footer from "./layout/footer";
import { Container } from "react-bootstrap";
import HomeScreen from "../screens/HomeScreen";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ProductScreen from "../screens/productScreen";
import CartScreen from "../screens/cartScreen";

const App = () => {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Route path="/" component={HomeScreen} exact />
          <Route path="/product/:id" component={ProductScreen} />
          <Route path="/cart/:id?" component={CartScreen} />
        </Container>
      </main>
      <Footer />
    </Router>
  );
};
export default App;
