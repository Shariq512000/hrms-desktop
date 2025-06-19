import React from "react";
import BirthdayCard from "../../../component/dashboard/birthday-card";
import NewHiresCard from "../../../component/dashboard/NewHiresCard";
import FavoritesCard from "../../../component/dashboard/FavoritesCard";
import MyFilesCard from "../../../component/dashboard/MyFilesCard";
import AnnouncementsCard from "../../../component/dashboard/AnnouncementsCard";
import LeaveReportCard from "../../../component/dashboard/LeaveReportCard";
import PendingTaskStatus from "../../../component/dashboard/PendingTaskStatus";
import EmployeeEngagements from "../../../component/dashboard/EmployeeEngagements";
import { Helmet } from "react-helmet";

export default function Dashboard() {
  return (
    <>
      <Helmet>
        <title>My Space | Dashboard</title>
      </Helmet>
      <div className="mainBody">
        <div className="dashboard-grid">
          <BirthdayCard />
          <NewHiresCard />
          <FavoritesCard />
          <MyFilesCard />
          <AnnouncementsCard />
          <LeaveReportCard />
          <PendingTaskStatus />
          <EmployeeEngagements />
        </div>
      </div>
    </>
  )
}