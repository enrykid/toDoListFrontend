export class Task{
    _id?: number;
    description: string;
    responsable: string;

    constructor(description: string, responsable: string){
        this.description= description;
        this.responsable= responsable;
    }    
}