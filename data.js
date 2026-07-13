// Kerala App — Datos de vocabulario y frases
// Editar este archivo para añadir palabras sin tocar el código

const ALL_WORDS = [
 {
  "mal": "നമസ്കാരം",
  "rom": "namaskaram",
  "trans": "hola / namaste",
  "ex": "Saludo formal universal en Kerala",
  "cat": "greeting"
 },
 {
  "mal": "സുപ്രഭാതം",
  "rom": "suprabhatam",
  "trans": "buenos días",
  "ex": "",
  "cat": "greeting"
 },
 {
  "mal": "ശുഭ രാത്രി",
  "rom": "shubha raatri",
  "trans": "buenas noches",
  "ex": "",
  "cat": "greeting"
 },
 {
  "mal": "നന്ദി",
  "rom": "nandi",
  "trans": "gracias",
  "ex": "",
  "cat": "greeting"
 },
 {
  "mal": "ശരി",
  "rom": "shari",
  "trans": "de acuerdo / vale",
  "ex": "shari, nyaan varaam = vale, yo vendré",
  "cat": "greeting"
 },
 {
  "mal": "ക്ഷമിക്കണം",
  "rom": "kshamikkanam",
  "trans": "perdón / lo siento",
  "ex": "",
  "cat": "greeting"
 },
 {
  "mal": "സ്വാഗതം",
  "rom": "svagatam",
  "trans": "bienvenido",
  "ex": "",
  "cat": "greeting"
 },
 {
  "mal": "അതെ",
  "rom": "athe",
  "trans": "sí",
  "ex": "athe, shari = sí, vale",
  "cat": "greeting"
 },
 {
  "mal": "ഇല്ല",
  "rom": "illa",
  "trans": "no",
  "ex": "",
  "cat": "greeting"
 },
 {
  "mal": "ദയവായി",
  "rom": "dayavayi",
  "trans": "por favor",
  "ex": "",
  "cat": "greeting"
 },
 {
  "mal": "സുഖമാണോ?",
  "rom": "sukhamaano?",
  "trans": "¿cómo estás? / ¿estás bien?",
  "ex": "Saludo cotidiano entre conocidos",
  "cat": "greeting"
 },
 {
  "mal": "സുഖമാണ്",
  "rom": "sukhamaanu",
  "trans": "estoy bien",
  "ex": "Respuesta a sukhamaano?",
  "cat": "greeting"
 },
 {
  "mal": "വീണ്ടും കാണാം",
  "rom": "veendum kaanaam",
  "trans": "nos vemos / hasta pronto",
  "ex": "Despedida habitual",
  "cat": "greeting"
 },
 {
  "mal": "സാരമില്ല",
  "rom": "saaramilla",
  "trans": "no pasa nada",
  "ex": "",
  "cat": "greeting"
 },
 {
  "mal": "തീർച്ചയായും",
  "rom": "theerchayaayum",
  "trans": "por supuesto",
  "ex": "",
  "cat": "greeting"
 },
 {
  "mal": "ഒരുപക്ഷേ",
  "rom": "orupakshe",
  "trans": "quizás / tal vez",
  "ex": "",
  "cat": "greeting"
 },
 {
  "mal": "നന്നായി",
  "rom": "nannaayi",
  "trans": "muy bien",
  "ex": "nannaayi cheythu = bien hecho",
  "cat": "greeting"
 },
 {
  "mal": "ഞാൻ",
  "rom": "nyaan",
  "trans": "yo",
  "ex": "nyaan Joel aanu = yo soy Joel",
  "cat": "pronoun"
 },
 {
  "mal": "നീ",
  "rom": "nee",
  "trans": "tú (muy informal)",
  "ex": "Solo con amigos cercanos",
  "cat": "pronoun"
 },
 {
  "mal": "നിങ്ങൾ",
  "rom": "ningal",
  "trans": "usted / vosotros",
  "ex": "",
  "cat": "pronoun"
 },
 {
  "mal": "അവൻ",
  "rom": "avan",
  "trans": "él",
  "ex": "",
  "cat": "pronoun"
 },
 {
  "mal": "അവൾ",
  "rom": "aval",
  "trans": "ella",
  "ex": "",
  "cat": "pronoun"
 },
 {
  "mal": "അത്",
  "rom": "athu",
  "trans": "eso / aquello",
  "ex": "athu enthaanu? = ¿qué es eso?",
  "cat": "pronoun"
 },
 {
  "mal": "ഇത്",
  "rom": "ithu",
  "trans": "esto",
  "ex": "",
  "cat": "pronoun"
 },
 {
  "mal": "അവർ",
  "rom": "avar",
  "trans": "ellos / ellas",
  "ex": "",
  "cat": "pronoun"
 },
 {
  "mal": "ഞങ്ങൾ",
  "rom": "njangal",
  "trans": "nosotros",
  "ex": "",
  "cat": "pronoun"
 },
 {
  "mal": "എന്റെ",
  "rom": "ente",
  "trans": "mi / mío",
  "ex": "ente peeru = mi nombre",
  "cat": "pronoun"
 },
 {
  "mal": "നിന്റെ",
  "rom": "ninte",
  "trans": "tu / tuyo",
  "ex": "",
  "cat": "pronoun"
 },
 {
  "mal": "എനിക്ക്",
  "rom": "enikku",
  "trans": "a mí / para mí",
  "ex": "enikku vellam veenam = yo quiero agua",
  "cat": "pronoun"
 },
 {
  "mal": "നിനക്ക്",
  "rom": "ninakku",
  "trans": "a ti",
  "ex": "ninakku veenamo? = ¿tú quieres?",
  "cat": "pronoun"
 },
 {
  "mal": "ആണ്",
  "rom": "aanu",
  "trans": "es / soy (verbo ser)",
  "ex": "ente peeru Joel aanu",
  "cat": "verb"
 },
 {
  "mal": "അല്ല",
  "rom": "alla",
  "trans": "no es (negación de ser)",
  "ex": "athu ente alla = eso no es mío",
  "cat": "verb"
 },
 {
  "mal": "ഉണ്ട്",
  "rom": "undu",
  "trans": "hay / tengo",
  "ex": "enikku pani undu = tengo fiebre",
  "cat": "verb"
 },
 {
  "mal": "വേണം",
  "rom": "veenam",
  "trans": "quiero / necesito",
  "ex": "enikku vellam veenam",
  "cat": "verb"
 },
 {
  "mal": "വേണ്ട",
  "rom": "veenda",
  "trans": "no quiero",
  "ex": "",
  "cat": "verb"
 },
 {
  "mal": "ഇഷ്ടമാണ്",
  "rom": "ishtamaanu",
  "trans": "me gusta",
  "ex": "enikku Kerala ishtamaanu",
  "cat": "verb"
 },
 {
  "mal": "ഇഷ്ടമില്ല",
  "rom": "ishtamilla",
  "trans": "no me gusta",
  "ex": "",
  "cat": "verb"
 },
 {
  "mal": "കഴിയും",
  "rom": "kazhiyum",
  "trans": "puedo",
  "ex": "",
  "cat": "verb"
 },
 {
  "mal": "കഴിയില്ല",
  "rom": "kazhiyilla",
  "trans": "no puedo",
  "ex": "",
  "cat": "verb"
 },
 {
  "mal": "അറിയാം",
  "rom": "ariyaam",
  "trans": "lo sé / sé",
  "ex": "enikku ariyaam = yo lo sé",
  "cat": "verb"
 },
 {
  "mal": "അറിയില്ല",
  "rom": "ariyilla",
  "trans": "no lo sé",
  "ex": "enikku ariyilla = no lo sé",
  "cat": "verb"
 },
 {
  "mal": "വരുന്നു",
  "rom": "varunnu",
  "trans": "vengo / viene",
  "ex": "",
  "cat": "verb"
 },
 {
  "mal": "പോകുന്നു",
  "rom": "pokunnu",
  "trans": "voy / va",
  "ex": "",
  "cat": "verb"
 },
 {
  "mal": "വന്നു",
  "rom": "vannu",
  "trans": "vine (pasado)",
  "ex": "",
  "cat": "verb"
 },
 {
  "mal": "പോയി",
  "rom": "poyi",
  "trans": "fui (pasado)",
  "ex": "",
  "cat": "verb"
 },
 {
  "mal": "കഴിക്കുക",
  "rom": "kazhikkua",
  "trans": "comer",
  "ex": "Pronunciación: karikyua",
  "cat": "verb"
 },
 {
  "mal": "കഴിച്ചു",
  "rom": "kazhichu",
  "trans": "comí (pasado)",
  "ex": "",
  "cat": "verb"
 },
 {
  "mal": "കുടിക്കുന്നു",
  "rom": "kudikkunnu",
  "trans": "bebo / bebe",
  "ex": "",
  "cat": "verb"
 },
 {
  "mal": "ഉറങ്ങുന്നു",
  "rom": "uranggunnu",
  "trans": "duermo / duerme",
  "ex": "",
  "cat": "verb"
 },
 {
  "mal": "നടക്കുന്നു",
  "rom": "nadakkunnu",
  "trans": "camino / camina",
  "ex": "",
  "cat": "verb"
 },
 {
  "mal": "ഓടുന്നു",
  "rom": "odunnu",
  "trans": "corro / corre",
  "ex": "",
  "cat": "verb"
 },
 {
  "mal": "വായിക്കുന്നു",
  "rom": "vaayikkunnu",
  "trans": "leo / lee",
  "ex": "",
  "cat": "verb"
 },
 {
  "mal": "എഴുതുന്നു",
  "rom": "ezhuthunnu",
  "trans": "escribo / escribe",
  "ex": "",
  "cat": "verb"
 },
 {
  "mal": "പഠിക്കുന്നു",
  "rom": "padikkunnu",
  "trans": "estudio / estudia",
  "ex": "",
  "cat": "verb"
 },
 {
  "mal": "പറയുന്നു",
  "rom": "parayunnu",
  "trans": "digo / dice",
  "ex": "",
  "cat": "verb"
 },
 {
  "mal": "കാണുന്നു",
  "rom": "kaanunnu",
  "trans": "veo / ve",
  "ex": "",
  "cat": "verb"
 },
 {
  "mal": "കേൾക്കുന്നു",
  "rom": "kelkkunnu",
  "trans": "escucho / escucha",
  "ex": "",
  "cat": "verb"
 },
 {
  "mal": "ചെയ്യുന്നു",
  "rom": "cheyyunnu",
  "trans": "hago / hace",
  "ex": "",
  "cat": "verb"
 },
 {
  "mal": "വാങ്ങുന്നു",
  "rom": "vaangunnu",
  "trans": "compro / compra",
  "ex": "",
  "cat": "verb"
 },
 {
  "mal": "സഹായിക്കുന്നു",
  "rom": "sahaayikkunnu",
  "trans": "ayudo / ayuda",
  "ex": "",
  "cat": "verb"
 },
 {
  "mal": "കാത്തിരിക്കുന്നു",
  "rom": "kaathirikkunnu",
  "trans": "espero / espera",
  "ex": "",
  "cat": "verb"
 },
 {
  "mal": "വരൂ",
  "rom": "varoo",
  "trans": "ven",
  "ex": "",
  "cat": "verb"
 },
 {
  "mal": "നോക്കൂ",
  "rom": "nokkoo",
  "trans": "mira",
  "ex": "",
  "cat": "verb"
 },
 {
  "mal": "കേൾക്കൂ",
  "rom": "kelkkoo",
  "trans": "escucha",
  "ex": "",
  "cat": "verb"
 },
 {
  "mal": "തരൂ",
  "rom": "tharoo",
  "trans": "dame",
  "ex": "vellam tharoo = dame agua",
  "cat": "verb"
 },
 {
  "mal": "നിർത്തൂ",
  "rom": "nirthoo",
  "trans": "para / detente",
  "ex": "",
  "cat": "verb"
 },
 {
  "mal": "പോകാം",
  "rom": "pokaam",
  "trans": "vamos / vámonos",
  "ex": "",
  "cat": "verb"
 },
 {
  "mal": "എന്ത്",
  "rom": "enthu",
  "trans": "qué",
  "ex": "entha ninte peeru?",
  "cat": "question"
 },
 {
  "mal": "എവിടെ",
  "rom": "evide",
  "trans": "dónde",
  "ex": "",
  "cat": "question"
 },
 {
  "mal": "ആര്",
  "rom": "aaru",
  "trans": "quién",
  "ex": "",
  "cat": "question"
 },
 {
  "mal": "എപ്പോൾ",
  "rom": "eppol",
  "trans": "cuándo",
  "ex": "",
  "cat": "question"
 },
 {
  "mal": "എങ്ങനെ",
  "rom": "engane",
  "trans": "cómo",
  "ex": "",
  "cat": "question"
 },
 {
  "mal": "എത്ര",
  "rom": "ethra",
  "trans": "cuánto",
  "ex": "ethra roopa? = ¿cuánto cuesta?",
  "cat": "question"
 },
 {
  "mal": "എന്തുകൊണ്ട്",
  "rom": "enthukond",
  "trans": "por qué",
  "ex": "",
  "cat": "question"
 },
 {
  "mal": "-ോ / -മോ",
  "rom": "-o / -mo",
  "trans": "partícula de pregunta",
  "ex": "veenamo? = ¿quieres?",
  "cat": "question"
 },
 {
  "mal": "കുറച്ച്",
  "rom": "kurachu",
  "trans": "un poco",
  "ex": "kurachu Malayalam ariyaam = sé un poco de malayalam",
  "cat": "adverb"
 },
 {
  "mal": "ധാരാളം",
  "rom": "dhaaralam",
  "trans": "mucho",
  "ex": "",
  "cat": "adverb"
 },
 {
  "mal": "വളരെ",
  "rom": "valare",
  "trans": "muy",
  "ex": "valare nannaayi = muy bien",
  "cat": "adverb"
 },
 {
  "mal": "ഒരു",
  "rom": "oru",
  "trans": "un / una",
  "ex": "oru chaaya = un té",
  "cat": "adverb"
 },
 {
  "mal": "എല്ലാം",
  "rom": "ellaam",
  "trans": "todo",
  "ex": "",
  "cat": "adverb"
 },
 {
  "mal": "ഒന്നും",
  "rom": "onnum",
  "trans": "nada",
  "ex": "",
  "cat": "adverb"
 },
 {
  "mal": "മതി",
  "rom": "mathi",
  "trans": "suficiente / basta",
  "ex": "mathi! = ¡basta!",
  "cat": "adverb"
 },
 {
  "mal": "ചിലപ്പോൾ",
  "rom": "chilappol",
  "trans": "a veces",
  "ex": "",
  "cat": "adverb"
 },
 {
  "mal": "എപ്പോഴും",
  "rom": "eppozhum",
  "trans": "siempre",
  "ex": "",
  "cat": "adverb"
 },
 {
  "mal": "ഒരിക്കലും",
  "rom": "orikkalum",
  "trans": "nunca",
  "ex": "",
  "cat": "adverb"
 },
 {
  "mal": "ഉടനെ",
  "rom": "udane",
  "trans": "pronto / enseguida",
  "ex": "",
  "cat": "adverb"
 },
 {
  "mal": "ഇവിടെ",
  "rom": "ivide",
  "trans": "aquí",
  "ex": "",
  "cat": "adverb"
 },
 {
  "mal": "അവിടെ",
  "rom": "avide",
  "trans": "allí",
  "ex": "",
  "cat": "adverb"
 },
 {
  "mal": "അമ്മ",
  "rom": "amma",
  "trans": "madre",
  "ex": "",
  "cat": "family"
 },
 {
  "mal": "അച്ഛൻ",
  "rom": "achan",
  "trans": "padre",
  "ex": "",
  "cat": "family"
 },
 {
  "mal": "ചേച്ചി",
  "rom": "chechi",
  "trans": "hermana mayor",
  "ex": "También respeto a mujeres mayores",
  "cat": "family"
 },
 {
  "mal": "ചേട്ടൻ",
  "rom": "chetthan",
  "trans": "hermano mayor",
  "ex": "También respeto a hombres mayores",
  "cat": "family"
 },
 {
  "mal": "അനിയൻ",
  "rom": "aniyan",
  "trans": "hermano menor",
  "ex": "",
  "cat": "family"
 },
 {
  "mal": "അനിയത്തി",
  "rom": "aniyathi",
  "trans": "hermana menor",
  "ex": "",
  "cat": "family"
 },
 {
  "mal": "മകൻ",
  "rom": "makan",
  "trans": "hijo",
  "ex": "",
  "cat": "family"
 },
 {
  "mal": "മകൾ",
  "rom": "makal",
  "trans": "hija",
  "ex": "",
  "cat": "family"
 },
 {
  "mal": "ഭർത്താവ്",
  "rom": "bharthavu",
  "trans": "marido",
  "ex": "",
  "cat": "family"
 },
 {
  "mal": "ഭാര്യ",
  "rom": "bhaarya",
  "trans": "esposa",
  "ex": "",
  "cat": "family"
 },
 {
  "mal": "അമ്മൂമ്മ",
  "rom": "ammumma",
  "trans": "abuela",
  "ex": "",
  "cat": "family"
 },
 {
  "mal": "അപ്പൂപ്പൻ",
  "rom": "appuppan",
  "trans": "abuelo",
  "ex": "",
  "cat": "family"
 },
 {
  "mal": "കുടുംബം",
  "rom": "kudumbam",
  "trans": "familia",
  "ex": "",
  "cat": "family"
 },
 {
  "mal": "സുഹൃത്ത്",
  "rom": "suhruth",
  "trans": "amigo / amiga",
  "ex": "",
  "cat": "family"
 },
 {
  "mal": "തല",
  "rom": "thala",
  "trans": "cabeza",
  "ex": "",
  "cat": "body"
 },
 {
  "mal": "കണ്ണ്",
  "rom": "kann",
  "trans": "ojo",
  "ex": "",
  "cat": "body"
 },
 {
  "mal": "ചെവി",
  "rom": "chevi",
  "trans": "oreja",
  "ex": "",
  "cat": "body"
 },
 {
  "mal": "മൂക്ക്",
  "rom": "mookku",
  "trans": "nariz",
  "ex": "",
  "cat": "body"
 },
 {
  "mal": "വായ",
  "rom": "vaaya",
  "trans": "boca",
  "ex": "",
  "cat": "body"
 },
 {
  "mal": "കൈ",
  "rom": "kai",
  "trans": "mano / brazo",
  "ex": "",
  "cat": "body"
 },
 {
  "mal": "കാൽ",
  "rom": "kaal",
  "trans": "pierna / pie",
  "ex": "",
  "cat": "body"
 },
 {
  "mal": "വയർ",
  "rom": "vayar",
  "trans": "estómago",
  "ex": "",
  "cat": "body"
 },
 {
  "mal": "വേദന",
  "rom": "vedana",
  "trans": "dolor",
  "ex": "enikku vedana undu = tengo dolor",
  "cat": "body"
 },
 {
  "mal": "പനി",
  "rom": "pani",
  "trans": "fiebre",
  "ex": "",
  "cat": "body"
 },
 {
  "mal": "ഡോക്ടർ",
  "rom": "doctor",
  "trans": "médico",
  "ex": "",
  "cat": "body"
 },
 {
  "mal": "മരുന്ന്",
  "rom": "marunnu",
  "trans": "medicamento",
  "ex": "",
  "cat": "body"
 },
 {
  "mal": "ആശുപത്രി",
  "rom": "aashupathri",
  "trans": "hospital",
  "ex": "",
  "cat": "body"
 },
 {
  "mal": "ഭക്ഷണം",
  "rom": "bakshanam",
  "trans": "comida",
  "ex": "",
  "cat": "food"
 },
 {
  "mal": "വെള്ളം",
  "rom": "vellam",
  "trans": "agua",
  "ex": "",
  "cat": "food"
 },
 {
  "mal": "പാൽ",
  "rom": "paalu",
  "trans": "leche",
  "ex": "",
  "cat": "food"
 },
 {
  "mal": "ചോറ്",
  "rom": "choru",
  "trans": "arroz cocinado",
  "ex": "Base de la comida de Kerala",
  "cat": "food"
 },
 {
  "mal": "മുട്ട",
  "rom": "mutta",
  "trans": "huevo",
  "ex": "",
  "cat": "food"
 },
 {
  "mal": "മീൻ",
  "rom": "meen",
  "trans": "pescado",
  "ex": "",
  "cat": "food"
 },
 {
  "mal": "ഇറച്ചി",
  "rom": "irachi",
  "trans": "carne",
  "ex": "",
  "cat": "food"
 },
 {
  "mal": "പഴം",
  "rom": "pazham",
  "trans": "fruta / plátano",
  "ex": "",
  "cat": "food"
 },
 {
  "mal": "പച്ചക്കറി",
  "rom": "pachakkari",
  "trans": "verdura",
  "ex": "",
  "cat": "food"
 },
 {
  "mal": "ചായ",
  "rom": "chaaya",
  "trans": "té",
  "ex": "El chai de Kerala",
  "cat": "food"
 },
 {
  "mal": "കാപ്പി",
  "rom": "kaappi",
  "trans": "café",
  "ex": "",
  "cat": "food"
 },
 {
  "mal": "ഉപ്പ്",
  "rom": "uppu",
  "trans": "sal",
  "ex": "",
  "cat": "food"
 },
 {
  "mal": "ശർക്കര",
  "rom": "sharkkara",
  "trans": "azúcar",
  "ex": "",
  "cat": "food"
 },
 {
  "mal": "സ്ഥലം",
  "rom": "sthalam",
  "trans": "lugar",
  "ex": "",
  "cat": "place"
 },
 {
  "mal": "നാട്",
  "rom": "naadu",
  "trans": "país / tierra natal",
  "ex": "ente naadu Spain aanu",
  "cat": "place"
 },
 {
  "mal": "വീട്",
  "rom": "veedu",
  "trans": "casa",
  "ex": "",
  "cat": "place"
 },
 {
  "mal": "കടൽ",
  "rom": "kadal",
  "trans": "mar",
  "ex": "",
  "cat": "place"
 },
 {
  "mal": "വഴി",
  "rom": "vazhi",
  "trans": "camino / calle",
  "ex": "",
  "cat": "place"
 },
 {
  "mal": "ഇടത്",
  "rom": "idathu",
  "trans": "izquierda",
  "ex": "",
  "cat": "place"
 },
 {
  "mal": "വലത്",
  "rom": "valathu",
  "trans": "derecha",
  "ex": "",
  "cat": "place"
 },
 {
  "mal": "നേരെ",
  "rom": "nere",
  "trans": "recto",
  "ex": "",
  "cat": "place"
 },
 {
  "mal": "അടുത്ത്",
  "rom": "aduthu",
  "trans": "cerca",
  "ex": "",
  "cat": "place"
 },
 {
  "mal": "ദൂരെ",
  "rom": "doore",
  "trans": "lejos",
  "ex": "",
  "cat": "place"
 },
 {
  "mal": "കട",
  "rom": "kada",
  "trans": "tienda",
  "ex": "",
  "cat": "place"
 },
 {
  "mal": "ഹോട്ടൽ",
  "rom": "hotel",
  "trans": "restaurante / hotel",
  "ex": "En Kerala hotel = restaurante",
  "cat": "place"
 },
 {
  "mal": "ബസ്",
  "rom": "bus",
  "trans": "autobús",
  "ex": "",
  "cat": "transport"
 },
 {
  "mal": "ട്രെയിൻ",
  "rom": "train",
  "trans": "tren",
  "ex": "",
  "cat": "transport"
 },
 {
  "mal": "വിമാനം",
  "rom": "vimanam",
  "trans": "avión",
  "ex": "",
  "cat": "transport"
 },
 {
  "mal": "കാർ",
  "rom": "car",
  "trans": "coche",
  "ex": "",
  "cat": "transport"
 },
 {
  "mal": "ബോട്ട്",
  "rom": "boat",
  "trans": "barco",
  "ex": "",
  "cat": "transport"
 },
 {
  "mal": "ഓട്ടോ",
  "rom": "auto",
  "trans": "auto-rickshaw / tuk-tuk",
  "ex": "El transporte típico de la India",
  "cat": "transport"
 },
 {
  "mal": "യാത്ര",
  "rom": "yaathra",
  "trans": "viaje",
  "ex": "nalla yaathra = buen viaje",
  "cat": "transport"
 },
 {
  "mal": "മുറി",
  "rom": "muri",
  "trans": "habitación",
  "ex": "",
  "cat": "home"
 },
 {
  "mal": "അടുക്കള",
  "rom": "adukkala",
  "trans": "cocina",
  "ex": "",
  "cat": "home"
 },
 {
  "mal": "മേശ",
  "rom": "mecha",
  "trans": "mesa",
  "ex": "",
  "cat": "home"
 },
 {
  "mal": "കസേര",
  "rom": "kasera",
  "trans": "silla",
  "ex": "",
  "cat": "home"
 },
 {
  "mal": "കിടക്ക",
  "rom": "kidakka",
  "trans": "cama",
  "ex": "",
  "cat": "home"
 },
 {
  "mal": "വാതിൽ",
  "rom": "vaathil",
  "trans": "puerta",
  "ex": "",
  "cat": "home"
 },
 {
  "mal": "ജനൽ",
  "rom": "janal",
  "trans": "ventana",
  "ex": "",
  "cat": "home"
 },
 {
  "mal": "കുട",
  "rom": "kuda",
  "trans": "paraguas",
  "ex": "",
  "cat": "home"
 },
 {
  "mal": "സൂര്യൻ",
  "rom": "suryan",
  "trans": "sol",
  "ex": "",
  "cat": "nature"
 },
 {
  "mal": "മഴ",
  "rom": "mazha",
  "trans": "lluvia",
  "ex": "mazha varunnu = llueve",
  "cat": "nature"
 },
 {
  "mal": "കാറ്റ്",
  "rom": "kaattu",
  "trans": "viento",
  "ex": "",
  "cat": "nature"
 },
 {
  "mal": "മരം",
  "rom": "maram",
  "trans": "árbol",
  "ex": "",
  "cat": "nature"
 },
 {
  "mal": "പൂ",
  "rom": "poo",
  "trans": "flor",
  "ex": "",
  "cat": "nature"
 },
 {
  "mal": "മല",
  "rom": "mala",
  "trans": "montaña",
  "ex": "",
  "cat": "nature"
 },
 {
  "mal": "നദി",
  "rom": "nadi",
  "trans": "río",
  "ex": "",
  "cat": "nature"
 },
 {
  "mal": "ചന്ദ്രൻ",
  "rom": "chandran",
  "trans": "luna",
  "ex": "",
  "cat": "nature"
 },
 {
  "mal": "നല്ലത്",
  "rom": "nallath",
  "trans": "bueno",
  "ex": "",
  "cat": "adj"
 },
 {
  "mal": "മോശം",
  "rom": "mosham",
  "trans": "malo",
  "ex": "",
  "cat": "adj"
 },
 {
  "mal": "വലിയ",
  "rom": "valiya",
  "trans": "grande",
  "ex": "",
  "cat": "adj"
 },
 {
  "mal": "ചെറിയ",
  "rom": "cheriya",
  "trans": "pequeño",
  "ex": "",
  "cat": "adj"
 },
 {
  "mal": "സുന്ദരം",
  "rom": "sundaram",
  "trans": "bonito",
  "ex": "Kerala sundaram aanu",
  "cat": "adj"
 },
 {
  "mal": "പുതിയ",
  "rom": "puthiya",
  "trans": "nuevo",
  "ex": "",
  "cat": "adj"
 },
 {
  "mal": "പഴയ",
  "rom": "pazhaya",
  "trans": "viejo",
  "ex": "",
  "cat": "adj"
 },
 {
  "mal": "ചൂട്",
  "rom": "choodu",
  "trans": "caliente",
  "ex": "",
  "cat": "adj"
 },
 {
  "mal": "തണുപ്പ്",
  "rom": "thanuppu",
  "trans": "frío",
  "ex": "",
  "cat": "adj"
 },
 {
  "mal": "വേഗം",
  "rom": "vegam",
  "trans": "rápido",
  "ex": "",
  "cat": "adj"
 },
 {
  "mal": "പതുക്കെ",
  "rom": "pathukkhe",
  "trans": "despacio",
  "ex": "pathukkhe parayoo = habla despacio",
  "cat": "adj"
 },
 {
  "mal": "വിലകൂടിയ",
  "rom": "vilakoodiya",
  "trans": "caro",
  "ex": "",
  "cat": "adj"
 },
 {
  "mal": "വിലകുറഞ്ഞ",
  "rom": "vilakuranja",
  "trans": "barato",
  "ex": "",
  "cat": "adj"
 },
 {
  "mal": "സന്തോഷം",
  "rom": "santhosham",
  "trans": "feliz / alegría",
  "ex": "enikku santhosham undu",
  "cat": "emotion"
 },
 {
  "mal": "സങ്കടം",
  "rom": "sankhadam",
  "trans": "triste / tristeza",
  "ex": "",
  "cat": "emotion"
 },
 {
  "mal": "ക്ഷീണം",
  "rom": "kshinam",
  "trans": "cansado",
  "ex": "enikku kshinam undu",
  "cat": "emotion"
 },
 {
  "mal": "വിശക്കുന്നു",
  "rom": "vishakkunnu",
  "trans": "tengo hambre",
  "ex": "",
  "cat": "emotion"
 },
 {
  "mal": "ദാഹിക്കുന്നു",
  "rom": "daahikkunnu",
  "trans": "tengo sed",
  "ex": "",
  "cat": "emotion"
 },
 {
  "mal": "ദേഷ്യം",
  "rom": "deshyam",
  "trans": "enfadado",
  "ex": "",
  "cat": "emotion"
 },
 {
  "mal": "ഭയം",
  "rom": "bhayam",
  "trans": "miedo",
  "ex": "",
  "cat": "emotion"
 },
 {
  "mal": "ഒന്ന്",
  "rom": "onnu",
  "trans": "uno (1)",
  "ex": "",
  "cat": "number"
 },
 {
  "mal": "രണ്ട്",
  "rom": "randu",
  "trans": "dos (2)",
  "ex": "",
  "cat": "number"
 },
 {
  "mal": "മൂന്ന്",
  "rom": "moonnu",
  "trans": "tres (3)",
  "ex": "",
  "cat": "number"
 },
 {
  "mal": "നാല്",
  "rom": "naalu",
  "trans": "cuatro (4)",
  "ex": "",
  "cat": "number"
 },
 {
  "mal": "അഞ്ച്",
  "rom": "anchu",
  "trans": "cinco (5)",
  "ex": "",
  "cat": "number"
 },
 {
  "mal": "ആറ്",
  "rom": "aaru",
  "trans": "seis (6)",
  "ex": "",
  "cat": "number"
 },
 {
  "mal": "ഏഴ്",
  "rom": "ezhu",
  "trans": "siete (7)",
  "ex": "",
  "cat": "number"
 },
 {
  "mal": "എട്ട്",
  "rom": "ettu",
  "trans": "ocho (8)",
  "ex": "",
  "cat": "number"
 },
 {
  "mal": "ഒമ്പത്",
  "rom": "ombathu",
  "trans": "nueve (9)",
  "ex": "",
  "cat": "number"
 },
 {
  "mal": "പത്ത്",
  "rom": "pathu",
  "trans": "diez (10)",
  "ex": "",
  "cat": "number"
 },
 {
  "mal": "നൂറ്",
  "rom": "nooru",
  "trans": "cien (100)",
  "ex": "",
  "cat": "number"
 },
 {
  "mal": "ഇന്ന്",
  "rom": "innu",
  "trans": "hoy",
  "ex": "",
  "cat": "time"
 },
 {
  "mal": "നാളെ",
  "rom": "naale",
  "trans": "mañana",
  "ex": "",
  "cat": "time"
 },
 {
  "mal": "ഇന്നലെ",
  "rom": "innale",
  "trans": "ayer",
  "ex": "",
  "cat": "time"
 },
 {
  "mal": "ഇപ്പോൾ",
  "rom": "ippol",
  "trans": "ahora",
  "ex": "",
  "cat": "time"
 },
 {
  "mal": "പിന്നെ",
  "rom": "pinne",
  "trans": "después",
  "ex": "",
  "cat": "time"
 },
 {
  "mal": "രാവിലെ",
  "rom": "raavile",
  "trans": "por la mañana",
  "ex": "",
  "cat": "time"
 },
 {
  "mal": "രാത്രി",
  "rom": "raathri",
  "trans": "por la noche",
  "ex": "",
  "cat": "time"
 },
 {
  "mal": "സമയം",
  "rom": "samayam",
  "trans": "tiempo / hora",
  "ex": "",
  "cat": "time"
 },
 {
  "mal": "ദിവസം",
  "rom": "divasam",
  "trans": "día",
  "ex": "",
  "cat": "time"
 },
 {
  "mal": "ചുവപ്പ്",
  "rom": "chuvappu",
  "trans": "rojo",
  "ex": "",
  "cat": "color",
  "dot": "#ff5252"
 },
 {
  "mal": "നീല",
  "rom": "neela",
  "trans": "azul",
  "ex": "",
  "cat": "color",
  "dot": "#49c0f8"
 },
 {
  "mal": "പച്ച",
  "rom": "pacha",
  "trans": "verde",
  "ex": "",
  "cat": "color",
  "dot": "#58cc02"
 },
 {
  "mal": "മഞ്ഞ",
  "rom": "manja",
  "trans": "amarillo",
  "ex": "",
  "cat": "color",
  "dot": "#ffc800"
 },
 {
  "mal": "വെള്ള",
  "rom": "vella",
  "trans": "blanco",
  "ex": "",
  "cat": "color",
  "dot": "#f1f7fb"
 },
 {
  "mal": "കറുപ്പ്",
  "rom": "karuppu",
  "trans": "negro",
  "ex": "",
  "cat": "color",
  "dot": "#333"
 },
 {
  "mal": "ഓറഞ്ച്",
  "rom": "orange",
  "trans": "naranja",
  "ex": "",
  "cat": "color",
  "dot": "#ff9600"
 },
 {
  "mal": "പിങ്ക്",
  "rom": "pink",
  "trans": "rosa",
  "ex": "",
  "cat": "color",
  "dot": "#ff86d0"
 },
 {
  "mal": "പേര്",
  "rom": "peeru",
  "trans": "nombre",
  "ex": "",
  "cat": "noun"
 },
 {
  "mal": "ഭാഷ",
  "rom": "bhasha",
  "trans": "idioma",
  "ex": "",
  "cat": "noun"
 },
 {
  "mal": "ഫോൺ",
  "rom": "phone",
  "trans": "teléfono",
  "ex": "",
  "cat": "noun"
 },
 {
  "mal": "പുസ്തകം",
  "rom": "pusthakam",
  "trans": "libro",
  "ex": "",
  "cat": "noun"
 },
 {
  "mal": "പണം",
  "rom": "panam",
  "trans": "dinero",
  "ex": "",
  "cat": "noun"
 },
 {
  "mal": "ജോലി",
  "rom": "joli",
  "trans": "trabajo",
  "ex": "",
  "cat": "noun"
 },
 {
  "mal": "വിദ്യാർത്ഥി",
  "rom": "vidyaarthi",
  "trans": "estudiante",
  "ex": "",
  "cat": "noun"
 }
];

