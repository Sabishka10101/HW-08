const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';

function generateKey(length, ourChar) {
    let result = '';
    for ( i = 0; i < length; i++ ) {
        result += ourChar.charAt(Math.floor(Math.random() * ourChar.length));
    }
    return result;
}

const key = generateKey(16, characters);
console.log(key);