import Firebase from 'firebase'
import Config from '../config.js'

const app = Firebase.initializeApp(Config.firebase)
const db = app.database()

export default class ActiveRecord {
    constructor(formdata) {
        this.formdata = formdata
    }

    save(table, success) {
        this.table(table).push(this.formdata, success) 
    }
    
    table = (name) => db.ref(name)

}