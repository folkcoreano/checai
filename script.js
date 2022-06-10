const theme = document.querySelector("#theme");
const points = document.querySelector("#points");
const easter = document.querySelector(".easter");
const options = document.querySelector("#options");
const allChecked = document.querySelectorAll('input[type="checkbox"]:checked');
const copyButton = document.querySelector("#copyButton");
const clear = document.querySelector("#clear");

const tema = [
    { item: "Easy A" },
    { item: "The Package" },
    { item: "Encantada" },
    { item: "Click" },
    { item: "Your Name" },
    { item: "Ready or Not" },
    { item: "Spring Breakers" },
    { item: "IT, A Coisa" },
    { item: "Escola do Rock" },
    { item: "Buffy" },
    { item: "F*&% the Prom" },
    { item: "After" },
    { item: "Five Feet Apart" },
    { item: "Jogador Número Um" },
    { item: "Pânico" },
    { item: "Ela é Demais" },
    { item: "Cyberbully" },
    { item: "Efeito Borboleta" },
    { item: "The Perfect Date" },
    { item: "Clube dos Cinco" },
    { item: "Heathers" },
    { item: "Grease" },
    { item: "High School Musical" },
    { item: "O Chamado" },
    { item: "Love, Simon" },
    { item: "Pitch Perfect" },
    { item: "Carrie" },
    { item: "Juno" },
    { item: "Wish Upon" },
    { item: "Unfriended" },
    { item: "Crush à Altura" },
    { item: "Legalmente Loira" },
    { item: "But I'm a Cheerleader" },
    { item: "A Barraca do Beijo" },
    { item: "Sexta-Feira 13" },
    { item: "Superbad" },
    { item: "Let it Shine" },
    { item: "Sucker Punch" },
    { item: "Scott Pilgrim Contra o Mundo" },
    { item: "Treinando o Papai" },
    { item: "As Crônicas De Nárnia" },
    { item: "Maze Runner" },
    { item: "Truth or Dare" },
    { item: "Annabelle" },
    { item: "Jogos Mortais" },
    { item: "Garotas Malvadas" },
    { item: "Como Eu Era Antes de Você" },
    { item: "Footloose" },
    { item: "Corrente do Mal" },
    { item: "Meu Namorado é um Zumbi" },
    { item: "A Noiva Cadáver" },
    { item: "Deadgirl" },
    { item: "As Vantagens de Ser Invisível" },
    { item: "As Patricinhas de Beverly Hills" },
    { item: "Submarine" },
    { item: "Fear Street" },
    { item: "Death Note" },
    { item: "10 Coisas que Eu Odeio em Você" },
    { item: "Moonrise Kingdom" },
    { item: "Crepúsculo" },
    { item: "Descendentes" },
    { item: "Donnie Darko" },
    { item: "Teen Beach Movie" },
    { item: "Para Todos os Garotos que Já Amei" },
    { item: "Lady Bird" },
    { item: "Jogos Vorazes" },
    { item: "A Morte Te Dá Parabéns" },
    { item: "Tem Alguém na sua Casa" },
    { item: "Coraline" },
    { item: "Harry Potter" },
    { item: "Ponte para Terabítia" },
    { item: "Minha Babá é uma Vampira" },
    { item: "A Fabulosa Aventura de Sharpay" },
    { item: "The Half of It" },
    { item: "A Voz do Silêncio" },
    { item: "American Psycho" },
    { item: "Midsommar" },
    { item: "Premonição" },
    { item: "Sexta-Feira Muito Louca" },
    { item: "Percy Jackson" },
    { item: "Divergente" },
    { item: "John Tucker Must Die" },
    { item: "De Volta Para o Futuro" },
    { item: "Zumbilândia" },
    { item: "Ela é o Cara" },
    { item: "American Pie" },
    { item: "A Babá" },
    { item: "Você Conhece, Tem Ou É" },
    { item: "Alex Strangelove" },
    { item: "Call Me By Your Name" },
    { item: "Jennifer's Body" },
    { item: "Eu Te Amo, Beth Cooper" },
    { item: "Booksmart" },
    { item: "The Host" },
    { item: "Siera Burguess is a Loser" },
    { item: "A Culpa é das Estrelas" },
    { item: "A Orfã" },
    { item: "tick... tick... BOOM!" },
    { item: "The New Mutants" },
    { item: "Let it Snow" },
];

const temaInfo = ["filmes de adolescente!", "Marque todos os que você já viu!"];

var nomeTema = temaInfo[0];
var descTema = temaInfo[1];
var temaSemana = tema;
var numItems = allChecked.length;
var i = 0;
var n = temaSemana.length;

document.title = `Checaí: ${nomeTema}`;
theme.innerHTML = `Tema da semana: ${nomeTema}<br>${descTema}`;
points.textContent = `${numItems}/${n}`;
easter.style.display = "block";

clear.addEventListener('click', () => {
    clear.style.backgroundColor = "var(--tcolor)";

    setTimeout(() => {
        location.reload()
    }, 500)
});

copyButton.addEventListener('click', () => {
    const allChecked = document.querySelectorAll('input[type="checkbox"]:checked');
    var numItems = allChecked.length;
    const textCopy = `marquei ${numItems}/${n} no tema: ${nomeTema} #checaí\n\nchecai.vercel.app`;

    navigator.clipboard.writeText(textCopy);

    copyButton.textContent = "Copied!";
    copyButton.style.backgroundColor = "var(--tcolor)";

    setTimeout(() => {
        copyButton.textContent = "Share";
        copyButton.style.backgroundColor = "var(--scolor)";
    }, 1500)
});

function UC() {
    const allChecked = document.querySelectorAll('input[type="checkbox"]:checked');
    var numItems = allChecked.length;
    points.textContent = `${numItems}/${n}`;

    calc50 = n / 100 * 50;
    calc70 = n / 100 * 70;

    if (numItems > 0) {
        points.style.backgroundColor = "var(--bcolor)";
        points.style.animation = "";
        easter.style.transform = "";
    };
    if (numItems >= calc50) {
        points.style.backgroundColor = "var(--scolor)";
        points.style.animation = "";
        easter.style.transform = "";
    };
    if (numItems == 69) {
        points.style.backgroundColor = "var(--scolor)";
        points.style.animation = "";
        easter.style.transform = "translateX(0.5em)";
    };
    if (numItems >= calc70) {
        points.style.backgroundColor = "var(--tcolor)";
        points.style.animation = "vibrate 140ms infinite ease-in-out";
        easter.style.transform = "";
    };
};

const lista = tema.map(({ item }) => {
    options.innerHTML += `<label class="item"><input type="checkbox" onclick="UC()" class="cb select" id="${i}"><h4 id="line">${item}</h4></label>`;
    i++
});