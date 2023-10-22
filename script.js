var input = document.getElementById("input");
var words = document.getElementById("words")


function compostWord() {
    if (input.value.includes(' ') === true || input.value.includes('-') === true) {
        return false;

    } else {
        return true;
    }
}
function enviar() {

    if (input.value.charAt(0).toUpperCase() !== 'S' && input.value.charAt(0).toUpperCase() !== 'C' && compostWord()) {

        console.log(input.value);
        words.innerHTML = `<p style="margin-bottom:0; margin-top:16px; ">${input.value.charAt(0).toUpperCase() + input.value.slice(1)}</p>`;
        input.value = null;


    } else {

        words.innerHTML = `<p style="margin-bottom:0; margin-top:16px; ">Hey, não leu as regras do jogo? Você perdeu</p>`;
        console.log(input.value);
        console.log("perdeu")
        input.value = null;

    }

}


