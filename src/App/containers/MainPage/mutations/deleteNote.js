import { commitMutation, graphql } from 'react-relay';
import environment from '../../../../environment';

const mutation = graphql`
  mutation deleteNoteMutation($_id: ID) {
    deleteNote(_id: $_id)
  }
`;

function deleteNoteMutation(_id) {
  const variables = {
    _id
  };

  commitMutation(environment, {
    mutation,
    variables,
    onCompleted: (response, errors) => {
      console.log('Response received from server.');
    },
    updater: store => {
      const root = store.getRoot();
      const notes = root.getLinkedRecords('notes');
      const newNotes = notes.filter(v => v.getValue('_id') !== _id);

      root.setLinkedRecords(newNotes, 'notes');
    },

    onError: err => console.error(err)
  });
}

export default deleteNoteMutation;
