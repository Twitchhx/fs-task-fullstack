import { gql } from '@apollo/client';

export const GET_USER_BASIC_INFO = gql`
  query User($userId: Int!) {
    user(userId: $userId) {
      firstName
      fatherName
      grandfatherName
      familyName
      localizedName {
        firstName
        fatherName
        grandfatherName
        familyName
      }
      nationalId {
        idNumber
        expiryDate
      }
      nationalities {
        country {
          name
        }
      }
      maritalStatus {
        name
      }
      dependants
    }
  }
`;
