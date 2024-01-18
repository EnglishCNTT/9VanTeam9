import Login from "./features/auth/Login";
import HomePageParent from "./features/parent/HomePageParent";
import ChooseRole from "./features/role/ChooseRole";
import HomePageStudent from "./features/student/HomePageStudent";
import ClassPageTeacher from "./features/teacher/ClassPageTeacher";
import HomePageTeacher from "./features/teacher/HomePageTeacher";
import ListStudentPage from "./features/teacher/ListStudentPage";
import StudentProfile from "./features/student/StudentProfile";
import StudentExam from "./features/student/StudentExam";
import ParentProfile from "./features/parent/ParentProfile";
import TeacherProfile from "./features/teacher/TeacherProfile";
import TeacherExercise from "./features/teacher/TeacherExercise";
import TeacherTopic from "./features/teacher/TeacherTopic";
import StudentTopic from "./features/student/StudentTopic";

const injectProps = (props, Component) => {
  return <Component {...props} />;
};

export const routes = {
  chooserole: {
    path: "/role",
    component: (props) => injectProps(props, ChooseRole),
    title: "role",
    description: "Choose Role Page",
  },
  login: {
    path: "/",
    component: (props) => injectProps(props, Login),
    title: "login",
    description: "Login Page",
  },
  studentHomePage: {
    path: "/student",
    component: (props) => injectProps(props, HomePageStudent),
    title: "studentHomePage",
    description: "Student Home Page",
  },
  studentClassPage: {
    path: "/student/class",
    component: (props) => injectProps(props, HomePageStudent),
    title: "studentClassPage",
    description: "Student Class Page",
  },
  parentHomePage: {
    path: "/parent",
    component: (props) => injectProps(props, HomePageParent),
    title: "parentHomePage",
    description: "Parent Home Page",
  },
  teacherHomePage: {
    path: "/teacher",
    component: (props) => injectProps(props, HomePageTeacher),
    title: "teacherHomePage",
    description: "Teacher Home Page",
  },
  teacherClassPage: {
    path: "/teacher/class",
    component: (props) => injectProps(props, ClassPageTeacher),
    title: "teacherClassPage",
    description: "Teacher Class Page",
  },
  teacherListStudentPage: {
    path: "/teacher/class/liststudent",
    component: (props) => injectProps(props, ListStudentPage),
    title: "teacherListStudentPage",
    description: "Teacher List Student Page",
  },
  teacherProfile: {
    path: "/teacher/profile",
    component: (props) => injectProps(props, TeacherProfile),
    title: "teacherProfile",
    description: "Teacher Profile Page",
  },
  studentProfile: {
    path: "/student/profile",
    component: (props) => injectProps(props, StudentProfile),
    title: "studentProfile",
    description: "Student Profile Page",
  },
  studentExam: {
    path: "/student/exercise",
    component: (props) => injectProps(props, StudentExam),
    title: "studentExam",
    description: "Student Exam Page",
  },
  parentProfile: {
    path: "/parent/profile",
    component: (props) => injectProps(props, ParentProfile),
    title: "parentProfile",
    description: "Parent Profile Page",
  },
  teacherExam: {
    path: "/teacher/exercise",
    component: (props) => injectProps(props, TeacherExercise),
    title: "teacherExam",
    description: "Teacher Exam Page",
  },
  teacherTopic: {
    path: "/teacher/topic",
    component: (props) => injectProps(props, TeacherTopic),
    title: "teacherTopic",
    description: "Teacher Topic Page",
  },
  studentTopic: {
    path: "/student/topic",
    component: (props) => injectProps(props, StudentTopic),
    title: "studentTopic",
    description: "Student Topic Page",
  },
};

export const paths = [
  {
    category: "role",
    to: routes.chooserole.path,
    name: routes.chooserole.title,
    key: "role",
  },
  {
    category: "login",
    to: routes.login.path,
    name: routes.login.title,
    key: "login",
  },
  {
    category: "studentHomePage",
    to: routes.studentHomePage.path,
    name: routes.studentHomePage.title,
    key: "studentHomePage",
  },
  {
    category: "parentHomePage",
    to: routes.parentHomePage.path,
    name: routes.parentHomePage.title,
    key: "parentHomePage",
  },
  {
    category: "teacherHomePage",
    to: routes.teacherHomePage.path,
    name: routes.teacherHomePage.title,
    key: "teacherHomePage",
  },
  {
    category: "teacherClassPage",
    to: routes.teacherClassPage.path,
    name: routes.teacherClassPage.title,
    key: "teacherClassPage",
  },
  {
    category: "teacherListStudentPage",
    to: routes.teacherListStudentPage.path,
    name: routes.teacherListStudentPage.title,
    key: "teacherListStudentPage",
  },
  {
    category: "teacherProfile",
    to: routes.teacherProfile.path,
    name: routes.teacherProfile.title,
    key: "teacherProfile",
  },
  {
    category: "studentProfile",
    to: routes.studentProfile.path,
    name: routes.studentProfile.title,
    key: "studentProfile",
  },
  {
    category: "studentExam",
    to: routes.studentExam.path,
    name: routes.studentExam.title,
    key: "studentExam",
  },
  {
    category: "parentProfile",
    to: routes.parentProfile.path,
    name: routes.parentProfile.title,
    key: "parentProfile",
  },
  {
    category: "teacherExam",
    to: routes.teacherExam.path,
    name: routes.teacherExam.title,
    key: "teacherExam",
  },
  {
    category: "teacherTopic",
    to: routes.teacherTopic.path,
    name: routes.teacherTopic.title,
    key: "teacherTopic",
  },
  {
    category: "studentTopic",
    to: routes.studentTopic.path,
    name: routes.studentTopic.title,
    key: "studentTopic",
  },
];
