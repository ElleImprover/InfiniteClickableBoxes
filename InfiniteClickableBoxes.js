const btn = document.querySelector('#btnClick');
const paragraph = document.querySelector('p');

btn.addEventListener('click', (evt) => {
    const box =document.createElement("div");
    box.className='space';
    var rNum=Math.floor(Math.random()*100);
    box.innerText=rNum;
    paragraph.appendChild(box); 
});

paragraph.addEventListener('click',(evt)=> {
    console.log(evt.target.className);
    // lookup classList and the contains function
    if(evt.target.classList.contains('space')){  
    evt.target.classList.toggle('selected');
    }
})
