import React from "react"
import { useSelector } from "react-redux"
import Front from "./component/front/Front"
import Main from "./component/main/Main"
import "./App.css"
import axios from "axios"
function App() {
    const page = useSelector((state) => state.page)

    const axiostest = () => {
        axios({
            url: "http://localhost:8000/user",
            method: "get",
            data: {
                userId: "4",
                password: "password", //object 형태
                name: "kim",
            },
        })
    }
    return (
        <div className="App">
            <header className="App-header"></header>
            {page.first ? <Main /> : <Front />}
            <button onClick={axiostest}>test</button>
        </div>
    )
}

export default App