const ALL_PHRASES = [
 {
  "q": "Enikku paalu veenam",
  "a": "yo quiero leche",
  "hint": "enikku=a mí, paalu=leche, veenam=quiero"
 },
 {
  "q": "Ninakku bakshanam veenamo?",
  "a": "tú quieres comida",
  "hint": "ninakku=a ti, veenamo=¿quieres?"
 },
 {
  "q": "Ninte naadu evide?",
  "a": "dónde es tu país",
  "hint": "ninte=tu, naadu=país, evide=dónde"
 },
 {
  "q": "Enikku choodu vellam veenam",
  "a": "yo quiero agua caliente",
  "hint": "choodu=caliente"
 },
 {
  "q": "Nyaan bakshanam kazhichu",
  "a": "yo comí comida",
  "hint": "kazhichu=comí"
 },
 {
  "q": "Enikku kuda veenda",
  "a": "yo no quiero paraguas",
  "hint": "veenda=no quiero"
 },
 {
  "q": "Ente veedu chuvappu aanu",
  "a": "mi casa es roja",
  "hint": "veedu=casa, chuvappu=rojo"
 },
 {
  "q": "Nyaan Malayalam padikkunnu",
  "a": "yo estudio malayalam",
  "hint": "padikkunnu=estudio"
 },
 {
  "q": "Ente amma doctor aanu",
  "a": "mi madre es médico",
  "hint": "amma=madre"
 },
 {
  "q": "Enikku vishakkunnu",
  "a": "yo tengo hambre",
  "hint": "vishakkunnu=tengo hambre"
 },
 {
  "q": "Nyaan ippol pokunnu",
  "a": "yo me voy ahora",
  "hint": "ippol=ahora, pokunnu=voy"
 },
 {
  "q": "Sukhamaano?",
  "a": "cómo estás",
  "hint": "Saludo cotidiano"
 },
 {
  "q": "Enikku sukhamaanu",
  "a": "yo estoy bien",
  "hint": "Respuesta a sukhamaano"
 },
 {
  "q": "Enikku santhosham undu",
  "a": "yo estoy feliz",
  "hint": "santhosham=felicidad"
 },
 {
  "q": "Enikku Kerala ishtamaanu",
  "a": "me gusta Kerala",
  "hint": "ishtamaanu=me gusta"
 },
 {
  "q": "Ente peeru Joel aanu",
  "a": "mi nombre es Joel",
  "hint": "peeru=nombre"
 },
 {
  "q": "Nyaan naale varum",
  "a": "yo vendré mañana",
  "hint": "naale=mañana"
 },
 {
  "q": "Avan ente suhruth aanu",
  "a": "él es mi amigo",
  "hint": "suhruth=amigo"
 },
 {
  "q": "Enikku doctor veenam",
  "a": "yo necesito un médico",
  "hint": "veenam=necesito"
 },
 {
  "q": "Nyaan kazhiyilla",
  "a": "yo no puedo",
  "hint": "kazhiyilla=no puedo"
 },
 {
  "q": "Enikku pani undu",
  "a": "yo tengo fiebre",
  "hint": "pani=fiebre, undu=tengo"
 },
 {
  "q": "Athu enthaanu?",
  "a": "qué es eso",
  "hint": "athu=eso"
 },
 {
  "q": "Nyaan bus-il pokunnu",
  "a": "yo voy en autobús",
  "hint": "-il=en"
 },
 {
  "q": "Enikku ariyilla",
  "a": "yo no lo sé",
  "hint": "ariyilla=no sé"
 },
 {
  "q": "Enikku kurachu Malayalam ariyaam",
  "a": "yo sé un poco de malayalam",
  "hint": "kurachu=un poco"
 },
 {
  "q": "Vellam tharoo",
  "a": "dame agua",
  "hint": "tharoo=dame"
 },
 {
  "q": "Pathukkhe parayoo",
  "a": "habla despacio",
  "hint": "pathukkhe=despacio"
 },
 {
  "q": "Ethra roopa aanu?",
  "a": "cuánto cuesta",
  "hint": "ethra=cuánto, roopa=rupias"
 },
 {
  "q": "Ithu vilakoodiya aanu",
  "a": "esto es caro",
  "hint": "vilakoodiya=caro"
 },
 {
  "q": "Mazha varunnu",
  "a": "viene la lluvia",
  "hint": "mazha=lluvia, varunnu=viene"
 },
 {
  "q": "Enikku kshinam undu",
  "a": "yo estoy cansado",
  "hint": "kshinam=cansado"
 },
 {
  "q": "Veendum kaanaam",
  "a": "nos vemos pronto",
  "hint": "Despedida habitual"
 },
 {
  "q": "Enikku chaaya veenam",
  "a": "yo quiero té",
  "hint": "chaaya=té"
 },
 {
  "q": "Oru kaappi tharoo",
  "a": "dame un café",
  "hint": "oru=un, tharoo=dame"
 },
 {
  "q": "Nyaan veetil aanu",
  "a": "yo estoy en casa",
  "hint": "veetil=en casa"
 },
 {
  "q": "Ente kudumbam Spain-il aanu",
  "a": "mi familia está en España",
  "hint": "kudumbam=familia"
 },
 {
  "q": "Saaramilla",
  "a": "no pasa nada",
  "hint": "Expresión muy común"
 },
 {
  "q": "Nalla yaathra!",
  "a": "buen viaje",
  "hint": "nalla=buen, yaathra=viaje"
 },
 {
  "q": "Auto evide?",
  "a": "dónde hay un tuk-tuk",
  "hint": "auto=rickshaw"
 },
 {
  "q": "Valare nannaayi",
  "a": "muy bien",
  "hint": "valare=muy, nannaayi=bien"
 }
];
