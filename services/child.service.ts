import { v4 as uuidv4 } from 'uuid';

export class ChildService {
    uuid: any;
    constructor() {
        this.uuid = uuidv4();
        console.info('@@@@ ChildService::uuid ' + this.uuid);
    }

    test() {
        console.log('>>>>> test ( ' + this.uuid +' )');
    }
}