/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createBranch = /* GraphQL */ `
  mutation CreateBranch(
    $input: CreateBranchInput!
    $condition: ModelBranchConditionInput
  ) {
    createBranch(input: $input, condition: $condition) {
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
export const updateBranch = /* GraphQL */ `
  mutation UpdateBranch(
    $input: UpdateBranchInput!
    $condition: ModelBranchConditionInput
  ) {
    updateBranch(input: $input, condition: $condition) {
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
export const deleteBranch = /* GraphQL */ `
  mutation DeleteBranch(
    $input: DeleteBranchInput!
    $condition: ModelBranchConditionInput
  ) {
    deleteBranch(input: $input, condition: $condition) {
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
export const createYear = /* GraphQL */ `
  mutation CreateYear(
    $input: CreateYearInput!
    $condition: ModelYearConditionInput
  ) {
    createYear(input: $input, condition: $condition) {
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
export const updateYear = /* GraphQL */ `
  mutation UpdateYear(
    $input: UpdateYearInput!
    $condition: ModelYearConditionInput
  ) {
    updateYear(input: $input, condition: $condition) {
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
export const deleteYear = /* GraphQL */ `
  mutation DeleteYear(
    $input: DeleteYearInput!
    $condition: ModelYearConditionInput
  ) {
    deleteYear(input: $input, condition: $condition) {
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
export const createStudent = /* GraphQL */ `
  mutation CreateStudent(
    $input: CreateStudentInput!
    $condition: ModelStudentConditionInput
  ) {
    createStudent(input: $input, condition: $condition) {
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
export const updateStudent = /* GraphQL */ `
  mutation UpdateStudent(
    $input: UpdateStudentInput!
    $condition: ModelStudentConditionInput
  ) {
    updateStudent(input: $input, condition: $condition) {
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
export const deleteStudent = /* GraphQL */ `
  mutation DeleteStudent(
    $input: DeleteStudentInput!
    $condition: ModelStudentConditionInput
  ) {
    deleteStudent(input: $input, condition: $condition) {
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
export const createSubject = /* GraphQL */ `
  mutation CreateSubject(
    $input: CreateSubjectInput!
    $condition: ModelSubjectConditionInput
  ) {
    createSubject(input: $input, condition: $condition) {
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
export const updateSubject = /* GraphQL */ `
  mutation UpdateSubject(
    $input: UpdateSubjectInput!
    $condition: ModelSubjectConditionInput
  ) {
    updateSubject(input: $input, condition: $condition) {
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
export const deleteSubject = /* GraphQL */ `
  mutation DeleteSubject(
    $input: DeleteSubjectInput!
    $condition: ModelSubjectConditionInput
  ) {
    deleteSubject(input: $input, condition: $condition) {
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
export const createBranchYear = /* GraphQL */ `
  mutation CreateBranchYear(
    $input: CreateBranchYearInput!
    $condition: ModelBranchYearConditionInput
  ) {
    createBranchYear(input: $input, condition: $condition) {
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
export const updateBranchYear = /* GraphQL */ `
  mutation UpdateBranchYear(
    $input: UpdateBranchYearInput!
    $condition: ModelBranchYearConditionInput
  ) {
    updateBranchYear(input: $input, condition: $condition) {
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
export const deleteBranchYear = /* GraphQL */ `
  mutation DeleteBranchYear(
    $input: DeleteBranchYearInput!
    $condition: ModelBranchYearConditionInput
  ) {
    deleteBranchYear(input: $input, condition: $condition) {
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
