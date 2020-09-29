function Automata() {
    var variable = document.getElementById("compiler").value;
    console.log("DATA: " + variable);
    let words = variable.split(" ");
    let end = false;
    let contador = 0;
    
    while(!end){
    if(contador > words.length - 1){
        end = true;
    }else {
        let i = 0;
        let letter;
        while(i <= words[contador].length - 1){
            letter = words[contador].charAt(i);
            console.log(letter)
            console.log("i: "+i+"    contador:"+contador)
            switch (letter) {
                case 'c':
                    break;

                case 'l':
                    break;

                case 'e':
                    break;

                case 'a':
                    break;

                case 'r':
                    break;

                case 'o':
                    break;

                case 'o':
                    break;

                case 'n':
                    break;

                case 'd':
                    break;

                case 't':
                    break;

                case 'i':
                    break;

                case 'h':
                    break;

                case 'g':
                    break;

                case 'm':
                    break;

                case 's':
                    break;

                case 'u':
                    break;

                case 'p':
                    break;

                case 'z':
                    break;

                case 'b':
                    break;
                default:
                    break;
                }
                i++;
            }
        }
        contador++;
    }
}