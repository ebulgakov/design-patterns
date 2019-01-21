class Singleton {
  private static instance: Singleton;

  private constructor() {
    /* ... */
  }

  getSum = (num: number): number => {
    return num + num;
  };

  public static getInstance(): Singleton {
    Singleton.instance = Singleton.instance || new Singleton();

    return Singleton.instance;
  }
}

const instance = Singleton.getInstance();

console.log(instance.getSum(2));
