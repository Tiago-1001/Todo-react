import react from "react";

export function Card(props) {
  return <div className={props.className ? `${props.className} card` : 'card'}>
    {props.children}
  </div>
}