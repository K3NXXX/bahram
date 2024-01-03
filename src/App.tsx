
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { routes } from "./routes";
import { Header } from "./components/Header/Header";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getMe } from "./redux/slices/auth/authSlice";
import { AppDispatch } from "./redux/store";
import style from "./global.scss"
import { Footer } from "./components/Footer/Footer";

const App:React.FC = () => {
  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    dispatch(getMe())
  }, [dispatch])

  return (
    <div className={style.App}>

        <Header/>
        <main>
          <Routes>
            {routes.map(({path, Component}) => (
              <Route path={path} element={<Component/>}/>
            ))}
          </Routes>
        </main>
        <Footer/>

      <ToastContainer closeButton={false} position='bottom-right' />
    </div>
  );
}

export default App;
