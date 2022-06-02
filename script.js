const theme = document.querySelector("#theme");
const title = document.querySelector("#title");
const points = document.querySelector("#points");
const options = document.querySelector("#options");
const allChecked = document.querySelectorAll('input[type="checkbox"]:checked');

const animes = [
    { item: "Dragon Ball" },
    { item: "Attack on Titan" },
    { item: "Fullmetal Alchemist" },
    { item: "Hunter X Hunter" },
    { item: "Death Note" },
    { item: "Violet Evergarden" },
    { item: "Monogatari" },
    { item: "Gundam" },
    { item: "Code Geass" },
    { item: "Fruits Basket" },
    { item: "One Piece" },
    { item: "Haikyuu" },
    { item: "Cowboy Bebop" },
    { item: "Haruhi Suzumiya" },
    { item: "Neon Genesis Evangelion" },
    { item: "One-Punch Man" },
    { item: "Ping Pong" },
    { item: "NANA" },
    { item: "Tengen Toppa Gurren Lagann" },
    { item: "Demon Slayer" },
    { item: "Your Lie in April" },
    { item: "Steins; Gate" },
    { item: "Ghost in the Shell" },
    { item: "Sword Art Online" },
    { item: "Yu Yu Hakusho" },
    { item: "JoJo's Bizarre Adventure" },
    { item: "Madoka Magika" },
    { item: "Fate" },
    { item: "KonoSuba" },
    { item: "Revolutionary Utena" },
    { item: "KareKano" },
    { item: "Hajime no Ippo" },
    { item: "Ouran Host Club" },
    { item: "Hellsing" },
    { item: "Anohana" },
    { item: "Inuyasha" },
    { item: "Spirited Away" },
    { item: "Natsume" },
    { item: "My Hero Academia" },
    { item: "Serial Experiments Lain" },
    { item: "Food Wars" },
    { item: "Beastars" },
    { item: "Durarara" },
    { item: "Rurouni Kenshin" },
    { item: "Kill la Kill" },
    { item: "Dragon Maid" },
    { item: "Akira" },
    { item: "Oregairu" },
    { item: "Yuri on Ice" },
    { item: "FLCL" },
    { item: "Space Dandy" },
    { item: "Case Closed" },
    { item: "No Game No Life" },
    { item: "Aggretsuko" },
    { item: "Your Name" },
    { item: "Lupin III" },
    { item: "Kaguya-sama" },
    { item: "Sailor Moon" },
    { item: "ERASED" },
    { item: "Soul Eater" },
    { item: "Re: ZERO" },
    { item: "Banana Fish" },
    { item: "K-On" },
    { item: "Urusei Yatsura" },
    { item: "Future Diary" },
    { item: "Laid - Back Camp" },
    { item: "SSSS.GRIDMAN" },
    { item: "Domestic Girlfriend" },
    { item: "Love Live" },
    { item: "Psycho - Pass" },
    { item: "When They Cry" },
    { item: "Bleach" },
    { item: "New Game" },
    { item: "Zombie Land Saga" },
    { item: "Jujutsu Kaisen" },
    { item: "Yu-Gi-Oh" },
    { item: "Mob Psycho 100" },
    { item: "Tatami Galaxy" },
    { item: "Danganronpa" },
    { item: "Lucky Star" },
    { item: "Bananya" },
    { item: "Symphogear" },
    { item: "Tokyo Ghoul" },
    { item: "Made in Abyss" },
    { item: "Shirobako" },
    { item: "Familiar of Zero" },
    { item: "GTO" },
    { item: "Slam Dunk" },
    { item: "Pokémon" },
    { item: "Toradora" },
    { item: "Clannad" },
    { item: "Black Butler" },
    { item: "Monster" },
    { item: "Oreimo" },
    { item: "Nichijou" },
    { item: "Kakegurui" },
    { item: "Gintama" },
    { item: "Teekyuu" },
    { item: "Naruto" },
    { item: "Perfect Blue" },
];

var nomeTema = "Animes!";
var temaSemana = animes;
var numItems = allChecked.length;
var i = 0;
var n = temaSemana.length;

title.textContent = `Checaí: ${nomeTema}`
theme.innerHTML = `Tema da Semana: ${nomeTema}<br>Marque os que você viu pelo menos UMA temporada!`;
points.textContent = `${numItems}/${temaSemana.length}`;

function UC() {
    const allChecked = document.querySelectorAll('input[type="checkbox"]:checked');
    var numItems = allChecked.length;
    points.textContent = `${numItems}/${temaSemana.length}`;
};


while (i < n) {
    options.innerHTML += `<label><input type="checkbox" onclick="UC(this)" class="cb select"><h4>${temaSemana[i].item}</h4></label><br>`;
    i++;
};