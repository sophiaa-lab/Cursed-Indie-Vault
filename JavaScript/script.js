const listaJogos = [
  // ==================== 16 INICIAIS DA HOME ====================
  {
    ordemHome: 1,
    ordemCategoria: 1,
    titulo: "The coffin of Andy and Leyley",
    categoria: "Point & Click",
    ano: "2023",
    dev: "Nemlei",
    imagem: "Imagens/Andy-and-Leyley.svg",
    descricao: "Uma história macabra e visceral sobre dois irmãos presos em uma quarentena infernal, lidando com claustrofobia, canibalismo e pactos obscuros.",
    tags: ["Psicológico", "Decisões", "Narrativa S..."],
    tagsCompletas: ["Psicológico", "Decisões", "Narrativa Sombria"]
  },
  {
    ordemHome: 2,
    ordemCategoria: 2,
    titulo: "Dead Plate",
    categoria: "Point & Click",
    ano: "2023",
    dev: "Rachel Drawstrash",
    imagem: "Imagens/Dead-plate.svg", 
    descricao: "Um jogo de terror em estilo restaurante focado em Manon, um garçom desajeitado nos anos 1960 em França, descobrindo os segredos perturbadores do seu chefe.",
    tags: ["Restaurante", "Mistério", "Retro RPG"],
    tagsCompletas: ["Restaurante", "Mistério", "Retro RPG"]
  },
  {
    ordemHome: 3,
    ordemCategoria: 3,
    titulo: "Your Turn to Die",
    categoria: "Point & Click",
    ano: "2017",
    dev: "Nankidai",
    imagem: "Imagens/Your-turn.svg",
    descricao: "Sara Chidouin acorda presa em um jogo de sobrevivência onde os participantes precisam votar democraticamente em quem deve morrer em cada rodada.",
    tags: ["Death Game", "Votação", "Mistério"],
    tagsCompletas: ["Death Game", "Votação", "Mistério"]
  },
  {
    ordemHome: 4,
    ordemCategoria: 4,
    titulo: "Sally Face",
    categoria: "Point & Click",
    ano: "2016",
    dev: "Portable Moose",
    imagem: "Imagens/Sally-Face.svg",
    descricao: "Sara Chidouin acorda presa em um jogo de sobrevivência onde os participantes precisam votar democraticamente em quem deve morrer em cada rodada.",
    tags: ["Prótese Fac...", "Ocultismo", "Anos 90"],
    tagsCompletas: ["Prótese Facial", "Ocultismo", "Anos 90"]
  },
  {
    ordemHome: 5,
    ordemCategoria: 2,
    titulo: "Bad Parenting 1: Mr. Red Face",
    categoria: "Terror Analógico",
    ano: "2021",
    dev: "Impact Stories",
    imagem: "Imagens/Bad-Parenting.svg",
    descricao: "No papel de um rapazinho nos anos 90, enfrente o 'Sr. Cara Vermelha', uma entidade sobrenatural que aparece para punir pais abusivos.",
    tags: ["PS1 Graphics", "Trauma", "Apartamento"],
    tagsCompletas: ["PS1 Graphics", "Trauma", "Apartamento"]
  },
  {
    ordemHome: 6,
    ordemCategoria: 3,
    titulo: "Série Lacey (Lacey's Games)",
    categoria: "Terror Analógico",
    ano: "2023",
    dev: "Ghosttundra",
    imagem: "Imagens/Lacey.svg",
    descricao: "Uma série de jogos de vestir da era Flash aparentemente inocentes que gradualmente revelam o assédio e o pesadelo vivido por Lacey.",
    tags: ["Flash Game", "Analog Hor...", "Stalker"],
    tagsCompletas: ["Flash Game", "Analog Horror", "Stalker"]
  },
  {
    ordemHome: 7,
    ordemCategoria: 4,
    titulo: "Bonnie's Bakery",
    categoria: "Terror Analógico",
    ano: "2022",
    dev: "Melancholy Marionette",
    imagem: "Imagens/Bonnie.svg",
    descricao: "Ajude Bonnie a gerenciar a sua padaria fofa na vila dos animais... até descobrir de onde vêm os ingredientes 'especiais' dos pães.",
    tags: ["Culinária", "Segredo So...", "Cute Horror"],
    tagsCompletas: ["Culinária", "Segredo Sombrio", "Cute Horror"]
  },
  {
    ordemHome: 8,
    ordemCategoria: 5,
    titulo: "Mouthwashing",
    categoria: "Terror Analógico",
    ano: "2024",
    dev: "Wrong Organ",
    imagem: "Imagens/Mouthwashing.svg",
    descricao: "A tripulação da nave cargueira Tulpar fica à deriva no espaço após um colapso repentino. Os mantimentos acabam, mas o enxaguante bucal permanece.",
    tags: ["Espaço", "Psicológico", "Retro 3D"],
    tagsCompletas: ["Espaço", "Psicológico", "Retro 3D"]
  },
  {
    ordemHome: 9,
    ordemCategoria: 3,
    titulo: "The Baby in Yellow",
    categoria: "Mascot Horror & Sobrevivência",
    ano: "2021",
    dev: "Team Terrible",
    imagem: "Imagens/Baby.svg",
    descricao: "Você é uma babá encarregada de cuidar de um bebê. O problema é que a criança é um receptáculo demoníaco com poderes de alteração da realidade.",
    tags: ["Babysitting", "Demoníaco", "Física Com..."],
    tagsCompletas: ["Babysitting", "Demoníaco", "Física Cômica"]
  },
  {
    ordemHome: 10,
    ordemCategoria: 4,
    titulo: "Mr. Hopp's Playhouse",
    categoria: "Mascot Horror & Sobrevivência",
    ano: "2019",
    dev: "Moonbit Games",
    imagem: "Imagens/Mr.-Hopp's.svg",
    descricao: "A pequena Ruby tenta escapar de sua casa à noite sem fazer barulho enquanto o seu coelho de pelúcia gigante caça seus pais.",
    tags: ["Pixel 2D", "Stealth", "Brinquedo..."],
    tagsCompletas: ["Pixel 2D", "Stealth", "Brinquedos"]
  },
  {
    ordemHome: 11,
    ordemCategoria: 5,
    titulo: "Hello Neighbor",
    categoria: "Mascot Horror & Sobrevivência",
    ano: "2017",
    dev: "Dynamic Pixels",
    imagem: "Imagens/Hello-Neighbor.svg",
    descricao: "Infiltre-se no porão do seu vizinho suspeito para descobrir o seu segredo enquanto a IA aprende cada um dos seus movimentos anteriores.",
    tags: ["Invadir Casa", "Puzzle", "IA Adaptativa"],
    tagsCompletas: ["Invadir Casa", "Puzzle", "IA Adaptativa"]
  },
  {
    ordemHome: 12,
    ordemCategoria: 6,
    titulo: "Among the Sleep",
    categoria: "Mascot Horror & Sobrevivência",
    ano: "2014",
    dev: "Krillbite Studio",
    imagem: "Imagens/Among-Sleep.svg",
    descricao: "Explore um mundo surreal e aterrador pelos olhos de um bebê de dois anos acompanhado pelo seu urso de pelúcia falante Teddy.",
    tags: ["Bebê 2 Anos", "Trauma", "Perspectiva..."],
    tagsCompletas: ["Bebê 2 Anos", "Trauma", "Perspectiva"]
  },
  {
    ordemHome: 13,
    ordemCategoria: 4,
    titulo: "Lost in Play",
    categoria: "Fantasia & Aventura",
    ano: "2022",
    dev: "Happy Juice Games",
    imagem: "Imagens/Lost-in-Play.svg",
    descricao: "Uma viagem nostálgica pela imaginação de dois irmãos tentando voltar para casa enquanto interagem com goblins e feras mágicas.",
    tags: ["Aventura", "Sem Diálogos", "Desenho A..."],
    tagsCompletas: ["Aventura", "Sem Diálogos", "Desenho Animado"]
  },
  {
    ordemHome: 14,
    ordemCategoria: 5,
    titulo: "Hollow Knight",
    categoria: "Fantasia & Aventura",
    ano: "2017",
    dev: "Team Cherry",
    imagem: "Imagens/Hollow-Knight.svg",
    descricao: "Desça nas profundezas do reino arruinado de Hallownest para enfrentar insetos corrompidos pela 'Infecção' e descobrir o seu destino.",
    tags: ["Metroidvania", "Insetos", "Melancolia"],
    tagsCompletas: ["Metroidvania", "Insetos", "Melancolia"]
  },
  {
    ordemHome: 15,
    ordemCategoria: 6,
    titulo: "Limbo",
    categoria: "Fantasia & Aventura",
    ano: "2010",
    dev: "Playdead",
    imagem: "Imagens/Limbo.svg",
    descricao: "Um menino sem nome procura a sua irmã em um mundo escuro e hostil cheio de armadilhas letais e aranhas gigantes.",
    tags: ["Monocrom...", "Insetos", "Morte"],
    tagsCompletas: ["Monocromático", "Insetos", "Morte"]
  },
  {
    ordemHome: 16,
    ordemCategoria: 7,
    titulo: "INSIDE",
    categoria: "Fantasia & Aventura",
    ano: "2016",
    dev: "Playdead",
    imagem: "Imagens/INSIDE.svg",
    descricao: "Perseguido e sozinho, um rapaz encontra-se atraído para o centro de um projeto sombrio que envolve manipulação de corpos.",
    tags: ["Distopia", "Controle M...", "Obra-prima"],
    tagsCompletas: ["Distopia", "Controle Mental", "Obra-prima"]
  },

  // ==================== POINT & CLICK RESTANTES (7) ====================
  {
    ordemHome: 17,
    ordemCategoria: 5,
    titulo: "Fran Bow",
    categoria: "Point & Click",
    ano: "2015",
    dev: "Killmonday Games",
    imagem: "Imagens/Fran-Bow.svg",
    descricao: "Após a trágica morte dos pais, Fran escapa de um hospital psiquiátrico com a ajuda de medicação experimental para encontrar o seu gato Sr. Midnight.",
    tags: ["Psicológico", "Alucinação", "Surrealismo"],
    tagsCompletas: ["Psicológico", "Alucinação", "Surrealismo"]
  },
  {
    ordemHome: 18,
    ordemCategoria: 6,
    titulo: "Little Misfortune",
    categoria: "Point & Click",
    ano: "2019",
    dev: "Killmonday Games",
    imagem: "Imagens/Little-mis.svg",
    descricao: "Misfortune Ramirez Hernandez, uma menina imaginativa de 8 anos, busca a 'Felicidade Eterna' para a sua mãe guiada por uma voz misteriosa.",
    tags: ["Humor negro", "Inocência", "Escolhas"],
    tagsCompletas: ["Humor negro", "Inocência", "Escolhas"]
  },
  {
    ordemHome: 19,
    ordemCategoria: 7,
    titulo: "The Cat Lady",
    categoria: "Point & Click",
    ano: "2012",
    dev: "Harvester Games",
    imagem: "Imagens/Cat-Lady.svg",
    descricao: "Susan Ashworth, uma mulher solitária de 40 anos à beira do suicídio, recebe a imortalidade e a missão de eliminar cinco 'parasitas' humanos.",
    tags: ["Imortalidade", "Depressão", "Adulto"],
    tagsCompletas: ["Imortalidade", "Depressão", "Adulto"]
  },
  {
    ordemHome: 20,
    ordemCategoria: 8,
    titulo: "I Have No Mouth, and I Must Scream",
    categoria: "Point & Click",
    ano: "1995",
    dev: "Cyberdreams",
    imagem: "Imagens/No-mouth.svg",
    descricao: "Baseado no conto de Harlan Ellison. A superinteligência AM tortura os últimos cinco humanos sobreviventes há mais de 109 anos.",
    tags: ["Sci-Fi", "IA Maligna", "Clássico"],
    tagsCompletas: ["Sci-Fi", "IA Maligna", "Clássico"]
  },
  {
    ordemHome: 21,
    ordemCategoria: 9,
    titulo: "Alice is Dead",
    categoria: "Point & Click",
    ano: "2009",
    dev: "ImpendingRiot / Hypto",
    imagem: "Imagens/Alice.svg",
    descricao: "Descubra quem matou Alice no País das Maravilhas em uma reimaginação noir, decadente e visceral do universo de Lewis Carroll.",
    tags: ["Flash Classic", "Conto de Fa...", "Clássico"],
    tagsCompletas: ["Flash Classic", "Conto de Fadas", "Clássico"]
  },
  {
    ordemHome: 22,
    ordemCategoria: 10,
    titulo: "Mad Father",
    categoria: "Point & Click",
    ano: "2012",
    dev: "sen",
    imagem: "Imagens/Mad-father.svg",
    descricao: "A jovem Aya descobre que o laboratório secreto de seu pai médico guarda segredos horríveis quando os mortos retornam para cobrar vingança.",
    tags: ["RPG Maker", "Visual Novel", "Maldição"],
    tagsCompletas: ["RPG Maker", "Visual Novel", "Maldição"]
  },
  {
    ordemHome: 23,
    ordemCategoria: 11,
    titulo: "Blood Money",
    categoria: "Point & Click",
    ano: "2022",
    dev: "Novena",
    imagem: "Imagens/Blood-Money.svg",
    descricao: "Uma narrativa envolvente que explora a venda de partes do corpo e negócios duvidosos no submundo de uma cidade decadente.",
    tags: ["Pixel Art", "Experimen...", "Obscuro"],
    tagsCompletas: ["Pixel Art", "Experimental", "Obscuro"]
  },

  // ==================== TERROR ANALÓGICO RESTANTES (7) ====================
  {
    ordemHome: 24,
    ordemCategoria: 1,
    titulo: "Andy's Apple Farm",
    categoria: "Terror Analógico",
    ano: "2021",
    dev: "M37",
    imagem: "Imagens/Andy.svg", // <-- Adicione a imagem aqui
    descricao: "Um jogo de arcade retro de 8-bits sobre uma maçã fofa que esconde uma tragédia familiar real codificada através de erros do sistema.",
    tags: ["Terror Anal...", "Atari 2600", "Glitch"],
    tagsCompletas: ["Terror Analógico", "Atari 2600", "Glitch"]
  },
  {
    ordemHome: 25,
    ordemCategoria: 6,
    titulo: "Amanda the Adventurer",
    categoria: "Terror Analógico",
    ano: "2023",
    dev: "MANGLEDMESH",
    imagem: "Imagens/Amanda.svg",
    descricao: "Ao assistir a antigas fitas VHS de um programa infantil esquecido, Riley descobre que Amanda e o seu ovelha Wooly estão vivos e pedem ajuda.",
    tags: ["Fitas VHS", "Educativo", "Demônio"],
    tagsCompletas: ["Fitas VHS", "Educativo", "Demônio"]
  },
  {
    ordemHome: 26,
    ordemCategoria: 7,
    titulo: "Hungry Lamu",
    categoria: "Terror Analógico",
    ano: "2022",
    dev: "KPop",
    imagem: "Imagens/Hungry-Lamu.svg",
    descricao: "Lamu é uma lhama faminta que procura frutas na floresta. No entanto, a perspectiva muda para a visão de uma vítima perseguida por um monstro.",
    tags: ["Llama", "Fome", "Quebra de..."],
    tagsCompletas: ["Llama", "Fome", "Quebra de Expectativa"]
  },
  {
    ordemHome: 27,
    ordemCategoria: 8,
    titulo: "No, I'm Not Human",
    categoria: "Terror Analógico",
    ano: "2023",
    dev: "Tri-Star Games",
    imagem: "Imagens/Not-Human.svg",
    descricao: "Em meio a um evento apocalíptico, pessoas procuram abrigo na sua casa. Mas você deve inspecioná-las cuidadosamente para identificar impostores não-humanos.",
    tags: ["Impostor", "Paranoia", "Apocalipse"],
    tagsCompletas: ["Impostor", "Paranoia", "Apocalipse"]
  },
  {
    ordemHome: 28,
    ordemCategoria: 9,
    titulo: "Cooking Companions",
    categoria: "Terror Analógico",
    ano: "2021",
    dev: "Deer Treader",
    imagem: "Imagens/Cooking.svg",
    descricao: "Presos em uma cabana na floresta durante uma enchente, um grupo de jovens precisa tomar medidas severas para não morrer de fome.",
    tags: ["Folclore", "Fome", "Psicológic..."],
    tagsCompletas: ["Folclore", "Fome", "Psicológico"]
  },
  {
    ordemHome: 29,
    ordemCategoria: 10,
    titulo: "MiSide",
    categoria: "Terror Analógico",
    ano: "2024",
    dev: "AIHASTO",
    imagem: "Imagens/Miside.svg",
    descricao: "Um jogador é misteriosamente puxado para dentro do celular para viver no apartamento de sua personagem virtual amada, Mita.",
    tags: ["Waifu", "Bizarro", "Mundo Virt..."],
    tagsCompletas: ["Waifu", "Bizarro", "Mundo Virtual"]
  },
  {
    ordemHome: 30,
    ordemCategoria: 11,
    titulo: "Milk inside a bag of milk...",
    categoria: "Terror Analógico",
    ano: "2020",
    dev: "Nikita Kryukov",
    imagem: "Imagens/Milk-Inside.svg",
    descricao: "Ajude uma jovem com severos transtornos mentais a realizar uma tarefa simples: comprar um saco de leite na mercearia.",
    tags: ["Ansiedade", "Visual Novel", "Experiência"],
    tagsCompletas: ["Ansiedade", "Visual Novel", "Experiência"]
  },

  // ==================== MASCOT HORROR RESTANTES (7) ====================
  {
    ordemHome: 31,
    ordemCategoria: 1,
    titulo: "Five Nights at Freddy's (FNAF)",
    categoria: "Mascot Horror & Sobrevivência",
    ano: "2014",
    dev: "Scott Cawthon",
    imagem: "Imagens/FNAF.svg",
    descricao: "Gerencie a segurança noturna da Freddy Fazbear's Pizza e sobreviva aos animatrônicos possuídos através das câmeras e portas.",
    tags: ["Animatrôni...", "Câmeras", "Pioneiro"],
    tagsCompletas: ["Animatrônicos", "Câmeras", "Pioneiro"]
  },
  {
    ordemHome: 32,
    ordemCategoria: 2,
    titulo: "Poppy Playtime",
    categoria: "Mascot Horror & Sobrevivência",
    ano: "2021",
    dev: "MOB Entertainment",
    imagem: "Imagens/Poppy.svg",
    descricao: "Investigue uma fábrica de brinquedos abandonada utilizando braços mecânicos telescópicos enquanto foge de mascotes vivos aterrorizantes.",
    tags: ["GrabPack", "Huggy Wug...", "Fábrica de..."],
    tagsCompletas: ["GrabPack", "Huggy Wuggy", "Fábrica de Brinquedos"]
  },
  {
    ordemHome: 33,
    ordemCategoria: 7,
    titulo: "Darkwood",
    categoria: "Mascot Horror & Sobrevivência",
    ano: "2017",
    dev: "Acid Wizard Studio",
    imagem: "Imagens/Darkwood.svg",
    descricao: "Explore uma floresta misteriosa e mutante na Polônia durante o dia e barricadese na sua casa para sobreviver aos horrores da noite.",
    tags: ["Top-down", "Sem Jumps...", "Sobrevivên..."],
    tagsCompletas: ["Top-down", "Sem Jumpscares", "Sobrevivência"]
  },
  {
    ordemHome: 34,
    ordemCategoria: 8,
    titulo: "Garten of Banban",
    categoria: "Mascot Horror & Sobrevivência",
    ano: "2023",
    dev: "Euphoric Brothers",
    imagem: "Imagens/Banban.svg",
    descricao: "Entre na creche de Banban para procurar o seu filho desaparecido e enfrente criaturas coloridas e bizarras que dominam o subsolo.",
    tags: ["Creche", "Camp", "Mascotes C..."],
    tagsCompletas: ["Creche", "Camp", "Mascotes Coloridos"]
  },
  {
    ordemHome: 35,
    ordemCategoria: 9,
    titulo: "Tattletail",
    categoria: "Mascot Horror & Sobrevivência",
    ano: "2016",
    dev: "Waystarter",
    imagem: "Imagens/Tattletail.svg",
    descricao: "Antes do Natal de 1998, alimente e cuide do seu robô Furby virtual sem acordar a aterrorizante 'Mama Tattletail' no escuro.",
    tags: ["Anos 90", "Furby", "Natal"],
    tagsCompletas: ["Anos 90", "Furby", "Natal"]
  },
  {
    ordemHome: 36,
    ordemCategoria: 10,
    titulo: "Bendy and the Ink Machine",
    categoria: "Mascot Horror & Sobrevivência",
    ano: "2017",
    dev: "Kindly Beast",
    imagem: "Imagens/Bendy.svg",
    descricao: "Um ex-animador retorna ao antigo estúdio de animação e descobre que a máquina de tinta deu vida ao seu mascote em forma de demônio.",
    tags: ["Animação...", "Tinta", "Estúdio"],
    tagsCompletas: ["Animação Antiga", "Tinta", "Estúdio"]
  },
  {
    ordemHome: 37,
    ordemCategoria: 11,
    titulo: "My Friendly Neighborhood",
    categoria: "Mascot Horror & Sobrevivência",
    ano: "2023",
    dev: "John & Evan Szymanski",
    imagem: "Imagens/Friendly-Neighborhood.svg",
    descricao: "Um mecânico é enviado para desligar a antena de um estúdio de TV que voltou a transmitir um antigo programa de fantoches descontinuado.",
    tags: ["Muppets", "Grama", "Survival Ho..."],
    tagsCompletas: ["Muppets", "Grama", "Survival Horror"]
  },

  // ==================== FANTASIA & AVENTURA RESTANTES (7) ====================
  {
    ordemHome: 38,
    ordemCategoria: 1,
    titulo: "Little Nightmares",
    categoria: "Fantasia & Aventura",
    ano: "2017",
    dev: "Tarsier Studios",
    imagem: "Imagens/Little-Nightmares.svg",
    descricao: "Ajude Six a escapar da 'Bocal' (The Maw), um navio colossal submerso habitado por almas corrompidas e famintas por carne.",
    tags: ["Plataforma", "Six", "Gourmet G..."],
    tagsCompletas: ["Plataforma", "Six", "Gourmet Grotesco"]
  },
  {
    ordemHome: 39,
    ordemCategoria: 2,
    titulo: "Cuphead",
    categoria: "Fantasia & Aventura",
    ano: "2017",
    dev: "Studio MDHR",
    imagem: "Imagens/Cuphead.svg",
    descricao: "Após perderem uma aposta com o Diabo, os irmãos Cuphead e Mugman precisam coletar os contratos de almas dos devedores.",
    tags: ["Run and Gun", "Desenho 19...", "Boss Rush"],
    tagsCompletas: ["Run and Gun", "Desenho 1930", "Boss Rush"]
  },
  {
    ordemHome: 40,
    ordemCategoria: 3,
    titulo: "Stray",
    categoria: "Fantasia & Aventura",
    ano: "2022",
    dev: "BlueTwelve Studio",
    imagem: "Imagens/Stray.svg",
    descricao: "Um gato de rua perdido em uma cibercidade esquecida habitada apenas por robôs precisa desvendar mistérios para retornar à superfície.",
    tags: ["Gato", "Cyberpunk", "Robôs"],
    tagsCompletas: ["Gato", "Cyberpunk", "Robôs"]
  },
  {
    ordemHome: 41,
    ordemCategoria: 8,
    titulo: "Cult of the Lamb",
    categoria: "Fantasia & Aventura",
    ano: "2022",
    dev: "Massive Monster",
    imagem: "Imagens/Cult-of-the-Lamb.svg",
    descricao: "Um cordeiro possuído salvo da execução deve criar um culto em nome do estranho benfeitor que lhe concedeu uma segunda vida.",
    tags: ["Roguelite", "Gestão de S...", "Ocultismo..."],
    tagsCompletas: ["Roguelite", "Gestão de Seita", "Ocultismo"]
  },
  {
    ordemHome: 42,
    ordemCategoria: 9,
    titulo: "Undertale",
    categoria: "Fantasia & Aventura",
    ano: "2015",
    dev: "Toby Fox",
    imagem: "Imagens/Undertale.svg",
    descricao: "Caia no subsolo dos monstros e escolha entre lutar para voltar à superfície ou fazer amizade com cada criatura no seu caminho.",
    tags: ["Desconstru...", "Pacto Sem...", "Trilha Son..."],
    tagsCompletas: ["Desconstrução", "Pacifista", "Trilha Sonora"]
  },
  {
    ordemHome: 43,
    ordemCategoria: 10,
    titulo: "Tunic",
    categoria: "Fantasia & Aventura",
    ano: "2022",
    dev: "Tunic Team",
    imagem: "Imagens/Tunic.svg",
    descricao: "Explore uma terra repleta de lendas perdidas e enfrente feras antigas no papel de uma pequena raposa destemida.",
    tags: ["Manual do...", "Zelda-like", "Alfabeto Se..."],
    tagsCompletas: ["Manual do Jogo", "Zelda-like", "Alfabeto Secreto"]
  },
  {
    ordemHome: 44,
    ordemCategoria: 11,
    titulo: "Bramble: The Mountain King",
    categoria: "Fantasia & Aventura",
    ano: "2023",
    dev: "Dimfrost Studio",
    imagem: "Imagens/Bramble.svg",
    descricao: "Assuma o papel de Olle, um jovem corajoso que parte em busca da sua irmã sequestrada por um troll gigante em florestas assustadoras.",
    tags: ["Folclore Nó...", "Ollem", "Monstros G..."],
    tagsCompletas: ["Folclore Nórdico", "Olle", "Monstros Gigantes"]
  }
];

