import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Platform,
  Dimensions,
  // TouchableOpacity,
} from 'react-native';
import Star from './Star';
import sets from './sets.json';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexWrap: 'wrap',
    padding: 12,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  group: {
    width: '100%',
    maxWidth: 370,
    borderWidth: 1,
    borderColor: '#c0c0c0',
    borderRadius: 12,
    padding: 4,
    // backgroundColor: '#f2c18f',
    backgroundColor: '#eecdba',
    marginBottom: 12,
    marginRight: (width >= 394) ? 12 : 0,
  },
  groupTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fcfcfc',
    backgroundColor: '#92c51f',
    padding: 6,
    alignSelf: 'center',
    textAlign: 'center',
    borderRadius: 6,
  },
  cards: {
    flex: 1,
    marginTop: 8,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  card: {
    width: '29%',
    borderWidth: 2,
    borderColor: '#fcfcfc',
    borderRadius: 6,
    backgroundColor: '#ffffff',
    marginHorizontal: 4,
    marginBottom: 12,
  },
  stars: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  cardTitle: {
    fontSize: 11,
    textAlign: 'center',
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingHorizontal: 8,
    marginTop: 8,
  },
  button: {
    width: 18,
    height: 18,
    borderRadius: 9,
    alignItems: 'center',
    justifyContent: 'center',
  },
  minus: {
    backgroundColor: 'red',
  },
  plus: {
    backgroundColor: 'green',
  },
  buttonText: {
    color: '#ffffff',
    textAlign: 'center',
    marginBottom: 4,
  },
  quantity: {
    paddingVertical: 2,
    paddingHorizontal: 8,
    borderRadius: 8,
    color: '#000000',
    backgroundColor: '#d0d0d0',
    marginBottom: 6,
  },
});

