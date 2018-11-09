interface iFlyBehaviour {
  fly(): void;
}

class FlyWithWings implements iFlyBehaviour {
  fly = () => {
    console.log("I`m fly with wings");
  };
}
class RocketFly implements iFlyBehaviour {
  fly = () => {
    console.log("WoW I'm rocker duck!!");
  };
}
class NoFly implements iFlyBehaviour {
  fly = () => {
    console.log("Sorry, only swimming");
  };
}

interface iQuackBehaviour {
  quack(): void;
}

class RealQuack implements iQuackBehaviour {
  quack = () => {
    console.log("Quack-Quack!");
  };
}
class MuteQuack implements iQuackBehaviour {
  quack = () => {
    console.log("<<Silence>>");
  };
}
class ArtificialQuack implements iQuackBehaviour {
  quack = () => {
    console.log("Squeeeeeeaaak");
  };
}

abstract class Duck {
  flyBehaviour: iFlyBehaviour;
  quackBehaviour: iQuackBehaviour;

  performFly = () => {
    this.flyBehaviour.fly();
  };
  performQuack = () => {
    this.quackBehaviour.quack();
  };
  setFlyBehaviour = (fb: iFlyBehaviour) => {
    this.flyBehaviour = fb;
  };
  setQuackBehaviour = (fb: iQuackBehaviour) => {
    this.quackBehaviour = fb;
  };
}

class WildDuck extends Duck {
  constructor() {
    super();

    this.flyBehaviour = new FlyWithWings();
    this.quackBehaviour = new RealQuack();
  }
}

class RubberDuck extends Duck {
  constructor() {
    super();

    this.flyBehaviour = new NoFly();
    this.quackBehaviour = new MuteQuack();
  }
}

class Decoy {
  sound: iQuackBehaviour;
  constructor() {
    this.sound = new RealQuack();
  }

  play = () => {
    this.sound.quack();
  };
}


const wildDuck = new WildDuck();
wildDuck.performFly();
wildDuck.performQuack();
wildDuck.setFlyBehaviour(new RocketFly());
wildDuck.performFly();

const rubberDuck = new RubberDuck();
rubberDuck.performFly();
rubberDuck.performQuack();
rubberDuck.setQuackBehaviour(new ArtificialQuack());
rubberDuck.performQuack();

const decoy = new Decoy();

decoy.play();
