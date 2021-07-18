import test from "ava";
import { ContactsController, ContactsControllerOptions } from "./controllers";
import { ContactsCollection } from "./models";

 test("Testeo el constructor del controller", (t) => {
     const model = new ContactsController
     const coll = new ContactsCollection
     coll.load();
     t.deepEqual(model.contacts.data, coll.data);


 });

 test("Testeo el método processOptions", (t) => {
     const model = new ContactsController
     const options = new ContactsControllerOptions
     options.action = "get"
     options.params = {id: 31};
     const one = model.processOptions(options);
     const contacts = new ContactsCollection();
     const two = contacts.getOneById(1);
   
     t.deepEqual(one, two);
 });
