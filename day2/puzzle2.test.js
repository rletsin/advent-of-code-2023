import { test, expect } from "vitest";
import { findPossibleGames } from "./puzzle2_part1";
import { findPowerOfSumOfSets } from "./puzzle2_part2";
import { puzzleInput } from "./puzzleInput";

const exaplePuzzleInput = `Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green
                        Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue
                        Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red
                        Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red
                        Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green`;

test("part 1: possible games sum of IDs for example equal to 8", () => {
    expect(findPossibleGames(exaplePuzzleInput)).toEqual(8);
});

test("part 1: puzzle result to equal 2377", () => {
    expect(findPossibleGames(puzzleInput)).toEqual(2377);
});

test("part 2: example sum power of sets should equal to 2286", () => {
    expect(findPowerOfSumOfSets(exaplePuzzleInput)).toEqual(2286);
});

test("part 2: sum power of sets should equal to 2286", () => {
    expect(findPowerOfSumOfSets(puzzleInput)).toEqual(71220);
});
