import { ClassSubject, Student, ClassStream, Score, Teacher, Assessment, AssessmentType, Grade } from './model';


export const HEROES: ClassSubject[] = [
  { id: 11, modified_on: new Date("2019-01-16"), created_on: new Date("2019-01-16"), name: 'Agriculture',
    modified_by: 'JIMMY', created_by: 'jimmy' , description: 'Science'},
  { id: 12, modified_on: new Date("2019-01-16"), created_on: new Date("2019-01-16"), name: 'Agriculture',
    modified_by: 'JIMMY', created_by: 'jimmy' , description: 'Science'},
  { id: 13, modified_on: new Date("2019-01-16"), created_on: new Date("2019-01-16"), name: 'Agriculture',
  modified_by: 'JIMMY', created_by: 'jimmy' , description: 'Science'},
  { id: 14, modified_on: new Date("2019-01-16"), created_on: new Date("2019-01-16"), name: 'Agriculture',
  modified_by: 'JIMMY', created_by: 'jimmy' , description: 'Science'},
  { id: 15, modified_on: new Date("2019-01-16"), created_on: new Date("2019-01-16"), name: 'Agriculture',
  modified_by: 'JIMMY', created_by: 'jimmy' , description: 'Science'},
  { id: 16, modified_on: new Date("2019-01-16"), created_on: new Date("2019-01-16"), name: 'Agriculture',
  modified_by: 'JIMMY', created_by: 'jimmy' , description: 'Science'},
  { id: 17, modified_on: new Date("2019-01-16"), created_on: new Date("2019-01-16"), name: 'Agriculture',
  modified_by: 'JIMMY', created_by: 'jimmy' , description: 'Science'},
  { id: 18, modified_on: new Date("2019-01-16"), created_on: new Date("2019-01-16"), name: 'Agriculture',
  modified_by: 'JIMMY', created_by: 'jimmy' , description: 'Science'},
  { id: 19,modified_on: new Date("2019-01-16"), created_on: new Date("2019-01-16"), name: 'Agriculture',
  modified_by: 'JIMMY', created_by: 'jimmy' , description: 'Science'},
  { id: 20, modified_on: new Date("2019-01-16"), created_on: new Date("2019-01-16"), name: 'Agriculture',
  modified_by: 'JIMMY', created_by: 'jimmy' , description: 'Science'}
];




