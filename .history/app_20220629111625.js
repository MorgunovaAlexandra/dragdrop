const item=document.querySelector('.item')
item.addEventListener('dragstart',dragstart)
item.addEventListener('dragend',dragend)

function dragstart(event){
console.log('dragstart')
console.log(event.target)
}
function dragend(){
    console.log('dragend')
}