import { v4 as uuidV4 } from 'uuid'
// o "as" serve para sobrescrever o nome da função


class Category {
    id?: string;
    name: string;
    description: string;
    created_at: Date;

    constructor() {
        if(!this.id) {
            this.id = uuidV4()
        } else {

        }
    }
}
export { Category }