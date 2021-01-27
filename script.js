var noteNumber=1;


function addNoteToList(clickedButtonID){
    var notePanal = document.createElement('div');
    notePanal.id = `NoteCard${noteNumber}`;   
 
    var textArea = document.createElement('textarea');
    textArea.rows = '10';
    textArea.cols = "30"; 

    var buttonPanal = document.createElement('div'); 
    var likeButtonDiv = document.createElement('div');
    likeButtonDiv.className = 'glyphicon glyphicon-thumbs-up  btn btn-primary btn-sm';
    likeButtonDiv.innerHTML = `<span onclick="increaseLike(${noteNumber})"> <span class="like-count" id="${noteNumber}">0</span>`;

    var trashButtonDiv = document.createElement('div');
	 trashButtonDiv.className = 'btn ';
    trashButtonDiv.innerHTML = `<span class="glyphicon glyphicon-trash btn btn-primary btn-sm" onclick="deleteNote(${noteNumber})"> </span>`;
	
    buttonPanal.appendChild(likeButtonDiv);
    buttonPanal.appendChild(trashButtonDiv);

    notePanal.appendChild(textArea);
    notePanal.appendChild(buttonPanal);

    document.getElementById(clickedButtonID.id).appendChild(notePanal);
    
    noteNumber= noteNumber+1;
}   

function increaseLike(likeId){
    document.getElementById(likeId).innerHTML = parseInt(document.getElementById(likeId).innerHTML) +1;
}

function deleteNote(noteCard){
    document.getElementById(`NoteCard${noteCard}`).remove();
}