interface iWeapon {
  fight(): void;
}

class AxeWeapon implements iWeapon {
  fight = () => {
    console.log("AXE Damage");
  };
}

class SwordWeapon implements iWeapon {
  fight = () => {
    console.log("SWORD Damage");
  };
}

abstract class Character {
  weapon: iWeapon;

  useWeapon = () => {
    this.weapon.fight();
  };

  setWeapon = (w: iWeapon) => {
    this.weapon = w;
  };
}

class Gnome extends Character {
  constructor() {
    super();

    this.weapon = new AxeWeapon();
  }
}

const gnome = new Gnome();
gnome.useWeapon();
gnome.setWeapon(new SwordWeapon());
gnome.useWeapon()
