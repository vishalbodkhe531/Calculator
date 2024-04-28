const btns = document.querySelectorAll(".button");

const input = document.querySelector("#input");

let speaker = new SpeechSynthesisUtterance();

let str = '';

Array.from(btns).forEach((btn) => {

    btn.addEventListener("click", (e) => {

        const firstValue = input.value[0] 

        if (btn.innerHTML === '=') {
            input.value = eval(input.value);
        }

         else if (btn.innerHTML === 'AC') {
            str = ''
            input.value = str;
        } 
            
        else if (btn.innerHTML === 'del') {

            str = str.substring(0, str.length - 1)
            
            input.value = str;
            
        }
        
        else if ((firstValue == ('*')) || (firstValue == ('-')) || (firstValue == ('+')) || (firstValue == ('/')) || (firstValue == ('%'))) {
            str = 'error'
            input.value = str;
        }
            
        else {
            str += btn.innerHTML
            input.value = '';
            input.value = str;
              
        }
        speaker.text = input.value;
        window.speechSynthesis.speak(speaker);
    });
});