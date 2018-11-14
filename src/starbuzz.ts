abstract class Beverage {
  description: string;

  getDescription = (): string => this.description;
  cost = (): number => 0;
}

abstract class CondimentDecorator extends Beverage {
  beverage: Beverage;
}

class Espresso extends Beverage {
  constructor() {
    super();
    this.description = "Espresso";
  }
  cost = () => 1.99;
}

class HouseBlend extends Beverage {
  constructor() {
    super();
    this.description = "House Blend Cofee";
  }
  cost = () => 0.89;
}

class Mocha extends CondimentDecorator {
  constructor(beverage: Beverage) {
    super();
    this.beverage = beverage;
  }
  getDescription = (): string => this.beverage.getDescription() + ", Mocha";
  cost = (): number => 0.2 + this.beverage.cost();
}

class Whip extends CondimentDecorator {
  constructor(beverage: Beverage) {
    super();
    this.beverage = beverage;
  }
  getDescription = (): string => this.beverage.getDescription() + ", Whip";
  cost = (): number => 0.31 + this.beverage.cost();
}

class StarbuzzCoffee {
  constructor() {
    const espresso = new Espresso();
    const mocha = new Mocha(espresso);
    const doubleMocha = new Mocha(mocha);
    const whipMocha = new Whip(mocha);

    console.log(espresso.getDescription(), espresso.cost());
    console.log(mocha.getDescription(), mocha.cost());
    console.log(doubleMocha.getDescription(), doubleMocha.cost());
    console.log(whipMocha.getDescription(), whipMocha.cost());
  }
}

new StarbuzzCoffee();
