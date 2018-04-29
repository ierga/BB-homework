// Variables

var hero = {
  name: 'Django',
  heroic: true,
  inventory: [],
  health: 100,
  weapon: {type: 'Revolver', damage: 10}
}

// Game logic

function rest(creature) {
  creature.health = 10;
  return creature;
}

function pickUpItem(creature,item) {
  creature.inventory.push(item);
  return creature;
}

function dealDamage(attacker,defender) {
  defender.health = defender.health - attacker.weapon.damage;
  return defender;
}

function equipWeapon(creature,index) {
  creature.weapon = creature.inventory[index];
  creature.inventory.shift(index);
  return creature;
}

function doBattle(heroicCreature, creature) {
  if(heroicCreature.heroic !== true) {
    return null;
  }

  while(heroicCreature.health > 0 && creature.health > 0) {
    dealDamage(heroicCreature, creature);

    if(creature.health > 0) {
      dealDamage(creature, heroicCreature);
    }
  }

  if(heroicCreature.health > 0) {
      return heroicCreature;
  } else {
      alert("Your hero is dead!");
  }
}

// UI
