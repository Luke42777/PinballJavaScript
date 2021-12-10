class Result {
    //no constructor needed,  hiding methods
    static moneyWon(won, bid) {
        if (won) {
            return bid * 3;
        }
        else return 0;
    }
    static checkWin(draw) {

        if (draw[0] === draw[1] && draw[1] === draw[2] || draw[0] !== draw[1] && draw[1] !== draw[2] && draw[0] !== draw[2]) {
            return true;
        }
        else {
            return false;
        }
    }

};


