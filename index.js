import { findPossibleGames } from "./day2/puzzle2.js";
import { exampleGames } from "./day2/puzzleInput.js";

try {
    findPossibleGames(exampleGames);
} catch (error) {
    console.error(error);
}
