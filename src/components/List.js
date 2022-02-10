import react from "react";
import { Card } from './Card'

function DoneImg(props) {

  if (props.done) {
    return (<img src="./assets/check.png" alt="check" width="18px"/>)
  }  else {
    return (<img src="./assets/checked.png" alt="checked" width="18px"/>)
  } 
 }

export function List(props) {

  return(
    <ul>
      {props.items.map(item => <li key={item.id}>
        <Card className={item.done ? "checked" : "item"}>
          {item.text}
          <div>
            <button onClick={() => {props.onDone(item)}}><DoneImg done={item.done}></DoneImg></button>
            <button onClick={() => {props.onItemDeleted(item)}}><img src="./assets/bin.png" alt="delet" width="18px"/></button>
          </div>
        </Card>
        </li>)}
    </ul>
  )
}