export const STUDENTS: Student[] = [
    { id: 1, modified_on: new Date("2019-01-16"), created_on: new Date("2019-01-16"), 
    modified_by: 'JIMMY', created_by: 'jimmy',  firstName: 'Agriculture',
    lastName: 'Agriculture', otherName: 'Agriculture', gender: 'Male', student_admission_no: 'JCH002'},
    { id: 2, modified_on: new Date("2019-01-16"), created_on: new Date("2019-01-16"), 
    modified_by: 'JIMMY', created_by: 'jimmy',  firstName: 'Agriculture',
    lastName: 'Agriculture', otherName: 'Agriculture', gender: 'Male', student_admission_no: 'JCH002'},
    { id: 3, modified_on: new Date("2019-01-16"), created_on: new Date("2019-01-16"), 
    modified_by: 'JIMMY', created_by: 'jimmy',  firstName: 'Agriculture',
    lastName: 'Agriculture', otherName: 'Agriculture', gender: 'Male', student_admission_no: 'JCH002'},
    { id: 4, modified_on: new Date("2019-01-16"), created_on: new Date("2019-01-16"), 
    modified_by: 'JIMMY', created_by: 'jimmy',  firstName: 'Agriculture',
    lastName: 'Agriculture', otherName: 'Agriculture', gender: 'Male', student_admission_no: 'JCH002'},
    { id: 5, modified_on: new Date("2019-01-16"), created_on: new Date("2019-01-16"), 
    modified_by: 'JIMMY', created_by: 'jimmy',  firstName: 'Agriculture',
    lastName: 'Agriculture', otherName: 'Agriculture', gender: 'Male', student_admission_no: 'JCH002'},
    { id: 6, modified_on: new Date("2019-01-16"), created_on: new Date("2019-01-16"), 
    modified_by: 'JIMMY', created_by: 'jimmy',  firstName: 'Agriculture',
    lastName: 'Agriculture', otherName: 'Agriculture', gender: 'Male', student_admission_no: 'JCH002'},
    { id: 7, modified_on: new Date("2019-01-16"), created_on: new Date("2019-01-16"), 
    modified_by: 'JIMMY', created_by: 'jimmy',  firstName: 'Agriculture',
    lastName: 'Agriculture', otherName: 'Agriculture', gender: 'Male', student_admission_no: 'JCH002'},
    { id: 8, modified_on: new Date("2019-01-16"), created_on: new Date("2019-01-16"), 
    modified_by: 'JIMMY', created_by: 'jimmy',  firstName: 'Agriculture',
    lastName: 'Agriculture', otherName: 'Agriculture', gender: 'Male', student_admission_no: 'JCH002'},
    { id: 9, modified_on: new Date("2019-01-16"), created_on: new Date("2019-01-16"), 
    modified_by: 'JIMMY', created_by: 'jimmy',  firstName: 'Agriculture',
    lastName: 'Agriculture', otherName: 'Agriculture', gender: 'Male', student_admission_no: 'JCH002'}
  ];
  
  export const STUDENT: Student = { id: 9, modified_on: new Date("2019-01-16"), created_on: new Date("2019-01-16"), 
  modified_by: 'JIMMY', created_by: 'jimmy',  firstName: 'Agriculture',
  lastName: 'Agriculture', otherName: 'Agriculture', gender: 'Male', student_admission_no: 'JCH002'};

  export const TEACHERS: Teacher[] = [
    { id: 1, modified_on: new Date("2019-01-16"), created_on: new Date("2019-01-16"), 
    modified_by: 'JIMMY', created_by: 'jimmy',  firstName: 'Teacher',
    lastName: 'Agriculture', otherName: 'Agriculture', gender: 'Male', teacher_number: 'TSC-021'},
    { id: 2, modified_on: new Date("2019-01-16"), created_on: new Date("2019-01-16"), 
    modified_by: 'JIMMY', created_by: 'jimmy',  firstName: 'Teacher',
    lastName: 'Teacher', otherName: 'Teacher', gender: 'Male', teacher_number: 'TSC-021'},
    { id: 3, modified_on: new Date("2019-01-16"), created_on: new Date("2019-01-16"), 
    modified_by: 'JIMMY', created_by: 'jimmy',  firstName: 'Teacher',
    lastName: 'Teacher', otherName: 'Teacher', gender: 'Male', teacher_number: 'TSC-021'},
    { id: 4, modified_on: new Date("2019-01-16"), created_on: new Date("2019-01-16"), 
    modified_by: 'JIMMY', created_by: 'jimmy',  firstName: 'Teacher',
    lastName: 'Teacher', otherName: 'Teacher', gender: 'Male', teacher_number: 'TSC-021'},
    { id: 5, modified_on: new Date("2019-01-16"), created_on: new Date("2019-01-16"), 
    modified_by: 'JIMMY', created_by: 'jimmy',  firstName: 'Teacher',
    lastName: 'Teacher', otherName: 'Teacher', gender: 'Male', teacher_number: 'TSC-021'},
    { id: 6, modified_on: new Date("2019-01-16"), created_on: new Date("2019-01-16"), 
    modified_by: 'JIMMY', created_by: 'jimmy',  firstName: 'Teacher',
    lastName: 'Teacher', otherName: 'Teacher', gender: 'Male', teacher_number: 'TSC-021'},
    { id: 7, modified_on: new Date("2019-01-16"), created_on: new Date("2019-01-16"), 
    modified_by: 'JIMMY', created_by: 'jimmy',  firstName: 'Teacher',
    lastName: 'Teacher', otherName: 'Teacher', gender: 'Male', teacher_number: 'TSC-021'},
    { id: 8, modified_on: new Date("2019-01-16"), created_on: new Date("2019-01-16"), 
    modified_by: 'JIMMY', created_by: 'jimmy',  firstName: 'Teacher',
    lastName: 'Teacher', otherName: 'Teacher', gender: 'Male', teacher_number: 'TSC-021'},
    { id: 9, modified_on: new Date("2019-01-16"), created_on: new Date("2019-01-16"), 
    modified_by: 'JIMMY', created_by: 'jimmy',  firstName: 'Teacher',
    lastName: 'Teacher', otherName: 'Teacher', gender: 'Male', teacher_number: 'TSC-021'}
  ];

  export const TEACHER: Teacher = { id: 9, modified_on: new Date("2019-01-16"), created_on: new Date("2019-01-16"), 
  modified_by: 'JIMMY', created_by: 'jimmy',  firstName: 'Teacher',
  lastName: 'Teacher', otherName: 'Teacher', gender: 'Male', teacher_number: 'TSC-021', username:""}

  export const GRADES: Grade[] = [
    { id: 1, modified_on: new Date("2019-01-16"), created_on: new Date("2019-01-16"), 
    modified_by: 'JIMMY', created_by: 'jimmy',  grade: '2', description: 'English Language'},
    { id: 2, modified_on: new Date("2019-01-16"), created_on: new Date("2019-01-16"), 
    modified_by: 'JIMMY', created_by: 'jimmy',  grade: '2', description: 'English Language'},
    { id: 3, modified_on: new Date("2019-01-16"), created_on: new Date("2019-01-16"), 
    modified_by: 'JIMMY', created_by: 'jimmy',  grade: '2', description: 'English Language'},
    { id: 4, modified_on: new Date("2019-01-16"), created_on: new Date("2019-01-16"), 
    modified_by: 'JIMMY', created_by: 'jimmy',  grade: '2',  description: 'English Language'},
    { id: 5, modified_on: new Date("2019-01-16"), created_on: new Date("2019-01-16"), 
    modified_by: 'JIMMY', created_by: 'jimmy',  grade: '2' , description: 'English Language'},
    { id: 6, modified_on: new Date("2019-01-16"), created_on: new Date("2019-01-16"), 
    modified_by: 'JIMMY', created_by: 'jimmy',  grade: '2', description: 'English Language'},
    { id: 7, modified_on: new Date("2019-01-16"), created_on: new Date("2019-01-16"), 
    modified_by: 'JIMMY', created_by: 'jimmy',  grade: '2', description: 'English Language'},
    { id: 8, modified_on: new Date("2019-01-16"), created_on: new Date("2019-01-16"), 
    modified_by: 'JIMMY', created_by: 'jimmy',  grade: '2', description: 'English Language'},
    { id: 9, modified_on: new Date("2019-01-16"), created_on: new Date("2019-01-16"), 
    modified_by: 'JIMMY', created_by: 'jimmy',  grade: '2', description: 'English Language'},
    { id: 10, modified_on: new Date("2019-01-16"), created_on: new Date("2019-01-16"), 
    modified_by: 'JIMMY', created_by: 'jimmy',  grade: '2' , description: 'English Language'}];

  export const GRADE: Grade = { id: 1, modified_on: new Date("2019-01-16"), created_on: new Date("2019-01-16"), 
  modified_by: 'JIMMY', created_by: 'jimmy',  grade: '2' , description: 'English Language'};




  export const CLASSES: ClassStream[] = [
    { id: 1, modified_on: new Date("2019-01-16"), created_on: new Date("2019-01-16"), 
    modified_by: 'JIMMY', created_by: 'jimmy',  className: 'Teacher',
    classGrade: 'Agriculture',  description: 'TSC-021'},
    { id: 2, modified_on: new Date("2019-01-16"), created_on: new Date("2019-01-16"), 
    modified_by: 'JIMMY', created_by: 'jimmy', className: 'Class A', classGrade: '4',  description: 'TSC-021'},
    { id: 3, modified_on: new Date("2019-01-16"), created_on: new Date("2019-01-16"), 
    modified_by: 'JIMMY', created_by: 'jimmy', students: {}, className: 'Class A', classGrade: '4',  description: 'TSC-021'},
    { id: 4, modified_on: new Date("2019-01-16"), created_on: new Date("2019-01-16"), 
    modified_by: 'JIMMY', created_by: 'jimmy', students: {}, className: 'Class A', classGrade: '4',  description: 'TSC-021'},
    { id: 5, modified_on: new Date("2019-01-16"), created_on: new Date("2019-01-16"), 
    modified_by: 'JIMMY', created_by: 'jimmy', students: {}, className: 'Class A', classGrade: '4',  description: 'TSC-021'},
    { id: 6, modified_on: new Date("2019-01-16"), created_on: new Date("2019-01-16"), 
    modified_by: 'JIMMY', created_by: 'jimmy', students: {}, className: 'Class A', classGrade: '4',  description: 'TSC-021'},
    { id: 7, modified_on: new Date("2019-01-16"), created_on: new Date("2019-01-16"), 
    modified_by: 'JIMMY', created_by: 'jimmy', students: {}, className: 'Class A', classGrade: '4',  description: 'TSC-021'},
    { id: 8, modified_on: new Date("2019-01-16"), created_on: new Date("2019-01-16"), 
    modified_by: 'JIMMY', created_by: 'jimmy', students: {}, className: 'Class A', classGrade: '4',  description: 'TSC-021'},
    { id: 9, modified_on: new Date("2019-01-16"), created_on: new Date("2019-01-16"), 
    modified_by: 'JIMMY', created_by: 'jimmy', students: {}, className: 'Class A', classGrade: '4',  description: 'TSC-021'}
  ];

  export const CLASSSTREAM: ClassStream = { id: 9, modified_on: new Date("2019-01-16"), created_on: new Date("2019-01-16"), 
  modified_by: 'JIMMY', created_by: 'jimmy', students: {}, className: 'Class A', classGrade: '4',  description: 'TSC-021'};

  export const SUBJECTS: ClassSubject[] = [
    { id: 1, modified_on: new Date("2019-01-16"), created_on: new Date("2019-01-16"), 
    modified_by: 'JIMMY', created_by: 'jimmy',  name: 'Englisk', description: 'English Language'},
    { id: 2, modified_on: new Date("2019-01-16"), created_on: new Date("2019-01-16"), 
    modified_by: 'JIMMY', created_by: 'jimmy',  name: 'Kiswahili', description: 'English Language'},
    { id: 3, modified_on: new Date("2019-01-16"), created_on: new Date("2019-01-16"), 
    modified_by: 'JIMMY', created_by: 'jimmy',  name: 'Composition', description: 'English Language'},
    { id: 4, modified_on: new Date("2019-01-16"), created_on: new Date("2019-01-16"), 
    modified_by: 'JIMMY', created_by: 'jimmy',  name: 'Insha', description: 'English Language'},
    { id: 5, modified_on: new Date("2019-01-16"), created_on: new Date("2019-01-16"), 
    modified_by: 'JIMMY', created_by: 'jimmy',  name: 'Science', description: 'English Language'},
    { id: 6, modified_on: new Date("2019-01-16"), created_on: new Date("2019-01-16"), 
    modified_by: 'JIMMY', created_by: 'jimmy',  name: 'Social Studies', description: 'English Language'},
    { id: 7, modified_on: new Date("2019-01-16"), created_on: new Date("2019-01-16"), 
    modified_by: 'JIMMY', created_by: 'jimmy',  name: 'CRE', description: 'English Language'},
    { id: 8, modified_on: new Date("2019-01-16"), created_on: new Date("2019-01-16"), 
    modified_by: 'JIMMY', created_by: 'jimmy',  name: 'PE', description: 'English Language'},
    { id: 9, modified_on: new Date("2019-01-16"), created_on: new Date("2019-01-16"), 
    modified_by: 'JIMMY', created_by: 'jimmy',  name: 'Practicals', description: 'English Language'},
    { id: 10, modified_on: new Date("2019-01-16"), created_on: new Date("2019-01-16"), 
    modified_by: 'JIMMY', created_by: 'jimmy',  name: 'Art', description: 'English Language'}];

  export const SUBJECT: ClassSubject = { id: 1, modified_on: new Date("2019-01-16"), created_on: new Date("2019-01-16"), 
  modified_by: 'JIMMY', created_by: 'jimmy',  name: 'Emglish', description: 'English Language'};




  export const ASSESSMENTTYPES: AssessmentType[] = [
    { id: 1, modified_on: new Date("2019-01-16"), created_on: new Date("2019-01-16"), 
    modified_by: 'JIMMY', created_by: 'jimmy',  name: 'Emglish'},
    { id: 1, modified_on: new Date("2019-01-16"), created_on: new Date("2019-01-16"), 
    modified_by: 'JIMMY', created_by: 'jimmy',  name: 'Emglish'},
    { id: 1, modified_on: new Date("2019-01-16"), created_on: new Date("2019-01-16"), 
    modified_by: 'JIMMY', created_by: 'jimmy',  name: 'Emglish'},
    { id: 1, modified_on: new Date("2019-01-16"), created_on: new Date("2019-01-16"), 
    modified_by: 'JIMMY', created_by: 'jimmy',  name: 'Emglish'},
    { id: 1, modified_on: new Date("2019-01-16"), created_on: new Date("2019-01-16"), 
    modified_by: 'JIMMY', created_by: 'jimmy',  name: 'Emglish'},
    { id: 1, modified_on: new Date("2019-01-16"), created_on: new Date("2019-01-16"), 
    modified_by: 'JIMMY', created_by: 'jimmy',  name: 'Emglish'},
    { id: 1, modified_on: new Date("2019-01-16"), created_on: new Date("2019-01-16"), 
    modified_by: 'JIMMY', created_by: 'jimmy',  name: 'Emglish'},
    { id: 1, modified_on: new Date("2019-01-16"), created_on: new Date("2019-01-16"), 
    modified_by: 'JIMMY', created_by: 'jimmy',  name: 'Emglish'},
    { id: 1, modified_on: new Date("2019-01-16"), created_on: new Date("2019-01-16"), 
    modified_by: 'JIMMY', created_by: 'jimmy',  name: 'Emglish'},
    { id: 1, modified_on: new Date("2019-01-16"), created_on: new Date("2019-01-16"), 
    modified_by: 'JIMMY', created_by: 'jimmy',  name: 'Emglish'}];

  export const ASSESSMENTTYPE: AssessmentType = { id: 1, modified_on: new Date("2019-01-16"), created_on: new Date("2019-01-16"), 
  modified_by: 'JIMMY', created_by: 'jimmy',  name: 'Emglish'};


  export const ASSESSMENTS: Assessment[] = [
    { id: 1, modified_on: new Date("2019-01-16"), created_on: new Date("2019-01-16"), 
    modified_by: 'JIMMY', created_by: 'jimmy',  startDate: new Date("2019-01-16"), endDate: new Date("2019-01-16"),
    assessmentType: 'Exam', year: '2021', term: '2', classStream: CLASSSTREAM, 
    subject:SUBJECT, description: 'Main Exam'},
    { id: 1, modified_on: new Date("2019-01-16"), created_on: new Date("2019-01-16"), 
    modified_by: 'JIMMY', created_by: 'jimmy',  startDate: new Date("2019-01-16"), endDate: new Date("2019-01-16"),
    assessmentType: 'Exam', year: '2021', term: '2', classStream: CLASSSTREAM, 
    subject:SUBJECT, description: 'Main Exam'},
    { id: 1, modified_on: new Date("2019-01-16"), created_on: new Date("2019-01-16"), 
    modified_by: 'JIMMY', created_by: 'jimmy',  startDate: new Date("2019-01-16"), endDate: new Date("2019-01-16"),
    assessmentType: 'Exam', year: '2021', term: '2', classStream: CLASSSTREAM, 
    subject:SUBJECT, description: 'Main Exam'},
    { id: 1, modified_on: new Date("2019-01-16"), created_on: new Date("2019-01-16"), 
    modified_by: 'JIMMY', created_by: 'jimmy',  startDate: new Date("2019-01-16"), endDate: new Date("2019-01-16"),
    assessmentType: 'Exam', year: '2021', term: '2', classStream: CLASSSTREAM, 
    subject:SUBJECT, description: 'Main Exam'},
    { id: 1, modified_on: new Date("2019-01-16"), created_on: new Date("2019-01-16"), 
    modified_by: 'JIMMY', created_by: 'jimmy',  startDate: new Date("2019-01-16"), endDate: new Date("2019-01-16"),
    assessmentType: 'Exam', year: '2021', term: '2', classStream: CLASSSTREAM, 
    subject:SUBJECT, description: 'Main Exam'},
    { id: 1, modified_on: new Date("2019-01-16"), created_on: new Date("2019-01-16"), 
    modified_by: 'JIMMY', created_by: 'jimmy',  startDate: new Date("2019-01-16"), endDate: new Date("2019-01-16"),
    assessmentType: 'Exam', year: '2021', term: '2', classStream: CLASSSTREAM, 
    subject:SUBJECT, description: 'Main Exam'},
    { id: 1, modified_on: new Date("2019-01-16"), created_on: new Date("2019-01-16"), 
    modified_by: 'JIMMY', created_by: 'jimmy',  startDate: new Date("2019-01-16"), endDate: new Date("2019-01-16"),
    assessmentType: 'Exam', year: '2021', term: '2', classStream: CLASSSTREAM, 
    subject:SUBJECT, description: 'Main Exam'}];

  export const ASSESSMENT: Assessment = { id: 1, modified_on: new Date("2019-01-16"), created_on: new Date("2019-01-16"), 
  modified_by: 'JIMMY', created_by: 'jimmy',  startDate: new Date("2019-01-16"), endDate: new Date("2019-01-16"),
  assessmentType: 'Exam', year: '2021', term: '2', classStream: CLASSSTREAM, 
  subject:SUBJECT, description: 'Main Exam'}
  

  export const SCORES: Score[] = [
    { id: 1, modified_on: new Date("2019-01-16"), created_on: new Date("2019-01-16"), 
    modified_by: 'JIMMY', created_by: 'jimmy',  student: STUDENT, assessment: ASSESSMENT, score: '70'},
    { id: 1, modified_on: new Date("2019-01-16"), created_on: new Date("2019-01-16"), 
    modified_by: 'JIMMY', created_by: 'jimmy',  student: STUDENT, assessment: ASSESSMENT, score: '70'},
    { id: 1, modified_on: new Date("2019-01-16"), created_on: new Date("2019-01-16"), 
    modified_by: 'JIMMY', created_by: 'jimmy',  student: STUDENT, assessment: ASSESSMENT, score: '70'},
    { id: 1, modified_on: new Date("2019-01-16"), created_on: new Date("2019-01-16"), 
    modified_by: 'JIMMY', created_by: 'jimmy',  student: STUDENT, assessment: ASSESSMENT, score: '70'},
    { id: 1, modified_on: new Date("2019-01-16"), created_on: new Date("2019-01-16"), 
    modified_by: 'JIMMY', created_by: 'jimmy',  student: STUDENT, assessment: ASSESSMENT, score: '70'},
    { id: 1, modified_on: new Date("2019-01-16"), created_on: new Date("2019-01-16"), 
    modified_by: 'JIMMY', created_by: 'jimmy',  student: STUDENT, assessment: ASSESSMENT, score: '70'},
    { id: 1, modified_on: new Date("2019-01-16"), created_on: new Date("2019-01-16"), 
    modified_by: 'JIMMY', created_by: 'jimmy',  student: STUDENT, assessment: ASSESSMENT, score: '70'},
    { id: 1, modified_on: new Date("2019-01-16"), created_on: new Date("2019-01-16"), 
    modified_by: 'JIMMY', created_by: 'jimmy',  student: STUDENT, assessment: ASSESSMENT, score: '70'},
    { id: 1, modified_on: new Date("2019-01-16"), created_on: new Date("2019-01-16"), 
    modified_by: 'JIMMY', created_by: 'jimmy',  student: STUDENT, assessment: ASSESSMENT, score: '70'},
    { id: 1, modified_on: new Date("2019-01-16"), created_on: new Date("2019-01-16"), 
    modified_by: 'JIMMY', created_by: 'jimmy',  student: STUDENT, assessment: ASSESSMENT, score: '70'}];

  export const SCORE: Score = { id: 1, modified_on: new Date("2019-01-16"), created_on: new Date("2019-01-16"), 
  modified_by: 'JIMMY', created_by: 'jimmy',  student: STUDENT, assessment: ASSESSMENT, score: '70'};

