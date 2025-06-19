import BankIcon from "../component/icons/bank"
import BarChart11Icon from "../component/icons/bar-chart-11"
import FileSearch2Icon from "../component/icons/file-search-2"
import GroupUserIcon from "../component/icons/groupUser"
import Umbrella3Icon from "../component/icons/umbrella3"
import UserIcon from "../component/icons/user"

// TOP HEADER NAV
export const topHeaderNav = [
    { name: 'My Space', icon: <UserIcon />, url : '/my-space', activeKey: "my-space" },
    { name: 'Team', icon: <GroupUserIcon />, url : '/team', activeKey: "team" },
    { name: 'Organization', icon: <BankIcon />, url : '/organization', activeKey: "organization" },
]

// REPORTEES TOP NAV
export const reporteesTopHeaderNav = [
    { name: 'My Reports', icon: <FileSearch2Icon />, url : '/report', activeKey: "report" },
    { name: 'Team Reports', icon: <BankIcon />, url : '', activeKey: "team" },
    { name: 'Organization Reports', icon: <BankIcon />, url : '', activeKey: "organization" },
    { name: 'Analytics', icon: <BarChart11Icon />, url : '/report/analytics', activeKey: "report-analytics" },
    { name: 'Schedulers', icon: <BarChart11Icon />, url : '', activeKey: "report-schedulers" },
]

// BOTTOM HEADER NAV
// FOR MY SPACE
export const mySpaceBottomNav = [
    {name: "Overview", url: "", activeKey: "overview"},
    {name: "Dashboard", url: "dashboard", activeKey: "dashboard"},
    {name: "Calendar", url: "calander", activeKey: "calander"},
    {name: "System Details", url: "system", activeKey: "system"}
]

// FOR TEAM
export const teamBottomNav = [
    { name: "Team Space", url: "", activeKey: "space" },
    { name: "Reportees", url: "reportees", activeKey: "reportees"},
    { name: "Team List", url: "list", activeKey: "list"},
    { name: "HR Process", url: "", activeKey: "process"},
    { name: "Approvals", url: "approvals", activeKey: "approvals"},
]

// FOR ORGANIZATION
export const organizationBottomNav = [
    { name: "Overview", url: "", activeKey: "overview"},
    { name: "Announcements", url: "announcements", activeKey: "announcements"},
    { name: "Policies", url: "policies", activeKey: "policies"},
    { name: "Employee Tree", url: "employee-tree", activeKey: "employee-tree"},
    { name: "Department Tree", url: "department-tree", activeKey: "department-tree"},
    { name: "Department Directory", url: "department-directory", activeKey: "department-directory"},
    { name: "Birthday Folks", url: "birthday-folks", activeKey: "birthday-folks"},
    { name: "New Hires", url: "new-hires", activeKey: "new-hires"},
    { name: "Calendar", url: "calender", activeKey: "calender"},
]

// LEAVE PAGE
export const leaveTopHeader = [
    { name: 'My Data', icon: <FileSearch2Icon />, url : '/leave', activeKey: "my-data"},
    { name: 'Team', icon: <GroupUserIcon />, url : '/leave/team', activeKey: "team"},
    { name: 'Holidays', icon: <Umbrella3Icon />, url : '/leave/holiday', activeKey: "holiday"},
]

export const leaveBottomHeader = [
    { name: "Leave Summary", url: "/leave", activeKey: "summary"},
    { name: "Leave Balance", url: "balance", activeKey: "balance"},
    { name: "Leave Requests", url: "request", activeKey: "request"},
    { name: "Shift", url: "shift", activeKey: "shift"},
]


// FOR ORGANIZATION
export const settingBottomNav = [
    { name: "Setting 1", url: "/setting", activeKey: "setting1"},
    { name: "Setting 2", url: "", activeKey: "setting2"},
]

// TOP HEADER NAV
export const settingtopHeaderNav = [
    { name: 'Setting', icon: <UserIcon />, url : '/setting', activeKey: "setting" },
]