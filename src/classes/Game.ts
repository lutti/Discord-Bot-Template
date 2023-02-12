import Jokenpo from './Jokenpo';

class Game {
    private _wins = 0;
    private _loses = 0;
    private _draws = 0;
    private _jokenpos: Jokenpo[];
    private _currentRound = 1;
    private _summary = 'Jogo não terminado';
    private _finished = false;

    // eslint-disable-next-line no-empty-function
    constructor(public rounds: number = 3) {}

    get summary(): string {
        return this._summary;
    }

    get finished(): boolean {
        return this._finished;
    }

    getCurrentRound(): Jokenpo {
        return this._jokenpos[this._currentRound - 1];
    }

    addNewJokenpo(jogo: Jokenpo): void {
        this._jokenpos.push(jogo);
        if (this.rounds === this._currentRound) {
            this._generateSummary();
            this._finished = true;
        }
        else {
            this._currentRound += 1;
        }
    }

    private _generateSummary() {
        this._summary = `Vitorias: ${this._wins}\nEmpates: ${this._draws}\nDerrotas: ${this._loses}`;
    }
}

export default Game;