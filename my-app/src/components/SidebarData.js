import React from "react"
import HomeIcon from '@mui/icons-material/Home';
import MailIcon from '@mui/icons-material/Mail';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import DashboardIcon from '@mui/icons-material/Dashboard';
import GroupIcon from '@mui/icons-material/Group';
import ImageSearchIcon from '@mui/icons-material/ImageSearch';


export const SidebarData=[
{
    title:"Home",
    icon:<HomeIcon />,
    link:"/home"
},
{
    title:"Mail",
    icon:<MailIcon />,
    link:"/mail"
},
{
    title:"Analytics",
    icon:<AnalyticsIcon />,
    link:"/analytics"
},
{
    title:"Dashboard",
    icon:<DashboardIcon />,
    link:"/dashboard"

},
{
    title:"Friends",
    icon:<GroupIcon />,
    link:"/group"
},
{
    title:"Images",
    icon:<ImageSearchIcon />,
    link:"/imagesearch"
    
},
]

export default SidebarData