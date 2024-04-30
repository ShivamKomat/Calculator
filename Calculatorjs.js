var screen = document.querySelector('#screen');
var btn = document.querySelectorAll('.btn');

/*============ For getting the value of btn, Here we use for loop ============*/
for (item of btn) {
    item.addEventListener('click', (e) => {
        btntext = e.target.innerText;

        if (btntext == '×') {
            btntext = '*';
        }

        if (btntext == '÷') {
            btntext = '/';
        }
        screen.value += btntext;
    });
} 
  
function sin(){
    screen.value=math.sin(screen.value);
} 
function cos(){
    screen.value=math.cos(screen.value);
}
function tan(){
    screen.value=math.tan(screen.value);
}
function pow(){
    screen.value=math.pow(screen.value ,2);
}
function sqrt(){
    screen.value=math.sqrt(screen.value,2);
} 
function pi(){
    screen.value=3.14159265359;
}
function e(){
    screen.value=2.71828;
}  


function fact() {
    var i, num, f;
    f = 1
    num = screen.value;
    for (i = 1; i <= num; i++) {
        f = f * i;
    }
    i = i - 1;
    screen.value = f;
}
function backspc() {
    screen.value = screen.value.substr(0, screen.value.length - 1);
}
 
var aud = new Audio()  
aud.src="./audio/tap-notification-180637.mp3"
 function fn() {
                    aud.play(); 
      }    
     
let audio=document.querySelectorAll(".btn")  
console.log(audio)
for(i=0 ; i<=audio.length-1; i++){
     audio[i].addEventListener("click" , fn)
}

