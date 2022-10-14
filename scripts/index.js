const state={
    tasklist:[]
};

 const taskContents=document.querySelector(".task__contents");
 const taskModal=document.querySelector(".task__modal_body");

const htmlTaskContent=({id,title,description,type,url})=>
     ` <div class='col-md-6 col-lg-4 nt-3' id=${id} key=${id}>
       <div class='card shadow-sm task__card'>
       <div class='card-header gap-2 d-flex justify-content-end task__card__header'>
         <button type='button' class='btn btn-outline-info mr-2' name=${id}>
         <i class='fas fa-pencil-alt' name=${id}></i> </button>

         <button type="button" class='btn btn-outline-danger mr-2' name=${id}>
         <i class='fas fa-trash-alt' name=${id}></i> </button>
        </div>
         <div class='card-body'>
         ${
            url && `<img width='100%' src=${url} alt='card image ap' 
            class='card-image-top md-3 rounded-lg' />`
         }
         <h4 class='task__card_title'>${title}</h4>
         <p class='description trim-3-lines text-muted' data-gram_editor='false'>
         ${description}</p>
         <div class='tags text-white d-flex flex-wrap'>
           <span class='badge bg-primary m-1'>${type}</span>
         
         </div>
         </div>
         <div class='card-footer>
         <button type='button' class='btn btn-outline-primary float-right'
         data-bs-toogle='modal'
         data-ba-target='#showTask'>open task </button>

         </div>

     </div>
     </div>
        
     `;

     const htmlModalContent=({id,tittle,description,url}) =>{
      const date =new Date(parseInt(id));
      return `
      <div id=${id}> 
      ${
        url&& `<img width='100%' src=${url} alt='card image ap' 
        class='img-fluid place__holder__image mb-3' />`
      }
      <strong class='text-sm-muted'>Created on ${date.toDateString()}</strong>
      <h2 class='my-3'>${tittle}</h2>
      <p class='Lead'>${description}</p>

      </div>    
      
      `;

     };
     const updateLocalStorage=()=>{
      localStorage.setItem('tasks',JSON.stringify({ 
        tasks:state.tasklist,
      })
      );
     };

     const LoadInitialData=()=>{
     
      const LocalStorageCopy=JSON.parse(localStorage.tasks);
      
      if(LocalStorageCopy) state.tasklist= LocalStorageCopy.tasks;

      state.tasklist.map((cardDate) =>{
        taskContents.insertAdjacentHTML('beforeend',htmlTaskContent(cardDate));


      });
     };

     const handleSubmit=(event)=>{
     const id=`${Date.now()}`;
     const input={
      url: document.getElementById('imageUrl').value,
      tittle:document.getElementById('taskTitle').value,
      description:document.getElementById('taskDescription').value,
      type: document.getElementById('tags').value,



      };

      taskContents.insertAdjecentHTML(
        "beforeend",htmlTaskContent({
          ...input,
          id,
        })
      );

      state.tasklist.push({...input,id});
      updateLocalStorage();
        
    };


     




