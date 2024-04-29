const btns = document.querySelectorAll(".button");

const input = document.querySelector("#input");

let speaker = new SpeechSynthesisUtterance();

let str = "";

const voiceGenerat = (voice) => {
  speaker.text = voice;
  window.speechSynthesis.speak(speaker);
};

Array.from(btns).forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const firstValue = input.value[0];

    if (btn.innerHTML === "=") {
      input.value = eval(input.value);
      str = input.value
      voiceGenerat(`Answer is ${input.value}`);
    }
    
    else if (btn.innerHTML === "AC") {
      str = "";
        input.value = str;
        voiceGenerat(`All clear`);
    }
    
    else if (btn.innerHTML === "del") {
      str = str.substring(0, str.length - 1);
        input.value = str;
          voiceGenerat(`delete`);
    }
    
    else if (
      firstValue == "*" ||
      firstValue == "+" ||
      firstValue == "/" ||
      firstValue == "%"
    ) {
      str = "error";
        input.value = str;
        voiceGenerat(`Please give me number`);
    }
    
    else {
      str += btn.innerHTML;
      input.value = "";
      input.value = str;
      voiceGenerat(btn.innerHTML);
    }
  });
});
