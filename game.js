class Game {
    constructor(amount) {
        this.stats = new Statistics();
        this.wallet = new Wallet(amount);
        //select html elements needed
        document.getElementById("start").addEventListener("click", this.startGame.bind(this));
        this.spanWallet = document.querySelector("span.wallet");
        this.boards = document.querySelectorAll("div.color");
        this.inputBid = document.getElementById("bid");
        this.spanResult = document.querySelector(".score span.result");
        this.spanGames = document.querySelector(".score span.number");
        this.spanWins = document.querySelector(".score span.win");
        this.spanLosses = document.querySelector(".score span.loss");

        this.render();



    }
    render(colors = ["#2ee", "#2ee", "#2ee"], money = this.wallet.getWalletStatus(), stats = [0, 0, 0], result = "", bid = 0, moneyWon = 0) {
        // initial settings
        this.boards.forEach((board, index) => { board.style.backgroundColor = colors[index] });
        this.spanWallet.textContent = money;
        if (result) {
            result = `You won £${moneyWon}`;
        }
        else if (!result && result !== "") {
            result = `You lost £${bid}`;
        }
        this.spanResult.textContent = result;
        this.spanGames.textContent = stats[0];
        this.spanWins.textContent = stats[1];
        this.spanLosses.textContent = stats[2];
        this.inputBid.value = ""; // clear input after rendering
    }

    startGame() {
        //validating
        if (this.inputBid.value < 1)
            return alert("Miminum bid is 1");

        const bid = Math.floor(this.inputBid.value);
        //checking 
        if (!this.wallet.checkIfCanPlay(bid))
            return alert("You haven't got enough sources to place this bid.I'm affraid");

        this.wallet.changeWalletStatus(bid, "-");

        //drawing process, object class Draw needs to be created on  every call of the method

        this.draw = new Draw();
        const colors = this.draw.getDrawResult();

        //winner checking
        const win = Result.checkWin(colors);

        const moneyWon = Result.moneyWon(win, bid);
        this.wallet.changeWalletStatus(moneyWon); // "+" is default

        this.stats.addGameToStats(win, bid);

        //rendering

        this.render(colors, this.wallet.getWalletStatus(), this.stats.showGameStatistics(), win, bid, moneyWon);


    }
}



