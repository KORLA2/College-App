/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createRegister = /* GraphQL */ `
  mutation CreateRegister(
    $input: CreateRegisterInput!
    $condition: ModelRegisterConditionInput
  ) {
    createRegister(input: $input, condition: $condition) {
      RollNo
      name
      Email
      Branch
      Year
      id
      createdAt
      updatedAt
    }
  }
`;
export const updateRegister = /* GraphQL */ `
  mutation UpdateRegister(
    $input: UpdateRegisterInput!
    $condition: ModelRegisterConditionInput
  ) {
    updateRegister(input: $input, condition: $condition) {
      RollNo
      name
      Email
      Branch
      Year
      id
      createdAt
      updatedAt
    }
  }
`;
export const deleteRegister = /* GraphQL */ `
  mutation DeleteRegister(
    $input: DeleteRegisterInput!
    $condition: ModelRegisterConditionInput
  ) {
    deleteRegister(input: $input, condition: $condition) {
      RollNo
      name
      Email
      Branch
      Year
      id
      createdAt
      updatedAt
    }
  }
`;
export const createAttendence = /* GraphQL */ `
  mutation CreateAttendence(
    $input: CreateAttendenceInput!
    $condition: ModelAttendenceConditionInput
  ) {
    createAttendence(input: $input, condition: $condition) {
      RollNo
      CNS
      DM
      Cloud
      POE
      id
      createdAt
      updatedAt
    }
  }
`;
export const updateAttendence = /* GraphQL */ `
  mutation UpdateAttendence(
    $input: UpdateAttendenceInput!
    $condition: ModelAttendenceConditionInput
  ) {
    updateAttendence(input: $input, condition: $condition) {
      RollNo
      CNS
      DM
      Cloud
      POE
      id
      createdAt
      updatedAt
    }
  }
`;
export const deleteAttendence = /* GraphQL */ `
  mutation DeleteAttendence(
    $input: DeleteAttendenceInput!
    $condition: ModelAttendenceConditionInput
  ) {
    deleteAttendence(input: $input, condition: $condition) {
      RollNo
      CNS
      DM
      Cloud
      POE
      id
      createdAt
      updatedAt
    }
  }
`;
