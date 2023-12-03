import { test, expect } from "vitest";
import { getSumOfNumbersAdjacentToSymbol } from "./puzzle_part1";
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

test("part 1: sum of numbers adjacent to a symbol equal to 4361", () => {
    expect(getSumOfNumbersAdjacentToSymbol(exaplePuzzleInput)).toEqual(4361);
});

test("part 1: sum of numbers adjacent to a symbol equal to 2377", () => {
    expect(getSumOfNumbersAdjacentToSymbol(puzzleInput)).toEqual(2377);
});
