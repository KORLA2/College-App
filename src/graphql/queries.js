/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getStudent = /* GraphQL */ `
  query GetStudent($RollNo: ID!) {
    getStudent(RollNo: $RollNo) {
      RollNo
      Name
      BranchID
      Branch {
        Name
        Students {
          nextToken
        }
        Years {
          nextToken
        }
        Subjects {
          nextToken
        }
        createdAt
        updatedAt
      }
      YearID
      Year {
        Name
        Students {
          nextToken
        }
        Branch {
          nextToken
        }
        createdAt
        updatedAt
      }
      Image
      createdAt
      updatedAt
      branchStudentsName
      yearStudentsName
    }
  }
`;
export const listStudents = /* GraphQL */ `
  query ListStudents(
    $RollNo: ID
    $filter: ModelStudentFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listStudents(
      RollNo: $RollNo
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        RollNo
        Name
        BranchID
        Branch {
          Name
          createdAt
          updatedAt
        }
        YearID
        Year {
          Name
          createdAt
          updatedAt
        }
        Image
        createdAt
        updatedAt
        branchStudentsName
        yearStudentsName
      }
      nextToken
    }
  }
`;
export const studentsByBranchIDAndYearID = /* GraphQL */ `
  query StudentsByBranchIDAndYearID(
    $BranchID: ID!
    $YearID: ModelIDKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelStudentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    studentsByBranchIDAndYearID(
      BranchID: $BranchID
      YearID: $YearID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        RollNo
        Name
        BranchID
        Branch {
          Name
          createdAt
          updatedAt
        }
        YearID
        Year {
          Name
          createdAt
          updatedAt
        }
        Image
        createdAt
        updatedAt
        branchStudentsName
        yearStudentsName
      }
      nextToken
    }
  }
`;
export const studentsByYearID = /* GraphQL */ `
  query StudentsByYearID(
    $YearID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelStudentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    studentsByYearID(
      YearID: $YearID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        RollNo
        Name
        BranchID
        Branch {
          Name
          createdAt
          updatedAt
        }
        YearID
        Year {
          Name
          createdAt
          updatedAt
        }
        Image
        createdAt
        updatedAt
        branchStudentsName
        yearStudentsName
      }
      nextToken
    }
  }
`;
export const getBranch = /* GraphQL */ `
  query GetBranch($Name: ID!) {
    getBranch(Name: $Name) {
      Name
      Students {
        items {
          RollNo
          Name
          BranchID
          YearID
          Image
          createdAt
          updatedAt
          branchStudentsName
          yearStudentsName
        }
        nextToken
      }
      Years {
        items {
          id
          branchName
          yearName
          createdAt
          updatedAt
        }
        nextToken
      }
      Subjects {
        items {
          Name
          BranchID
          YearID
          createdAt
          updatedAt
          branchSubjectsName
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listBranches = /* GraphQL */ `
  query ListBranches(
    $Name: ID
    $filter: ModelBranchFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listBranches(
      Name: $Name
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        Name
        Students {
          nextToken
        }
        Years {
          nextToken
        }
        Subjects {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getYear = /* GraphQL */ `
  query GetYear($Name: ID!) {
    getYear(Name: $Name) {
      Name
      Students {
        items {
          RollNo
          Name
          BranchID
          YearID
          Image
          createdAt
          updatedAt
          branchStudentsName
          yearStudentsName
        }
        nextToken
      }
      Branch {
        items {
          id
          branchName
          yearName
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listYears = /* GraphQL */ `
  query ListYears(
    $Name: ID
    $filter: ModelYearFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listYears(
      Name: $Name
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        Name
        Students {
          nextToken
        }
        Branch {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getSubject = /* GraphQL */ `
  query GetSubject($Name: ID!) {
    getSubject(Name: $Name) {
      Name
      BranchID
      Branch {
        Name
        Students {
          nextToken
        }
        Years {
          nextToken
        }
        Subjects {
          nextToken
        }
        createdAt
        updatedAt
      }
      YearID
      createdAt
      updatedAt
      branchSubjectsName
    }
  }
`;
export const listSubjects = /* GraphQL */ `
  query ListSubjects(
    $Name: ID
    $filter: ModelSubjectFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listSubjects(
      Name: $Name
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        Name
        BranchID
        Branch {
          Name
          createdAt
          updatedAt
        }
        YearID
        createdAt
        updatedAt
        branchSubjectsName
      }
      nextToken
    }
  }
`;
export const subjectsByBranchID = /* GraphQL */ `
  query SubjectsByBranchID(
    $BranchID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelSubjectFilterInput
    $limit: Int
    $nextToken: String
  ) {
    subjectsByBranchID(
      BranchID: $BranchID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        Name
        BranchID
        Branch {
          Name
          createdAt
          updatedAt
        }
        YearID
        createdAt
        updatedAt
        branchSubjectsName
      }
      nextToken
    }
  }
`;
export const subjectsByYearIDAndBranchID = /* GraphQL */ `
  query SubjectsByYearIDAndBranchID(
    $YearID: ID!
    $BranchID: ModelIDKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelSubjectFilterInput
    $limit: Int
    $nextToken: String
  ) {
    subjectsByYearIDAndBranchID(
      YearID: $YearID
      BranchID: $BranchID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        Name
        BranchID
        Branch {
          Name
          createdAt
          updatedAt
        }
        YearID
        createdAt
        updatedAt
        branchSubjectsName
      }
      nextToken
    }
  }
`;
export const getYearbranch = /* GraphQL */ `
  query GetYearbranch($id: ID!) {
    getYearbranch(id: $id) {
      id
      branchName
      yearName
      branch {
        Name
        Students {
          nextToken
        }
        Years {
          nextToken
        }
        Subjects {
          nextToken
        }
        createdAt
        updatedAt
      }
      year {
        Name
        Students {
          nextToken
        }
        Branch {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listYearbranches = /* GraphQL */ `
  query ListYearbranches(
    $filter: ModelYearbranchFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listYearbranches(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        branchName
        yearName
        branch {
          Name
          createdAt
          updatedAt
        }
        year {
          Name
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const yearbranchesByBranchName = /* GraphQL */ `
  query YearbranchesByBranchName(
    $branchName: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelYearbranchFilterInput
    $limit: Int
    $nextToken: String
  ) {
    yearbranchesByBranchName(
      branchName: $branchName
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        branchName
        yearName
        branch {
          Name
          createdAt
          updatedAt
        }
        year {
          Name
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const yearbranchesByYearName = /* GraphQL */ `
  query YearbranchesByYearName(
    $yearName: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelYearbranchFilterInput
    $limit: Int
    $nextToken: String
  ) {
    yearbranchesByYearName(
      yearName: $yearName
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        branchName
        yearName
        branch {
          Name
          createdAt
          updatedAt
        }
        year {
          Name
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
