import React, { useState } from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';

function CreateArea(props) {

  const [inputNote, setInputNote] = useState({
    title: "",
    content: ""
  });

  const [isExpanded, setIsExpanded] = useState(false);

  function handleChange(event) {

    const { name, value } = event.target;

    setInputNote(prevNote => {
      return { ...prevNote, [name]: value };
    });
  }

  function handleClick(event) {

    props.onAdd(inputNote)
    setInputNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  function handleExpansion() {
    setIsExpanded(true);
  }

  return (
    <div>
      <form className="create-note">
        {isExpanded && <input
          onChange={handleChange}
          value={inputNote.title}
          name="title"
          placeholder="Title" />}
        <textarea
          onClick={handleExpansion}
          onChange={handleChange}
          value={inputNote.content}
          name="content"
          placeholder="Take a note..."
          rows={isExpanded ? 3 : 1}
        />
        <Zoom in={isExpanded}>
          <Fab onClick={handleClick}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;