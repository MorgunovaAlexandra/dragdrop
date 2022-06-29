const item=document.querySelector('.item')
item.addEventListener('dragstart',dragstart)
item.addEventListener('dragend',dragend)

function dragstart(event){

event.target.classList.add('hold')
}
function dragend(){
    event.target.classList.remove('hold')
}