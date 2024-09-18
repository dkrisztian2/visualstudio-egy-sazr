import DessertCard from "../components/DessertCard"
import { DesssertCardProp } from "../components/DessertCard"

const home = () => {
  let lista: DesssertCardProp [] = [
    {name:"Aláspite", category:"pie", price: 3}
  ]
  return (
    <div>
        <section>
            <h1>Desserts</h1>
            <div className="cards.grid">
                {
                    lista.map((suti, index) => <DessertCard {...suti}/>)
                }
            </div>
        </section>
    </div>
  )
}

export default home