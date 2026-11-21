# Cursed Indie Vault (CIV)

Repositório arquivístico e catálogo interativo dedicado à curadoria e documentação de jogos independentes focados em narrativa sombria, terror analógico, mascot horror e fantasia/aventura.

## Sobre o Projeto

O **Cursed Indie Vault** reúne 44 títulos independentes organizados em quatro categorias principais, permitindo explorar fichas detalhadas de cada obra, filtrar por gênero e pesquisar por título, estúdio/desenvolvedor ou tags.

### Categorias do Arquivo
- **Point & Click** (11 títulos)
- **Terror Analógico** (11 títulos)
- **Mascot Horror & Sobrevivência** (11 títulos)
- **Fantasia & Aventura** (11 títulos)

## Funcionalidades

- **Busca em tempo real:** filtragem instantânea por nome do jogo, desenvolvedor, ano, sinopse ou tags.
- **Filtro por categorias:** alternância rápida entre todos os títulos e as quatro categorias do catálogo.
- **Visualização expansível:** exibição inicial organizada com opção de expandir ou recolher o arquivo completo.
- **Ficha detalhada (Modal):** ao clicar em qualquer card, abre uma janela com banner do jogo, categoria, desenvolvedor, ano de lançamento, sinopse e tags completas.
- **Layout responsivo:** adaptação automática para telas de computador, tablet e celular.

## Tecnologias Utilizadas

- **HTML5** — estrutura semântica da página e do modal.
- **CSS3** — estilização, variáveis de layout, CSS Grid, Flexbox e responsividade.
- **JavaScript (Vanilla)** — renderização dinâmica dos cards, sistema de busca, filtros e controle do modal.
- **Google Fonts** — tipografia editorial com *IBM Plex Serif* e *Ancizar Serif*.

## Estrutura de Pastas

```text
cursed-indie-vault/
├── index.html        # Estrutura principal da página
├── style.css         # Estilos, cores, grid e responsividade
├── script.js         # Banco de dados dos jogos e interatividade
├── README.md         # Documentação do projeto
└── imagens/          # Logos e banners dos jogos
