function Automata() {
    var input = document.getElementById("compiler").value;
    let words = input.split(" ");
    if(words.length == 1){
        words = input.split("\n");
    }
    let end = false;
    let counter = 0;
    let actualState = 0;
    let isValid = false;
    let finalValues = [12, 20, 23, 31, 46, 59, 62, 66, 67];
    let textAlert = "";

    while (!end) {
        if (counter > words.length - 1) {
            end = true;
        } else {
            let i = 0;
            let letter;
            while (i <= words[counter].length - 1) {
                    letter = words[counter].charAt(i);
                    switch (actualState) {
                    case 0:
                        if (letter == 'c') {
                            actualState = 1;
                        } else if(letter == 'i') {
                            actualState = 4;
                        } else if(letter == 'o') {
                            actualState = 6;
                        } else if(letter == 's') {
                            actualState = 8;
                        } else if(letter == 'm') {
                            actualState = 5;
                        }else if(letter == 'd') {
                            actualState = 2;
                        } else if(letter == 'r') {
                            actualState = 7;
                        } else if(letter == 'e') {
                            actualState = 3;
                        }  
                        break;

                    case 1:
                        if (letter == 'l') {
                            actualState = 9;
                        } else if (letter == 'o') {
                            actualState = 13;
                        } else {
                            actualState = - 1;
                        }
                        break;

                    case 2:
                        if(letter == 'a'){
                            actualState = 21;
                        }
                        break;

                    case 3:
                        if(letter == 'n'){
                            actualState = 24;
                        } else {
                            actualState = - 1;
                        }
                        break;

                    case 4:
                        if (letter == 'n') {
                            actualState = 32;
                        } else if (letter = 'g') {
                            actualState = 27;
                        } else {
                            actualState = - 1;
                        }
                        break;

                    case 5:
                        if (letter == 'e') {
                            actualState = 37;
                        } else {
                            actualState = - 1;
                        }
                        break;

                    case 6:
                        if (letter == 'u') {
                            actualState = 42;
                        } else {
                            actualState = -1;
                        }
                        break;

                    case 7:
                        if(letter == 'n'){
                            actualState = 47;
                        }else {
                            actualState = -1;
                        }
                        break;

                    case 8:
                        if (letter == 't') {
                            actualState = 60;
                        } else if (letter == 'u') {
                            actualState = 52;
                        } else {
                            actualState = -1;
                        }
                        break;

                    case 9:
                        if (letter == 'e') {
                            actualState = 10;
                        } else {
                            actualState = - 1;
                        }
                        break;

                    case 10:
                        if (letter == 'a') {
                            actualState = 11;
                        } else {
                            actualState = - 1;
                        }
                        break;

                    case 11:
                        if (letter == 'r') {
                            actualState = 12;
                        } else {
                            actualState = - 1;
                        }
                        break;

                    case 12:
                        actualState = -1;
                    break;
            
                    case 13:
                        if(letter == 'n'){
                            actualState = 14;
                        }else {
                            actualState = -1;
                        }
                    break;
            
                    case 14:
                        if(letter == 'd'){
                            actualState = 15;
                        }else {
                            actualState = -1;
                        }
                    break;
            
                    case 15:
                        if(letter == 'i'){
                            actualState = 16;
                        }else {
                            actualState = -1;
                        }
                    break;
            
                    case 16:
                        if(letter == 't'){
                            actualState = 17;
                        }else {
                            actualState = -1;
                        }
                    break;
            
                    case 17:
                        if(letter == 'i'){
                            actualState = 18;
                        }else {
                            actualState = -1;
                        }
                    break;
            
                    case 18:
                        if(letter == 'o'){
                            actualState = 19;
                        }else {
                            actualState = -1;
                        }
                    break;
            
                    case 19:
                        if(letter == 'n'){
                            actualState = 20;
                        }else {
                            actualState = -1;
                        }
                    break;
            
                    case 20:
                        actualState = -1;
                    break;
            
                    case 21:
                        if(letter == 't'){
                            actualState = 22;
                        }
                    break;
            
                    case 22:
                        if(letter == 'a'){
                            actualState = 23;
                        }
                    break;
            
                    case 23:
                        actualState = -1;
                    break;
            
                    case 24:
                        if(letter == 't'){
                            actualState = 25;
                        }else {
                            actualState = -1;
                        }
                    break;
            
                    case 25:
                        if(letter == 'e'){
                            actualState = 26;
                        }else {
                            actualState = -1;
                        }
                    break;
            
                    case 26:
                        if(letter == 'r'){
                            actualState = 12;
                        }else {
                            actualState = -1;
                        }
                    break;
            
                    case 27:
                        if(letter == 'n'){
                            actualState = 28;
                        }else {
                            actualState = -1;
                        }
                    break;
            
                    case 28:
                        if(letter == 'o'){
                            actualState = 29;
                        }else {
                            actualState = -1;
                        }
                    break;
            
                    case 29:
                        if(letter == 'r'){
                            actualState = 30;
                        }else {
                            actualState = -1;
                        }
                    break;
            
                    case 30:
                        if(letter == 'e'){
                            actualState = 31;
                        }else {
                            actualState = -1;
                        }
                    break;
            
                    case 31:
                        actualState = -1;
                    break;
            
                    case 32:
                        if(letter == 'h'){
                            actualState = 33;
                        }else {
                            actualState = -1;
                        }
                    break;
            
                    case 33:
                        if(letter == 'e'){
                            actualState = 34;
                        }else {
                            actualState = -1;
                        }
                    break;
            
                    case 34:
                        if(letter == 'r'){
                            actualState = 35;
                        }else {
                            actualState = -1;
                        }
                    break;
            
                    case 35:
                        if(letter == 'i'){
                            actualState = 36;
                        }else {
                            actualState = -1;
                        }
                    break;
            
                    case 36:
                        if(letter == 't'){
                            actualState = 67;
                        }else {
                            actualState = -1;
                        }
                    break;
            
                    case 37:
                        if(letter == 'm'){
                            actualState = 38;
                        }else {
                            actualState = -1;
                        }
                    break;
            
                    case 38:
                        if(letter == 'o'){
                            actualState = 39;
                        }else {
                            actualState = -1;
                        }
                    break;
            
                    case 39:
                        if(letter == 'r'){
                            actualState = 40;
                        }else {
                            actualState = -1;
                        }
                    break;
            
                    case 40:
                        if(letter == 'i'){
                            actualState = 41;
                        }else {
                            actualState = -1;
                        }
                    break;
            
                    case 41:
                        if(letter == 'z'){
                            actualState = 30;
                        }else {
                            actualState = -1;
                        }
                    break;
            
                    case 42:
                        if(letter == 't'){
                            actualState = 43;
                        } else{
                            actualState = -1;
                        }
                    break;
            
                    case 43:
                        if (letter == 'p') {
                            actualState = 44;
                        } else{
                            actualState = -1;
                        }
                    break;
            
                    case 44:
                        if (letter == 'u') {
                            actualState = 45;
                        } else{
                            actualState = -1;
                        }
                    break;
            
                    case 45:
                        if (letter == 't') {
                            actualState = 46;
                        } else{
                            actualState = -1;
                        }
                    break;
            
                    case 46:
                        actualState = -1;
                    break;
            
                    case 47:
                        if(letter == 'u'){
                            actualState = 48;
                        }else {
                            actualState = -1;
                        }
                    break;
            
                    case 48:
                        if(letter == 'm'){
                            actualState = 49;
                        }else {
                            actualState = -1;
                        }
                    break;
            
                    case 49:
                        if(letter == 'b'){
                            actualState = 50;
                        }else {
                            actualState = -1;
                        }
                    break;
            
                    case 50:
                        if(letter == 'e'){
                            actualState = 51;
                        }else {
                            actualState = -1;
                        }
                    break;
            
                    case 51:
                        if(letter == 'r'){
                            actualState = 12;
                        }else {
                            actualState = -1;
                        }
                    break;
            
                    case 52:
                        if (letter == 'p') {
                            actualState = 53;
                        } else{
                            actualState = -1;
                        }
                    break;
            
                    case 53:
                        if (letter == 'e') {
                            actualState = 54;
                        } else{
                            actualState = -1;
                        }
                    break;
            
                    case 54:
                        if (letter == 'r') {
                            actualState = 55;
                        } else{
                            actualState = -1;
                        }
                    break;
            
                    case 55:
                        if (letter == 's') {
                            actualState = 56;
                        } else{
                            actualState = -1;
                        }
                    break;
            
                    case 56:
                        if (letter == 'e') {
                            actualState = 57;
                        } else{
                            actualState = -1;
                        }
                    break;
            
                    case 57:
                        if (letter == 'd') {
                            actualState = 58;
                        } else{
                            actualState = -1;
                        }
                    break;
            
                    case 58:
                        if (letter == 'e') {
                            actualState = 59;
                        } else{
                            actualState = -1;
                        }
                    break;
            
                    case 59:
                        actualState = -1;
                    break;
            
                    case 60:
                        if (letter == 'o') {
                            actualState = 61;
                        } else if (letter == 'e') {
                            actualState = 63;
                        } else{
                            actualState = -1;
                        }
                    break;
            
                    case 61:
                        if (letter = 'p') {
                            actualState = 62;
                        } else{
                            actualState = -1;
                        }
                    break;
            
                    case 62:
                        actualState = -1;
                    break;
            
                    case 63:
                        if (letter = 'p') {
                            actualState = 64;
                        } else{
                            actualState = -1;
                        }
                    break;
            
                    case 64:
                        if (letter = 't') {
                            actualState = 65;
                        } else{
                            actualState = -1;
                        }
                    break;
            
                    case 65:
                        if (letter = 'o') {
                            actualState = 66;
                        } else{
                            actualState = -1;
                        }
                    break;
            
                    case 66:
                        actualState = -1;
                    break;
            
                    case 67:
                        actualState = -1;
                    break;

                    default:
                        actualState = -1;
                    break;
                }
                i++;
                
            } 

            isValid = false;
            for(z in finalValues){
                if(actualState == finalValues[z]){
                    isValid = true;
                }
            }

            textAlert += "La cadena '" + words[counter] + "' ";
            if(isValid){
                textAlert += "es correcta.\n";
            } else{
                textAlert += "es incorrecta.\n"
            }

        }
        counter++;
        actualState = 0;
    }
    alert(textAlert);
    
}
