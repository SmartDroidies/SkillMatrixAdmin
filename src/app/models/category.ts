export class Category {
    code!: string;
    order!: number;
    title!: string;
    active!: boolean;
    // weight!: number;

    constructor(code: string, order: number, title: string, weight: number, active: boolean) {
        this.code = code;
        this.order = order;
        this.title = title;
        // this.weight = weight;
        this.active = active;
    }

}