export class Order {
  constructor (OrderID: number,
    CustomerID: string,
    Freight: any,
    ShipCountry: string){

  } 
}




   export const data: Order[] = [
 
    { OrderID: 10248, CustomerID: 'VINET', Freight: 32.38, ShipCountry: 'France' },

    { OrderID: 10249, CustomerID: 'TOMSP', Freight: 11.61, ShipCountry: ' Germany' },

    { OrderID: 10250, CustomerID: 'HANAR', Freight: 65.83, ShipCountry: 'Brazil' },

    { OrderID: 10251, CustomerID: 'VICTE', Freight: 41.34, ShipCountry: 'France' },

    { OrderID: 10252, CustomerID: 'SUPRD', Freight: 51.3, ShipCountry: 'Belgium' },

    { OrderID: 10253, CustomerID: 'HANAR', Freight: 58.17, ShipCountry: 'Brazil' },

    { OrderID: 10254, CustomerID: 'CHOPS', Freight: 22.98, ShipCountry: 'Switzerland' },

    { OrderID: 10255, CustomerID: 'RICSU', Freight: 148.33, ShipCountry: 'Switzerland' },

    { OrderID: 10256, CustomerID: 'SUPRD', Freight: 13.97, ShipCountry: 'Brazil' },

    { OrderID: 10257, CustomerID: 'WELLI', Freight: 14.23, ShipCountry: 'Venezuela' },

    { OrderID: 10258, CustomerID: 'VICTE', Freight: 18.33, ShipCountry: 'France' },

    { OrderID: 10259, CustomerID: 'WELLI', Freight: 28.13, ShipCountry: 'Brazil' },

    { OrderID: 10260, CustomerID: 'CHOPS', Freight: 48.34, ShipCountry: 'Switzerland'  },

    { OrderID: 10261, CustomerID: 'SUPRD', Freight: 32.73, ShipCountry: ' Germany' },

    { OrderID: 10262, CustomerID: 'TOMSP', Freight: 12.31, ShipCountry: 'Switzerland' },

    { OrderID: 10263, CustomerID: 'VICTE', Freight: 23.77, ShipCountry: 'Brazil' },

    { OrderID: 10264, CustomerID: 'SUPRD', Freight: 43.47, ShipCountry: 'Venezuela' },

    { OrderID: 10265, CustomerID: 'CHOPS', Freight: 53.37, ShipCountry: 'Belgium' },

  ];

  export interface FinalExamScore {
    studentName: string,
    maths: number,
    engilish  : number,
    composition: number,
    lan1Total: number,
    kiswahili: number,
    insha: number,
    lan2Total  : number,
    science: number,
    socialStudies: number,
    cre: number,
    socialTotal  : number,
    totalMarks  : number,
    meanMarks  : number,
}


