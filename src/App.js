import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import GlobalStyle from "./styles/GlobalStyle";

import Header from "./Components/Header";
import MainPage from "./Components/MainPage";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
      <GlobalStyle />
    </Router>
  );
}

export default App;
