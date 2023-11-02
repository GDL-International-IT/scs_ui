import './App.css'
import Menu from "./components/Menu/Menu"
import {useSelector} from "react-redux"
import MainPage from "./pages/MainPage/MainPage"
import LoginPage from "./pages/LoginPage/LoginPage"

function App() {

    const isAuth = useSelector(state => state.isAuth)
    console.log(isAuth)

    return (
        <div className="App">
            {
                isAuth
                    ?
                    <MainPage/>
                    :
                    <LoginPage/>


            }


        </div>
    )
}

export default App