export const dataFinal: FinalExamScore[] = [
  { studentName: "string",   maths: 50,   engilish  : 50,   composition: 50,   lan1Total: 50,   kiswahili: 50, insha: 35,  lan2Total  : 50,   science: 50,   socialStudies: 50,   cre: 50,   socialTotal  : 50,   totalMarks  : 50,   meanMarks  : 50,},
  { studentName: "string",   maths: 50,   engilish  : 50,   composition: 50,   lan1Total: 50,   kiswahili: 50, insha: 35,  lan2Total  : 50,   science: 50,   socialStudies: 50,   cre: 50,   socialTotal  : 50,   totalMarks  : 50,   meanMarks  : 50,},
  { studentName: "string",   maths: 50,   engilish  : 50,   composition: 50,   lan1Total: 50,   kiswahili: 50, insha: 35,  lan2Total  : 50,   science: 50,   socialStudies: 50,   cre: 50,   socialTotal  : 50,   totalMarks  : 50,   meanMarks  : 50,},
  { studentName: "string",   maths: 50,   engilish  : 50,   composition: 50,   lan1Total: 50,   kiswahili: 50, insha: 35,  lan2Total  : 50,   science: 50,   socialStudies: 50,   cre: 50,   socialTotal  : 50,   totalMarks  : 50,   meanMarks  : 50,},
  { studentName: "string",   maths: 50,   engilish  : 50,   composition: 50,   lan1Total: 50,   kiswahili: 50, insha: 35,  lan2Total  : 50,   science: 50,   socialStudies: 50,   cre: 50,   socialTotal  : 50,   totalMarks  : 50,   meanMarks  : 50,},
  { studentName: "string",   maths: 50,   engilish  : 50,   composition: 50,   lan1Total: 50,   kiswahili: 50, insha: 35,  lan2Total  : 50,   science: 50,   socialStudies: 50,   cre: 50,   socialTotal  : 50,   totalMarks  : 50,   meanMarks  : 50,},
  { studentName: "string",   maths: 50,   engilish  : 50,   composition: 50,   lan1Total: 50,   kiswahili: 50, insha: 35,  lan2Total  : 50,   science: 50,   socialStudies: 50,   cre: 50,   socialTotal  : 50,   totalMarks  : 50,   meanMarks  : 50,},
  { studentName: "string",   maths: 50,   engilish  : 50,   composition: 50,   lan1Total: 50,   kiswahili: 50, insha: 35,  lan2Total  : 50,   science: 50,   socialStudies: 50,   cre: 50,   socialTotal  : 50,   totalMarks  : 50,   meanMarks  : 50,},
  { studentName: "string",   maths: 50,   engilish  : 50,   composition: 50,   lan1Total: 50,   kiswahili: 50, insha: 35,  lan2Total  : 50,   science: 50,   socialStudies: 50,   cre: 50,   socialTotal  : 50,   totalMarks  : 50,   meanMarks  : 50,},
  { studentName: "string",   maths: 50,   engilish  : 50,   composition: 50,   lan1Total: 50,   kiswahili: 50, insha: 35,  lan2Total  : 50,   science: 50,   socialStudies: 50,   cre: 50,   socialTotal  : 50,   totalMarks  : 50,   meanMarks  : 50,},
  { studentName: "string",   maths: 50,   engilish  : 50,   composition: 50,   lan1Total: 50,   kiswahili: 50, insha: 35,  lan2Total  : 50,   science: 50,   socialStudies: 50,   cre: 50,   socialTotal  : 50,   totalMarks  : 50,   meanMarks  : 50,},
  { studentName: "string",   maths: 50,   engilish  : 50,   composition: 50,   lan1Total: 50,   kiswahili: 50, insha: 35,  lan2Total  : 50,   science: 50,   socialStudies: 50,   cre: 50,   socialTotal  : 50,   totalMarks  : 50,   meanMarks  : 50,},
  { studentName: "string",   maths: 50,   engilish  : 50,   composition: 50,   lan1Total: 50,   kiswahili: 50, insha: 35,  lan2Total  : 50,   science: 50,   socialStudies: 50,   cre: 50,   socialTotal  : 50,   totalMarks  : 50,   meanMarks  : 50,},
  { studentName: "string",   maths: 50,   engilish  : 50,   composition: 50,   lan1Total: 50,   kiswahili: 50, insha: 35,  lan2Total  : 50,   science: 50,   socialStudies: 50,   cre: 50,   socialTotal  : 50,   totalMarks  : 50,   meanMarks  : 50,},
  { studentName: "string",   maths: 50,   engilish  : 50,   composition: 50,   lan1Total: 50,   kiswahili: 50, insha: 35,  lan2Total  : 50,   science: 50,   socialStudies: 50,   cre: 50,   socialTotal  : 50,   totalMarks  : 50,   meanMarks  : 50,},

]