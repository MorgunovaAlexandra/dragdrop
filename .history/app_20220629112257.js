const item=document.querySelector('.item')
item.addEventListener('dragstart',dragstart)
item.addEventListener('dragend',dragend)

function dragstart(event){
event.target.classList.add('hold')
setTimeout(()=>{
    
},0)
event.target.classList.add('hide')
}
function dragend(event){
    event.target.classList.remove('hold')
    event.target.classList.remove('hide')
}