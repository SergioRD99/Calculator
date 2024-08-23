import { useMemo } from "react"
import type { OrderItem } from "../types"
import { formatCurrency } from "../Helpers"

type OrdenTotalProps = {
    order : OrderItem[],
    tip : number,
    clearOrder: () => void
}
export default function OrderTotal({order, tip, clearOrder}: OrdenTotalProps)   {

    //se usa el useMemo para que se ejecute una funcion renderice cada que una de las dependencias cambie [dependencia]
    //se puede usar useCallBack solo se agrega los paretesis a las funciones y el proceso es el mismo
    const SubtotalAmount = useMemo(() => order.reduce((total, item) => total + (item.quantity * item.price), 0) , [order])
    const tipAmount = useMemo (() => SubtotalAmount *  tip,[tip, order])
    const totalAmount = useMemo (() => SubtotalAmount + tipAmount,  [tip, order])
  return (
    <>
        <div className="space-y-3">
            <h2 className="font-black text-2xl">Totales y Propina</h2>

            <p> Subtotal a paga:
                <span className="font-bold"> {formatCurrency(SubtotalAmount)}</span>
            </p>

            
            <p> Propina:
                <span className="font-bold">{formatCurrency(tipAmount)}</span>
            </p>

            
            <p> Total a Pagar:
                <span className="font-bold"> {formatCurrency(totalAmount)}</span>
            </p>
        </div>

        <button 
            className="w-full bg-black p-3 uppercase text-white font-bold mt-10
            disabled:opacity-10"
            disabled = {totalAmount === 0}
            onClick={clearOrder}>
            Guardar Orden
        </button>    
    </>
  )
}
