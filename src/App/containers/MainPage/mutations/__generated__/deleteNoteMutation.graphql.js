/**
 * @flow
 * @relayHash a40ecfa17c20689a5c0ecd6dad08b137
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type deleteNoteMutationVariables = {|
  _id?: ?string
|};
export type deleteNoteMutationResponse = {|
  +deleteNote: ?boolean
|};
export type deleteNoteMutation = {|
  variables: deleteNoteMutationVariables,
  response: deleteNoteMutationResponse,
|};
*/


/*
mutation deleteNoteMutation(
  $_id: ID
) {
  deleteNote(_id: $_id)
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "_id",
    "type": "ID",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "deleteNote",
    "args": [
      {
        "kind": "Variable",
        "name": "_id",
        "variableName": "_id"
      }
    ],
    "storageKey": null
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "deleteNoteMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "deleteNoteMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "deleteNoteMutation",
    "id": null,
    "text": "mutation deleteNoteMutation(\n  $_id: ID\n) {\n  deleteNote(_id: $_id)\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'a5371187186204b2942ad2583c87fbc9';
module.exports = node;
