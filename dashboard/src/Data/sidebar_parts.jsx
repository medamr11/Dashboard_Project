import { MdAnalytics,MdHome,MdPeople,MdTask,MdSettings,MdHelp   } from "react-icons/md";
import { IoMdAlert } from "react-icons/io";



export  const firstdata =[
{
    id:1,
    label:"Home",
    icon:<MdHome size={20} />,
    path:'/Home'
},
{
    id:2,
    label:"Analytics",
    icon:<MdAnalytics size={20} />,
    path:'/Analytics'
},
{
    id:3,
    label:"Clients",
    icon:<MdPeople size={20} />,
    path:'/Clients'
},
{
    id:4,
    label:"Tasks",
    icon:<MdTask size={20} />,
    path:'/Tasks/nini/ppp'
}
];

export const seconddata =[
    {
        id:1,
        label:"Settings",
        icon:<MdSettings  size={20} />,
        path:'/Settings'
    },
    {
        id:2,
        label:"About",
        icon:<IoMdAlert size={20} />,
        path:'/About'
    },
    {
        id:3,
        label:"Feedback",
        icon:<MdHelp  size={20} />,
        path:'/Feedback'
    }
]
