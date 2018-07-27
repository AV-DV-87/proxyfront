import { DatePipe } from "@angular/common";

export class Sondage {
    private id: number;
    private dateDebut: DatePipe;
    private dateFermeture: DatePipe;
    private dateFin: DatePipe;

    toString(){
        return `[Sondage id=${this.id}, dateDebut=${this.dateDebut}, dateFerrmeture=${this.dateFermeture}, dateFin=${this.dateFin}]`
    }
}