const item=document.querySelector('.item');
const placeholders=document.querySelectorAll('.placeholder')


item.addEventListener('dragstart',dragstart)
item.addEventListener('dragend',dragend)


placeholders.

function dragstart(event){
event.target.classList.add('hold')
setTimeout(()=>event.target.classList.add('hide')
,0)


}
function dragend(event){
    event.target.classList.remove('hold')
    event.target.classList.remove('hide')
}