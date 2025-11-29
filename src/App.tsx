import React from 'react';
import { useState } from 'react';
import './App.css'; // Asigură-te că importezi stilurile

// Interfață pentru structura unei notițe
type Note= {
  id: number;
  title: string;
  content: string;
}

const App: React.FC = () => {
    const [notes, setNotes] = useState<
    Note[]
    >
    ([
  
    {
      id: 1,
      title: "Recipe Ideas",
      content: "Start with fresh tomatoes, basil, and mozzarella. Drizzle olive oil and sprinkle with sea salt. Bake at 350°F for 20 mins. Serve hot!"
    },
    {
      id: 2,
      title: "Travel Plans",
      content: "Considering a trip to the mountains this summer. The crisp air, breathtaking views, and serene environment beckon. Must pack warm clothes."
    },
    {
      id: 3,
      title: "Workout Routine",
      content: "Content: Monday: Cardio for 30 mins. Tuesday: Strength training - focus on legs. Wednesday: Yoga for flexibility. Remember to hydrate!"
    },
    {
      id: 4,
      title: "Book Recommendations",
      content: "Just finished 'The Whispering Woods'. A tale of mystery, romance, and adventure. Next on the list: 'Moonlit Dreams'. Can't wait!"
    },
    {
      id: 5,
      title: "Gardening Tips",
      content: "Water plants early in the morning or late evening. Trim the roses regularly to promote growth. Don't forget to check the pH of the soil."
    },
  ]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [selectedNote,setSelectedNote]=
  useState<Note| null>(null);

  const handleNoteClick = (note: Note) => {
    setSelectedNote(note);
    setTitle(note.title);
    setContent(note.content);
  }



  const handleAddNote = (event: React.FormEvent) => {
    event.preventDefault();
 

  const newNote: Note = {
    id: notes.length+1,
    title: title,
    content: content,

  };

  setNotes([newNote, ...notes]);
  setTitle("");
  setContent("");
  };



  return (
    // Container principal pentru aranjamentul Flexbox (formular + grilă)
    <div className="notes-app-container"> 
      
      {/* 1. Formularul de adăugare notiță (stânga) */}
      <div className="sidebar-form-container">
        <form className="note-form"
        onSubmit={(event)=>handleAddNote(event)}
        >
          <input 
            value={title}
            onChange={(event)=>
              setTitle(event.target.value)
            }
            placeholder="Title" 
            className="form-title-input"
          />
          
          <textarea 
          value={content}
            onChange={(event)=>
              setContent(event.target.value)
            }
            placeholder="Content"
            rows={10} 
            required
            className="form-content-textarea"
          ></textarea>
          
          <button type="submit" className="add-note-button">
            Add Note
          </button>
        </form>
      </div>

      {/* 2. Grila de notițe (dreapta) */}
      <div className="notes-grid">
        {notes.map((note) => (
          <div  className="note-item"
          onClick={()=>handleNoteClick(note)}>
            
            {/* Header cu butonul de ștergere 'X' */}
            <div className="note-item-header">
              <button className="delete-note-button">X</button>
            </div>
            
            <h2 className="note-title">{note.title}</h2>
            
            <p className="note-content">{note.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;