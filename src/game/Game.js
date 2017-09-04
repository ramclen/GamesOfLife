class Game {
    constructor(board, rules) {
        this.board = board;
        this.turn = 0;
        this.rules = rules;
        this.status = Game.STATUS.created;
    }

    start(){
        this.status = Game.STATUS.started;
    }

    nextTurn(){
        ++this.turn;
    }

    end(){
        this.status = Game.STATUS.finished;
    }
}

Game.STATUS = {
    started : "started",
    created : "created",
    finished : "finished"
};

export default Game;