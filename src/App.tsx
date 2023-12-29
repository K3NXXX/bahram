
import { Route, Routes } from "react-router-dom";
import style from "./global.scss"
import { Home } from "./pages/Home";
import { Registration } from "./pages/Registration/Registration";
import { ToastContainer } from "react-toastify";

const App:React.FC = () => {
  return (
    <div className={style.App}>
      <Routes>
        <Route path="/bahram" element={<Home/>} />
        <Route path="/bahram/registration" element={<Registration/>} />
      </Routes>

      <ToastContainer closeButton={false} position='bottom-right' />
    </div>
  );
}

export default App;
