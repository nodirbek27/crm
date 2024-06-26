//Icons
import Analitika from "../assets/icons/analytics.svg?react";
import Lid from "../assets/icons/lid.svg?react"
import Finance from "../assets/icons/finance.svg?react"
import Students from "../assets/icons/student.svg?react"
import Groups from "../assets/icons/group.svg?react"
import Course from "../assets/icons/course.svg?react"
import HR from "../assets/icons/hr.svg?react"
import Settings from "../assets/icons/setting.svg?react"

//Components
import Generics from "../view/Generics";

const sidebar = [
  {
    id: 1,
    title: "Analitika",
    path: "/analitika",
    icon: Analitika,
    isPrivate: true,
    element: Generics,
    role: ["admin"],
  },
  {
    id: 2,
    title: "Lidlar",
    path: "/lidlar",
    icon: Lid,
    isPrivate: true,
    element: Generics,
    role: ["admin"],
    children: [
      {
        id: `2-1`,
        title: "Barcha lidlar",
        path: "/lidlar/all-lids",
        isPrivate: true,
        element: Generics,
        role: ["admin", "manager"],
      },
      {
        id: `2-2`,
        title: "Birinchi dars",
        path: "/lidlar/first-class",
        isPrivate: true,
        element: Generics,
        role: ["admin", "manager"],
      },
      {
        id: `2-3`,
        title: "Yangi talabalar lidlar",
        path: "/lidlar/new-students",
        isPrivate: true,
        element: Generics,
        role: ["admin", "manager"],
      },
    ],
  },
  {
    id: 3,
    title: "Moliya",
    path: "/moliya",
    icon: Finance,
    isPrivate: true,
    element: Generics,
    role: ["admin"],
  },
  {
    id: 4,
    title: "Talabalar",
    path: "/talabalar",
    icon: Students,
    isPrivate: true,
    element: Generics,
    role: ["admin", "mentor", "manager"],
    children: [
        {
            id: `4-1`,
            title: "Barcha talabalar",
            path: "/talabalar/all-talabalar",
            isPrivate: true,
            element: Generics,
            role: ["admin", "manager"],
          },
          {
            id: `4-2`,
            title: "Davomat",
            path: "/talabalar/davomat",
            isPrivate: true,
            element: Generics,
            role: ["admin", "manager"],
          },
          {
            id: `4-3`,
            title: "Active",
            path: "/talabalar/active",
            isPrivate: true,
            element: Generics,
            role: ["admin", "manager"],
          },
          {
            id: `4-4`,
            title: "Arxiv",
            path: "/talabalar/archive",
            isPrivate: true,
            element: Generics,
            role: ["admin", "manager"],
          },
          {
            id: `4-5`,
            title: "Ota-onalar",
            path: "/talabalar/parents",
            isPrivate: true,
            element: Generics,
            role: ["admin", "manager"],
          },
    ]
  },
  {
    id: 5,
    title: "Guruhlar",
    path: "/guruhlar",
    icon: Groups,
    isPrivate: true,
    element: Generics,
    role: ["admin", "mentor", "manager"],
    children: [
        {
            id: `5-1`,
            title: "Guruhlar",
            path: "/guruhlar/guruhlar",
            isPrivate: true,
            element: Generics,
            role: ["admin", "manager"],
          },
          {
            id: `5-2`,
            title: "Dars jadvali",
            path: "/guruhlar/jadval",
            isPrivate: true,
            element: Generics,
            role: ["admin", "manager"],
          },
          {
            id: `5-3`,
            title: "Xonalar",
            path: "/guruhlar/xonalar",
            isPrivate: true,
            element: Generics,
            role: ["admin", "manager"],
          },
    ]
  },
  {
    id: 6,
    title: "Kurslar",
    path: "/kurslar",
    icon: Course,
    isPrivate: true,
    element: Generics,
    role: ["admin", "mentor", "manager"],
    children: [
        {
            id: `6-1`,
            title: "Barcha kurslar",
            path: "/kurslar/all-kurslar",
            isPrivate: true,
            element: Generics,
            role: ["admin", "manager"],
          },
          {
            id: `6-2`,
            title: "Yo'nalishlar",
            path: "/kurslar/yonalish",
            isPrivate: true,
            element: Generics,
            role: ["admin", "manager"],
          },
    ]
  },
  {
    id: 7,
    title: "Hr",
    path: "/hr",
    icon: HR,
    isPrivate: true,
    element: Generics,
    role: ["admin", "manager"],
    children: [
        {
            id: `7-1`,
            title: "Ro'llar",
            path: "/hr/role",
            isPrivate: true,
            element: Generics,
            role: ["admin", "manager"],
          },
          {
            id: `7-2`,
            title: "Hodimlar",
            path: "/hr/hodimlar",
            isPrivate: true,
            element: Generics,
            role: ["admin", "manager"],
          },
    ]
  },
  {
    id: 8,
    title: "Sozlamalar",
    path: "/sozlamalar",
    icon: Settings,
    isPrivate: true,
    element: Generics,
    role: ["admin", "manager"],
    children: [
        {
            id: `8-1`,
            title: "Umumiy sozlamalar",
            path: "/sozlamalar/umumiy",
            isPrivate: true,
            element: Generics,
            role: ["admin", "manager"],
          },
          {
            id: `8-2`,
            title: "Manager",
            path: "/sozlamalar/manager",
            isPrivate: true,
            element: Generics,
            role: ["admin", "manager"],
          },
          {
            id: `8-3`,
            title: "Mentor",
            path: "/sozlamalar/mentor",
            isPrivate: true,
            element: Generics,
            role: ["admin", "manager"],
          },
          {
            id: `8-4`,
            title: "Talaba",
            path: "/sozlamalar/talaba",
            isPrivate: true,
            element: Generics,
            role: ["admin", "manager"],
          },
    ]
  },
];

export default sidebar;