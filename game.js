class Game {
    constructor(amount) {
        this.stats = new Statistics();
        this.wallet = new Wallet(amount);
        //select html elements needed
        document.getElementById("start").addEventListener("click", this.startGame);
        this.spanWallet = document.querySelector("span.wallet");
        this.boards = document.querySelectorAll("div.color");
        this.inputBid = document.getElementById("bid");
        this.spanResult = document.querySelector(".score span.result");
        this.spanGames = document.querySelector(".score span.number");
        this.spanWins = document.querySelector(".score span.win");
        this.spanLosses = document.querySelector(".score span.loss");

        this.render();

    }
    render(colors = ["#2ee", "#2ee", "#2ee"], money = this.wallet.getWalletStatus(), stats = [0, 0, 0], result = false, bid = 0, moneyWon = 0) {
        // initial settings
        this.boards.forEach((board, index) => { board.style.backgroundColor = colors[index] });
        this.spanWallet.textContent = money;
        if (result) {
            result = `You won: ${moneyWon}`;
        }
        else if (!result && result !== "") {
            result = `You lost: ${bid}`;
        }


        this.spanResult.textContent = result;
        this.spanGames.textContent = stats[0];
        this.spanWins.textContent = stats[1];
        this.spanLosses.textContent = stats[2];


    }

    startGame() {
        console.log('gramy');

    }
}



