import { test, expect } from "vitest";
import { calibrate } from "./puzzle1";

test("example calibration to equal 142", () => {
    const exampleLines = `1abc2
        pqr3stu8vwx
        a1b2c3d4e5f
        treb7uchet`;
    expect(calibrate(exampleLines)).toBe(142);
});

test("example calibration 2 to equal 281", () => {
    const example2 = `two1nine
        eightwothree
        abcone2threexyz
        xtwone3four
        4nineeightseven2
        zoneight234
        7pqrstsixteen`;
    expect(calibrate(example2)).toBe(281);
});
