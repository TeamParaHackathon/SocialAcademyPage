const agregarActivar = (id)=>{
    document.getElementById(id).classList.toggle("active");
}

document.getElementById("inputExtra").addEventListener("click", ()=>agregarActivar("formularioExtra"));

document.getElementById("inputHabilidades").addEventListener("click", ()=>agregarActivar("formularioHabilidades"));

document.getElementById("inputExperiencia").addEventListener("click", ()=>agregarActivar("formularioExperiencia"));

document.getElementById("inputIdioma").addEventListener("click", ()=>agregarActivar("formularioIdioma"));


showNotes("ContenedorExtracurriculares");
//showNotes("ContenedorIdiomas");

//Funcionalidad Boton agregar
const btnAgregarTexto = (idBoton, idContenedor)=>{
    let addTxt=document.getElementById(idBoton);
    let notes=localStorage.getItem("notes");
    if(notes==null){
        notesObj=[];
    }
    else{
        notesObj=JSON.parse(notes);
    }
    notesObj.push(addTxt.value);
    localStorage.setItem("notes",JSON.stringify(notesObj));
    addTxt.value="";
        
    showNotes(idContenedor);
}

//Botones agregar click
document.getElementById("btnExtra").addEventListener("click", ()=>btnAgregarTexto("txtExtra", "ContenedorExtracurriculares"));
//document.getElementById("btnIdioma").addEventListener("click", ()=>btnAgregarTexto("txtIdioma", "ContenedorIdiomas"));




//Imprimir las notas agregadas desde el formulario
//Show notes
function showNotes(idContenedor){
    let notes=localStorage.getItem("notes");
    if(notes==null){
        notesObj=[];
    }
    else{
        notesObj=JSON.parse(notes);
      
    }
    let html="";
    notesObj.forEach((element,index) => {
        html+=
        `<div class="noteCard individual">
           
                <h5 class="contenidoHabilidad">${element}</h5>
                <button id="${index}" onclick="deleteNotes(this.id, '${idContenedor}')" class="btnEliminarHabilidad"><i class="far fa-times-circle"></i></button>
            
        </div>`;
        
    });
    let notesEle=document.getElementById(idContenedor);
    if(notesObj.length!=0){
        notesEle.innerHTML=html;
    }
    else{
        notesEle.innerHTML=`Aun no hay contenido agregado`;
    }
}


//Boton eliminar notas agregadas
function deleteNotes(index, idContenedor){
    console.log(idContenedor);
    let notes=localStorage.getItem("notes");
    if(notes==null){
        notesObj=[];
    }
    else{
        notesObj=JSON.parse(notes);
    }
    notesObj.splice(index,1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    showNotes(idContenedor);
}


