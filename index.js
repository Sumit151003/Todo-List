let input = document.querySelector('input');
let btn = document.querySelector('.addTaskBtn');
let ul = document.querySelector('ul');

btn.addEventListener('click', ()=>{
    let li = document.createElement('li');

    let dltBtn = document.createElement('button');
    dltBtn.textContent='Delete';
    dltBtn.classList.add('dltBtn');

    if(input.value != ""){
        li.textContent = input.value;
        li.appendChild(dltBtn);
        ul.appendChild(li);
        input.value = "";
    }
    
});


ul.addEventListener("click", (event) => {
    if (event.target.classList.contains('dltBtn')) {
        // Perform delete action here
        console.log("Task Deleted");
        event.target.parentNode.remove(); // Remove the parent <li> element
    }
});
