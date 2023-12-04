export function getTotalScorecardsOwned(input) {
    const lines = input.split(/\r?\n|\r|\n/g);

    return getScore(lines);
}

export function getScore(lines) {
    const cards = lines.map(parseCard);
    const cardCopiesAwarded = new Map();

    cards.forEach((card, index) => {
        card.matches = 0;
        card.myNumbers.forEach((number) => {
            if (card.winningNumbers.includes(number)) card.matches++;
        });

        for (let i = 1; i <= card.matches; i++) {
            let currentCardIndex = index + 1;
            let awardedCardIndex = index + 1 + i;
            if (cardCopiesAwarded.has(currentCardIndex)) {
                let currentCardsOwnedTimes =
                    cardCopiesAwarded.get(currentCardIndex);
                cardCopiesAwarded.set(
                    awardedCardIndex,
                    cardCopiesAwarded.get(awardedCardIndex) +
                        currentCardsOwnedTimes +
                        1
                );
            } else {
                cardCopiesAwarded.set(awardedCardIndex, 1);
            }
        }
    });

    let awardedCards = 0;
    cardCopiesAwarded.forEach((cardValue) => {
        if (!isNaN(cardValue)) awardedCards += cardValue;
    });
    return cards.length + awardedCards;
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
