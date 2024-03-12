import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Aposta from "./pages/Aposta";
import Estatisticas from "./pages/Estatisticas";
import "./App.css";

export default function App() {
	return (
	  <Router>
		<Routes>
		  <Route path="/" element={<Layout />}>
			<Route index element={<Home />} />
			<Route path="stats" element={<Estatisticas />} />
			<Route path="aposta" element={<Aposta />} />
		  </Route>
		</Routes>
	  </Router>
	);
  }
