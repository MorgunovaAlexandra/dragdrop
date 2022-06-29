const item=document.querySelector('.item')
item.addEventListener('dragstart',dragstart)
item.addEventListener('dragend',dragend)

function dragstart(event){
console.log('dragstart')
event.target.classList('hold')
}
function dragend(){
    console.log('dragend')
}