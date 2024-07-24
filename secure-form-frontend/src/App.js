import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header.jsx";
import CreateAcc from "./pages/createAcc.jsx";
import LogIn from "./pages/logIn.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route index element={<CreateAcc />}></Route> {/*Makes Create Account the default page*/}
          <Route path="/login" element={<LogIn />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App;
