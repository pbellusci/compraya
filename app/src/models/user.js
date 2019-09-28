import ActiveRecord from './active_record'

export default class User extends ActiveRecord {
    
    constructor(formdata) {
        super(formdata)
    }

    async create() {
        return await super.save('user', (error) => {
            if(error) {
                return false
            } else {
                return true;
            }
        })
    }
}