let text = document.getElementById('az');
let buton = document.getElementById('butonche');

let count =0;
buton.addEventListener("click",function(){
count++;
text.textContent=count;

})
