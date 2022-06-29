const item=document.querySelector('.item')
item.addEventListener('dragstart',dragstart)
item.addEventListener('dragend',dragend)

function dragstart(event){
console.log('dragstart')
event.target.classList.add('hold')
}
function dragend(){
    event.target.classList.add('hold')
}