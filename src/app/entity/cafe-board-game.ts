import {Cafe} from'./cafe'

export class CafeBoardGame{
    private cafe:Cafe;

    public getCafe(): Cafe {
        return this.cafe;
    }

    public setCafe(cafe: Cafe): void {
        this.cafe = cafe;
    }

}