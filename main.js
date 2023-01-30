const body = document.querySelector('body');
const count = document.querySelector('.num');
const add = document.querySelector('.add');
const lower = document.querySelector('.lower');

var num = 0;
add.addEventListener("click",function(){
    num = num+1;
    count.innerHTML = num;
    color();

});

lower.addEventListener("click",function(){
    num = num-1;
    count.innerHTML = num;
    color();
  
});

function color() {
    if (num<0){
        count.style.color ="red"
    }
    else if (num>0){
        count.style.color ="green"
    }
    else{
        count.style.color ="gray"
    }
};







