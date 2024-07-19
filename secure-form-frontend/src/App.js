import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header.jsx";
import Form from "./components/Form.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route index element={<Form />}></Route> {/*Makes Home the default page*/}
          {/* <Route path="/login" element={<Login />}></Route> */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App;
