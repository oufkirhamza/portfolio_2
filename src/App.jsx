import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/Home/home";
import { AboutPage } from "./pages/About/about";
import { MyProvider } from "./utils/contextProvider";
import Header from "./layouts/header";
import Footer from "./layouts/footer";
function App() {
  // animate the lights on the portfolion by opacity
  return (
    <MyProvider>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/" element={<AboutPage />} />
      </Routes>
      <Footer />
    </MyProvider>
  );
}
export default App;