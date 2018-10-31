export class Cafe{
    private id:number;
    private nameCafe:String;
    private googleMapLink:String;

    public getId(): number
 {
        return this.id;
    }

    public setId(id: number
): void {
        this.id = id;
    }

    public getNameCafe(): String
 {
        return this.nameCafe;
    }

    public setNameCafe(nameCafe: String
): void {
        this.nameCafe = nameCafe;
    }

    public getGoogleMapLink(): String {
        return this.googleMapLink;
    }

    public setGoogleMapLink(googleMapLink: String): void {
        this.googleMapLink = googleMapLink;
    }


}