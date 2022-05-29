
import { gql } from '@apollo/client';

export const QUERY_ME = gql`
    {
        me {
            _id
            username
            email
            bookCount
            savedBooks {
                bookId
                title
                description
                image
                link
                authors 
            }
        }
    }
`;