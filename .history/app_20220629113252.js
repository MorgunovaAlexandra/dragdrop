const item=document.querySelector('.item');
const placeholders=document.querySelectorAll('.placeholder')


item.addEventListener('dragstart',dragstart)
item.addEventListener('dragend',dragend)


placeholders.forEach((placeholder)=>{
placeholder.addEventListener('dragover',dragover)
placeholder.addEventListener('dragenter',dragenter)
placeholder.addEventListener('dragleave',dragleave)
placeholder.addEventListener('drop',dragdrop)
})

function dragstart(event){
event.target.classList.add('hold')
setTimeout(()=>event.target.classList.add('hide')
,0)

}
function dragend(event){
    event.target.classList.remove('hold')
    event.target.classList.remove('hide')
}

function dragover(e){
e.prevent
}
function dragenter(e){
    e.target.classList.add('hovered')
    
}
function dragleave(e){
    e.target.classList.remove('hovered')
}
function dragdrop(e){
    e.target.append(item)
}