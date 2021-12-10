class Wallet {
    constructor(money) {
        let _money = money; //making var hidden
        this.getWalletStatus = () => {
            return _money;
        }
        //checking if player has got enough money, interface for other objects
        this.checkIfCanPlay = (bidValue) => {
            if (_money >= bidValue) {
                return true
            }
            return false;
        }
        //changing wallet state, adding and substracting sources will be done in single method
        this.changeWalletStatus = function (value, type = "+") {
            if (typeof value === "number" && !isNaN(value)) {
                if (type === "+") return _money += value;
                else if (type === "-") return _money -= value;
                else {
                    throw new Error('Wallet method: ChangeWalletStatus: wrong operation type provided');
                }
            }
            else {
                console.log(typeof value);
                throw new Error("wrong value provided")
            }
        }
    }
};





