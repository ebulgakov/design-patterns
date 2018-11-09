interface Subject {
  registerObserver(o: Observer): void;
  removeObserver(o: Observer): void;
  notifyObserver(o: Observer): void;
}

interface Observer {
  update(temp: number, humidity: number, pressure: number): void;
}

interface DisplayElement {
  display(): void;
}

class WeatherData implements Subject {
  private observers: Observer[];
  private temperature: number;
  private humidity: number;
  private pressure: number;

  constructor() {
    this.observers = [];
  }

  registerObserver = (o: Observer) => {
    this.observers.push(o);
  };
  removeObserver = (o: Observer) => {
    let i: number = this.observers.indexOf(o);
    this.observers.splice(i, 1);
  };
  notifyObserver = () => {
    this.observers.forEach(item =>
      item.update(this.temperature, this.humidity, this.pressure)
    );
  };

  measureChanged = () => this.notifyObserver();

  setMeasurements = (temp: number, humidity: number, pressure: number) => {
    this.temperature = temp;
    this.humidity = humidity;
    this.pressure = pressure;
    this.measureChanged();
  };
}

class ConditionDisplay implements Observer, DisplayElement {
  private temperature: number;
  private humidity: number;
  private pressure: number;
  private weatherData: WeatherData;

  constructor(weatherData: WeatherData) {
    this.weatherData = weatherData;
    this.weatherData.registerObserver(this);
  }
  update = (temp: number, humidity: number, pressure: number) => {
    this.temperature = temp;
    this.humidity = humidity;
    this.pressure = pressure;
    this.display();
  };
  display = () => {
    console.log(this.temperature, this.humidity, this.pressure);
  };
}

class WeatherStation {
  private readonly weatherData: WeatherData;
  constructor() {
    this.weatherData = new WeatherData();

    const forecastDisplay = new ConditionDisplay(this.weatherData);

    this.weatherData.setMeasurements(1, 2, 3);
    this.weatherData.setMeasurements(2, 1, 2);
  }
}

const station = new WeatherStation();
