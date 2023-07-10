import AppRoute from "./routes/index";
import { Header, Footer } from "./components/index";

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <AppRoute />
      <Footer />
    </div>
  );
}

export default App;
