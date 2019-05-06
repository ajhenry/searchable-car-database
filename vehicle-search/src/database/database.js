import PouchDB from "pouchdb";
import PouchdbFind from 'pouchdb-find';
PouchDB.plugin(PouchdbFind);

var db = new PouchDB("vehicles");

export default db;
