import './App.css'
import Menu from "./components/Menu/Menu"
import {useSelector} from "react-redux"
import {BrowserRouter} from "react-router-dom"
import AppRouter from "./components/AppRouter/AppRouter"

function App() {
    const isAuth = useSelector(state => state.isAuth)

    return (
        <div className="App">

            <BrowserRouter>
                {isAuth && <Menu/>}
                <AppRouter/>
            </BrowserRouter>


        </div>
    )
}


export default App
