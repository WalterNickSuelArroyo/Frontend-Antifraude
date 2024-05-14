import React from "react";
import ReactDOM from "react-dom";
import Footer from "configurar_reglas/Footer";
import TransactionsTable from "./TransactionsTable";
import "./index.scss";

const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <TransactionsTable />
    <Footer />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
