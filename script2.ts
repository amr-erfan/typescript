//Partial
//Required
//Record
//Pick and Omit
//Nonnullable
//ReturnType
//Parameters
//Awaited

//partial

type StudentData = {
  name: string;
  address: string;
  grade: number;
  verified?: boolean;
};

let student1: StudentData = {
  name: "amr",
  address: "alex",
  grade: 20,
  verified: true,
};

let student2: StudentData = {
  name: "alaa",
  address: "cairo",
  grade: 30,
  verified: true,
};

let updateData1: Partial<StudentData> = {
  grade: 40,
};
let updateData2: Required<StudentData> = {
  name: "mahmoud",
  address: "delta",
  grade: 40,
  verified: false,
};

let updateStudent1 = (
  student: StudentData,
  data: Partial<StudentData>
): StudentData => {
  return { ...student, ...data };
};
let updateStudent2 = (
  student: StudentData,
  data: Required<StudentData>
): StudentData => {
  return { ...student, ...data };
};

console.log(updateStudent1(student1, updateData1));
console.log(updateStudent2(student2, updateData2));

//Record

let student4: Record<string, string | number | boolean> = {
  name: "adel",
  address: "tanta",
  grade: 20,
  verified: true,
};

type students = "adel" | "mahmoud";
type grades = 30 | 50;
type grades2 = {
  assign1: number;
  assign2: number;
};

let finalGrades: Record<students, grades> = {
  adel: 30,
  mahmoud: 50,
};
let finalGrades2: Record<students, grades2> = {
  adel: { assign1: 15, assign2: 30 },
  mahmoud: { assign1: 40, assign2: 50 },
};

//Pick and Omit

type newStudent = Pick<StudentData, "name" | "grade">;
type newStudent2 = Omit<StudentData, "verified" | "address">;

let student5: newStudent = {
  name: "ali",
  grade: 30,
};

let student6: newStudent2 = {
  name: "karim",
  grade: 10,
};

//Nonnullable
type values = "amr" | "alaa" | null | undefined;
type namesOnly = NonNullable<values>;

//ReturnType

type newType = ReturnType<typeof updateStudent2>;

//Parameters
type myType = Parameters<typeof updateStudent2>;

let myArr: myType = [student1, updateData2];

//Awaited

type User = {
  id: number;
  name: string;
  username: string;
  email: string;
};

let fetchUsers = async (): Promise<User[]> => {
  let myData = await fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .catch((err) => {
      if (err instanceof Error) console.log(err.message);
    });

  return myData;
};

type myFetchData = Awaited<ReturnType<typeof fetchUsers>>;
