import react, { useState } from "react";

export function TodoForm(props) {
  const [text, setText] = useState('');

  function handleChange(event) {
    let text = event.target.value;

    setText(text);
  }

  function addItem(event) {
    event.preventDefault();
    if (text){
      props.onAddItem(text);
      setText('');
    }
  }

  return(
    <form>
      <input onChange={handleChange} type="text" value={text}/>
      <button onClick={addItem}>Add</button>
    </form>
  )
}