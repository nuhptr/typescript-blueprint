// 1. Tuples (panjang tetap & tipe per posisi)
const myTuple: [number, string] = [10, "TypeScript"];
const [first, second] = myTuple;
console.log("Tuple:", first, second);

const games: [string, string, string] = ["Game 1", "Game 2", "Game 3"];
console.log("Games tuple:", games);

// 2. Enums (String Enum)
enum WeatherConditions {
    Sunny = "sunny",
    Cloudy = "cloudy",
    Rainy = "rainy",
    Snowy = "snowy",
}

const currentWeather: WeatherConditions = WeatherConditions.Sunny;
console.log(`Cuaca hari ini: ${currentWeather}`);
