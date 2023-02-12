import { Options } from './Options';

class Jokenpo {
    protected _winner: 'Empate' | 'Bot' | 'Player' | null = null;
    protected _playerChoice: Options;
    protected _computerChoice: Options;
    protected _cChoiceString = '';
    protected _resultado = '';

    constructor(pChoice: Options) {
        this._playerChoice = pChoice;

        this._computerChoice = this._generateComputerChoice();
        if (this.computerChoice === Options.Pedra) {
            this._cChoiceString = 'Pedra!';
        }
        else if (this.computerChoice === Options.Papel) {
            this._cChoiceString = 'Papel!';
        }
        else {
            this._cChoiceString = 'Tesoura!';
        }
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

    get computerChoiceText() {
        return this._cChoiceString;
    }

    private _generateComputerChoice(): Options {
        return Math.floor(Math.random() * 3);
    }

    public GetResultado(): string {
        if (this.playerChoice.toString() === this.computerChoice.toString()) {
            this._resultado = 'Empatamos!';
            this._winner = 'Empate';
        }
        else if (
            ((this.playerChoice === Options.Papel) && (this.computerChoice === Options.Pedra))
            ||
            ((this.playerChoice === Options.Pedra) && (this.computerChoice === Options.Tesoura))
            ||
            ((this.playerChoice === Options.Tesoura) && (this.computerChoice === Options.Papel))
        ) {
            this._resultado = 'Parabens vc venceu a máquina!';
            this._winner = 'Bot';
        }
        else {
            this._resultado = 'Nada seu tudo meu! Perdeu!';
            this._winner = 'Player';
        }

        return this._resultado;
    }
}

export default Jokenpo;