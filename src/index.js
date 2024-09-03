import React from "react"
import Navbar from './Navbar'
import Hero from './Hero'
import Card from './card.js'
import ReactDOM from "react-dom/client"
import './styles.css'
import Bill from './images.jpeg'


export default function App() {
    return (
        <div>
            <Navbar />
            {/* <Hero /> */}
            <Card 
                img = {Bill}
                rating = "5.0"
                reviewCount = {6}
                country = "USA"
                title = "Life lessons with Bill Gates"
                price = {136}
            />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<App />)