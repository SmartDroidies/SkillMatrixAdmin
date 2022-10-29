export class Category {
    code!: number;
    group!: string;
    description!: string;
    active!: boolean;
    weight!: number;

    constructor(code: number, group: string, description: string, weight: number, active: boolean) {
        this.code = code;
        this.group = group;
        this.description = description;
        this.weight = weight;
        this.active = active;
    }

}