/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getRegister = /* GraphQL */ `
  query GetRegister($id: ID!) {
    getRegister(id: $id) {
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
export const listRegisters = /* GraphQL */ `
  query ListRegisters(
    $filter: ModelRegisterFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRegisters(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        RollNo
        name
        Email
        Branch 
        Year
        id
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getAttendence = /* GraphQL */ `
  query GetAttendence($id: ID!) {
    getAttendence(id: $id) {
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
export const listAttendences = /* GraphQL */ `
  query ListAttendences(
    $filter: ModelAttendenceFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAttendences(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        RollNo
        CNS
        DM
        Cloud
        POE
        id
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
