class MorseCode {
	constructor() {
		this.map = {
			a: '.-',
			b: '-...',
			c: '-.-.',
			d: '-..',
			e: '.',
			f: '..-.',
			g: '--.',
			h: '....',
			i: '..',
			j: '.---',
			k: '-.-',
			l: '.-..',
			m: '--',
			n: '-.',
			o: '---',
			p: '.--.',
			q: '--.-',
			r: '.-.',
			s: '...',
			t: '-',
			u: '..-',
			v: '...-',
			w: '.--',
			x: '-..-',
			y: '-.--',
			z: '--..',
			1: '.----',
			2: '..---',
			3: '...--',
			4: '....-',
			5: '.....',
			6: '-....',
			7: '--...',
			8: '---..',
			9: '----.',
			0: '-----',

			'.': '.-.-.-',
			',': '--..--',
			'?': '..--..',
			"'": '.----.',
			'/': '-..-.',
			'(': '-.--.',
			')': '-.--.-',
			'&': '.-...',
			':': '---...',
			';': '-.-.-.',
			'=': '-...-',
			'+': '.-.-.',
			'-': '-....-',
			_: '..--.-',
			'"': '.-..-.',
			$: '...-..-',
			'!': '-.-.--',
			'@': '.--.-.',
			' ': '/'
		};
		this.reversedMap = this.switchKeysAndValues(this.map);
	}

	switchKeysAndValues(map) {
		return Object.entries(map).reduce((acc, cur) => {
			acc[cur[1]] = cur[0];
			return acc;
		}, {});
	}

	encode(data) {
		return this.morse(data);
	}

	decode(data) {
		return this.morse(data, true);
	}

	morse(data, decode = false) {
		if (decode) {
			return data
				.split(' ')
				.filter((v) => {
					return this.reversedMap.hasOwnProperty(v.toLowerCase());
				})
				.map((v) => {
					return this.reversedMap[v.toLowerCase()].toUpperCase();
				})
				.join('');
		} else {
			return data
				.split('')
				.filter((v) => {
					return this.map.hasOwnProperty(v.toLowerCase());
				})
				.map((v) => {
					return this.map[v.toLowerCase()].toUpperCase();
				})
				.join(' ')
				.replace(/,\/,/g, '/');
		}
	}
}

export default MorseCode;
