const url = new URL(window.location);

const params = new URLSearchParams(url.search);

const pokemonId = params.get("id");

async function getPokemon(i) {
    try{
        const respuesta = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);

        const json = await respuesta.json();

        
        $name = document.querySelector(".name-poke");

        if (json.name.length >= 14) {
            $name.style.fontSize = "30px"

        }

        $name.textContent = json.name;

        const $imgPoke = document.querySelector(".img-poke");
        $imgPoke.setAttribute("src", json.sprites.other["official-artwork"].front_default);




        
    


        /*

        
        const pokeArray = ["normal", "fighting", "flying", "poison", "ground", "rock", "bug", "ghost", "steel", "fire","water", "grass", "electric", "psychic", "ice", "dragon", "dark", "fairy"];

        const $imgType0 = document.querySelector(".img-type-0");
        const $imgType1 = document.querySelector(".img-type-1");
        let pokeFor = 1;

        for (let i = 0; i <= pokeFor; i++) {
            
            let typesFor = 17;
  
            if (json.types[i]) {


                for (let j = 0; j <= typesFor; j++) {
                        
                    if (json.types[i].type.name === pokeArray[j].toString() && json.types.length === 1) {
                        console.log(i)
                        console.log(pokeArray[j].toString());
                        console.log("aqui no entro")
                        console.log(`$imgType${i}`)

                        $imgType0.setAttribute('src',`/images/types/${pokeArray[j].toString()}.png`);

                    } else if (json.types[i].type.name === pokeArray[j].toString() && json.types.length === 2) {
                        console.log(i)
                        console.log(pokeArray[j].toString());
                        $imgType0.setAttribute('src',`/images/types/${pokeArray[j].toString()}.png`);
                        $imgType1.setAttribute('src',`/images/types/${pokeArray[j].toString()}.png`);
                        
                        
                    } 

                }  
            }    
                
        }
        */


        
        const $imgType0 = document.querySelector(".img-type-0");
        
        switch (json.types[0].type.name) {
            case 'normal': 
                $imgType0.setAttribute('src','/images/types/normal.png');
                break;
            case 'fighting':
                $imgType0.setAttribute("src","/images/types/fighting.png");               
                break;
            case 'flying':
                $imgType0.setAttribute("src","/images/types/flying.png");             
                break;
            case 'poison':
                $imgType0.setAttribute("src","/images/types/poison.png");
                break;
            case 'ground':
                $imgType0.setAttribute("src","/images/types/ground.png");               
                break;
            case 'rock':
                $imgType0.setAttribute("src","/images/types/rock.png");          
                break;
            case 'bug':
                $imgType0.setAttribute("src","/images/types/bug.png");
                break;
            case 'ghost':
                $imgType0.setAttribute("src","/images/types/ghost.png");            
                break;
            case 'steel':
                $imgType0.setAttribute("src","/images/types/steel.png");               
                break;
            case 'fire':
                $imgType0.setAttribute("src","/images/types/fire.png");             
                break;
            case 'water':
                $imgType0.setAttribute("src","/images/types/water.png");               
                break;
            case 'grass':
                $imgType0.setAttribute("src","/images/types/grass.png");          
                break;
            case 'electric':
                $imgType0.setAttribute("src","/images/types/electric.png");            
                break;
            case 'psychic':
                $imgType0.setAttribute("src","/images/types/psychic.png");            
                break;
            case 'ice':
                $imgType0.setAttribute("src","/images/types/ice.png");                
                break;
            case 'dragon':
                $imgType0.setAttribute("src","/images/types/dragon.png");
                break;
            case 'dark':
                $imgType0.setAttribute("src","/images/types/dark.png");               
                break;
            case 'fairy':
                $imgType0.setAttribute("src","/images/types/fairy.png"); 
                break;
            default:
                
            console.log("There is not type")
        }



        $imgType0.addEventListener("mouseover", () => {

            $imgType0.setAttribute("title", json.types[0].type.name)
        })





        const $imagesTypes = document.querySelector(".images-types")
        const $imgType1 = document.createElement("img");
        $imgType1.className = "img-type-1";


        $imgType1.addEventListener("mouseover", () => {

            $imgType1.setAttribute("title", json.types[1].type.name)        
        })


        if (json.types.length === 2){
            

            switch (json.types[1].type.name) {
            case 'normal': 
                $imgType1.setAttribute('src','/images/types/normal.png');
                $imagesTypes.appendChild($imgType1);
                break;
            case 'fighting':
                $imgType1.setAttribute("src","/images/types/fighting.png");
                $imagesTypes.appendChild($imgType1);               
                break;
            case 'flying':
                $imgType1.setAttribute("src","/images/types/flying.png"); 
                $imagesTypes.appendChild($imgType1);            
                break;
            case 'poison':
                $imgType1.setAttribute("src","/images/types/poison.png");
                $imagesTypes.appendChild($imgType1);
                break;
            case 'ground':
                $imgType1.setAttribute("src","/images/types/ground.png");
                $imagesTypes.appendChild($imgType1);               
                break;
            case 'rock':
                $imgType1.setAttribute("src","/images/types/rock.png");  
                $imagesTypes.appendChild($imgType1);        
                break;
            case 'bug':
                $imgType1.setAttribute("src","/images/types/bug.png");
                $imagesTypes.appendChild($imgType1);
                break;
            case 'ghost':
                $imgType1.setAttribute("src","/images/types/ghost.png");  
                $imagesTypes.appendChild($imgType1);          
                break;
            case 'steel':
                $imgType1.setAttribute("src","/images/types/steel.png"); 
                $imagesTypes.appendChild($imgType1);              
                break;
            case 'fire':
                $imgType1.setAttribute("src","/images/types/fire.png");
                $imagesTypes.appendChild($imgType1);             
                break;
            case 'water':
                $imgType1.setAttribute("src","/images/types/water.png"); 
                $imagesTypes.appendChild($imgType1);              
                break;
            case 'grass':
                $imgType1.setAttribute("src","/images/types/grass.png"); 
                $imagesTypes.appendChild($imgType1);         
                break;
            case 'electric':
                $imgType1.setAttribute("src","/images/types/electric.png");  
                $imagesTypes.appendChild($imgType1);          
                break;
            case 'psychic':
                $imgType1.setAttribute("src","/images/types/psychic.png");  
                $imagesTypes.appendChild($imgType1);          
                break;
            case 'ice':
                $imgType1.setAttribute("src","/images/types/ice.png");  
                $imagesTypes.appendChild($imgType1);              
                break;
            case 'dragon':
                $imgType1.setAttribute("src","/images/types/dragon.png");
                $imagesTypes.appendChild($imgType1);
                break;
            case 'dark':
                $imgType1.setAttribute("src","/images/types/dark.png"); 
                $imagesTypes.appendChild($imgType1);              
                break;
            case 'fairy':
                $imgType1.setAttribute("src","/images/types/fairy.png"); 
                $imagesTypes.appendChild($imgType1);
                break;
            default:
                
            console.log("There is not type")
        }

        }









        const $hp = document.querySelector(".hp");
        $hp.textContent = "Hp: " + json.stats[0].base_stat;

        const $atk = document.querySelector(".atk");
        $atk.textContent = "Atk: " + json.stats[1].base_stat;

        const $def = document.querySelector(".def");
        $def.textContent = "Def: " + json.stats[2].base_stat;

        const $height = document.querySelector(".height");
        $height.textContent = "Height: " + json.height/10 + "M";

        const $weight = document.querySelector(".weight");
        $weight.textContent = "Weight: " + json.weight/10 + "Kg";






        if (json.moves.length >= 1) {
        
            json.moves.forEach(mov => {
                const $moves = document.querySelector(".moves-name");
                const $spanMoves = document.createElement("span");
                $spanMoves.textContent = mov.move.name;

                $spanMoves.className = "span-moves"

                $moves.appendChild($spanMoves);
            })
        } else {
            const $moves = document.querySelector(".moves-name");
            const $notFound = document.createElement("h1");
            $notFound.textContent = "Moves not found!";

            $moves.appendChild($notFound);
        }
        
        
        

    }catch(error){
        console.log(error)
    }

}

getPokemon(pokemonId);


//------------------------------------------------------------------------


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

    const $contFatherDark = document.querySelector(".container-father");
    $contFatherDark.classList.toggle("container-father-dark");
   
    const $footerDark = document.querySelector(".footer");
    $footerDark.classList.toggle("footer-dark");

    const $titleDark = document.querySelector(".title");
    $titleDark.classList.toggle("title-dark");
    
    const $nameDark = document.querySelector(".name-poke");
    $nameDark.classList.toggle("name-poke-dark");

    const $textTypeDark = document.querySelector(".text-type");
    $textTypeDark.classList.toggle("text-type-dark");

    const $baseStatsTitleDark = document.querySelector(".base-stats-title");
    $baseStatsTitleDark.classList.toggle("base-stats-title-dark");

    const $hpAtkDefDark = document.querySelector(".hp-atk-def");
    $hpAtkDefDark.classList.toggle("hp-atk-def-dark");

    const $heightWeightDark = document.querySelector(".height-weight");
    $heightWeightDark.classList.toggle("height-weight-dark")

    const $movesDark = document.querySelector(".moves");
    $movesDark.classList.toggle("moves-dark");

   
}

