const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let out = '';

    for (let i = 0; i < expr.length; i+=10){
         let ten = expr.slice(i, i+10);

         if (ten === '**********') {
            out += ' ';
            continue;
        }

        let morseChar = '';
         for (let j = 0; j < 10; j+=2){

           let two = ten.slice(j, j+2);
             if (two !== '00'){
                morseChar += two === '10' ? '.' : '-';
            }
          }
          out += MORSE_TABLE[morseChar];
    }
    return out;
}
module.exports = {
    decode
}

