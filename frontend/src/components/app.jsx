import React from "react";
import Header from "./layout/header";
import Footer from "./layout/footer";
import { Container } from "react-bootstrap";
import HomeScreen from "../screens/HomeScreen";
import styled from "styled-components";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ProductScreen from "../screens/productScreen";

const BgTheme = styled.div`
  background-color: white;
  /* background: #485563; 
  background: -webkit-linear-gradient(
    to right,
    #29323c,
    #485563
  );
  background: linear-gradient(
    to right,
    #29323c,
    #485563
  );  */
`;

const App = () => {
  return (
    <Router>
      <BgTheme>
        <Header />
        <Container>
          <main className="py-3">
            {/* className="text-white" */}
            <h1>Welcome to Equal E-commerce🛒</h1>
            <Container>
              <Route path="/" component={HomeScreen} exact />
              <Route path="/product/:id" component={ProductScreen} />
            </Container>
          </main>
        </Container>
        <Footer />
      </BgTheme>
    </Router>
  );
};
export default App;
