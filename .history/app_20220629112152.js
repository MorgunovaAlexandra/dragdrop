const item=document.querySelector('.item')
item.addEventListener('dragstart',dragstart)
item.addEventListener('dragend',dragend)

function dragstart(event){
event.target.classList.add('hold')
event.target.classList.add('hide')
}
function dragend(){
    event.target.classList.remove('hold')
}