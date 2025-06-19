import React from 'react'
import UserSquareIcon from '../../../component/icons/user-square';
import Umbrella3Icon from '../../../component/icons/umbrella3';
import CalendarIcon from '../../../component/icons/calendar';
import ClockPlusIcon from '../../../component/icons/clock-plus';
import Trophy1Icon from '../../../component/icons/trophy-1';
import BookmarkCheckIcon from '../../../component/icons/bookmark-check';
import FolderIcon from '../../../component/icons/folder';
import Dataflow3Icon from '../../../component/icons/dataflow-3';
import FileCheck3Icon from '../../../component/icons/file-check-3';
import LayerTwo1Icon from '../../../component/icons/layer-two-1';
import LetterSpacing1Icon from '../../../component/icons/letter-spacing-1';
import CoinsStacked2Icon from '../../../component/icons/coins-stacked-2';

const listing = [
    { icon: <UserSquareIcon />, icon_background: '#FEF4E5', icon_forground: '#D02533', label: "Onboarding" },
    { icon: <Umbrella3Icon />, icon_background: '#EFFBFF', icon_forground: '#D02533', label: "Time Off" },
    { icon: <CalendarIcon />, icon_background: '#FDF1EC', icon_forground: '#D02533', label: "Attendance" },
    { icon: <ClockPlusIcon />, icon_background: '#FEF7E6', icon_forground: '#D02533', label: "Timesheet" },
    { icon: <Trophy1Icon />, icon_background: '#F4F8EB', icon_forground: '#D02533', label: "Performance" },
    { icon: <BookmarkCheckIcon />, icon_background: '#EEF4FF', icon_forground: '#D02533', label: "LMS" },
    { icon: <FolderIcon />, icon_background: '#EFFBFF', icon_forground: '#D02533', label: "Files" },
    { icon: <Dataflow3Icon />, icon_background: '#FAEAF3', icon_forground: '#D02533', label: "Employee Engagement" },
    { icon: <FileCheck3Icon />, icon_background: 'rgba(251, 55, 72, 0.10)', icon_forground: '#D02533', label: "HR Help Desk" },
    { icon: <LetterSpacing1Icon />, icon_background: '#FDF1EC', icon_forground: '#D02533', label: "HR Letters" },
    { icon: <LayerTwo1Icon />, icon_background: '#FFF6E2', icon_forground: '#FF8447', label: "Tasks" },
    { icon: <CoinsStacked2Icon />, icon_background: '#EFFBFF', icon_forground: '#D02533', label: "Compensation" },
];

const OrganizationOverviewService = () => {
    return (
        <div className="orgOverLocation-grid">
            {listing.map((item) => (
                <div className="orgOverLocation-items" key={item.label}>
                    <span className="icon" style={{ backgroundColor: (item?.icon_background) ? item?.icon_background : '', color: (item?.icon_forground) ? item?.icon_forground : '' }}>{item.icon}</span>
                    <span className="label">{item.label}</span>
                </div>
            ))}
        </div>
    )
}

export default OrganizationOverviewService
