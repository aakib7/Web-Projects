let counter = 0;
document.addEventListener('DOMContentLoaded',()=>{

    document.querySelector('#new-task').onsubmit = () => {  //arrow function for adding new task

        // ckeck user cannot add empty task
        if(document.querySelector('#task').value){

        const li = document.createElement('li'); // create html element
        li.innerHTML = document.querySelector('#task').value; // assign vaule to element from input field
        document.querySelector('#tasks').append(li); // now add that elemet into ul(html)

        document.querySelector('#task').value = ''; // for next reset vaule of input field to empty
        counter ++;
        document.querySelector('#total-task').innerHTML = counter;
        }

        else{
            alert("Enter Somthing")
        }

        return false // form not sumbit so page not refresh
    }
});
