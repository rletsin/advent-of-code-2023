import { test, expect } from "vitest";
import { getSumOfNumbersAdjacentToSymbol } from "./puzzle_part1";
import { getSumOfGearsRatio } from "./puzzle_part2";
import { puzzleInput } from "./puzzleInput";

const exaplePuzzleInput = `467..114..
...*......
..35..633.
......#...
617*......
.....+.58.
..592.....
......755.
...$.*....
.664.598..`;

test("part 1 example: sum of numbers adjacent to a symbol equal to 4361", () => {
    expect(getSumOfNumbersAdjacentToSymbol(exaplePuzzleInput)).toEqual(4361);
});

test("part 1: sum of numbers adjacent to a symbol equal to 549908", () => {
    expect(getSumOfNumbersAdjacentToSymbol(puzzleInput)).toEqual(549908);
});

test("part 2 example: sum of all of the gear ratios equal to 467835", () => {
    expect(getSumOfGearsRatio(exaplePuzzleInput)).toEqual(467835);
});
