import { ContactsCollection, Contact } from "./models";

export class ContactsControllerOptions {
  action: "get" | "save";
  params: any;
}

class ContactsController {
  contacts: ContactsCollection;
  constructor() {
    const coll = new ContactsCollection();
    this.contacts = coll
    coll.load();
  }
  processOptions(options: ContactsControllerOptions) {
    let resultado
    if(options.action == "get"  && options.params.id){
      resultado = this.contacts.getOneById(options.params.id);
    }else if(options.action == "get"){
      resultado = this.contacts.getAll();
    } else if(options.action == "save" && options.params){
      this.contacts.addOne(options.params);
      resultado = this.contacts.save();
    }
  return resultado;
}
}


  export { ContactsController };
