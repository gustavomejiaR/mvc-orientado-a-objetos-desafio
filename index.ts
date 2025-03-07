import { ContactsController, ContactsControllerOptions } from "./controllers";
import {ContactsCollection} from "./models"
import * as minimist from "minimist"
import { argv } from "node:process";

function parseaParams(argv): ContactsControllerOptions {
   const resultado = minimist(argv);
  return {
    action: resultado.action,
    params: JSON.parse(resultado.params),
  };
}

function main() {
  const options = parseaParams(process.argv.slice(2));
  const controller = new ContactsController();
 const result = controller.processOptions(options);
 console.log(result);
}

main();
