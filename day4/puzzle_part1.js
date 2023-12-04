export function getTotalPoints(input) {
    const lines = input.split(/\r?\n|\r|\n/g);

    return getScore(lines);
}

export function getScore(lines) {
    const cards = lines.map(parseCard);

    cards.forEach((card) => {
        card.matches = 0;
        card.score = 0;
        card.myNumbers.forEach((number) => {
            if (card.winningNumbers.includes(number)) card.matches++;
        });

        card.score =
            card.matches > 0
                ? calculatePointsForMatches(card.matches)
                : card.matches;
    });

    return cards.reduce((sum, card) => sum + card.score, 0);
}

function calculatePointsForMatches(matches) {
    return Math.pow(2, matches - 1);
}

function parseCard(card) {
    let cardParts = card.slice(card.indexOf(":") + 1).split("|");
    const myNumbers = [...cardParts[0].matchAll(/(\d+)/g)].map((match) =>
        parseInt(match[0])
    );

    const winningNumbers = [...cardParts[1].matchAll(/(\d+)/g)].map((match) =>
        parseInt(match[0])
    );

    return { myNumbers, winningNumbers };
}
