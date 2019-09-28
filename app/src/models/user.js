import ActiveRecord from './active_record'

export default class User extends ActiveRecord {
    
    constructor(formdata) {
        super(formdata)
    }

    create() {
        super.save('user', (error) =>{
            debugger
        })
    }
}