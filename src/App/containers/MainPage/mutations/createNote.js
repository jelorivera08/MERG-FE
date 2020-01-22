import { commitMutation, graphql } from 'react-relay';
import environment from '../../../../environment';

const mutation = graphql`
  mutation createNoteMutation($content: String) {
    createNote(content: $content) {
      _id
      content
    }
  }
`;

function createNoteMutation(content) {
  const variables = {
    content
  };

  commitMutation(environment, {
    mutation,
    variables,
    onCompleted: (response, errors) => {
      console.log('Response received from server.');
    },
    onError: err => console.error(err)
  });
}

export default createNoteMutation;
