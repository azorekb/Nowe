const POKEMON_TYPES = ['-','normal','fire','water','electric','grass','ice','fighting','poison','ground','flying','psychic','bug','rock','ghost','dragon','dark','steel','fairy'];
const POKEMON_STATS = ['hp','attack','defence','spAttack','spDefence','speed'];
const POKEMON_MOVE_TARGET = ['one opponent','all opponents','everyone','self','one ally','all allies'];
const POKEMON_EXP_GROWTH = ['erratic','fast','medium fast','medium slow','slow','fluctuating'];

const POKEMON_MOVE_EFFECTS = 
[
    {polski: 'pusty', english: 'empty', disable: true},
    {
        polski: 'zmiana statusu',
        english: 'change status',
        types: 
        [
            {polski: 'zdrowy', english: 'ok'},
            {polski: 'poparzenia', english: 'burn'},
            {polski: 'zamrożenie', english: 'freeze'},
            {polski: 'paraliż', english: 'paralysis'},
            {polski: 'zatrucie', english: 'poison'},
            {polski: 'sen', english: 'sleep'},
            {english: 'flinch', polski: 'stchórzenie'},
            {english: 'confuse',polski: 'zmieszanie'},
            {english: 'inlove', polski: 'zauroczenie'},
        ]
    },
    {english: 'recoil damage', polski: 'obrażenia zwrotne'},
    {english: 'recover HP', polski: 'leczenie HP'},
    {english: 'drain HP', polski: 'kradzież HP'},
    {english: 'change attack', polski: 'zmiana ataku'},
    {english: 'change defence', polski: 'zmiana obrony'},
    {english: 'change lower sp attack', polski: 'zmiana sp ataku'},
    {english: 'change sp defence', polski: 'zmiana sp obrony'},
    {english: 'change speed', polski: 'zmiana szybkości'},
    {english: 'change random stat', polski: 'zmiena losowej cechy'},
    {english: 'change every stat', polski: 'zmiena każdej cechy'},
    {
        english: 'special event',
        polski: 'secjalne zdarzenie',
        types:
        [
            {english: 'switch place', polski: 'zmiana miesjca'},
            {english: 'unable to flee', polski: 'uniemożliwienie ucieczki'},
            {english: 'hit dwo times', polski: 'uderzenie dwukrotne'},
            {english: 'hit 2-5 times', polski: 'uderzenie 2-5 krotne'},
        ]
    }
    
    // ,
    // {english: 'recover by turs', polski: 'leczenie co turę'},
    // {english: 'change cristal hit ratio', polski: 'zmienia szansę na obrażenia krytyczne'},
    // {english: 'hit constans value', polski: 'udeża stałą wartością'},
    // {english: 'gives protity', polski: 'daje priorytet'},
    // {english: 'change physical damage', polski: 'zmienia obrażenia fizyczne'},
    // {english: 'change damage when first', polski: 'zmienia obrażenia gdy pierwszy'},
    // {english: 'change damage when last', polski: 'zmienia obrażenia gdy ostatni'},
    // {english: 'change pokemon', polski: 'zmienia pokemona'},
    // {english: 'load move', polski: 'ładuje ruch'},
    // {english: 'switch item', polski: 'zamiania przedmiony'},
    // {english: 'trap', polski: 'pułapka'},
    // {english: 'break barrier', polski: 'niszczy bariery'},
    // {english: 'reset stats', polski: 'resetuje cechy'},
    // {english: 'makes weather', polski: 'powoduje pogodę'},
    // {english: 'mimick move', polski: 'powtarza ruch'},
    // {english: 'copy move', polski: 'kopjuje ruch'},
    // {english: 'copy move permanent', polski: 'permanentnie kopjuje ruch'},
    
    // gdy nie ma itemku jest mocniejszy
]

const MOVE_EFFECT_WHOM =
[
    {polski: 'cel', english: 'target'},
    {polski: 'używający', english: 'user'},
    {polski: 'przeciwnicy', english: 'opponents'},
    {polski: 'sprzymierzeńcy', english: 'allies'},
    {polski: 'wszyscy', english: 'everyone'}
]

const MAP_ITEMS = 
[
    {name: 'grass', src: 'trawa.png'},
    {name: 'wayNW', src: 'drogaNW.png'},
    {name: 'wayN', src: 'drogaN.png'},
    {name: 'wayNE', src: 'drogaNE.png'},
    {name: 'wayW', src: 'drogaW.png'},
    {name: 'wayC', src: 'drogaC.png'},
    {name: 'wayE', src: 'drogaE.png'},
    {name: 'waySW', src: 'drogaSW.png'},
    {name: 'wayS', src: 'drogaS.png'},
    {name: 'waySE', src: 'drogaSE.png'},
    {name: 'tallgrass', src: 'wysokatrawa.png'},
    {name: 'water', src: 'woda.gif'},
    
];

//============================ ADMIN =============================================

const ADMIN_WARNINGS =
[
    {polski: 'używaj tylko języka <u>angielskiego</u> oraz małych liter', english: 'use only <u>english</u> language and small letters'},
    {polski: 'kliknij w pole mapy aby zmienić je na wybrany wyżej element<br>użyj CTRL by móc zmienić pole najechaniem myszy<br>CTRL+Z nie działa', english: 'click on field to change element to selectet upper<br>use CTRL to change it with mouse over<br>CTRL+Z does not work'},
    {polski: 'zdecydowanie łatwiej jest używać panelu administratora na komputerze', english: 'it is so much better to use admin panel on the computer'},
];

const ADMIN_LIST_OF_TASKS =
[
    {name:{polski: 'dodaj pokemona', english: 'add pokemon'}, function: 'adm_formPokemon'},
    {name:{polski: 'edytor map', english: 'map editor'}, function: 'adm_mapEditor'},
    {name:{polski: 'edytor ruchów', english: 'move editor'}, function: 'adm_moveEditor_run'}
];

const ADMIN_MOVES_PROPERTIES = 
[
    {description: {polski: 'nr', english: 'no'}, dbname: 'id'},
    {description: {polski: 'nazwa angielska', english: 'english name'}, dbname: 'name_eng', input: 'text'},
    {description: {polski: 'nazwa polska', english: 'polish name'}, dbname: 'name_pl', input: 'text'},
    {description: {polski: 'moc', english: 'power'}, dbname: 'power', input: 'number', min: -300, max: 300},
    {description: {polski: 'celność', english: 'accuracy'}, dbname: 'accuracy', input: 'number', min: 0, max: 100},
    {description: {polski: 'typ', english: 'type'}, dbname: 'type', input: 'select', table: POKEMON_TYPES},
    {description: {polski: 'PP', english: 'PP'}, dbname: 'PP', input: 'number', min: 1, max: 40},
    {description: {polski: 'cel', english: 'target'}, dbname: 'target', input: 'select', table: POKEMON_MOVE_TARGET},
    {description: {polski: 'priorytet', english: 'priorytet'}, dbname: 'priority', input: 'number', min: -10, max: 10},
    {description: {polski: 'kontakt', english: 'contact'}, dbname: 'contact', input: 'checkbox'},
    {description: {polski: 'efekty', english: 'effects'}, dbname: 'effects', input: 'disabled'},
];

const ADMIN_EFFECTS_COLS =
[
    {polski: 'jaki', english: 'what'},
    {polski: 'wartość', english: 'value'},
    {polski: 'szanse', english: 'chance'},
    {polski: 'komu', english: 'whom'}
]