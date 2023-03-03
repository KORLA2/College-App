/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateBranch = /* GraphQL */ `
  subscription OnCreateBranch(
    $filter: ModelSubscriptionBranchFilterInput
    $username: String
  ) {
    onCreateBranch(filter: $filter, username: $username) {
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
export const onUpdateBranch = /* GraphQL */ `
  subscription OnUpdateBranch(
    $filter: ModelSubscriptionBranchFilterInput
    $username: String
  ) {
    onUpdateBranch(filter: $filter, username: $username) {
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
export const onDeleteBranch = /* GraphQL */ `
  subscription OnDeleteBranch(
    $filter: ModelSubscriptionBranchFilterInput
    $username: String
  ) {
    onDeleteBranch(filter: $filter, username: $username) {
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
export const onCreateYear = /* GraphQL */ `
  subscription OnCreateYear(
    $filter: ModelSubscriptionYearFilterInput
    $username: String
  ) {
    onCreateYear(filter: $filter, username: $username) {
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
export const onUpdateYear = /* GraphQL */ `
  subscription OnUpdateYear(
    $filter: ModelSubscriptionYearFilterInput
    $username: String
  ) {
    onUpdateYear(filter: $filter, username: $username) {
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
export const onDeleteYear = /* GraphQL */ `
  subscription OnDeleteYear(
    $filter: ModelSubscriptionYearFilterInput
    $username: String
  ) {
    onDeleteYear(filter: $filter, username: $username) {
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
export const onCreateStudent = /* GraphQL */ `
  subscription OnCreateStudent(
    $filter: ModelSubscriptionStudentFilterInput
    $username: String
  ) {
    onCreateStudent(filter: $filter, username: $username) {
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
      createdAt
      updatedAt
      username
    }
  }
`;
export const onUpdateStudent = /* GraphQL */ `
  subscription OnUpdateStudent(
    $filter: ModelSubscriptionStudentFilterInput
    $username: String
  ) {
    onUpdateStudent(filter: $filter, username: $username) {
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
      createdAt
      updatedAt
      username
    }
  }
`;
export const onDeleteStudent = /* GraphQL */ `
  subscription OnDeleteStudent(
    $filter: ModelSubscriptionStudentFilterInput
    $username: String
  ) {
    onDeleteStudent(filter: $filter, username: $username) {
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
      createdAt
      updatedAt
      username
    }
  }
`;
export const onCreateSubject = /* GraphQL */ `
  subscription OnCreateSubject(
    $filter: ModelSubscriptionSubjectFilterInput
    $username: String
  ) {
    onCreateSubject(filter: $filter, username: $username) {
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
export const onUpdateSubject = /* GraphQL */ `
  subscription OnUpdateSubject(
    $filter: ModelSubscriptionSubjectFilterInput
    $username: String
  ) {
    onUpdateSubject(filter: $filter, username: $username) {
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
export const onDeleteSubject = /* GraphQL */ `
  subscription OnDeleteSubject(
    $filter: ModelSubscriptionSubjectFilterInput
    $username: String
  ) {
    onDeleteSubject(filter: $filter, username: $username) {
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
export const onCreateBranchYear = /* GraphQL */ `
  subscription OnCreateBranchYear(
    $filter: ModelSubscriptionBranchYearFilterInput
    $username: String
  ) {
    onCreateBranchYear(filter: $filter, username: $username) {
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
export const onUpdateBranchYear = /* GraphQL */ `
  subscription OnUpdateBranchYear(
    $filter: ModelSubscriptionBranchYearFilterInput
    $username: String
  ) {
    onUpdateBranchYear(filter: $filter, username: $username) {
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
export const onDeleteBranchYear = /* GraphQL */ `
  subscription OnDeleteBranchYear(
    $filter: ModelSubscriptionBranchYearFilterInput
    $username: String
  ) {
    onDeleteBranchYear(filter: $filter, username: $username) {
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
