enum Options {
    Pedra,
    Papel,
    Tesoura
}

class Jokenpo {
    public winner: 'Bot' | 'Player' | 'Empate';
    protected _playerChoice: Options;
    protected _computerChoice: Options;

    constructor(pChoice: Options) {
        this._playerChoice = pChoice;
        this._computerChoice = this._generateComputerChoice();
    }

    get playerChoice () {
        return this._playerChoice;
    }

    get computerChoice () {
        return this._computerChoice;
    }

    private _generateComputerChoice (): Options {
        return Math.floor(Math.random() * 3);
    }

    public GetResultado (): string {
        if (this.playerChoice.toString() === this.computerChoice.toString()) {
            this.winner = 'Empate';
        } else if (
                ((this.playerChoice === Options.Papel) && (this.computerChoice === Options.Pedra))
                ||
                ((this.playerChoice === Options.Pedra) && (this.computerChoice === Options.Tesoura))
                ||
                ((this.playerChoice === Options.Tesoura) && (this.computerChoice === Options.Papel))
            )
        {
            this.winner = 'Player';
        } else {
            this.winner = 'Bot';
        }

        return this.winner;
    }
}

export default { Jokenpo, Options };