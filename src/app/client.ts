export class Client {

    private nom: string;
    private prenom: string;
    private numero: string;
    private mail: string;
    private telephone: string;

    toString(){
        return `[nom=${this.nom}, prenom=${this.prenom}, numero=${this.numero}, mail=${this.mail}, telephone=${this.telephone}]`
    }
}