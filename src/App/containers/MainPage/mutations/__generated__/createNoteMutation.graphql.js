/**
 * @flow
 * @relayHash 0747b4f4da63bde44120c5a90a747955
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type createNoteMutationVariables = {|
  content?: ?string
|};
export type createNoteMutationResponse = {|
  +createNote: ?{|
    +_id: ?string,
    +content: ?string,
  |}
|};
export type createNoteMutation = {|
  variables: createNoteMutationVariables,
  response: createNoteMutationResponse,
|};
*/


/*
mutation createNoteMutation(
  $content: String
) {
  createNote(content: $content) {
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
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "createNote",
    "storageKey": null,
    "args": [
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
    "name": "createNoteMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "createNoteMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "createNoteMutation",
    "id": null,
    "text": "mutation createNoteMutation(\n  $content: String\n) {\n  createNote(content: $content) {\n    _id\n    content\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'adeba3f4c0016f9eb46f2857739341f8';
module.exports = node;
