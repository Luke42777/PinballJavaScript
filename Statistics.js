class Statistics {
    constructor() {
        this.gameResults = [];
    }
    addGameToStats(win, bid) {
        let gameResult = { win: win, bid: bid };
        this.gameResults.push(gameResult);

    }
    showGameStatistics() {
        let gamesPlayed = this.gameResults.length;
        let gamesWon = this.gameResults.filter((result) => { return result.win }).length;
        let gamesLost = gamesPlayed - gamesWon;
        return [gamesPlayed, gamesWon, gamesLost];
    }

};
