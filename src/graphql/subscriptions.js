/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateStudent = /* GraphQL */ `
  subscription OnCreateStudent($filter: ModelSubscriptionStudentFilterInput) {
    onCreateStudent(filter: $filter) {
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
      Image {
        bucket
        region
        key
      }
      createdAt
      updatedAt
      branchStudentsName
      yearStudentsName
    }
  }
`;
export const onUpdateStudent = /* GraphQL */ `
  subscription OnUpdateStudent($filter: ModelSubscriptionStudentFilterInput) {
    onUpdateStudent(filter: $filter) {
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
      Image {
        bucket
        region
        key
      }
      createdAt
      updatedAt
      branchStudentsName
      yearStudentsName
    }
  }
`;
export const onDeleteStudent = /* GraphQL */ `
  subscription OnDeleteStudent($filter: ModelSubscriptionStudentFilterInput) {
    onDeleteStudent(filter: $filter) {
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
      Image {
        bucket
        region
        key
      }
      createdAt
      updatedAt
      branchStudentsName
      yearStudentsName
    }
  }
`;
export const onCreateBranch = /* GraphQL */ `
  subscription OnCreateBranch($filter: ModelSubscriptionBranchFilterInput) {
    onCreateBranch(filter: $filter) {
      Name
      Students {
        items {
          RollNo
          Name
          BranchID
          YearID
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
export const onUpdateBranch = /* GraphQL */ `
  subscription OnUpdateBranch($filter: ModelSubscriptionBranchFilterInput) {
    onUpdateBranch(filter: $filter) {
      Name
      Students {
        items {
          RollNo
          Name
          BranchID
          YearID
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
export const onDeleteBranch = /* GraphQL */ `
  subscription OnDeleteBranch($filter: ModelSubscriptionBranchFilterInput) {
    onDeleteBranch(filter: $filter) {
      Name
      Students {
        items {
          RollNo
          Name
          BranchID
          YearID
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
export const onCreateYear = /* GraphQL */ `
  subscription OnCreateYear($filter: ModelSubscriptionYearFilterInput) {
    onCreateYear(filter: $filter) {
      Name
      Students {
        items {
          RollNo
          Name
          BranchID
          YearID
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
export const onUpdateYear = /* GraphQL */ `
  subscription OnUpdateYear($filter: ModelSubscriptionYearFilterInput) {
    onUpdateYear(filter: $filter) {
      Name
      Students {
        items {
          RollNo
          Name
          BranchID
          YearID
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
export const onDeleteYear = /* GraphQL */ `
  subscription OnDeleteYear($filter: ModelSubscriptionYearFilterInput) {
    onDeleteYear(filter: $filter) {
      Name
      Students {
        items {
          RollNo
          Name
          BranchID
          YearID
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
export const onCreateSubject = /* GraphQL */ `
  subscription OnCreateSubject($filter: ModelSubscriptionSubjectFilterInput) {
    onCreateSubject(filter: $filter) {
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
export const onUpdateSubject = /* GraphQL */ `
  subscription OnUpdateSubject($filter: ModelSubscriptionSubjectFilterInput) {
    onUpdateSubject(filter: $filter) {
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
export const onDeleteSubject = /* GraphQL */ `
  subscription OnDeleteSubject($filter: ModelSubscriptionSubjectFilterInput) {
    onDeleteSubject(filter: $filter) {
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
export const onCreateLogin = /* GraphQL */ `
  subscription OnCreateLogin($filter: ModelSubscriptionLoginFilterInput) {
    onCreateLogin(filter: $filter) {
      Login
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateLogin = /* GraphQL */ `
  subscription OnUpdateLogin($filter: ModelSubscriptionLoginFilterInput) {
    onUpdateLogin(filter: $filter) {
      Login
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteLogin = /* GraphQL */ `
  subscription OnDeleteLogin($filter: ModelSubscriptionLoginFilterInput) {
    onDeleteLogin(filter: $filter) {
      Login
      createdAt
      updatedAt
    }
  }
`;
export const onCreateYearbranch = /* GraphQL */ `
  subscription OnCreateYearbranch(
    $filter: ModelSubscriptionYearbranchFilterInput
  ) {
    onCreateYearbranch(filter: $filter) {
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
export const onUpdateYearbranch = /* GraphQL */ `
  subscription OnUpdateYearbranch(
    $filter: ModelSubscriptionYearbranchFilterInput
  ) {
    onUpdateYearbranch(filter: $filter) {
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
export const onDeleteYearbranch = /* GraphQL */ `
  subscription OnDeleteYearbranch(
    $filter: ModelSubscriptionYearbranchFilterInput
  ) {
    onDeleteYearbranch(filter: $filter) {
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
