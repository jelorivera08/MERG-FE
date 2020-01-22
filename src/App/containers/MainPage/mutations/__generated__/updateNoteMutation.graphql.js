/**
 * @flow
 * @relayHash e5117455231db88d51387e5d064c9f22
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type updateNoteMutationVariables = {|
  content?: ?string,
  _id?: ?string,
|};
export type updateNoteMutationResponse = {|
  +updateNote: ?{|
    +_id: ?string,
    +content: ?string,
  |}
|};
export type updateNoteMutation = {|
  variables: updateNoteMutationVariables,
  response: updateNoteMutationResponse,
|};
*/


/*
mutation updateNoteMutation(
  $content: String
  $_id: ID
) {
  updateNote(_id: $_id, content: $content) {
    _id
    content
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "content",
    "type": "String",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "_id",
    "type": "ID",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "updateNote",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "_id",
        "variableName": "_id"
      },
      {
        "kind": "Variable",
        "name": "content",
        "variableName": "content"
      }
    ],
    "concreteType": "Note",
    "plural": false,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "_id",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "content",
        "args": null,
        "storageKey": null
      }
    ]
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "updateNoteMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "updateNoteMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "updateNoteMutation",
    "id": null,
    "text": "mutation updateNoteMutation(\n  $content: String\n  $_id: ID\n) {\n  updateNote(_id: $_id, content: $content) {\n    _id\n    content\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '243024c90f652d36ad9a87f3847c033b';
module.exports = node;
