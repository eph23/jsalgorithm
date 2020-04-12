// Directions
// Return a string with the order of characters reversed
// --- Examples
//   reverse('abcd') === 'dcba'
//   reverse('Hello!') === '!olleH'


/* ============================= BUILTIN METHODS ============================ */
// function reverse(str) {
// 	return str.split('').reverse().join('');
// }
/* ============================= BUILTIN METHODS ============================ */

/* ============================= SPREAD OPERATOR ============================ */
// function reverse(str) {
// 	return [...str].reverse().join("");
// }
/* ============================= SPREAD OPERATOR ============================ */

/* ========================== INCREMENTAL FOR LOOP ========================== */
// function reverse(str) {
// 	let reversed = "";

// 	for (let i = 0; i < str.length; i++) {
// 		const char = str[i];
// 		reversed = char + reversed;
// 	}
// 	return reversed;
// }
/* ========================== INCREMENTAL FOR LOOP ========================== */

/* ========================== DETRIMENTAL FOR LOOP ========================== */
// function reverse(str) {
// 	let reversed = "";
// 	for (let i = str.length - 1; i >= 0; i--) {
// 		const char = str[i];
// 		reversed = reversed + char;
// 	}
// 	return reversed;
// }
/* ========================== DETRIMENTAL FOR LOOP ========================== */

/* ================================ RECURSION =============================== */
// function reverse(str) {
// 	if (str === "") {
// 		return "";
// 	} else {
// 		return reverse(str.substr(1)) + str[0];
// 	}
// }
/* ================================ RECURSION =============================== */

/* ============================== USING REDUCE ============================== */
// function reverse(str) {
// 	return str.split("").reduce((acc, char) => char + acc, "");
// }
/* ============================== USING REDUCE ============================== *

/******************************************************************************************
 * Resources                                                                              
 * https: //scotch.io/courses/the-ultimate-guide-to-javascript-algorithms/string-reversal 
 * https: //www.freecodecamp.org/news/how-to-reverse-a-string-in-javascript-in-3-different-ways-75e4763c68cb/
 ******************************************************************************************/

// _________ _______  _______ _________   _______  _______  _______  _______  _______
// \__   __/(  ____ \(  ____ \\__   __/  (  ____ \(  ___  )(  ____ \(  ____ \(  ____ \
//    ) (   | (    \/| (    \/   ) (     | (    \/| (   ) || (    \/| (    \/| (    \/
//    | |   | (__    | (_____    | |     | |      | (___) || (_____ | (__    | (_____
//    | |   |  __)   (_____  )   | |     | |      |  ___  |(_____  )|  __)   (_____  )
//    | |   | (            ) |   | |     | |      | (   ) |      ) || (            ) |
//    | |   | (____/\/\____) |   | |     | (____/\| )   ( |/\____) || (____/\/\____) |
//    )_(   (_______/\_______)   )_(     (_______/|/     \|\_______)(_______/\_______)
//                             ____       _
//                             |  _ \     | |
//                             | |_) | ___| | _____      __
//                             |  _ < / _ \ |/ _ \ \ /\ / /
//                             | |_) |  __/ | (_) \ V  V /
//                             |____/ \___|_|\___/ \_/\_/
//                         ______ ______ ______ ______ ______
//                         |______|______|______|______|______|

//                          ______ ______ ______ ______ ______
//                         |______|______|______|______|______|

//                          ______ ______ ______ ______ ______
//                         |______|______|______|______|______|

mocha.setup('bdd');
const {
	assert
} = chai;

describe('String Reversal', () => {
	it('reverse() correctly reverses string', () => {
		assert.equal(reverse('ffaa'), 'aaff');
		assert.equal(reverse('  aaff'), 'ffaa  ');
	});
});

mocha.run();