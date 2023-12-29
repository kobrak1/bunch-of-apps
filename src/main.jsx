import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import MainProvider from "./context/MainProvider.jsx";
import { BrowserRouter } from "react-router-dom";
import MainLayout from "./layouts/MainLayout.jsx";
import "./styles/main.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <MainProvider>
      <MainLayout>
        <App />
      </MainLayout>
    </MainProvider>
  </BrowserRouter>
);
