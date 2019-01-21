class Singleton {
  private static instance: Singleton;
  private readonly weather: Promise<any>;
  private readonly forecast: Promise<any>;
  
  private constructor() {
    this.weather = this.fetchWeather();
    this.forecast = this.fetchForecast();
  }
  
  private fetchWeather = async () => {
    const response = await fetch(
      "https://samples.openweathermap.org/data/2.5/weather?id=2172797&appid=b6907d289e10d714a6e88b30761fae22"
    );

    return response.json();
  };
  
  private fetchForecast = async () => {
    const response = await fetch(
      "http://samples.openweathermap.org/data/2.5/forecast?q=M%C3%BCnchen,DE&appid=b6907d289e10d714a6e88b30761fae22"
    );

    return response.json();
  };
  
  // Public methods
  
  public getWeather = () => this.weather;
  
  public getForecast = () => this.forecast;

  public static getInstance(): Singleton {
    Singleton.instance = Singleton.instance || new Singleton();

    return Singleton.instance;
  }
}

Singleton.getInstance()
  .getWeather()
  .then(weather => {
    console.log(weather);
  });

Singleton.getInstance()
  .getForecast()
  .then(forecast => {
    console.log(forecast);
  });
