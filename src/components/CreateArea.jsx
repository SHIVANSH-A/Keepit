import React, { useState } from "react";

function CreateArea(props) {
  const [note,setNote] = useState({
    title : "",
    content : ""
  });

  function updateText(event){
    const {name,value} = event.target ;

    setNote((prevValue) =>{
      return {
        ...prevValue,
        [name] : value
      }
    })
  }

  function handleClick(event){
      props.onAdd(note);
      setNote({
        title : "",
        content : ""
      });
      event.preventDefault();
  }
  return (
    <div>
      <form>
        <input name="title" value = {note.title} onChange={updateText} placeholder="Title" />
        <textarea name="content" value = {note.content} onChange={updateText} placeholder="Take a note..." rows="3" />
        <button onClick={handleClick}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
