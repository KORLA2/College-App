/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createStudent = /* GraphQL */ `
  mutation CreateStudent(
    $input: CreateStudentInput!
    $condition: ModelStudentConditionInput
  ) {
    createStudent(input: $input, condition: $condition) {
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
export const updateStudent = /* GraphQL */ `
  mutation UpdateStudent(
    $input: UpdateStudentInput!
    $condition: ModelStudentConditionInput
  ) {
    updateStudent(input: $input, condition: $condition) {
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
export const deleteStudent = /* GraphQL */ `
  mutation DeleteStudent(
    $input: DeleteStudentInput!
    $condition: ModelStudentConditionInput
  ) {
    deleteStudent(input: $input, condition: $condition) {
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
export const createBranch = /* GraphQL */ `
  mutation CreateBranch(
    $input: CreateBranchInput!
    $condition: ModelBranchConditionInput
  ) {
    createBranch(input: $input, condition: $condition) {
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
export const updateBranch = /* GraphQL */ `
  mutation UpdateBranch(
    $input: UpdateBranchInput!
    $condition: ModelBranchConditionInput
  ) {
    updateBranch(input: $input, condition: $condition) {
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
export const deleteBranch = /* GraphQL */ `
  mutation DeleteBranch(
    $input: DeleteBranchInput!
    $condition: ModelBranchConditionInput
  ) {
    deleteBranch(input: $input, condition: $condition) {
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
export const createYear = /* GraphQL */ `
  mutation CreateYear(
    $input: CreateYearInput!
    $condition: ModelYearConditionInput
  ) {
    createYear(input: $input, condition: $condition) {
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
export const updateYear = /* GraphQL */ `
  mutation UpdateYear(
    $input: UpdateYearInput!
    $condition: ModelYearConditionInput
  ) {
    updateYear(input: $input, condition: $condition) {
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
export const deleteYear = /* GraphQL */ `
  mutation DeleteYear(
    $input: DeleteYearInput!
    $condition: ModelYearConditionInput
  ) {
    deleteYear(input: $input, condition: $condition) {
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
export const createSubject = /* GraphQL */ `
  mutation CreateSubject(
    $input: CreateSubjectInput!
    $condition: ModelSubjectConditionInput
  ) {
    createSubject(input: $input, condition: $condition) {
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
export const updateSubject = /* GraphQL */ `
  mutation UpdateSubject(
    $input: UpdateSubjectInput!
    $condition: ModelSubjectConditionInput
  ) {
    updateSubject(input: $input, condition: $condition) {
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
export const deleteSubject = /* GraphQL */ `
  mutation DeleteSubject(
    $input: DeleteSubjectInput!
    $condition: ModelSubjectConditionInput
  ) {
    deleteSubject(input: $input, condition: $condition) {
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
export const createLogin = /* GraphQL */ `
  mutation CreateLogin(
    $input: CreateLoginInput!
    $condition: ModelLoginConditionInput
  ) {
    createLogin(input: $input, condition: $condition) {
      Login
      createdAt
      updatedAt
    }
  }
`;
export const updateLogin = /* GraphQL */ `
  mutation UpdateLogin(
    $input: UpdateLoginInput!
    $condition: ModelLoginConditionInput
  ) {
    updateLogin(input: $input, condition: $condition) {
      Login
      createdAt
      updatedAt
    }
  }
`;
export const deleteLogin = /* GraphQL */ `
  mutation DeleteLogin(
    $input: DeleteLoginInput!
    $condition: ModelLoginConditionInput
  ) {
    deleteLogin(input: $input, condition: $condition) {
      Login
      createdAt
      updatedAt
    }
  }
`;
export const createYearbranch = /* GraphQL */ `
  mutation CreateYearbranch(
    $input: CreateYearbranchInput!
    $condition: ModelYearbranchConditionInput
  ) {
    createYearbranch(input: $input, condition: $condition) {
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
export const updateYearbranch = /* GraphQL */ `
  mutation UpdateYearbranch(
    $input: UpdateYearbranchInput!
    $condition: ModelYearbranchConditionInput
  ) {
    updateYearbranch(input: $input, condition: $condition) {
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
export const deleteYearbranch = /* GraphQL */ `
  mutation DeleteYearbranch(
    $input: DeleteYearbranchInput!
    $condition: ModelYearbranchConditionInput
  ) {
    deleteYearbranch(input: $input, condition: $condition) {
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