const groups = [
  {
    id: 'pets',
    title: 'Bichinhos',
    cards: [
      { id: 'pets_1', cardTitle: 'Alpaca', stars: 1 },
      { id: 'pets_2', cardTitle: 'Touro Poderoso', stars: 1 },
      { id: 'pets_3', cardTitle: 'Gato Fofinho', stars: 1 },
      { id: 'pets_4', cardTitle: 'Vaca Sagrada', stars: 1 },
      { id: 'pets_5', cardTitle: 'Panda Fofo', stars: 2 },
      { id: 'pets_6', cardTitle: 'Tigre Gatinho', stars: 2 },
      { id: 'pets_7', cardTitle: 'Veado', stars: 3 },
      { id: 'pets_8', cardTitle: 'Melhores Amigos', stars: 3 },
      { id: 'pets_9', cardTitle: 'Pinguim Estiloso', stars: 4 },
    ],
  },
  {
    id: 'statues',
    title: 'Estatuas',
    cards: [
      { id: 'statues_1', cardTitle: 'Sultão', stars: 1 },
      { id: 'statues_2', cardTitle: 'Joe da Caverna', stars: 1 },
      { id: 'statues_3', cardTitle: 'Imperador Dourado', stars: 1 },
      { id: 'statues_4', cardTitle: 'Troia', stars: 2 },
      { id: 'statues_5', cardTitle: 'Canguru', stars: 2 },
      { id: 'statues_6', cardTitle: 'Rei Morsa', stars: 3 },
      { id: 'statues_7', cardTitle: 'Netuno', stars: 3 },
      { id: 'statues_8', cardTitle: 'Totem Estiloso', stars: 4 },
      { id: 'statues_9', cardTitle: 'Menina da Água', stars: 4, gold: true },
    ],
  },
  {
    id: 'beasts',
    title: 'Feras',
    cards: [
      { id: 'beasts_1', cardTitle: 'Guardião do Recife', stars: 1 },
      { id: 'beasts_2', cardTitle: 'Ema', stars: 1 },
      { id: 'beasts_3', cardTitle: 'Camelo Sonolento', stars: 2 },
      { id: 'beasts_4', cardTitle: 'Águia Poderosa', stars: 2 },
      { id: 'beasts_5', cardTitle: 'MC Búfalo', stars: 2 },
      { id: 'beasts_6', cardTitle: 'Rei do Oceano', stars: 3 },
      { id: 'beasts_7', cardTitle: 'Elefante Asiático', stars: 3 },
      { id: 'beasts_8', cardTitle: 'O Tigre', stars: 4 },
      { id: 'beasts_9', cardTitle: 'Leão Fortão', stars: 5, gold: true },
    ],
  },
  {
    id: 'items',
    title: 'Itens',
    cards: [
      { id: 'items_1', cardTitle: 'Mapa do Tesouro', stars: 1 },
      { id: 'items_2', cardTitle: 'Livro de Magias', stars: 1 },
      { id: 'items_3', cardTitle: 'Missão Espacial', stars: 2 },
      { id: 'items_4', cardTitle: 'Golpe de Sorte', stars: 2 },
      { id: 'items_5', cardTitle: 'Lâmpada Mágica', stars: 2 },
      { id: 'items_6', cardTitle: 'Pérola Branca', stars: 3 },
      { id: 'items_7', cardTitle: 'Pinhata', stars: 3 },
      { id: 'items_8', cardTitle: 'Machadinha', stars: 4, gold: true },
      { id: 'items_9', cardTitle: 'Último Baú', stars: 5, gold: true },
    ],
  },
  {
    id: 'creatures',
    title: 'Criaturas',
    cards: [
      { id: 'creatures_1', cardTitle: 'Coletor de Moedas', stars: 1 },
      { id: 'creatures_2', cardTitle: 'Bico Azul', stars: 1 },
      { id: 'creatures_3', cardTitle: 'Dino', stars: 2 },
      { id: 'creatures_4', cardTitle: 'Rastejante da Lua', stars: 2 },
      { id: 'creatures_5', cardTitle: 'Dragão Voraz', stars: 2 },
      { id: 'creatures_6', cardTitle: 'Cão Fantasma', stars: 2 },
      { id: 'creatures_7', cardTitle: 'Dona Trufa', stars: 3 },
      { id: 'creatures_8', cardTitle: 'Dragão Chinês', stars: 4, gold: true },
      { id: 'creatures_9', cardTitle: 'Pássaro de Fogo', stars: 5, gold: true },
    ],
  },
  {
    id: 'sweets',
    title: 'Doces',
    cards: [
      { id: 'sweets_1', cardTitle: 'Chocolate Trufado', stars: 1 },
      { id: 'sweets_2', cardTitle: 'Bala', stars: 1 },
      { id: 'sweets_3', cardTitle: 'Bolinho', stars: 1 },
      { id: 'sweets_4', cardTitle: 'Rosquinha', stars: 2 },
      { id: 'sweets_5', cardTitle: 'Jujuba', stars: 2 },
      { id: 'sweets_6', cardTitle: 'Sorvete', stars: 3 },
      { id: 'sweets_7', cardTitle: 'Torta de Limão', stars: 3 },
      { id: 'sweets_8', cardTitle: 'Barra de Chocolate', stars: 4, gold: true },
      { id: 'sweets_9', cardTitle: 'Coin Master', stars: 5, gold: true },
    ],
  },
  {
    id: 'bling',
    title: 'Muita Grana',
    cards: [
      { id: 'bling_1', cardTitle: 'Ouro Negro', stars: 1 },
      { id: 'bling_2', cardTitle: 'Iate de Luxo', stars: 1 },
      { id: 'bling_3', cardTitle: 'Estrelinha', stars: 2 },
      { id: 'bling_4', cardTitle: 'Mordomo', stars: 2 },
      { id: 'bling_5', cardTitle: 'Diamante Russo', stars: 2 },
      { id: 'bling_6', cardTitle: 'Nick o Grego', stars: 3 },
      { id: 'bling_7', cardTitle: 'Mercador', stars: 3 },
      { id: 'bling_8', cardTitle: 'Retropunk', stars: 4, gold: true },
      { id: 'bling_9', cardTitle: 'Carro de Rico', stars: 5, gold: true },
    ],
  },
  {
    id: 'vikings',
    title: 'Vikings',
    cards: [
      { id: 'vikings_1', cardTitle: 'Guerreiro', stars: 1 },
      { id: 'vikings_2', cardTitle: 'Fenrir', stars: 1 },
      { id: 'vikings_3', cardTitle: 'Corneta Viking', stars: 2 },
      { id: 'vikings_4', cardTitle: 'Rainha Viking', stars: 2 },
      { id: 'vikings_5', cardTitle: 'Elmo Dourado', stars: 2 },
      { id: 'vikings_6', cardTitle: 'Thor', stars: 3 },
      { id: 'vikings_7', cardTitle: 'Olaf', stars: 3 },
      { id: 'vikings_8', cardTitle: 'Ouro Viking', stars: 4, gold: true },
      { id: 'vikings_9', cardTitle: 'Coração Viking', stars: 5, gold: true },
    ],
  },
  {
    id: 'rides',
    title: 'Transportes',
    cards: [
      { id: 'rides_1', cardTitle: 'Motoqueiro Fantasma', stars: 1 },
      { id: 'rides_2', cardTitle: 'Barril Deslizante', stars: 1 },
      { id: 'rides_3', cardTitle: 'Rocha em Rodas', stars: 3 },
      { id: 'rides_4', cardTitle: 'Tanque Mestre', stars: 3 },
      { id: 'rides_5', cardTitle: 'Bote Espacial', stars: 3 },
      { id: 'rides_6', cardTitle: 'Calhambeque', stars: 4 },
      { id: 'rides_7', cardTitle: 'Corrida do Ouro', stars: 4 },
      { id: 'rides_8', cardTitle: 'Mata Zumbis', stars: 4, gold: true },
      { id: 'rides_9', cardTitle: 'Nitroglicerina', stars: 5, gold: true },
    ],
  },
  {
    id: 'halloween',
    title: 'Halloween',
    cards: [
      { id: 'halloween_1', cardTitle: 'Docura ou Travessura', stars: 1 },
      { id: 'halloween_2', cardTitle: 'Casa Assombrada', stars: 2 },
      { id: 'halloween_3', cardTitle: 'El Mariachi', stars: 3 },
      { id: 'halloween_4', cardTitle: 'Cão de Guarda', stars: 3 },
      { id: 'halloween_5', cardTitle: 'El Diablo', stars: 3 },
      { id: 'halloween_6', cardTitle: 'Catrina', stars: 4 },
      { id: 'halloween_7', cardTitle: 'Túmulo Sagrado', stars: 4 },
      { id: 'halloween_8', cardTitle: 'Jack Abóbora', stars: 4, gold: true },
      { id: 'halloween_9', cardTitle: 'Trono de Espinhos', stars: 5, gold: true },
    ],
  },
  {
    id: 'japan',
    title: 'Japão',
    cards: [
      { id: 'japan_1', cardTitle: 'Robô Gueixa', stars: 1 },
      { id: 'japan_2', cardTitle: 'Máquina de Guerra', stars: 2 },
      { id: 'japan_3', cardTitle: 'Veloz do Espaço', stars: 3 },
      { id: 'japan_4', cardTitle: 'Robogato', stars: 3 },
      { id: 'japan_5', cardTitle: 'Loja do Mestre', stars: 3 },
      { id: 'japan_6', cardTitle: 'Nível Acima', stars: 4 },
      { id: 'japan_7', cardTitle: 'Kawaii', stars: 4 },
      { id: 'japan_8', cardTitle: 'Policia Cármica', stars: 5, gold: true },
      { id: 'japan_9', cardTitle: 'Sushi', stars: 5, gold: true },
    ],
  },
  {
    id: 'plants',
    title: 'Plantas',
    cards: [
      { id: 'plants_1', cardTitle: 'Tulipas', stars: 1 },
      { id: 'plants_2', cardTitle: 'Planta ET', stars: 2 },
      { id: 'plants_3', cardTitle: 'Flor de Cactos', stars: 2 },
      { id: 'plants_4', cardTitle: 'Árvore Mágica', stars: 3 },
      { id: 'plants_5', cardTitle: 'Lótus', stars: 3 },
      { id: 'plants_6', cardTitle: 'Marshmallow', stars: 4 },
      { id: 'plants_7', cardTitle: 'Oásis', stars: 4 },
      { id: 'plants_8', cardTitle: 'Oliveira', stars: 5, gold: true },
      { id: 'plants_9', cardTitle: 'Planta Jurássica', stars: 5, gold: true },
    ],
  },
  {
    id: 'oz',
    title: 'Oz',
    cards: [
      { id: 'oz_1', cardTitle: 'Rua de Tijolos', stars: 1 },
      { id: 'oz_2', cardTitle: 'Bruxa Malvada', stars: 2 },
      { id: 'oz_3', cardTitle: 'Tornado', stars: 3 },
      { id: 'oz_4', cardTitle: 'Totó', stars: 3 },
      { id: 'oz_5', cardTitle: 'Homem de Lata', stars: 3 },
      { id: 'oz_6', cardTitle: 'Espantalho', stars: 4 },
      { id: 'oz_7', cardTitle: 'Cidade Esmeralda', stars: 4 },
      { id: 'oz_8', cardTitle: 'Dorothy', stars: 5, gold: true },
      { id: 'oz_9', cardTitle: 'Leão Corajoso', stars: 5, gold: true },
    ],
  },
  {
    id: 'africa',
    title: 'Africa',
    cards: [
      { id: 'africa_1', cardTitle: 'Máscara Tribal', stars: 1 },
      { id: 'africa_2', cardTitle: 'Rei da Savana', stars: 2 },
      { id: 'africa_3', cardTitle: 'Hipo Feliz', stars: 3 },
      { id: 'africa_4', cardTitle: 'Zebra Relaxada', stars: 3 },
      { id: 'africa_5', cardTitle: 'Chifre Nervoso', stars: 3 },
      { id: 'africa_6', cardTitle: 'Eddy Rosa', stars: 4 },
      { id: 'africa_7', cardTitle: 'Gorilão', stars: 4 },
      { id: 'africa_8', cardTitle: 'Trevo da Sorte', stars: 5, gold: true },
      { id: 'africa_9', cardTitle: 'Tony Grandão', stars: 5, gold: true },
    ],
  },
  {
    id: 'alice',
    title: 'Alice',
    cards: [
      { id: 'alice_1', cardTitle: 'Dodô', stars: 2 },
      { id: 'alice_2', cardTitle: 'Gato Risonho', stars: 2 },
      { id: 'alice_3', cardTitle: 'Flamingo', stars: 3 },
      { id: 'alice_4', cardTitle: 'Sapo Servo', stars: 3 },
      { id: 'alice_5', cardTitle: 'Casa do Coelho', stars: 4 },
      { id: 'alice_6', cardTitle: 'Guarda Real', stars: 4 },
      { id: 'alice_7', cardTitle: 'Lagarta', stars: 4 },
      { id: 'alice_8', cardTitle: 'Coelho Branco', stars: 5, gold: true },
      { id: 'alice_9', cardTitle: 'Dama Vermelha', stars: 5, gold: true },
    ],
  },
  {
    id: 'legends',
    title: 'Lendas',
    cards: [
      { id: 'legends_1', cardTitle: 'Bill Selvagem', stars: 2 },
      { id: 'legends_2', cardTitle: 'Poderoso Chefão', stars: 2 },
      { id: 'legends_3', cardTitle: 'Monge Sagrado', stars: 3 },
      { id: 'legends_4', cardTitle: 'Jane da Selva', stars: 3 },
      { id: 'legends_5', cardTitle: 'Guarda do Rei', stars: 4 },
      { id: 'legends_6', cardTitle: 'Mago Poderoso', stars: 4 },
      { id: 'legends_7', cardTitle: 'Explorador do Planeta', stars: 4 },
      { id: 'legends_8', cardTitle: 'Pocahontas', stars: 5, gold: true },
      { id: 'legends_9', cardTitle: 'Rembrandt', stars: 5, gold: true },
    ],
  },
  {
    id: 'ice',
    title: 'Rainha do Gelo',
    cards: [
      { id: 'ice_1', cardTitle: 'Urso Polar', stars: 1 },
      { id: 'ice_2', cardTitle: 'Cerverja do Norte', stars: 2 },
      { id: 'ice_3', cardTitle: 'Raposa Fiona', stars: 2 },
      { id: 'ice_4', cardTitle: 'Cubo de Peixe', stars: 3 },
      { id: 'ice_5', cardTitle: 'Penn Brincalhão', stars: 3 },
      { id: 'ice_6', cardTitle: 'Sam Satisfeito', stars: 4 },
      { id: 'ice_7', cardTitle: 'Excalibur', stars: 4 },
      { id: 'ice_8', cardTitle: 'Tom da Tundra', stars: 5, gold: true },
      { id: 'ice_9', cardTitle: 'Rainha do Frio', stars: 5, gold: true },
    ],
  },
  {
    id: 'heroes',
    title: 'Heróis',
    cards: [
      { id: 'heroes_1', cardTitle: 'Guerreiro Africano', stars: 2 },
      { id: 'heroes_2', cardTitle: 'Croco Mestre', stars: 3 },
      { id: 'heroes_3', cardTitle: 'Rei dos Anões', stars: 3 },
      { id: 'heroes_4', cardTitle: 'Caçador de Zumbis', stars: 4 },
      { id: 'heroes_5', cardTitle: 'Gênio', stars: 4 },
      { id: 'heroes_6', cardTitle: 'Conquistador', stars: 4, gold: true },
      { id: 'heroes_7', cardTitle: 'Marajá', stars: 5, gold: true },
      { id: 'heroes_8', cardTitle: 'Robô Samurai', stars: 5, gold: true },
      { id: 'heroes_9', cardTitle: 'Senhor das Moedas', stars: 5, gold: true },
    ],
  },
  {
    id: 'christmas',
    title: 'Natal',
    cards: [
      { id: 'christmas_1', cardTitle: 'Ajudante de Noel', stars: 2 },
      { id: 'christmas_2', cardTitle: 'Cabana de Inverno', stars: 3 },
      { id: 'christmas_3', cardTitle: 'Visco', stars: 3 },
      { id: 'christmas_4', cardTitle: 'Rudolph Majestoso', stars: 4 },
      { id: 'christmas_5', cardTitle: 'Papai Noel', stars: 4 },
      { id: 'christmas_6', cardTitle: 'Trenó do Noel', stars: 4 },
      { id: 'christmas_7', cardTitle: 'Presente de Natal', stars: 5, gold: true },
      { id: 'christmas_8', cardTitle: 'Maquina de Brinquedo', stars: 5, gold: true },
      { id: 'christmas_9', cardTitle: 'Árvore Festiva', stars: 5, gold: true },
    ],
  },
  {
    id: 'desert',
    title: 'Deserto',
    cards: [
      { id: 'desert_1', cardTitle: 'Mecânico Espacial', stars: 1 },
      { id: 'desert_2', cardTitle: 'Flutuador', stars: 2 },
      { id: 'desert_3', cardTitle: 'Wilbert Selvagem', stars: 2 },
      { id: 'desert_4', cardTitle: 'Vinho Marciano', stars: 3 },
      { id: 'desert_5', cardTitle: 'Casa de Areia', stars: 3 },
      { id: 'desert_6', cardTitle: 'Alface Marciana', stars: 4 },
      { id: 'desert_7', cardTitle: 'Marvin de Metal', stars: 4 },
      { id: 'desert_8', cardTitle: 'John Gelatina', stars: 5, gold: true },
      { id: 'desert_9', cardTitle: 'Barco Voador', stars: 5, gold: true },
    ],
  },
  {
    id: 'egypt',
    title: 'Egito',
    cards: [
      { id: 'egypt_1', cardTitle: 'Ankh', stars: 2 },
      { id: 'egypt_2', cardTitle: 'Poderoso Rá', stars: 3 },
      { id: 'egypt_3', cardTitle: 'Gato Egipcio', stars: 3 },
      { id: 'egypt_4', cardTitle: 'Cleópatra', stars: 4 },
      { id: 'egypt_5', cardTitle: 'Olho Que Tudo Vê', stars: 4 },
      { id: 'egypt_6', cardTitle: 'Múmia', stars: 4, gold: true },
      { id: 'egypt_7', cardTitle: 'Faraó', stars: 5, gold: true },
      { id: 'egypt_8', cardTitle: 'Escaravelho', stars: 5, gold: true },
      { id: 'egypt_9', cardTitle: 'Gato Vigilante', stars: 5, gold: true },
    ],
  },
  {
    id: 'gnomes',
    title: 'Gnomos',
    cards: [
      { id: 'gnomes_1', cardTitle: 'Fam Rosa', stars: 1 },
      { id: 'gnomes_2', cardTitle: 'Pequena Lucy', stars: 2 },
      { id: 'gnomes_3', cardTitle: 'Chad Alegre', stars: 3 },
      { id: 'gnomes_4', cardTitle: 'Steven Suave', stars: 3 },
      { id: 'gnomes_5', cardTitle: 'Casa do Gnomo', stars: 4 },
      { id: 'gnomes_6', cardTitle: 'Come Grama', stars: 4 },
      { id: 'gnomes_7', cardTitle: 'Rainha Mirim', stars: 4, gold: true },
      { id: 'gnomes_8', cardTitle: 'Caleb Relaxado', stars: 5, gold: true },
      { id: 'gnomes_9', cardTitle: 'Morty Sombrio', stars: 5, gold: true },
    ],
  },
  {
    id: 'robin',
    title: 'Robin Hood',
    cards: [
      { id: 'robin_1', cardTitle: 'Steve Sereno', stars: 2 },
      { id: 'robin_2', cardTitle: 'Cabana de Caça', stars: 3 },
      { id: 'robin_3', cardTitle: 'O Rei', stars: 3 },
      { id: 'robin_4', cardTitle: 'Monge Lutador', stars: 4 },
      { id: 'robin_5', cardTitle: 'Jeff Distraído', stars: 4 },
      { id: 'robin_6', cardTitle: 'Princesa Delicada', stars: 4 },
      { id: 'robin_7', cardTitle: 'Robin Hood', stars: 5, gold: true },
      { id: 'robin_8', cardTitle: 'Vlad Valente', stars: 5, gold: true },
      { id: 'robin_9', cardTitle: 'Carroça do Mercador', stars: 5, gold: true },
    ],
  },
  {
    id: 'tribe',
    title: 'Tribo',
    cards: [
      { id: 'tribe_1', cardTitle: 'Sally Boba', stars: 2 },
      { id: 'tribe_2', cardTitle: 'Polly', stars: 3 },
      { id: 'tribe_3', cardTitle: 'Borboleta', stars: 3 },
      { id: 'tribe_4', cardTitle: 'Jaguar Sorrateiro', stars: 4 },
      { id: 'tribe_5', cardTitle: 'Princesa Asteca', stars: 4 },
      { id: 'tribe_6', cardTitle: 'Espadas da Sorte', stars: 4 },
      { id: 'tribe_7', cardTitle: 'Tesouro Asteca', stars: 5, gold: true },
      { id: 'tribe_8', cardTitle: 'Flor da Selva', stars: 5, gold: true },
      { id: 'tribe_9', cardTitle: 'Montezuma', stars: 5, gold: true },
    ],
  },
  {
    id: 'ocean',
    title: 'Oceano',
    cards: [
      { id: 'ocean_1', cardTitle: 'Tamboril', stars: 2 },
      { id: 'ocean_2', cardTitle: 'Capitão Nemo', stars: 3 },
      { id: 'ocean_3', cardTitle: 'Mergulhador', stars: 3 },
      { id: 'ocean_4', cardTitle: 'Enguia Elétrica', stars: 4 },
      { id: 'ocean_5', cardTitle: 'Água-Viva', stars: 4 },
      { id: 'ocean_6', cardTitle: 'Lula Mágica', stars: 4 },
      { id: 'ocean_7', cardTitle: 'Sereia', stars: 5, gold: true },
      { id: 'ocean_8', cardTitle: 'Náutilo', stars: 5, gold: true },
      { id: 'ocean_9', cardTitle: 'Tesouro do Oceano', stars: 5, gold: true },
    ],
  },
  {
    id: 'china',
    title: 'China',
    cards: [
      { id: 'china_1', cardTitle: 'Bill, o Búfalo', stars: 1 },
      { id: 'china_2', cardTitle: 'Trator', stars: 2 },
      { id: 'china_3', cardTitle: 'Cão Real', stars: 2 },
      { id: 'china_4', cardTitle: 'Princesa Pei', stars: 3 },
      { id: 'china_5', cardTitle: 'Cabana de Pesca', stars: 3 },
      { id: 'china_6', cardTitle: 'Agricultor Feng', stars: 4 },
      { id: 'china_7', cardTitle: 'Imperador Zuo', stars: 4, gold: true },
      { id: 'china_8', cardTitle: 'Templo Imperial', stars: 5, gold: true },
      { id: 'china_9', cardTitle: 'Shishi', stars: 5, gold: true },
    ],
  },
  {
    id: 'canada',
    title: 'Canadá',
    cards: [
      { id: 'canada_1', cardTitle: 'Urso Bomba', stars: 2 },
      { id: 'canada_2', cardTitle: 'Castor Construtor', stars: 3 },
      { id: 'canada_3', cardTitle: 'Cabana Confortável', stars: 3 },
      { id: 'canada_4', cardTitle: 'Guardiã da Floresta', stars: 4 },
      { id: 'canada_5', cardTitle: 'Lenha Boa', stars: 4 },
      { id: 'canada_6', cardTitle: 'Bill Lenhador', stars: 4, gold: true },
      { id: 'canada_7', cardTitle: 'Árvore de Bordo', stars: 5, gold: true },
      { id: 'canada_8', cardTitle: 'Ouro Canadense', stars: 5, gold: true },
      { id: 'canada_9', cardTitle: 'Roger Prestativo', stars: 5, gold: true },
    ],
  },
  {
    id: 'mongolia',
    title: 'Mongólia',
    cards: [
      { id: 'mongolia_1', cardTitle: 'Arco e Flecha', stars: 2 },
      { id: 'mongolia_2', cardTitle: 'Mestre do Arco', stars: 3 },
      { id: 'mongolia_3', cardTitle: 'Charlie Calmo', stars: 3 },
      { id: 'mongolia_4', cardTitle: 'Cathy Atenciosa', stars: 4 },
      { id: 'mongolia_5', cardTitle: 'Dolly Querida', stars: 4 },
      { id: 'mongolia_6', cardTitle: 'Chaleira', stars: 4 },
      { id: 'mongolia_7', cardTitle: 'Moto', stars: 5, gold: true },
      { id: 'mongolia_8', cardTitle: 'Tenda Real', stars: 5, gold: true },
      { id: 'mongolia_9', cardTitle: 'Sam Dorminhoco', stars: 5, gold: true },
    ],
  },
  {
    id: 'circus',
    title: 'Circo',
    cards: [
      { id: 'circus_1', cardTitle: 'Farini Temível', stars: 1 },
      { id: 'circus_2', cardTitle: 'Jumbo Malabarista', stars: 2 },
      { id: 'circus_3', cardTitle: 'Anel de Fogo', stars: 2 },
      { id: 'circus_4', cardTitle: 'Leão Amável', stars: 3 },
      { id: 'circus_5', cardTitle: 'Senhor Leal', stars: 3 },
      { id: 'circus_6', cardTitle: 'Montanha', stars: 4 },
      { id: 'circus_7', cardTitle: 'Tenda Principal', stars: 4, gold: true },
      { id: 'circus_8', cardTitle: 'Trapezista', stars: 5, gold: true },
      { id: 'circus_9', cardTitle: 'Piro Beltane', stars: 5, gold: true },
    ],
  },
  {
    id: 'venice',
    title: 'Veneza',
    cards: [
      { id: 'venice_1', cardTitle: 'Baile de Máscaras', stars: 1 },
      { id: 'venice_2', cardTitle: 'Fantasma', stars: 1 },
      { id: 'venice_3', cardTitle: 'Cesare Encatador', stars: 2 },
      { id: 'venice_4', cardTitle: 'Gondoleiro Galante', stars: 2 },
      { id: 'venice_5', cardTitle: 'Gôndola Dourada', stars: 3 },
      { id: 'venice_6', cardTitle: 'Cristina Estranha', stars: 3 },
      { id: 'venice_7', cardTitle: 'Pizza', stars: 4, gold: true },
      { id: 'venice_8', cardTitle: 'Palácio de Doge', stars: 5, gold: true },
      { id: 'venice_9', cardTitle: 'Cálice de Murano', stars: 5, gold: true },
    ],
  },
  {
    id: 'sherlock',
    title: 'Sherlock',
    cards: [
      { id: 'sherlock_1', cardTitle: 'Carro de Polícia', stars: 2 },
      { id: 'sherlock_2', cardTitle: 'Detetive', stars: 3 },
      { id: 'sherlock_3', cardTitle: 'Toby Rastreador', stars: 3 },
      { id: 'sherlock_4', cardTitle: 'Evidência', stars: 4 },
      { id: 'sherlock_5', cardTitle: 'Mansão Misteriosa', stars: 4 },
      { id: 'sherlock_6', cardTitle: 'Cachimbo', stars: 4 },
      { id: 'sherlock_7', cardTitle: 'Cofre Arrombado', stars: 5, gold: true },
      { id: 'sherlock_8', cardTitle: 'Sherlock', stars: 5, gold: true },
      { id: 'sherlock_9', cardTitle: 'Watson', stars: 5, gold: true },
    ],
  },
  {
    id: 'beanstalks',
    title: 'Feijoeiro',
    cards: [
      { id: 'beanstalks_1', cardTitle: 'Feijões Mágicos', stars: 2 },
      { id: 'beanstalks_2', cardTitle: 'Matilda Feliz', stars: 3 },
      { id: 'beanstalks_3', cardTitle: 'George de Ouro', stars: 3 },
      { id: 'beanstalks_4', cardTitle: 'Ovo de Ouro', stars: 4 },
      { id: 'beanstalks_5', cardTitle: 'André Gigante', stars: 4 },
      { id: 'beanstalks_6', cardTitle: 'Melodia Mítica', stars: 4 },
      { id: 'beanstalks_7', cardTitle: 'Fazenda', stars: 5, gold: true },
      { id: 'beanstalks_8', cardTitle: 'João Sorturdo', stars: 5, gold: true },
      { id: 'beanstalks_9', cardTitle: 'Grande Pé de Feijão', stars: 5, gold: true },
    ],
  },
  {
    id: 'mythical',
    title: 'Mítico',
    cards: [
      { id: 'mythical_1', cardTitle: 'Cérbero', stars: 2 },
      { id: 'mythical_2', cardTitle: 'Cupido Fofo', stars: 3 },
      { id: 'mythical_3', cardTitle: 'Medusa', stars: 3 },
      { id: 'mythical_4', cardTitle: 'Domo Mítico', stars: 4 },
      { id: 'mythical_5', cardTitle: 'Olimpia', stars: 4 },
      { id: 'mythical_6', cardTitle: 'Sátiro', stars: 4 },
      { id: 'mythical_7', cardTitle: 'Árvore de Balas', stars: 5, gold: true },
      { id: 'mythical_8', cardTitle: 'Unicórnio', stars: 5, gold: true },
      { id: 'mythical_9', cardTitle: 'Zeus', stars: 5, gold: true },
    ],
  },
  {
    id: 'baba',
    title: 'Baba Yaga',
    cards: [
      { id: 'baba_1', cardTitle: 'Lemmy Grande', stars: 2 },
      { id: 'baba_2', cardTitle: 'Vassoura Voadora', stars: 3 },
      { id: 'baba_3', cardTitle: 'Fred Assustador', stars: 3 },
      { id: 'baba_4', cardTitle: 'Caldeirão Quente', stars: 4 },
      { id: 'baba_5', cardTitle: 'Corvo Barulhento', stars: 4 },
      { id: 'baba_6', cardTitle: 'Lua Cheia', stars: 4 },
      { id: 'baba_7', cardTitle: 'Poção do Amor', stars: 5, gold: true },
      { id: 'baba_8', cardTitle: 'Crânios Mágicos', stars: 5, gold: true },
      { id: 'baba_9', cardTitle: 'Baba Yaga', stars: 5, gold: true },
    ],
  },
  {
    id: 'scotland',
    title: 'Escócia',
    cards: [
      { id: 'scotland_1', cardTitle: 'Armadura Completa', stars: 2 },
      { id: 'scotland_2', cardTitle: 'Gaita de Foles', stars: 3 },
      { id: 'scotland_3', cardTitle: 'Forte da Cidade', stars: 3 },
      { id: 'scotland_4', cardTitle: 'Scotty Bobinho', stars: 4 },
      { id: 'scotland_5', cardTitle: 'Nessie', stars: 4 },
      { id: 'scotland_6', cardTitle: 'Torta de Carne', stars: 4 },
      { id: 'scotland_7', cardTitle: 'Carneiro Rebelde', stars: 5, gold: true },
      { id: 'scotland_8', cardTitle: 'Uisque', stars: 5, gold: true },
      { id: 'scotland_9', cardTitle: 'Felix Ruivo', stars: 5, gold: true },
    ],
  },
];

