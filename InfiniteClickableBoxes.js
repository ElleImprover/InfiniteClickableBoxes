const btn = document.querySelector('#btnClick');
const paragraph = document.querySelector('p');

btn.addEventListener('click', (evt) => {
    const box =document.createElement("div");
    box.className='space';
    var rNum=Math.floor(Math.random()*100);
    box.innerText=rNum;
/*
    box.addEventListener('click',(evt)=>{
        if(evt.target.className==='space'){ 
            evt.target.classList.toggle('selected');
        } 
    })
    */
    paragraph.appendChild(box); 
});

paragraph.addEventListener('click',(evt)=> {
    if(evt.target.className==='space'){ 
        evt.target.classList.toggle('selected');
    }
})
