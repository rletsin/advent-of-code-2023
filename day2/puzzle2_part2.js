export function findPowerOfSumOfSets(games) {
    if (!games || games.length === 0) return 0;

    const gamesArray = games.split(/\r?\n|\r|\n/g);

    let result = 0;
    gamesArray.forEach((game) => {
        const powerOfMinPossible = getPowerOfMinPossibleGame(game);
        console.log(`Result plus ${powerOfMinPossible}`);
        result += powerOfMinPossible;
    });

    return result;
}

function getPowerOfMinPossibleGame(game) {
    const minValue = {
        red: null,
        green: null,
        blue: null,
    };

    // Remove the 'Game #:' part of string and split into parts
    const gameParts = game.slice(game.indexOf(":") + 1).split(";");
    let currentPart = 0;

    while (currentPart < gameParts.length) {
        let sets = gameParts[currentPart].split(",");
        for (let i = 0; i < sets.length; i++) {
            const match = sets[i].match(/(\d+) (red|green|blue)/);
            const numberOfCubes = parseInt(match[1]);
            const colorOfCubes = match[2];
            if (match) {
                if (!minValue[colorOfCubes]) {
                    minValue[colorOfCubes] = numberOfCubes;
                }
                if (numberOfCubes > minValue[colorOfCubes]) {
                    minValue[colorOfCubes] = numberOfCubes;
                }
            }
        }

        currentPart++;
    }

    const powerOfMinimumSet = minValue.red * minValue.green * minValue.blue;
    return powerOfMinimumSet;
}
