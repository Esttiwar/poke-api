const $fragment = document.createDocumentFragment();


async function getPokemon(i) {
    try{
        const respuesta = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
        
        const json = await respuesta.json();

        if (json.name.length >= 19) {
            console.log(json.name , json.name.length)
        }


        const $card = document.createElement("div");
        $card.className = "card";

        switch (json.types[0].type.name) {
            case 'normal':
                $card.style.backgroundColor = "lavender";
                break;
            case 'fighting':
                $card.style.backgroundColor = "firebrick";
                break;
            case 'flying':
                $card.style.backgroundColor = "#6d88d6";
                break;
            case 'poison':
                $card.style.backgroundColor = "mediumpurple";
                break;
            case 'ground':
                $card.style.backgroundColor = "BurlyWood";
                break;
            case 'rock':
                $card.style.backgroundColor = "peru";
                break;
            case 'bug':
                $card.style.backgroundColor = "yellowgreen";
                break;
            case 'ghost':
                $card.style.backgroundColor = "purple";
                break;
            case 'steel':
                $card.style.backgroundColor = "lightgrey";
                break;
            case 'fire':
                $card.style.backgroundColor = "crimson";
                break;
            case 'water':
                $card.style.backgroundColor = "royalblue";
                break;
            case 'grass':
                $card.style.backgroundColor = "lime";
                break;
            case 'electric':
                $card.style.backgroundColor = "yellow";
                break;
            case 'psychic':
                $card.style.backgroundColor = "violet";
                break;
            case 'ice':
                $card.style.backgroundColor = "aquamarine";
                break;
            case 'dragon':
                $card.style.backgroundColor = "mediumslateblue";
                break;
            case 'dark':
                $card.style.backgroundColor = "SlateGray";
                break;
            case 'fairy':
                $card.style.backgroundColor = "rgb(255, 136, 238)";
                break;
            default:
            $card.style.backgroundColor = "black";
        }

        // HEAD
        const $head = document.createElement("div");
        $head.className = "head";

        const $backgroundCard = document.createElement("div");
        $backgroundCard.className = "background-card";


        // IMAGE
        const $img = document.createElement("img");

        $img.setAttribute("loading","lazy");

        $img.setAttribute("src", json.sprites.other["official-artwork"].front_default);

        const $name = document.createElement("h1");
        $name.className = "name";
        $name.style.fontSize = "25px";
        $name.textContent = json.name;

        
        // KIND
        const $kind = document.createElement("div");
        $kind.className = "kind";

        const $type = document.createElement("h3");
        $type.className = "type"; 
        $type.textContent = "Type";

        // KIND TYPE
        const $kindType = document.createElement("div");
        $kindType.className = "kind-type";

        const $kind1 = document.createElement("span");
        $kind1.className = "kind-1"; 
        $kind1.textContent = json.types[0].type.name;

        const $kind2 = document.createElement("span");
        $kind2.className = "kind-2"; 
        $kind2.textContent = json.types[1] ? json.types[1].type.name :"";


        // STATS
        const $stats = document.createElement("div");
        $stats.className = "stats";

        const $hp = document.createElement("span");
        $hp.className = "hp"; 
        $hp.textContent = 'HP' + json.stats[0].base_stat;

        const $attack = document.createElement("span");
        $attack.className = "attack"; 
        $attack.textContent = 'Atk' + json.stats[1].base_stat;

        const $defense = document.createElement("span");
        $defense.className = "defense"; 
        $defense.textContent = 'Def' + json.stats[2].base_stat;


        // POKE ANCHOR
        const $aPoke = document.createElement("a");
        $aPoke.className = "a-poke";
        $aPoke.setAttribute("href", `/pokemon.html?id=${i}`);
        $aPoke.setAttribute("target", "_blank");

        const $mainPoke = document.createElement("div");
        $mainPoke.className = "main-poke";

        const $h3X = document.createElement("h3");

        const $imgAccessPoke = document.createElement("img");
        $imgAccessPoke.className = "img-access-poke";
        $imgAccessPoke.setAttribute("src","https://i.postimg.cc/hv6s9Spk/background.png");
        




        const $containerDown = document.querySelector(".container-down");

        $card.appendChild($head);
        $card.appendChild($kind);
        $card.appendChild($stats);
        $card.appendChild($aPoke)
        
        $head.appendChild($backgroundCard);
        $head.appendChild($img);
        $head.appendChild($name);
        
        $kind.appendChild($type);
        $kind.appendChild($kindType);
        
        $kindType.appendChild($kind1);
        $kindType.appendChild($kind2);
        
        $stats.appendChild($hp);
        $stats.appendChild($attack);
        $stats.appendChild($defense);
        
        
        $aPoke.appendChild($mainPoke);
        
        $mainPoke.appendChild($h3X);
        $mainPoke.appendChild($imgAccessPoke)
        

        $fragment.appendChild($card)

        $containerDown.appendChild($fragment);
        
    }catch(error){
        console.log(error)
    }
}


const $getPokemons = document.querySelector(".get-pokemons");

const $inputPoke = document.querySelector(".input-poke");



$getPokemons.addEventListener("click", () => {

    if ($inputPoke.value <= 898) {
        for (let i = 1; i <= $inputPoke.value; i++) {
            getPokemon(i);
        }  
    } else {

        function showAlert () {
            const $alert = document.querySelector(".alert");
            $alert.style.display = "flex";
        }
        setTimeout(showAlert, 90);

        
         function hiddenAlert () {
             const $alert = document.querySelector(".alert");
             $alert.style.display = "none";
        }
        
        setTimeout(hiddenAlert, 3000);
    }
    
    
    $inputPoke.value = "";
})


let cont = 0;
$inputPoke.onclick = function () {
    cont++;
    if (cont === 2) {
         location.reload()
    }
}


window.onscroll = function() {
    if (window.scrollY > 600) {
        const $up = document.querySelector(".up");
        $up.style.visibility = "visible";
    
    } else if (window.scrollY < 600) {
        const $up = document.querySelector(".up");
        $up.style.visibility = "hidden";
    }
};

function changeMode() {
    const $btnDark = document.querySelector(".btn-dark");
    $btnDark.classList.toggle("active");

    const $contFather = document.querySelector(".container-father");
    $contFather.classList.toggle("container-father-dark");
    
    
    const $getTitleDark = document.querySelector(".get-title");
    $getTitleDark.classList.toggle("get-title-dark");
    
    
    const $footer = document.querySelector(".footer");
    $footer.classList.toggle("footer-dark");

    const $titleDark = document.querySelector(".title");
    $titleDark.classList.toggle("title-dark");
    
    const $inputDark = document.querySelector(".input-poke");
    $inputDark.classList.toggle("input-poke-dark");

    const $getPokemonsDark = document.querySelector(".get-pokemons");
    $getPokemonsDark.classList.toggle("get-pokemons-dark");

    const $backgroundCardDark = document.querySelectorAll(".background-card");
    // $backgroundCardDark[1].classList.toggle("background-card-dark");

    $backgroundCardDark.forEach(el => {
        el.classList.toggle("background-card-dark"),
        el.style.trasition = "1s ease all"
    });
   
}



