import { gql } from '@apollo/client';


export const UPDATE_USER_MUTATION = gql`
  mutation updateUser($userId: Int!, $updateInput: UpdateUserInput!) {
  updateUser(userId: $userId, updateInput: $updateInput) {
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
        id
        name
      }
        countryId
    }
    maritalStatus {
      id
      name
    }
    dependants
  }
}
`;