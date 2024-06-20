export class Juego {
  constructor(name = null, price = null, category = null, description = null, year = null, img = null) {
      if (name !== null) {
          this.name = name
      } else {
          this.name = "Debe asignar un valor para la casilla nombre"
      };

      if (price !== null) {
          this.price = price
      } else {
          this.price = "Debe asignar un valor para la casilla precio"
      };

      if (category !== null) {
          this.category = category
      } else {
          this.category = "Debe asignar un valor para la casilla categoria"
      };

      if (description !== null) {
          this.description = description
      } else {
          this.description = "Debe asignar un valor para el nombre"
      };

      if (year !== null) {
          this.year = year
      } else {
          this.year = "Debe asignar un valor para el nombre"
      };

      if (img !== null) {
          this.img = img
      } else {
          this.img = "Debe asignar un valor para el nombre"
      };
  }
}

let juegos = [
  {
    id: 1,
    name: `Hollow Knight`,
    price: 455,
    category: "Aventura",
    description: `Es un juego de aventuras y Accion te sumerges en un mundo oscuro y misterioso, poblado por insectos y criaturas extrañas.`,
    year: `2017`,
    img: `./img/paneles/HollowKnight.jpg`
  },

  {
    id: 2,
    name: `Counter Strike 2`,
    price: 560,
    category: `Shooter`,
    description: `Counter-Strike 2 es un videojuego de disparos táctico en primera persona multijugador. Es la quinta entrega principal de la serie Counter-Strike`,
    year: `2023`,
    img: `./img/paneles/CounterStrike2.jpg`
  },

  {
    id: 3,
    name: `DOOM`,
    price: 569,
    category: `Shooter`,
    description: `Los jugadores toman el papel de un marine espacial sin nombre mientras lucha contra las fuerzas demoníacas del infierno que han sido desatadas por la Unión
     Aerospace Corporation en un planeta colonizado en el futuro, Marte.`,
    year: `2016`,
    img: `./img/paneles/Doom.jpg`
  },

  {
    id: 4,
    name: `The Forest`,
    price: 429,
    category: `Aventura`,
    description: `El juego es de tipo mundo abierto, donde hay diversas misiones,las cuales no cambian la línea principal del juego. El objetivo que tiene el jugador es
     sobrevivir y rescatar a su hijo desaparecido, después de que el avión en el que viajaban se estrellara en una isla llena de nativos mutantes y caníbales.`,
    year: `2018`,
    img: `./img/paneles/TheForest.jpg`
  },

  {
    id: 5,
    name: `Fallout: New Vegas`,
    price: 599,
    category: `Shooter`,
    description: `es un videojuego de rol de Accion de disparos en
     primera y tercera persona desarrollado por Bethesda Game Studios y distribuido por Bethesda Softworks.`,
    year: `2015`,
    img: `./img/paneles/Fallout4.jpg`
  },

  {
    id: 6,
    name: `Dark Souls: REMASTERED`,
    price: 1199,
    category: `Aventura`,
    description: `Dark Souls cuenta con muchos elementos ya conocidos:
     un universo fantástico y oscuro, tortuosos recorridos por mazmorras, temibles enemigos e interacciones online exclusivas`,
    year: `2015`,
    img: `./img/paneles/DarkSoulsREMASTERED.jpg`
  },

  {
    id: 7, 
    name: `Bioshock Infinite`, 
    price: 606, 
    category: `Accion`, 
    description: `Como DeWitt, el jugador se moverá a las diversas 
     estructuras de Columbia usando un gancho a través de unas vías férreas que conectan los edificios llamada Skyline, y otros
     medios para buscar a Elizabeth`, 
    year: `2013`, 
    img: `./img/paneles/BioshockInfinite.jpg`
  },

  {
    id: 8, 
    name: `Blasphemous`, 
    price: 529, 
    category: `Accion`, 
    description: `Eres el Penitente, el único superviviente de la masacre de la hermandad
     del Lamento Mudo. Estás atrapado en un ciclo de penitencia de muerte y resurrección constante, y solo tú puedes librar al mundo de este
      destino tan terrible y llegar al origen de tu angustia.`, 
    year: `2019`, 
    img: `./img/paneles/Blasphemous.jpg`
  },

  {
    id: 9, 
    name: `Cuphead`, 
    price: 429, 
    category: `Aventura`, 
    description: `Inspirado en las caricaturas de 1930, las imágenes y el audio se crearon de
     forma minuciosa con las mismas técnicas de la era, esto es, animación tradicional a mano, fondos de marca de agua y grabaciones originales
     de jazz.`, 
    year: `2017`, 
    img: `./img/paneles/cuphead.jpg`
  },

  {
    id: 10, 
    name: `Dead Space`, 
    price: 429, 
    category: `Aventura`, 
    description: `Isaac Clarke es un ingeniero común y corriente en una misión para reparar
     una enorme nave de la clase Planet Cracker, el USG Ishimura, pero descubre que ha ocurrido algo espantoso. Asesinaron a la tripulación de la
     nave y la amada pareja de Isaac, Nicole, se encuentra perdida en algún lugar abordo.`, 
    year: `2006`, 
    img: `./img/paneles/Deadspace.jpg`
  },

  {
    id: 11, 
    name: `Hades`, 
    price: 780, 
    category: `Accion`, 
    description: `Hades es un juego de estilo roguelike de dioses y mazmorras que combina los mejores aspectos de los aclamados títulos 
     anteriores de Supergiant, como la Accion vertiginosa de Bastion, la rica atmósfera y profundidad de Transistor y la narrativa enfocada en los personajes de Pyre.`, 
    year: `2020`, 
    img: `./img/paneles/Hades.jpg`
  },

  {
    id: 12, 
    name: `Loop Hero`, 
    price: 455, 
    category: `Estrategia`, 
    description: `Utiliza una baraja creciente de cartas místicas para situar enemigos, edificios y terrenos en cada bucle de expedición único 
      para el valiente héroe. Recupera y equipa poderosos objetos para cada clase de héroe en sus batallas y amplía el campamento de los supervivientes para 
      reforzar cada aventura en el bucle.`, 
    year: `2021`,
    img: `./img/paneles/LoopHero.jpg`
  },

  {
    id: 13, 
    name: `Stardew Valley`, 
    price: 329, 
    category: `Aventura`, 
    description: `Stardew Valley es un juego de simulación de granja inspirado en juegos como Harvest Moon. Al principio del juego, el 
     jugador crea su personaje, pudiendo elegir el sexo del mismo, color y tipo de cabello, entre otros. El jugador recibe la granja en ruinas que alguna vez poseyó su abuelo.`, 
      year: `2016`, 
      img: `./img/paneles/StardewValley.jpg`
  },

  {
    id: 14, 
    name: `Just Cause 3`, 
    price: 399, 
    category: `Accion`, 
    description: `Rico Rodríguez vuelve a sembrar el caos en un espectacular aventura de mundo abierto. La república de Medici, en el 
     Mediterráneo, se encuentra oprimida por el tiránico régimen del general Di Ravello, un dictador con una insaciable sed de poder.`, 
    year: `2015`, 
    img: `./img/paneles/JustCause3.jpeg`
  },

  {
    id: 15, 
    name: `Serious Sam`, 
    price: 189, 
    category: `Accion`, 
    description: `Serious Sam es un juego de Accion tridimensional en primera persona en el que se mezclan a partes iguales la ficción, la 
     fantasía y una avanzada tecnología.`, 
    year: `2001`, 
    img: `./img/paneles/SeriousSam.jpg`
  },

  {
    id: 16, 
    name: `Resident Evil 7 Biohazard`, 
    price: 826, 
    category: `Accion`, 
    description: `Marca un nuevo inicio para el género del survival horror, con un cambio total de modelo con la aterradora e
     inmersiva perspectiva de jugador «vista aislada». Con el revolucionario RE Engine, el terror llega a nuevas cotas, con un fotorrealismo tan impactante que no podrás
     apartar los ojos.`,
    year: `2017`, 
    img: `./img/paneles/ResidentEvil7.jpeg`
  },

  {
    id: 17, 
    name: `Monster Hunter: World`, 
    price: 1240, 
    category:{ id: `Accion`}, 
    description: `Combate contra monstruos gigantescos en escenarios épicos. Tu tarea es aceptar misiones de caza de monstruos 
     en una gran variedad de hábitats. Abátelos y recibe materiales que podrás utilizar para crear armas y armaduras más poderosas con las que enfrentarte a monstruos
     aún más peligrosos.`,
    year: `2018`, 
    img: `./img/paneles/MonsterHunter.jpg`
  },

  {
    id: 18, 
    name: `Far Cry 3`, 
    price: 659, 
    category: `Accion`,
    description: `Crea tu propia aventura de disparos en primera persona. Personaliza tus armas, tus habilidades y el enfoque que usas en cada misión, ya 
     sea Accion intensa y desenfrenada, eliminaciones sigilosas o un letal rifle de rancotirador desde la lejanía.`, 
    year: `2012`, 
    img: `./img/paneles/FarCry3.jpg`
  },
  
  {
    id: 19, 
    name: `The Small Land`, 
    price: 1030, 
    category: `Aventura`, 
    description: `Es una aventura de Accion a cargo de Merge Games para PC, PlayStation 5 y Xbox Series. ¡Vive una aventura a pequeña escala! Disfruta
      de la supervivencia multijugador en un mundo grande y peligroso. Prepararse es clave cuando eres tan pequeño y estás al final de la cadena alimentaria`, 
    year: `2024`, 
    img: `./img/paneles/SmallLand.jpg`
  },
];


let personas = [
  { id : 0, nombre : "Ana", juegos : [] },
  { id : 1, nombre : "Pedro", juegos : [] },
  { id : 2, nombre : "Martin", juegos : [] },
];
