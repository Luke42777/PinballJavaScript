class Draw{
    constructor(){
        this.options = ["red","green","blue"];
        let _result = this.getDrawResults();
        this.getDrawResult = () => _result;
    }

    getDrawResults(){
        let colors = [];
        for(let i = 0; i < this.options.length; i++){
            const index = Math.floor(Math.random()*this.options.length); // 0 -2
            let color = this.options[index];
            colors.push(color);
        }
        return colors;
    }

}

