/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getBranch = /* GraphQL */ `
  query GetBranch($BranchID: ID!) {
    getBranch(BranchID: $BranchID) {
      BranchID
      Name
      Years {
        items {
          id
          branchBranchID
          yearYearNo
          createdAt
          updatedAt
          username
        }
        nextToken
      }
      Students {
        items {
          RollNo
          Name
          YearID
          BranchID
          createdAt
          updatedAt
          username
        }
        nextToken
      }
      Subjects {
        items {
          SubjectID
          SubjectName
          YearID
          BranchID
          createdAt
          updatedAt
          username
        }
        nextToken
      }
      createdAt
      updatedAt
      username
    }
  }
`;
export const listBranches = /* GraphQL */ `
  query ListBranches(
    $BranchID: ID
    $filter: ModelBranchFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listBranches(
      BranchID: $BranchID
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        BranchID
        Name
        Years {
          nextToken
        }
        Students {
          nextToken
        }
        Subjects {
          nextToken
        }
        createdAt
        updatedAt
        username
      }
      nextToken
    }
  }
`;
export const getYear = /* GraphQL */ `
  query GetYear($YearNo: ID!) {
    getYear(YearNo: $YearNo) {
      YearNo
      student {
        items {
          RollNo
          Name
          YearID
          BranchID
          createdAt
          updatedAt
          username
        }
        nextToken
      }
      Branches {
        items {
          id
          branchBranchID
          yearYearNo
          createdAt
          updatedAt
          username
        }
        nextToken
      }
      Subjects {
        items {
          SubjectID
          SubjectName
          YearID
          BranchID
          createdAt
          updatedAt
          username
        }
        nextToken
      }
      createdAt
      updatedAt
      username
    }
  }
`;
export const listYears = /* GraphQL */ `
  query ListYears(
    $YearNo: ID
    $filter: ModelYearFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listYears(
      YearNo: $YearNo
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        YearNo
        student {
          nextToken
        }
        Branches {
          nextToken
        }
        Subjects {
          nextToken
        }
        createdAt
        updatedAt
        username
      }
      nextToken
    }
  }
`;
export const getStudent = /* GraphQL */ `
  query GetStudent($RollNo: ID!) {
    getStudent(RollNo: $RollNo) {
      RollNo
      Name
      YearID
      BranchID
      Year {
        YearNo
        student {
          nextToken
        }
        Branches {
          nextToken
        }
        Subjects {
          nextToken
        }
        createdAt
        updatedAt
        username
      }
      Branch {
        BranchID
        Name
        Years {
          nextToken
        }
        Students {
          nextToken
        }
        Subjects {
          nextToken
        }
        createdAt
        updatedAt
        username
      }
      Image {
        bucket
        region
        key
      }
      createdAt
      updatedAt
      username
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
        YearID
        BranchID
        Year {
          YearNo
          createdAt
          updatedAt
          username
        }
        Branch {
          BranchID
          Name
          createdAt
          updatedAt
          username
        }
        Image {
          bucket
          region
          key
        }
        createdAt
        updatedAt
        username
      }
      nextToken
    }
  }
`;
export const getSubject = /* GraphQL */ `
  query GetSubject($SubjectID: ID!) {
    getSubject(SubjectID: $SubjectID) {
      SubjectID
      SubjectName
      YearID
      BranchID
      Year {
        YearNo
        student {
          nextToken
        }
        Branches {
          nextToken
        }
        Subjects {
          nextToken
        }
        createdAt
        updatedAt
        username
      }
      Branch {
        BranchID
        Name
        Years {
          nextToken
        }
        Students {
          nextToken
        }
        Subjects {
          nextToken
        }
        createdAt
        updatedAt
        username
      }
      createdAt
      updatedAt
      username
    }
  }
`;
export const listSubjects = /* GraphQL */ `
  query ListSubjects(
    $SubjectID: ID
    $filter: ModelSubjectFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listSubjects(
      SubjectID: $SubjectID
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        SubjectID
        SubjectName
        YearID
        BranchID
        Year {
          YearNo
          createdAt
          updatedAt
          username
        }
        Branch {
          BranchID
          Name
          createdAt
          updatedAt
          username
        }
        createdAt
        updatedAt
        username
      }
      nextToken
    }
  }
`;
export const getBranchYear = /* GraphQL */ `
  query GetBranchYear($id: ID!) {
    getBranchYear(id: $id) {
      id
      branchBranchID
      yearYearNo
      branch {
        BranchID
        Name
        Years {
          nextToken
        }
        Students {
          nextToken
        }
        Subjects {
          nextToken
        }
        createdAt
        updatedAt
        username
      }
      year {
        YearNo
        student {
          nextToken
        }
        Branches {
          nextToken
        }
        Subjects {
          nextToken
        }
        createdAt
        updatedAt
        username
      }
      createdAt
      updatedAt
      username
    }
  }
`;
export const listBranchYears = /* GraphQL */ `
  query ListBranchYears(
    $filter: ModelBranchYearFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBranchYears(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        branchBranchID
        yearYearNo
        branch {
          BranchID
          Name
          createdAt
          updatedAt
          username
        }
        year {
          YearNo
          createdAt
          updatedAt
          username
        }
        createdAt
        updatedAt
        username
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
        YearID
        BranchID
        Year {
          YearNo
          createdAt
          updatedAt
          username
        }
        Branch {
          BranchID
          Name
          createdAt
          updatedAt
          username
        }
        Image {
          bucket
          region
          key
        }
        createdAt
        updatedAt
        username
      }
      nextToken
    }
  }
`;
export const subjectsByBranchIDAndYearID = /* GraphQL */ `
  query SubjectsByBranchIDAndYearID(
    $BranchID: ID!
    $YearID: ModelIDKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelSubjectFilterInput
    $limit: Int
    $nextToken: String
  ) {
    subjectsByBranchIDAndYearID(
      BranchID: $BranchID
      YearID: $YearID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        SubjectID
        SubjectName
        YearID
        BranchID
        Year {
          YearNo
          createdAt
          updatedAt
          username
        }
        Branch {
          BranchID
          Name
          createdAt
          updatedAt
          username
        }
        createdAt
        updatedAt
        username
      }
      nextToken
    }
  }
`;
export const branchYearsByBranchBranchID = /* GraphQL */ `
  query BranchYearsByBranchBranchID(
    $branchBranchID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelBranchYearFilterInput
    $limit: Int
    $nextToken: String
  ) {
    branchYearsByBranchBranchID(
      branchBranchID: $branchBranchID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        branchBranchID
        yearYearNo
        branch {
          BranchID
          Name
          createdAt
          updatedAt
          username
        }
        year {
          YearNo
          createdAt
          updatedAt
          username
        }
        createdAt
        updatedAt
        username
      }
      nextToken
    }
  }
`;
export const branchYearsByYearYearNo = /* GraphQL */ `
  query BranchYearsByYearYearNo(
    $yearYearNo: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelBranchYearFilterInput
    $limit: Int
    $nextToken: String
  ) {
    branchYearsByYearYearNo(
      yearYearNo: $yearYearNo
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        branchBranchID
        yearYearNo
        branch {
          BranchID
          Name
          createdAt
          updatedAt
          username
        }
        year {
          YearNo
          createdAt
          updatedAt
          username
        }
        createdAt
        updatedAt
        username
      }
      nextToken
    }
  }
`;