let categoriaAtual = "todos";
let textoBusca = "";
let mostrarTudo = false;

const gradeJogos = document.getElementById("gradeJogos");
const semResultados = document.getElementById("semResultados");
const campoBusca = document.getElementById("campoBusca");
const limparBusca = document.getElementById("limparBusca");
const botoesCategoria = document.querySelectorAll(".btn-categoria");
const btnResetar = document.getElementById("btnResetar");
const btnVerMais = document.getElementById("btnVerMais");
const voltarInicio = document.getElementById("voltarInicio");

const janelaJogo = document.getElementById("janelaJogo");
const btnFecharModal = document.getElementById("btnFecharModal");
const modalImagem = document.getElementById("modalImagem");
const modalTitulo = document.getElementById("modalTitulo");
const modalCategoria = document.getElementById("modalCategoria");
const modalDev = document.getElementById("modalDev");
const modalAno = document.getElementById("modalAno");
const modalDescricao = document.getElementById("modalDescricao");
const modalTags = document.getElementById("modalTags");

function atualizarContadores() {
  document.getElementById("cont-todos").textContent = listaJogos.length;
  document.getElementById("cont-point").textContent = listaJogos.filter(j => j.categoria === "Point & Click").length;
  document.getElementById("cont-terror").textContent = listaJogos.filter(j => j.categoria === "Terror Analógico").length;
  document.getElementById("cont-mascot").textContent = listaJogos.filter(j => j.categoria === "Mascot Horror & Sobrevivência").length;
  document.getElementById("cont-fantasia").textContent = listaJogos.filter(j => j.categoria === "Fantasia & Aventura").length;
}

