// Variables

var hero = {
  name: 'Predator',
  heroic: true,
  inventory: [],
  health: 10,
  weapon: {type: 'gun', damage: 5}
}

var creature = {
  name: 'Alien',
  heroic: false,
  inventory: [],
  health: 10,
  item: {type: 'gun', damage: 5}
}

var attacker = {
  name: 'Predator',
  heroic: true,
  inventory: [],
  health: 10,
  weapon: {type: 'gun', damage: 5}
}

var defender = {
  name: 'Predator',
  heroic: true,
  inventory: [],
  health: 10,
  weapon: {type: 'gun', damage: 5}
}
// Game logic

function rest(creature) {
  creature.health = 10
  return creature
}

function pickUpItem(creature,item) {

}

function dealDamage(attacker,defender) {

}

function equipWeapon() {


}

function doBattle() {

}
// UI
