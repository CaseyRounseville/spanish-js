const words = [
	// basic words
	[ "hello", "hola" ],
	[ "world", "mundo" ],
	[ "hello world", "hola mundo" ],
	[ "good morning", "buenos días" ],
	[ "good evening", "buenas noches" ],
	[ "good afternoon", "buenas tardes" ],
	[ "what is your name?", "cómo te llamas?" ],
	[ "likewise", "igualmente" ],
	[ "pleased to meet you", "mucho gusto" ],
	[ "see you later", "hasta luego" ],
	[ "see you tomorrow", "hasta mañana" ],
	[ "pen", "el bolígrafo" ],
	[ "folder", "la carpeta" ],
	[ "notebook", "el cuaderno" ],
	[ "student", "el estudiante" ],
	[ "sheet of paper", "la hoja de papel" ],
	[ "student desk", "el pupitre" ],
	[ "it's hot", "hace calor" ],
	[ "it's cold", "hace frío" ],
	[ "it's sunny", "hace sol" ],
	[ "it's windy", "hace viento" ],
	[ "it's raining", "llueve" ],
	[ "it's snowing", "nieva" ],
	[ "season", "la estación" ],
	[ "winter", "el invierno" ],
	[ "fall, autumn", "el otoño" ],
	[ "spring", "la primavera" ],
	[ "summer", "el verano" ],
	[ "to dance", "bailar" ],
	[ "to sing", "cantar" ],
	[ "to run", "correr" ],
	[ "to draw", "dibujar" ],
	[ "to write stories", "escribir cuentos" ],
	[ "gray", "canoso" ],
	[ "gray", "gris" ],
	[ "nature", "la naturaleza" ],
	[ "forest", "el bosque" ],
	[ "desert", "el desierto" ],
	[ "rain forest", "la selva tropical" ],
	[ "air conditioning", "el aire condicionado" ],
	[ "heat", "la calefacción" ],
	[ "electricity", "la electricidad" ],
	[ "energy", "la energía" ],
	[ "to conserve", "conservar" ],
	[ "pollution", "la contaminación" ],
	[ "polluted", "contaminado" ],
	[ "destruction", "destrucción" ],
	[ "ecological", "ecológico" ],
	[ "environment", "el medio ambiente" ],
	[ "so-so", "así así" ],
	[ "password", "contraseña" ],
	[ "ticket office", "taqilla" ],
	[ "when you go th the movies, you buy tickets at the ticket office", "cuando vas al cine compras las entradas en la taqilla" ],
	[ "sign", "letrero" ],
	[ "it is recomended to fasten your seat belt", "se recomienda abrocharse el cinturón" ],

	// intermediate conversation
	[ "Juan and I will be very happy to see you", "Juan y yo estaremos muy contentos de verte"],
	[ "Juan, will you come to my party next week?", "¿Juan, vendrás a mi fiesta la próxima semana?" ],
	[ "We finally met our neighbours yesterday", "Por fin conocimos ayer a nuestros vecinos" ],
	[ "I’m sorry, I didn’t understand your name; can you repeat it please?", "¿Lo siento, no entendí su nombre; ¿puede repetirlo, por favor?" ],
	[ "Will you be free for lunch next Tuesday?", "¿Estarás libre para almorzar el martes que viene?" ],
	[ "It will be a pleasure to have dinner with you", "Será un placer cenar contigo" ],
	[ "What a pity! Why didn’t they come last night?", "¡Qué pena! ¿Por qué no vinieron anoche?" ],
	[ "Sergio and Carmen will get married soon!", "Sergio y Carmen se casarán pronto!" ],

	// animals and bugs
	[ "beak", "pico" ],
	[ "bee", "la abeja" ],
	[ "claw", "garra" ],
	[ "deer", "el venado" ],
	[ "donkey", "el burro" ],
	[ "dragonfly", "la libélula" ],
	[ "fairy", "hada" ],
	[ "fangs", "colmillos" ],
	[ "feathers", "plumas" ],
	[ "fur", "piel" ],
	[ "goat", "el chivo" ],
	[ "grasshopper", "el saltamontes" ],
	[ "hog", "el cerdo" ],
	[ "horns", "cuernos" ],
	[ "owl", "la lechuza" ],
	[ "scales", "escamas" ],
	[ "scorpion", "el alacrán" ],
	[ "squirrel", "la ardilla" ],
	[ "trunk", "una trompa" ],
	[ "whiskers", "bigotes" ],
	[ "wings", "alas" ],

	// body parts
	[ "brain", "el cerebro" ],
	[ "lung", "el pulmón" ],
	[ "heart", "el corazón" ],
	[ "liver", "el hígado" ],
	[ "stomach", "el estómago" ],
	[ "kidney", "el riñón" ],
	[ "bladder", "la vejiga" ],
	[ "artery", "la arteria" ],
	[ "vein", "la vena" ],

	// bodily functions
	[ "to burp", "eructar" ],

	// medical problems/pains
	[ "high blood pressure", "alta presión sanguínea" ],
	[ "headache", "dolor de cabeza" ],
	[ "stomachache", "dolor de estómago" ],
	[ "sore throat", "dolor de garganta" ],
	[ "a black eye", "un ojo morado" ],
	[ "a cut", "un corte" ],
	[ "a bruise", "un golpe" ],
	[ "a burn", "una quemadura" ],

	// describing people
	[ "stupid", "tonto" ],
	[ "cheerful", "alegre" ],
	[ "boring", "aburrido" ],
	[ "cowardly", "cobarde" ],
	[ "arrogant", "arrogante" ],
	[ "witty", "gracioso" ],
	[ "lazy", "perezoso" ],
	[ "loving", "cariñoso" ],
	[ "intolerable", "insoportable" ],
	[ "greedy", "avaro" ],
	[ "greedy", "codicioso" ],
	[ "greedy", "ávido" ],

	// around the house
	[ "corkscrew", "el sacacorchos" ],
	[ "can opener", "el abrelatas" ],
	[ "medicine cabinet", "el botiquín" ],
	[ "curtain rod", "el cortinero" ],
	[ "drain", "el desagüe" ],
	[ "ceiling", "el techo" ],
	[ "dish drainer", "el escurridor" ],
	[ "steamer", "la vaporera" ],
	[ "carpet", "alfombra" ],
	[ "tumble drier", "secadora" ],
	[ "vacuum cleaner", "aspirador" ],
	[ "ashtray", "cenicero" ],
	[ "lightbulb", "bombilla" ],

	// cooking
	[ "to add", "agregar" ],
	[ "to beat", "batir" ],
	[ "to mix", "mezclar" ],
	[ "to cut up", "cortar" ],
	[ "to burn", "quemar" ],
	[ "to peel", "pelar" ],
	[ "to stuff", "rellenar" ],
	[ "to boil", "hervir" ],
	[ "to bake", "hornear" ],
	[ "to fry", "freir" ],
	[ "to freeze", "helar" ],
	[ "to spread", "untar" ],
	[ "to roast", "tostar" ],
	[ "to chop", "picar" ],
	[ "to season", "sazonar" ],

	// miscellaneous verbs
	[ "to explode", "estallar" ],
	[ "to leave, as in leave alone or let it be", "dejar" ],
	[ "to fly", "volar" ],
	[ "to hang", "colgar" ],

	// idioms
	[ "to open a can of worms", "Abrir la caja de los truenos" ],
	[ "to let the cat out of the bag", "Irse de la lengua" ],
	[ "in the blink of an eye", "En un abrir y cerrar de ojos" ],
	[ "don’t split hairs", "No hay que buscarle cinco patas al gato" ],
	[ "to be like two peas in a pod", "Parecerse como un huevo a otro" ],
	[ "to flip a coin", "Jugársela a cara o cruz" ],
	[ "a bird in the hand is worth two in the bush", "Más vale pájaro en mano que ciento volando" ],
	[ "to pull someone’s leg", "Tomar el pelo" ],
	[ "in a nutshell", "En pocas palabras" ],
	[ "better late than never", "Mas vale tarde que nunca" ],
	[ "Rome wasn’t built in a day", "No se ganó Zamora en una hora" ],
	[ "to be caught red-handed", "Con las manos en la masa" ],
	[ "to be on cloud nine", "Andar en las nubes" ],
	[ "out of sight, out of mind", "Ojos que no ven, corazón que no siente" ]
];

const LANG_ENG = 0;
const LANG_SPAN = 1;
let engToSpanRatio = 0.15;

let currIndex = 0;
let currLang = LANG_SPAN

function btnNext_onclick() {
	// get random number for the word index
	currIndex = Math.floor(Math.random() * words.length);

	// get a random number for the language
	currLang = Math.random() > engToSpanRatio ? LANG_SPAN : LANG_ENG;

	// read translation
	speak(words[currIndex][currLang == LANG_SPAN ? 1 : 0], currLang);
}

function btnSpan_onclick() {
	speak(words[currIndex][1], LANG_SPAN);
}

function btnEng_onclick() {
	speak(words[currIndex][0], LANG_ENG);
}

function btnRep_onclick() {
	speak(words[currIndex][currLang == LANG_SPAN ? 1 : 0], currLang);
}

function speak(text, lang) {
	const msg = new SpeechSynthesisUtterance();
	msg.text = text;
	msg.lang = lang == LANG_SPAN ? "es" : "en-US";
	window.speechSynthesis.speak(msg)
	console.log(text);
}

function ranEngToSpanRatio_onchange(value) {
	engToSpanRatio = value;
	console.log(value);
}
