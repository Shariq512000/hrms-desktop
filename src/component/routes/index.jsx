import { Navigate, Route, Routes } from 'react-router';
import Leave from '../../pages/leave';
import LeaveSummary from '../../pages/leave/summary';
// MY SPACE
import Overview from '../../pages/my-space/overview';
import Dashboard from '../../pages/my-space/dashboard';
import Calendar from '../../pages/my-space/calender';

// TEAM
import TeamMainPage from '../../pages/team/profile/main-page';
import TeamSpace from '../../pages/team/space';
import TeamReportees from '../../pages/team/reportees';
import TeamList from '../../pages/team/list';
import TeamApprovals from '../../pages/team/approvals';

// ORGANIZATION
import OrganizationNewHires from '../../pages/organization/new-hires';
import OrganizationOverview from '../../pages/organization/overview';
import OrganizationPolicies from '../../pages/organization/policies';
import OrganizationEmployeeTree from '../../pages/organization/employee-tree';
import OrganizationDepartmentTree from '../../pages/organization/department-tree';
import OrganizationDepartmentDirectory from '../../pages/organization/department-directory';
import OrganizationBirthdayFolks from '../../pages/organization/birthday-folks';
import OrganizationAnnouncements from '../../pages/organization/announcements';
import OrganizationCalender from '../../pages/organization/calender';
import LeaveRequest from '../../pages/leave/leave-request';
import LeaveShift from '../../pages/leave/leave-shift';
import LeaveBalance from '../../pages/leave/leave-balance';
import LeaveShiftDetail from '../../pages/leave/leave-shift-detail';
import LeaveShiftCalender from '../../pages/leave/leave-shift-calender';
import MySpaceMainPage from '../../pages/my-space';
import TeamMainPageLayout from '../../pages/team';
import OrganizationMainPage from '../../pages/organization';
import LeaveMainPage from '../../pages/leave/main-page';
import SettingMain from '../../pages/setting';
import SettingLocation from '../../pages/setting/location';
import MyReport from '../../pages/report/my-report';
import ReportAnalytics from '../../pages/report/analytics';
import PopupUI from '../../pages/popup-ui';
import SystemDetail from '../../pages/system';

const CustomRoutes = () => {
  return (
    <Routes>
      {/* MY SPACE ROUTE */}
      <Route path='/my-space' element={<MySpaceMainPage />} >
        <Route path='' element={<Overview />} />
        <Route path='dashboard' element={<Dashboard />} />
        <Route path='calander' element={<Calendar />} />
        <Route path='system' element={<SystemDetail />} />
        <Route path="*" element={<Navigate to="/my-space" replace />} />
      </Route>

      {/* MY TEAM ROUTE */}
      <Route path='/team' element={<TeamMainPageLayout />} >
        <Route path='' element={<TeamSpace />} />
        <Route path='reportees' element={<TeamReportees />} />
        <Route path='list' element={<TeamList />} />
        <Route path='approvals' element={<TeamApprovals />} />
        <Route path='profile' element={<TeamMainPage />} />
        <Route path="*" element={<Navigate to="/team" replace />} />
      </Route>

      {/* ORGANIZTION ROUTE */}
      <Route path='/organization' element={<OrganizationMainPage />} >
        <Route path='' element={<OrganizationOverview />} />
        <Route path='announcements' element={<OrganizationAnnouncements />} />
        <Route path='policies' element={<OrganizationPolicies />} />
        <Route path='employee-tree' element={<OrganizationEmployeeTree />} />
        <Route path='department-tree' element={<OrganizationEmployeeTree />} />
        {/* <Route path='department-tree' element={<OrganizationDepartmentTree />} /> */}
        <Route path='department-directory' element={<OrganizationDepartmentDirectory />} />
        <Route path='birthday-folks' element={<OrganizationBirthdayFolks />} />
        <Route path='new-hires' element={<OrganizationNewHires />} />
        <Route path='calender' element={<OrganizationCalender />} />
        <Route path="*" element={<Navigate to="/organization" replace />} />
      </Route>

      {/* LEAVE */}
      <Route path='/leave' element={<LeaveMainPage />}>
        <Route path='' element={<Leave />} />
        <Route path='team' element={<Leave />} />
        <Route path='holiday' element={<Leave />} />
        <Route path='shift-calender' element={<LeaveShiftCalender />} />
        <Route path='shift-detail' element={<LeaveShiftDetail />} />

        <Route path='request' element={<LeaveRequest />}>
          <Route path='' element={<LeaveRequest />} />
          <Route path='team' element={<LeaveRequest />} />
          <Route path='holiday' element={<LeaveRequest />} />
        </Route>

        <Route path='shift' element={<LeaveShift />}>
          <Route path='' element={<LeaveShift />} />
          <Route path='team' element={<LeaveShift />} />
          <Route path='holiday' element={<LeaveShift />} />
        </Route>

        <Route path='balance' element={<LeaveBalance />}>
          <Route path='' element={<LeaveBalance />} />
          <Route path='team' element={<LeaveBalance />} />
          <Route path='holiday' element={<LeaveBalance />} />
        </Route>
        <Route path='*' element={<Navigate to={'/leave'} />} />
      </Route>

      {/* SETTING */}
      <Route path='/setting' element={<SettingMain />} />
      <Route path='/setting/location' element={<SettingLocation />} />

      {/* REPORTS */}
      <Route path='/report' element={<MyReport />} />
        {/* <Route path='' element={<MyReport />} /> */}
        {/* <Route path='*' element={<Navigate to="/report" replace />} /> */}
      {/* </Route> */}
      <Route path='/report/analytics' element={<ReportAnalytics />} />

      <Route path='/popup-ui' element={<PopupUI />} />

      <Route path='*' element={<Navigate to={'/my-space'} />} />
    </Routes>
  )
}

export default CustomRoutes;
