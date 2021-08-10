
document.querySelector('#add').onclick = function(){
    //Validation forempty input field
    if(document.querySelector('#newTask input').value.length == 0){
        alert("Plz Enter a Task") 
    }
    //Adding a Task
    else{
        document.querySelector('#tasks').innerHTML += `   <div class="task">
        <span id="taskname">
            ${ document.querySelector('#newTask input').value}
        </span>
        <button class="Delete">
            <i class='bx bxs-trash-alt' ></i>
        </button>
    </div> 
    `;   

    //Deleting Task
        var current_tasks = document.querySelectorAll(".Delete");
        for(var i=0; i<current_tasks.length; i++){
            current_tasks[i].onclick = function(){
                this.parentNode.remove();
            }
        }

        //Cross a completed Task
        var tasks = document.querySelectorAll(".task");
        for(var i = 0 ; i<tasks.length; i++){
            tasks[i].onclick = function(){
                this.classList.toggle('completed');
            }
        }
        //Clear input field after entry
        document.querySelector("#newTask input").value = "";
    }
}