/*
  {
    id: 'beasts',
    title: 'Feras',
    cards: [
      { id: 'beasts_1', cardTitle: 'Guardião', stars: 2 },
      { id: 'beasts_2', cardTitle: 'Ema', stars: 3 },
      { id: 'beasts_3', cardTitle: 'Camelo', stars: 3 },
      { id: 'beasts_4', cardTitle: 'Águia', stars: 4 },
      { id: 'beasts_5', cardTitle: 'MC', stars: 4 },
      { id: 'beasts_6', cardTitle: 'Rei', stars: 4 },
      { id: 'beasts_7', cardTitle: 'Elefante', stars: 5, gold: true },
      { id: 'beasts_8', cardTitle: 'Tigre', stars: 5, gold: true },
      { id: 'beasts_9', cardTitle: 'Leão', stars: 5, gold: true },
    ],
  },

 */

const checkCard = (items, setId, cardId) => {
  const { cards = [] } = items.decks[setId] || {};
  const { count = 0 } = cards.find(({ name }) => name === cardId) || {};
  return count;
};

const checkCardStyle = (quantity, gold) => {
  if (gold) {
    return {
      backgroundColor: quantity === 0 ? '#e0e0e0' : '#fff176',
      borderColor: '#fbc02d',
    };
  }

  if (quantity === 0) {
    return { backgroundColor: '#e0e0e0' };
  } else if (quantity === 1) {
    return { backgroundColor: '#fcfcfc' };
  }

  return { backgroundColor: '#ffffff' };
};

