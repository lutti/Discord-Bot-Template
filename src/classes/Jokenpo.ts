import { Options } from './Options';

class Jokenpo {
    protected _winner: 'Bot' | 'Player' | 'Empate' | undefined;
    protected _playerChoice: Options;
    protected _computerChoice: Options;

    constructor(pChoice: Options) {
        this._playerChoice = pChoice;
        this._computerChoice = this._generateComputerChoice();
    }

    get winner() {
        return this._winner;
    }

    get playerChoice() {
        return this._playerChoice;
    }

    get computerChoice() {
        return this._computerChoice;
    }

    private _generateComputerChoice(): Options {
        return Math.floor(Math.random() * 3);
    }

    public GetResultado(): string {
        if (this.playerChoice.toString() === this.computerChoice.toString()) {
            this._winner = 'Empate';
        }
        else if (
            ((this.playerChoice === Options.Papel) && (this.computerChoice === Options.Pedra))
            ||
            ((this.playerChoice === Options.Pedra) && (this.computerChoice === Options.Tesoura))
            ||
            ((this.playerChoice === Options.Tesoura) && (this.computerChoice === Options.Papel))
        ) {
            this._winner = 'Player';
        }
        else {
            this._winner = 'Bot';
        }

        return this._winner;
    }
}

export default Jokenpo;