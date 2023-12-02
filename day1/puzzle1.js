export function calibrate(calibrationLines) {
    if (!calibrationLines || calibrationLines.length === 0) return 0;

    const separateLines = calibrationLines.split(/\r?\n|\r|\n/g);

    let result = 0;
    separateLines.forEach((line) => {
        const parsedStr = findFirstAndLastNumber(line);
        const firstNumber = parsedStr.first ?? 0;
        const lastNumber = parsedStr.last ?? 0;

        let calibrationValue = `${firstNumber}${lastNumber}`;
        if (!isNaN(calibrationValue)) {
            result += parseInt(calibrationValue);
        }
    });

    return result;
}

function findFirstAndLastNumber(str) {
    const pattern = /one|two|three|four|five|six|seven|eight|nine|zero|\d/gi;
    const numberMap = {
        one: 1,
        two: 2,
        three: 3,
        four: 4,
        five: 5,
        six: 6,
        seven: 7,
        eight: 8,
        nine: 9,
        zero: 0,
    };

    const convertToNumber = (match) => {
        match = match.toLowerCase();
        return isNaN(match) ? numberMap[match] : parseInt(match, 10);
    };

    let firstNumber = null,
        lastNumber = null,
        i = 0;

    while (i < str.length) {
        const subStr = str.substring(i);
        const match = subStr.match(pattern);

        if (match) {
            const number = convertToNumber(match[0]);
            if (firstNumber === null) {
                firstNumber = number;
            }
            lastNumber = number;

            // move index to the beginning of the match
            i += subStr.indexOf(match[0]);

            // additionaly move index by the length of the match
            if (match[0].length === 1) {
                // if match is a single digit
                i++;
            } else {
                // if match is spelled out with letters (like 'one', 'two' etc.)
                i += match[0].length - 1;
            }
        } else {
            // if there are no matches in the remaining substring
            return { first: firstNumber, last: lastNumber };
        }
    }

    return { first: firstNumber, last: lastNumber };
}
