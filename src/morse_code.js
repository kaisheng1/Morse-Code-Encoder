const MorseCode = {

    encode(data) {
        return MorseCode.morse.call(this, data);
    },

    decode(data){
        return MorseCode.morse.call(this, data, true);
    },

    morse(data, decode = false){

        this.map = {
            a: '.-', b: '-...', c: '-.-.', d: '-..',
            e: '.', f: '..-.', g: '--.', h: '....',
            i: '..', j: '.---', k: '-.-', l: '.-..',
            m: '--', n: '-.', o: '---', p: '.--.',
            q: '--.-', r: '.-.', s: '...', t: '-',
            u: '..-', v: '...-', w: '.--', x: '-..-',
            y: '-.--', z: '--..', 1: '.----', 2: '..---',
            3: '...--', 4: '....-', 5: '.....', 6: '-....',
            7: '--...', 8: '---..', 9: '----.', 0: '-----',

            '.': '.-.-.-', ',': '--..--', '?': '..--..',
            "'": '.----.', '/': '-..-.', '(': '-.--.',
            ')': '-.--.-', '&': '.-...', ':': '---...',
            ';': '-.-.-.', '=': '-...-', '+': '.-.-.',
            '-': '-....-', '_': '..--.-', '"': '.-..-.',
            '$': '...-..-', '!': '-.-.--', '@': '.--.-.',
            ' ': '/',
        };

        if (decode) {
            this.map = (
                () => {
                    let tmp = {};
                    let k;
                    for (k in this.map) {
                        if (!this.map.hasOwnProperty(k)) continue;
                        tmp[this.map[k]] = k;
                    }
                    return tmp;
                }
            )();

            return data.split(' ').filter((v) => {
                return this.map.hasOwnProperty(v.toLowerCase());
            }).map((v) => {
                return this.map[v.toLowerCase()].toUpperCase();
            }).join('');

        } else {
            return data.split('').filter((v) => {
                return this.map.hasOwnProperty(v.toLowerCase());
            }).map((v) => {
                return this.map[v.toLowerCase()].toUpperCase();
            }).join(' ').replace(/,\/,/g, '/');
        }
    },
};

export default MorseCode;