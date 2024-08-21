import Contents from "./Components/Contents"
import MenuItems from "./Components/MenuItems"
import { menuItems } from "./data/db"
import useOrder from "./hooks/UseOrder"

function App() {
 
  const{order,addItem} = useOrder()

  return (
      <>
        <header className="bg-teal-400 py-5">
          <h1 className="text-center text-4xl">Calculadora de propinas y Consumo</h1>
        </header>

        <main className="max-w-7xl mx-auto mt-auto py-20 grid md:grid-cols-2">
          <div className="p-5">
            <h2 className="text-center text-4xl font-black">Menu</h2>

            <div className="mt-10 space-y-3 ">
              {menuItems.map(item =>(
                <MenuItems
                key={item.id}
                item = {item}
                addItem={addItem}
                />
              ))}
            </div>
            
          </div>


          <div className="border border-dashed border-slate-300 p-5 rounded-lg space-y-10">
            <Contents
              order = {order}
            />
          </div>


          
        </main>
    </>
  )
}

export default App
