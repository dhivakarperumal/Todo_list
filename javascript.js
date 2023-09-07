let buttons=document.getElementById("adds");
let myLists=document.getElementById("myList");
let input=document.getElementById("my_input");



let array=[];

buttons.addEventListener('click', ()=>{
    array.push(input.value)
    addsto(input.value) 
    input.value=''
})
 


function addsto(val1)
{
    let par=document.createElement('p')
    par.innerText=val1;
    myLists.appendChild(par)

    par.addEventListener('click',()=>{
        par.style.textDecoration='line-through';
        remove(val1)
    })

    par.addEventListener('dblclick',()=>{
        myLists.removeChild(par)
        remove(val1)
    })
    
}

function remove(array)
{
    let index=array.indexOf(val1)
    if(index>-1)
    {
        array.splice(index,1)
    }
}
