import Login from "./features/auth/Login";
import HomePageParent from "./features/parent/HomePageParent";
import ChooseRole from "./features/role/ChooseRole";
import HomePageStudent from "./features/student/HomePageStudent";
import HomePageTeacher from "./features/teacher/HomePageTeacher";


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
  teacherProfile: {
    path: "/teacher/profile",
    component: (props) => injectProps(props, HomePageTeacher),
    title: "teacherProfile",
    description: "Teacher Profile Page",
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
    category: "teacherProfile",
    to: routes.teacherProfile.path,
    name: routes.teacherProfile.title,
    key: "teacherProfile",
  },
];
