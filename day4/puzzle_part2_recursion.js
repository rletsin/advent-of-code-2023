export function getTotalScorecardsOwned(input) {
    const lines = input.split(/\r?\n|\r|\n/g);
    const cards = lines.map(parseCard);
    return getScore(cards);
}

function getCardResult(winningNumbers, myNumbers) {
    let cardResult = 0;
    for (const number of myNumbers) {
        if (winningNumbers.includes(number)) {
            cardResult += 1;
        }
    }

    return cardResult;
}

function getScore(cards, initialCards = cards) {
    let answer = cards.length;
    for (const { winningNumbers, myNumbers, cardNumber } of cards) {
        const cardResult = getCardResult(winningNumbers, myNumbers);
        if (cardResult) {
            const newCards = initialCards.slice(
                cardNumber,
                cardNumber + cardResult
            );
            answer += getScore(newCards, initialCards);
        }
    }
    return answer;
}

function parseCard(card) {
    const cardNumberMatch = card.match(/(\d+):/);
    const cardNumber = parseInt(cardNumberMatch[0]);

    let cardParts = card.slice(card.indexOf(":") + 1).split("|");
    const myNumbers = [...cardParts[0].matchAll(/(\d+)/g)].map((match) =>
        parseInt(match[0])
    );

    const winningNumbers = [...cardParts[1].matchAll(/(\d+)/g)].map((match) =>
        parseInt(match[0])
    );

    return { cardNumber, myNumbers, winningNumbers };
}