function abrirModal(jogo) {
  if (jogo.imagem) {
    modalImagem.classList.remove("escondida");
    modalImagem.onerror = () => modalImagem.classList.add("escondida");
    modalImagem.src = jogo.imagem;
    modalImagem.alt = jogo.titulo;
  } else {
    modalImagem.src = "";
    modalImagem.classList.add("escondida");
  }

  modalTitulo.textContent = jogo.titulo;
  modalCategoria.textContent = jogo.categoria;
  modalDev.textContent = jogo.dev;
  modalAno.textContent = jogo.ano;
  modalDescricao.textContent = jogo.descricao;

  modalTags.innerHTML = jogo.tagsCompletas
    .map(tag => `<span class="tag-modal">${tag}</span>`)
    .join("");

  janelaJogo.classList.add("aberto");
  document.body.style.overflow = "hidden";
}

function fecharModal() {
  janelaJogo.classList.remove("aberto");
  document.body.style.overflow = "";
}

function mostrarCards() {
  const busca = textoBusca.trim().toLowerCase();

  const filtrados = listaJogos
    .filter(jogo => {
      const bateCategoria = categoriaAtual === "todos" || jogo.categoria === categoriaAtual;
      if (!bateCategoria) return false;

      if (!busca) return true;

      const tudo = [
        jogo.titulo,
        jogo.dev,
        jogo.categoria,
        jogo.ano,
        jogo.descricao,
        ...jogo.tags,
        ...jogo.tagsCompletas
      ].join(" ").toLowerCase();

      return tudo.includes(busca);
    })
    .sort((a, b) => {
      if (categoriaAtual === "todos") {
        return a.ordemHome - b.ordemHome;
      }
      return a.ordemCategoria - b.ordemCategoria;
    });

  gradeJogos.innerHTML = "";

  if (filtrados.length === 0) {
    semResultados.classList.add("visivel");
    btnVerMais.classList.add("escondido");
    return;
  } else {
    semResultados.classList.remove("visivel");
  }

  const limiteInicial = categoriaAtual === "todos" ? 16 : 12;
  const temMais = !busca && filtrados.length > limiteInicial;
  const visiveis = (!busca && !mostrarTudo) ? filtrados.slice(0, limiteInicial) : filtrados;

  if (temMais) {
    btnVerMais.classList.remove("escondido");
    btnVerMais.innerHTML = mostrarTudo
      ? 'Recolher arquivo <span>↑</span>'
      : 'Explorar arquivo <span>→</span>';
  } else {
    btnVerMais.classList.add("escondido");
  }

  visiveis.forEach(jogo => {
    const card = document.createElement("article");
    card.className = "card-jogo";

    card.innerHTML = `
      <div class="topo-card">
        <span class="etiqueta-categoria" title="${jogo.categoria}">${jogo.categoria}</span>
        <span class="ano-card">${jogo.ano}</span>
      </div>
      <h2 class="titulo-card">${jogo.titulo}</h2>
      <p class="dev-card">Dev: <span>${jogo.dev}</span></p>
      <p class="descricao-card">${jogo.descricao}</p>
      <div class="tags-card">
        ${jogo.tags.map((t, i) => `<span class="tag" title="${jogo.tagsCompletas[i] || t}">${t}</span>`).join("")}
      </div>
    `;

    card.addEventListener("click", () => abrirModal(jogo));
    gradeJogos.appendChild(card);
  });
}

