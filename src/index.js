import React from "react"
import Navbar from './Navbar'
import Hero from './Hero'
import Card from './card.js'
import ReactDOM from "react-dom/client"
import './styles.css'
import Bill from './images.jpeg'
import data from './data.js'

export default function App() {

    const cards = data.map(items => {
        return (
            <Card 
                key = {items.id}
                {...items}
            />
        )
    })
    return (
        <div>
            <Navbar />
            <Hero />
            <section className="cards--list"> 
                {cards}
            </section>
        </div>
    )
}


const rootElement = document.getElementById("root")
const root = ReactDOM.createRoot(rootElement)

root.render(<App />)