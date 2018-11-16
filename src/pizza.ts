type Dough = string;
type Sauce = string;
type Cheese = string;
type Veggies = string;
type Pepperoni = string;
type Clam = string;

interface Pizza {
  name: string;
  dough: Dough;
  sauce: Sauce;
  cheese: Cheese;
  veggies: Veggies[];
  pepperoni: Pepperoni;
  clam: Clam;
  prepare(): void;
  bake(): void;
  cut(): void;
  box(): void;
  getName(): string;
}


interface PizzaIngredientFactory {
  createDough(): Dough;
  createSauce(): Sauce;
  createCheese(): Cheese;
  createVeggies(): Veggies[];
  createPepperoni(): Pepperoni;
  createClam(): Clam;
}

class NYPizzaIngredientFactory implements PizzaIngredientFactory {
  createDough = (): Dough => "Dough";
  createSauce = (): Sauce => "Sauce";
  createCheese = (): Cheese => "Cheese";
  createVeggies = (): Veggies[] => ["Veggies", "Tomato"];
  createPepperoni = (): Pepperoni => "Pepperoni";
  createClam = (): Clam => "Clam";
}

abstract class Pizza implements Pizza {
  bake = () => {
    console.log(`Baking ${this.name} Pizza`);
  };
  cut = () => {
    console.log(`Cutting ${this.name} Pizza`);
  };
  box = () => {
    console.log(`Boxing ${this.name} Pizza`);
  };
  getName = () => this.name;
}

class PepperoniPizza extends Pizza {
  pizzaIngredientFactory: PizzaIngredientFactory;

  constructor(ingredientFactory: PizzaIngredientFactory) {
    super();
    this.name = "Pepperoni";
    this.pizzaIngredientFactory = ingredientFactory;
  }

  prepare = () => {
    this.dough = this.pizzaIngredientFactory.createDough();
    this.sauce = this.pizzaIngredientFactory.createSauce();
    this.cheese = this.pizzaIngredientFactory.createCheese();
  };
}
class ChickenRanch extends Pizza {
  pizzaIngredientFactory: PizzaIngredientFactory;

  constructor(ingredientFactory: PizzaIngredientFactory) {
    super();
    this.name = "ChickenRanch";
    this.pizzaIngredientFactory = ingredientFactory;
  }
  prepare = () => {
    this.dough = this.pizzaIngredientFactory.createDough();
    this.sauce = this.pizzaIngredientFactory.createSauce();
    this.cheese = this.pizzaIngredientFactory.createCheese();
  };
}
class DoubleCheese extends Pizza {
  pizzaIngredientFactory: PizzaIngredientFactory;

  constructor(ingredientFactory: PizzaIngredientFactory) {
    super();
    this.name = "DoubleCheese";
    this.pizzaIngredientFactory = ingredientFactory;
  }
  prepare = () => {
    this.dough = this.pizzaIngredientFactory.createDough();
    this.sauce = this.pizzaIngredientFactory.createSauce();
    this.cheese = this.pizzaIngredientFactory.createCheese();
  };
}
class Margarita extends Pizza {
  pizzaIngredientFactory: PizzaIngredientFactory;

  constructor(ingredientFactory: PizzaIngredientFactory) {
    super();
    this.name = "Margarita";
    this.pizzaIngredientFactory = ingredientFactory;
  }
  prepare = () => {
    this.dough = this.pizzaIngredientFactory.createDough();
    this.sauce = this.pizzaIngredientFactory.createSauce();
    this.cheese = this.pizzaIngredientFactory.createCheese();
  };
}

abstract class PizzaStore {
  protected abstract createPizza(type: string): Pizza;

  orderPizza = (type: string): Pizza => {
    const pizza: Pizza = this.createPizza(type);

    console.log(`Start cooking: ${pizza.getName()}`);

    pizza.prepare();
    pizza.bake();
    pizza.cut();
    pizza.box();

    return pizza;
  };
}

class NYPizzaStore extends PizzaStore {
  constructor() {
    super();
    console.log("Come in NY Pizza Store! We are open!");
  }

  createPizza = (type: string): Pizza => {
    switch (type) {
      case "Pepperoni":
        return new PepperoniPizza(new NYPizzaIngredientFactory());
      case "ChickenRanch":
        return new ChickenRanch(new NYPizzaIngredientFactory());
      default:
        console.log("We do not have this pizza yet");
    }
  };
}
class ChicagoPizzaStore extends PizzaStore {
  constructor() {
    super();
    console.log("Come in Chicago Pizza Store! We are open!");
  }

  createPizza = (type: string): Pizza => {
    switch (type) {
      case "DoubleCheese":
        return new DoubleCheese(new NYPizzaIngredientFactory());
      case "Margarita":
        return new Margarita(new NYPizzaIngredientFactory());
      default:
        console.log("We do not have this pizza yet");
    }
  };
}

const pizzeriaNY = new NYPizzaStore();
pizzeriaNY.orderPizza("ChickenRanch");

const pizzeriaChicago = new ChicagoPizzaStore();
pizzeriaChicago.orderPizza("Margarita");
