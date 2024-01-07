
import { Route, Routes, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { routes } from "./routes";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getMe } from "./redux/slices/auth/authSlice";
import { AppDispatch } from "./redux/store";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header/Header";
import { HomeHeader } from "./components/Header/HomeHeader/HomeHeader";
import style from "./global.module.scss"

const App:React.FC = () => {
  const dispatch = useDispatch<AppDispatch>()
  const location = useLocation();
  const [isHome, setIsHome] = useState(false)

  useEffect(() => {
    dispatch(getMe())
  }, [dispatch])

  useEffect(() => {
  }, [dispatch])

  useEffect(() => {
    const currentPath = location.pathname;
    setIsHome(currentPath === "/bahram");
  }, [location.pathname]);

  return (
    <div className={style.App}>
      {isHome ? <HomeHeader/> : <Header/>}
        <main className={style.main}>
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
