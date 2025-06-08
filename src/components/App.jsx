import React , {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes,setNotes] = useState([]);
  function addNote(note){
    setNotes((prevValue) =>{
      return [...prevValue,note];
    });
  }

  function deleteNote(id){
    setNotes(prevValue=>{
      return prevValue.filter((value,idx)=>{
        return idx!==id;
      });
    })
  }
  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote}/>
      {notes.map((currNote,index)=>{
       return <Note key={index} id ={index} title={currNote.title} content={currNote.content} onDelete={deleteNote}/>
      })}
      <Footer />
    </div>
  );
}

export default App;
