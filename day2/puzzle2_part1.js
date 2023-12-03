export function findPossibleGames(games) {
    if (!games || games.length === 0) return 0;

    const gamesArray = games.split(/\r?\n|\r|\n/g);

    let result = 0;
    gamesArray.forEach((game) => {
        if (isPossible(game)) {
            console.log(`Result plus ${getGameId(game)}`);
            result += getGameId(game);
        }
    });

    return result;
}

function isPossible(game) {
    const rules = {
        red: 12,
        green: 13,
        blue: 14,
    };

    // Remove the 'Game #:' part of string and split into parts
    const gameParts = game.slice(game.indexOf(":") + 1).split(";");
    let currentPart = 0;

    while (currentPart < gameParts.length) {
        let sets = gameParts[currentPart].split(",");
        for (let i = 0; i < sets.length; i++) {
            const match = sets[i].match(/(\d+) (red|green|blue)/);
            if (match) {
                if (match[1] > rules[match[2]]) {
                    return false;
                }
            }
        }

        currentPart++;
    }

    return true;
}

function getGameId(game) {
    const match = game.match(/(\d+):/);

    if (match) {
        const gameId = match[0];
        return parseInt(gameId);
    }
    return 0;
}
