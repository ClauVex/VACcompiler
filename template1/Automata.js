function Automata() {
    var input = document.getElementById("compiler").value;
    let words = input.split(" ");
    let end = false;
    let counter = 0;
    let actualState = 0;
    let isValid = false;
    let finalValues = [12,20,23,31,46,59,62,67,68];
    
    while(!end){
    if(counter > words.length - 1){
        end = true;
    }else {
        let i = 0;
        let letter;
        while(i <= words[counter].length - 1){
            letter = words[counter].charAt(i);
            switch(actualState){
                case 0:
                    if(letter == 'c'){
                        actualState = 1;
                    } else if(letter == 'i'){
                        actualState = 4;
                    }
                break;
        
                case 1:
                    if(letter == 'l'){
                        actualState = 9;
                    } else if(letter == 'o'){
                        actualState = 13;
                    }
                break;
        
                case 2:
                break;
        
                case 3:
                break;
        
                case 4:
                    if(letter == 'n'){
                        actualState = 32;
                    }
                break;
        
                case 5:
                break;
        
                case 6:
                break;
        
                case 7:
                break;
        
                case 8:
                break;
        
                case 9:
                    if(letter == 'e'){
                        actualState = 10;
                    }
                break;
        
                case 10:
                    if(letter == 'a'){
                        actualState = 11;
                    }
                break;
        
                case 11:
                    if(letter == 'r'){
                        actualState = 12;
                    }
                break;
        
                case 12:
                    actualState = -1;
                break;
        
                case 13:
                    if(letter == 'n'){
                        actualState = 14;
                    }
                break;
        
                case 14:
                    if(letter == 'd'){
                        actualState = 15;
                    }
                break;
        
                case 15:
                    if(letter == 'i'){
                        actualState = 16;
                    }
                break;
        
                case 16:
                    if(letter == 't'){
                        actualState = 17;
                    }
                break;
        
                case 17:
                    if(letter == 'i'){
                        actualState = 18;
                    }
                break;
        
                case 18:
                    if(letter == 'o'){
                        actualState = 19;
                    }
                break;
        
                case 19:
                    if(letter == 'n'){
                        actualState = 20;
                    }
                break;
        
                case 20:
                    actualState = -1;
                break;
        
                case 21:
                break;
        
                case 22:
                break;
        
                case 23:
                break;
        
                case 24:
                break;
        
                case 25:
                break;
        
                case 26:
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
                    }
                break;
        
                case 33:
                    if(letter == 'e'){
                        actualState = 34;
                    }
                break;
        
                case 34:
                    if(letter == 'r'){
                        actualState = 35;
                    }
                break;
        
                case 35:
                    if(letter == 'i'){
                        actualState = 36;
                    }
                break;
        
                case 36:
                    if(letter == 't'){
                        actualState = 68;
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
                break;
        
                case 43:
                break;
        
                case 44:
                break;
        
                case 45:
                break;
        
                case 46:
                break;
        
                case 47:
                break;
        
                case 48:
                break;
        
                case 49:
                break;
        
                case 50:
                break;
        
                case 51:
                break;
        
                case 52:
                break;
        
                case 53:
                break;
        
                case 54:
                break;
        
                case 55:
                break;
        
                case 56:
                break;
        
                case 57:
                break;
        
                case 58:
                break;
        
                case 59:
                break;
        
                case 60:
                break;
        
                case 61:
                break;
        
                case 62:
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
        counter++;
        for(i in finalValues){
            if(finalValues[i] == actualState){
                isValid = true;
            }
        }
    }

    if(isValid){
        alert('La cadena es correcta');
    } else {
        alert('La cadena es incorrecta');
    }
    
}