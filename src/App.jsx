import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/Home/home";
import { MyProvider } from "./utils/contextProvider";
import Footer from "./layouts/footer";
import ProjectDetails from "./pages/Home/components/project_id";
function App() {
  // animate the lights on the portfolion by opacity
  return (
    <MyProvider>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/project/:id" element={<ProjectDetails />} />
      </Routes>
      <Footer />
    </MyProvider>
  );
}
export default App;
