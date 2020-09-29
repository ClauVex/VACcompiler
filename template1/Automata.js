function Automata() {
    var input = document.getElementById("compiler").value;
    let words = input.split(" ");
    let end = false;
    let counter = 0;
    let actualState = 0;
    let isValid = false;
    let finalValues = [12, 20, 23, 31, 46, 59, 62, 66, 67];

    while (!end) {
        if (ccounter > words.length - 1 || words[counter] == "") {
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
                        } else if (letter == 'i') {
                            actualState = 4;
                        } else if (letter == 'o') {
                            actualState = 6;
                        } else if (letter == 's') {
                            actualState = 8;
                        } else if (letter = 'm') {
                            actualState = 5;
                        }
                        break;

                    case 1:
                        if (letter == 'l') {
                            actualState = 9;
                        } else if (letter == 'o') {
                            actualState = 13;
                        }
                        break;

                    case 2:
                        break;

                    case 3:
                        break;

                    case 4:
                        if (letter == 'n') {
                            actualState = 32;
                        } else if (letter = 'g') {
                            actualState = 27;
                        }
                        break;

                    case 5:
                        if (letter == 'e') {
                            actualState = 37;
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
                        }
                        break;

                    case 10:
                        if (letter == 'a') {
                            actualState = 11;
                        }
                        break;

                    case 11:
                        if (letter == 'r') {
                            actualState = 12;
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
                    }else {
                        actualState = -1;
                    }
                break;
        
                case 22:
                    if(letter == 'a'){
                        actualState = 23;
                    }else {
                        actualState = -1;
                    }
                break;
        
                case 23:
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
                break;
        
                case 28:
                break;
        
                case 29:
                break;
        
                case 30:
                break;
        
                case 31:
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
                        actualState = 68;
                    }else {
                        actualState = -1;
                    }
                break;
        
                case 37:
                break;
        
                case 38:
                break;
        
                case 39:
                break;
        
                case 40:
                break;
        
                case 41:
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
                break;
        
                case 64:
                break;
        
                case 65:
                break;
        
                case 66:
                break;
        
                case 67:
                break;
        
                case 68:
                    actualState = -1;
                break;

                default:
                    actualState = -1;
                break;
                }
                i++;
            }
        }
        if(counter < words.length && !end) {
            for(i in finalValues){
                if(finalValues[i] == actualState){
                    isValid = true;
                    textAlert += "La cadena " + "'" +words[counter] + "'" + " es correcta\n";
                }
            }
            if (!isValid){
                textAlert += "La cadena " + "'" +words[counter]+ "'" +" es incorrecta\n";
            }
        }
        counter++;
        isValid = false;
        if(counter < words.length){
            end = false;
        }
    }
    alert(textAlert);
    
}