
import { useReducer } from "react"
import { useReducer } from "react"
import { useReducer } from "react"
import { ACTIONS } from "./App"
import DigitButton from "./DigitButton"
import DigitButton from "./DigitButton"
import DigitButton from "./DigitButton"
import OperationButton from "./OperationButton"
import OperationButton from "./OperationButton"
import OperationButton from "./OperationButton"
import { reducer, formatOperand, ACTIONS } from "./src/App"
export default function OperationButton({ dispatch, operation }) {
  return (
    <button onClick={() => dispatch({ type: ACTIONS.CHOOSE_OPERATION, payload: { operation } })} >
      {operation}
    </button>
  )
}
export function App() {


    const [{ current, previous, operation }, dispatch] = useReducer(reducer, {})


    return (

        <div className="calculator-grid">
            <div className="output">
                <div className="previous">{formatOperand(previous)}{operation}</div>
                <div className="current">{current}</div>
            </div>
            <button className="span-two"> onClick ={() => dispatch({ type: ACTIONS.CLEAR })} </button>
            <button> Clear Input </button>
            <OperationButton operation="/" dispatch={dispatch} />
            <DigitButton digit="1" dispatch={dispatch} />
            <DigitButton digit="2" dispatch={dispatch} />
            <DigitButton digit="3" dispatch={dispatch} />
            <OperationButton operation="+" dispatch={dispatch} />


            <DigitButton digit="4" dispatch={dispatch} />
            <DigitButton digit="5" dispatch={dispatch} />
            <DigitButton digit="6" dispatch={dispatch} />
            <OperationButton operation="-" dispatch={dispatch} />
            <DigitButton digit="7" dispatch={dispatch} />
            <DigitButton digit="8" dispatch={dispatch} />
            <DigitButton digit="9" dispatch={dispatch} />
            <DigitButton digit="0" dispatch={dispatch} />
            <OperationButton operation="*" dispatch={dispatch} />
            <DigitButton digit="." dispatch={dispatch} />

            <button> </button>
            <button className="span-two"> = </button>
        </div>
    )

}
