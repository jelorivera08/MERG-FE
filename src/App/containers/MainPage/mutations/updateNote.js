import { commitMutation, graphql } from 'react-relay';
import environment from '../../../../environment';

const mutation = graphql`
  mutation updateNoteMutation($content: String, $_id: ID) {
    updateNote(_id: $_id, content: $content) {
      _id
      content
    }
  }
`;

function updateNoteMutation(_id, content) {
  const variables = {
    _id,
    content
  };

  commitMutation(environment, {
    mutation,
    variables,
    onCompleted: (response, errors) => {
      console.log('Response received from server.');
    },
    updater: store => {
      const newUpdatedNote = store.getRootField('updateNote');
      const root = store.getRoot();
      const notes = root.getLinkedRecords('notes');
      const newNotes = notes.filter(v => v.getValue('_id') !== _id);

      root.setLinkedRecords([...newNotes, newUpdatedNote], 'notes');
    },
    onError: err => console.error(err)
  });
}

export default updateNoteMutation;