const App = () => (
  <View style={styles.wrapper}>
    {groups.map(({ id, title, cards }) => (
      <View style={styles.group} key={id}>
        <Text style={styles.groupTitle}>{title}</Text>
        <View style={styles.cards}>
          {cards.map(({ id: cardId, stars, cardTitle, gold }) => {
            const quantity = checkCard(sets, id, cardId);

            return (
              <View style={[styles.card, checkCardStyle(quantity, gold)]} key={cardId}>
                <View style={styles.stars}>
                  {Array.from({ length: stars }).map((_, index) => (
                    <Star key={index} />
                  ))}
                </View>
                <Text style={styles.cardTitle}>{cardTitle}</Text>
                <View style={styles.buttons}>
                  {/*<TouchableOpacity style={[styles.button, styles.minus]}>*/}
                  {/*  <Text style={styles.buttonText}>-</Text>*/}
                  {/*</TouchableOpacity>*/}
                  {quantity > 0 && (
                    <Text style={styles.quantity}>
                      {quantity - 1}
                    </Text>
                  )}
                  {/*<TouchableOpacity style={[styles.button, styles.plus]}>*/}
                  {/*  <Text style={styles.buttonText}>+</Text>*/}
                  {/*</TouchableOpacity>*/}
                </View>
              </View>
            )
          })}
        </View>
      </View>
    ))}

  </View>
);

let hotWrapper = () => () => App;
if (Platform.OS === 'web') {
  const { hot } = require('react-hot-loader');
  hotWrapper = hot;
}
export default hotWrapper(module)(App);
