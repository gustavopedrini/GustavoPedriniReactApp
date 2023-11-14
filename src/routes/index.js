import { BrowserRouter, Route, Routes } from "react-router-dom";
import Body from "../components/Body"
import HomeScreen from "../screens/Home";
import ContactScreen from "../screens/Contact";
import AboutScreen from "../screens/About";
import Fetch from "../screens/Fetch";
import NewSingle from "../screens/NewSingle";

export default function RouterRoot(){
    return(
        <BrowserRouter>
            <Routes>
                <Route element={<Body></Body>} path="/">
                    <Route element={<HomeScreen/>} path="/"/>
                    <Route element={<ContactScreen/>} path="/contato"/>
                    <Route element={<AboutScreen/>} path="/sobre"/>
                    <Route element={<Fetch/>} path="/fetch"/>
                    <Route element={<NewSingle/>} path="/noticia/:idNoticia"/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}