botoesCategoria.forEach(botao => {
  botao.addEventListener("click", () => {
    botoesCategoria.forEach(b => b.classList.remove("ativo"));
    botao.classList.add("ativo");
    categoriaAtual = botao.dataset.categoria;
    mostrarTudo = false;
    mostrarCards();
  });
});

campoBusca.addEventListener("input", (e) => {
  textoBusca = e.target.value;
  limparBusca.classList.toggle("visivel", textoBusca.length > 0);
  mostrarCards();
});

limparBusca.addEventListener("click", () => {
  textoBusca = "";
  campoBusca.value = "";
  limparBusca.classList.remove("visivel");
  campoBusca.focus();
  mostrarCards();
});

function resetarTudo() {
  categoriaAtual = "todos";
  textoBusca = "";
  mostrarTudo = false;
  campoBusca.value = "";
  limparBusca.classList.remove("visivel");
  botoesCategoria.forEach(b => {
    b.classList.toggle("ativo", b.dataset.categoria === "todos");
  });
  mostrarCards();
}

btnResetar.addEventListener("click", resetarTudo);
voltarInicio.addEventListener("click", resetarTudo);

btnVerMais.addEventListener("click", () => {
  mostrarTudo = !mostrarTudo;
  mostrarCards();
  if (!mostrarTudo) {
    document.querySelector(".secao-categorias").scrollIntoView({ behavior: "smooth" });
  }
});

btnFecharModal.addEventListener("click", fecharModal);
janelaJogo.addEventListener("click", (e) => {
  if (e.target === janelaJogo) fecharModal();
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && janelaJogo.classList.contains("aberto")) {
    fecharModal();
  }
});

atualizarContadores();
mostrarCards();