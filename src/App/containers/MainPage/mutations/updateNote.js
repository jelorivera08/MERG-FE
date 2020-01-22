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

  console.log(variables);
  commitMutation(environment, {
    mutation,
    variables,
    onCompleted: (response, errors) => {
      console.log('Response received from server.');
    },
    onError: err => console.error(err)
  });
}

export default updateNoteMutation;
