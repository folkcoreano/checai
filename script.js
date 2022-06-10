const theme = document.querySelector("#theme");
const points = document.querySelector("#points");
const easter = document.querySelector(".easter");
const options = document.querySelector("#options");
const allChecked = document.querySelectorAll('input[type="checkbox"]:checked');
const copyButton = document.querySelector("#copyButton");
const clear = document.querySelector("#clear");

const tema = [
    { item: "Metal Slug" },
    { item: "Ben 10" },
    { item: "Club Penguin" },
    { item: "DDTank" },
    { item: "Zombie Tsunami" },
    { item: "Habbo Hotel" },
    { item: "Five Nights at Freddy's" },
    { item: "Golden Axe" },
    { item: "Spore" },
    { item: "Alladin" },
    { item: "GTA: San Andreas" },
    { item: "Tony Hawk" },
    { item: "Super Mario World" },
    { item: "Castlevania" },
    { item: "Shadow of the Colossus" },
    { item: "Minecraft" },
    { item: "Double Dragon" },
    { item: "Minimundos" },
    { item: "Rayman" },
    { item: "Earthworm Jim" },
    { item: "Black" },
    { item: "Campo Minado" },
    { item: "Street Fighter" },
    { item: "Dragon Ball" },
    { item: "Naruto" },
    { item: "Dragon City" },
    { item: "Flappy Bird" },
    { item: "Tibia" },
    { item: "Free Fire" },
    { item: "Superman 64" },
    { item: "Jogo da cobrinha" },
    { item: "Battletoads" },
    { item: "Mortal Kombat" },
    { item: "Temple Run" },
    { item: "Pou" },
    { item: "Pac-Man" },
    { item: "Criminal Case" },
    { item: "Plants vs Zombies" },
    { item: "Tetris" },
    { item: "Cat Mario" },
    { item: "Marvel vs Capcom" },
    { item: "Tomb Raider" },
    { item: "Bounce Tales" },
    { item: "Grim Fandango" },
    { item: "Super Mario 64" },
    { item: "Harvest Moon" },
    { item: "Donkey Kong" },
    { item: "The Last of Us" },
    { item: "The King of Fighters" },
    { item: "Cooking Mama" },
    { item: "Bomba Patch" },
    { item: "Papa's Pizza" },
    { item: "Final Fantasy" },
    { item: "Angry Birds" },
    { item: "Diamond Rush" },
    { item: "Need for Speed" },
    { item: "Sonic" },
    { item: "WoW" },
    { item: "The Sims" },
    { item: "Metal Gear" },
    { item: "Firegirl and Waterboy" },
    { item: "Amor Doce" },
    { item: "Resident Evil" },
    { item: "Pokémon" },
    { item: "My Talking Tom" },
    { item: "Café Mania" },
    { item: "Assassin's Creed" },
    { item: "COD" },
    { item: "Prince of Persia" },
    { item: "Colheita Feliz" },
    { item: "Chrono Trigger" },
    { item: "The Legend of Zelda" },
    { item: "Crash" },
    { item: "Mario Party" },
    { item: "School Flirting" },
    { item: "Medal of Honor" },
    { item: "Jogo do Milhão" },
    { item: "Buddy Poke" },
    { item: "Subway Surfers" },
    { item: "Streets of Rage" },
    { item: "Sim City" },
    { item: "Purble Place" },
    { item: "Yu-Gi-Oh" },
    { item: "Grandchase" },
    { item: "Uno" },
    { item: "Jogos de tabuleiro" },
    { item: "Asphalt" },
    { item: "O Jogo Mais Difícil do Mundo" },
    { item: "Skyrim" },
    { item: "Nascar Rumble" },
    { item: "Roblox" },
    { item: "Ico" },
    { item: "Bomberman" },
    { item: "Transformice" },
    { item: "Guitar Flash" },
    { item: "Clash Royale" },
    { item: "Contra" },
    { item: "Fruit Ninja" },
    { item: "God of War" },
    { item: "Counter Strike" },
];

const temaInfo = ["jogos de infância!", "Jogos que você já jogou quando era criança!"];

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