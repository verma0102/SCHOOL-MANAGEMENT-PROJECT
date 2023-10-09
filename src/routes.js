
// import Dashboard from "views/Dashboard";
import Purpose from "views/Purpose";
import AddCome from "views/AddCome";
import Promoted from "views/Promoted";
import OnlineList from "views/OnlineList";
import ExamList from "views/ExamList";
import GradeList from "views/GradeList";

import AddLeave from "views/AddLeave";
import DesignMarkSheet from "views/DesignMarkSheet";
import TablePayment from "views/TablePayment";
import FeesDetails from "views/FeesDetails";
import AddExpense from "views/AddExpense";
import StudentCriteria from "views/StudentCriteria";
import StudentDetail from "views/StudentDetail";

import AddSchool from "views/AddSchool";
import StudentForm from "views/StudentForm";
import Teacher from "views/Teacher";
import Criteria from "views/Criteria";
import Form from "views/Form";
import AddVisitor from "views/AddVisitor";
import CallLog from "views/CallLog";
import Simple from "views/Simple";
import AddMark from "views/AddMark";
// import Icons from "views/Icons";
import AdmitCard from "views/AdmitCard";
import AddComplain from "views/AddComplain";
import AdmissionForm from "views/AdmissionForm";
import PostalDispatch from "views/PostalDispatch";

import SubjectList from "views/SubjectList";
import SubjectGroup from "views/SubjectGroup";
import StaffIdCard from "views/StaffIdCard";
import StudentList from "views/StudentList";
import AdmissionList from "views/AdmissionList";
import Category from "views/Category";
import DisableReason from "views/DisableReason";
import FeesMaster from "views/FeesMaster";
import ExpenseHead from "views/ExpenseHead";
import ExamGroup from "views/ExamGroup"
import AddFees from "views/AddFees";
// import Notifications from "views/Notifications";
// import UserProfile from "views/UserProfile";
// import Rtl from "views/Rtl.js";
// import TableList from "views/TableList";
import SchoolModel from "views/SchoolModel";
import MarksDivision from "views/MarksDivision";
import ExamGradeList from "views/ExamGradeList";
import ExamGroup1 from "views/ExamGroup1";
import SelectCriteria from "views/SelectCriteria";
import OnlineExam from "views/OnlineExam";
import MarksGrade from "views/MarksGrade";
import AddFeesGroup from "views/AddFeesGroup";
import Feesforward from "views/FeesForward";
import FeesReminder from "views/FeesReminder";
import AssignIncident from "views/AssignIncident";
import IncomeList from "views/IncomeList";
import ExamSchedule from "views/ExamSchedule";
import PrintMarksheet from "views/PrintMarksheet";
import ObservationList from "views/ObservationList";
import AssessmentList from "views/AssessmentList";
import SearchExpense from "views/SearchExpense";
import PrintAdminCard from 'views/PrintAdminCard';
import ClassTable from "views/ClassTable";
import TeacherTable from "views/TeacherTable";
import Section from "views/Section";
import CopyLesson from "views/CopyLesson";
import ManageLesson from 'views/ManageLesson';
import ManageSyllabus from 'views/ManageSyllabus';
import Topic from "views/Topic";
import StaffDirectory from "views/StaffDirectory";
import StaffAttendance from "views/StaffAttendance";
import Payrol from "views/Payrol";
import ApproveLeave from "views/ApproveLeave";
import ApplyLeave from "views/ApplyLeave";
import LeaveType from "views/LeaveType";
import TeacherRating from "views/TeacherRating";
import Department from 'views/Department';
import Designation from 'views/Designation';
import DisableStaff from 'views/DisableStaff';
import Homework from 'views/Homework';
import DailyAssigment from 'views/DailyAssignment';
import BookList from 'views/BookList';
import IssueReturn from 'views/IssueReturn';
import StaffMember from 'views/StaffMember';
import AddStudent from 'views/AddStudent';
import IssueItem from 'views/IssueItem';
import ItemStock from 'views/ItemStock';
import AddItem from 'views/AddItem';
import ItemCategory from 'views/ItemCategory';
import ItemStore from 'views/ItemStore';
import ItemSupplier from 'views/ItemSupplier';
import StudentCertificate from 'views/StudentCertificate';
import GenerateCertificate from 'views/GenerateCertificate';
import StudentCard from 'views/StudentCard';
import GererateCard from 'views/GererateCard';
import AddStaff from "views/AddStaff";
import GenerateStaff from 'views/GenerateStaff';
import PickupPoint from 'views/PickupPoint';
import Vehicles from 'views/Vehicles';
import Routes from 'views/Routes';
import AssignVehicle from 'views/AssignVehicle';
import RoutePickup from 'views/RoutePickup';
import StudentTransport from 'views/StudentTransport';
import HostelRoom from 'views/HostelRoom';
import RoomType from 'views/RoomType';
import Hostel from 'views/Hostel';
var routes = [
  // FrontOffice
  {
    path: "/admission-form",
    name: "Admission Form",
    rtlName: "لوحة القيادة",
    icon: "tim-icons icon-atom",
    component: <AdmissionForm />,
    layout: "/admin",

  },

  {
    path: "/AddVisitor",
    name: "ADD-VISITOR",
    rtlName: "لوحة القيادة",
    icon: "tim-icons icon-atom",
    component: <AddVisitor />,
    layout: "/admin",
  },
  {
    path: "/CallLog",
    name: "Call-Log",
    rtlName: "لوحة القيادة",
    icon: "tim-icons icon-atom",
    component: <CallLog />,
    layout: "/admin",
  },

  {
    path: "/postal-dispatch",
    name: "Postal Dispatch",
    rtlName: "لوحة القيادة",
    icon: "tim-icons icon-atom",
    component: <PostalDispatch />,
    layout: "/admin",
  },

  {
    path: "/AddComplain",
    name: "ADD-COMPLAIN",
    rtlName: "لوحة القيادة",
    icon: "tim-icons icon-atom",
    component: <AddComplain />,
    layout: "/admin",
  },

  // CBSE Examination

  {
    path: "/ExamList",
    name: "EXAM-LIST",
    rtlName: "قائمة الجدول",
    icon: "tim-icons icon-atom",
    component: <ExamList />,
    layout: "/admin",
  },

  {
    path: "/ExamSchedule",
    name: "Exam-schedule",
    rtlName: "قائمة الجدول",
    icon: "tim-icons icon-atom",
    component: <ExamSchedule />,
    layout: "/admin",
  },


  {
    path: "/PrintMarksheet",
    name: "Print-Marksheet",
    rtlName: "قائمة الجدول",
    icon: "tim-icons icon-atom",
    component: <PrintMarksheet />,
    layout: "/admin",
  },


  {
    path: "/exam-gradelist",
    name: "Exam GradeList",
    rtlName: "إخطارات",
    icon: "tim-icons icon-bell-55",
    component: <ExamGradeList />,
    layout: "/admin",
  },

  {
    path: "/ObservationList",
    name: "Observation-List",
    rtlName: "قائمة الجدول",
    icon: "tim-icons icon-atom",
    component: <ObservationList />,
    layout: "/admin",
  },


  {
    path: "/AssessmentList",
    name: "Assessment-List",
    rtlName: "قائمة الجدول",
    icon: "tim-icons icon-atom",
    component: <AssessmentList />,
    layout: "/admin",
  },


  //Lesson Plan

  {
    path: "/CopyLesson",
    name: "Copy-Lesson",
    rtlName: "قائمة الجدول",
    icon: "tim-icons icon-atom",
    component: <CopyLesson />,
    layout: "/admin",
  },

  {
    path: "/ManageLesson",
    name: "Manage-Lesson",
    rtlName: "قائمة الجدول",
    icon: "tim-icons icon-atom",
    component: <ManageLesson />,
    layout: "/admin",

  },


  {
    path: "/ManageSyllabus",
    name: "Manage-Syllabus",
    rtlName: "قائمة الجدول",
    icon: "tim-icons icon-atom",
    component: <ManageSyllabus />,
    layout: "/admin",

  },


  {
    path: "/Topic",
    name: "Topic",
    rtlName: "قائمة الجدول",
    icon: "tim-icons icon-atom",
    component: <Topic />,
    layout: "/admin",

  },

  // Academics


  {
    path: "/ClassTable",
    name: "Class-Table",
    rtlName: "قائمة الجدول",
    icon: "tim-icons icon-atom",
    component: <ClassTable />,
    layout: "/admin",

  },

  {
    path: "/TeacherTable",
    name: "Teacher-Table",
    rtlName: "قائمة الجدول",
    icon: "tim-icons icon-atom",
    component: <TeacherTable />,
    layout: "/admin",
  },

  {
    path: "/Teacher",
    name: "TEACHER",
    rtlName: "لوحة القيادة",
    icon: "tim-icons icon-atom",
    component: <Teacher />,
    layout: "/admin",
  },

  {
    path: "/Section",
    name: "Section",
    rtlName: "قائمة الجدول",
    icon: "tim-icons icon-atom",
    component: <Section />,
    layout: "/admin",
  },


  {
    path: "/subject-group",
    name: "Subject Group",
    rtlName: "لوحة القيادة",
    icon: "tim-icons icon-atom",
    component: <SubjectGroup />,
    layout: "/admin",
  },

  {
    path: "/SubjectList",
    name: "SUBJECT-LIST",
    rtlName: "لوحة القيادة",
    icon: "tim-icons icon-atom",
    component: <SubjectList />,
    layout: "/admin",
  },
  {
    path: "/Promoted",
    name: "PROMOTED",
    rtlName: "قائمة الجدول",
    icon: "tim-icons icon-atom",
    component: <Promoted />,
    layout: "/admin",
  },

  {
    path: "/select-criteria",
    name: "Select Criteria",
    rtlName: "إخطارات",
    icon: "tim-icons icon-bell-55",
    component: <SelectCriteria />,
    layout: "/admin",
  },

  // Student Information

  {
    path: "/StudentForm",
    name: "STUDENT-FORM",
    rtlName: "لوحة القيادة",
    icon: "tim-icons icon-atom",
    component: <StudentForm />,
    layout: "/admin",
  },

  {
    path: "/Form",
    name: "Form",
    rtlName: "لوحة القيادة",
    icon: "tim-icons icon-atom",
    component: <Form />,
    layout: "/admin",
  },

  {
    path: "/StudentCriteria",
    name: "Student-Criteria",
    rtlName: "لوحة القيادة",
    icon: "tim-icons icon-atom",
    component: <StudentCriteria />,
    layout: "/admin",
  },

  {
    path: "/StudentDetail",
    name: "Student-Detail",
    rtlName: "لوحة القيادة",
    icon: "tim-icons icon-atom",
    component: <StudentDetail />,
    layout: "/admin",
  },

  {
    path: "/student-list",
    name: "Student List",
    rtlName: "لوحة القيادة",
    icon: "tim-icons icon-atom",
    component: <StudentList />,
    layout: "/admin",
  },

  {
    path: "/disable-reason",
    name: "Disable Reason",
    rtlName: "لوحة القيادة",
    icon: "tim-icons icon-atom",
    component: <DisableReason />,
    layout: "/admin",
  },

  {
    path: "/category",
    name: "Category",
    rtlName: "لوحة القيادة",
    icon: "tim-icons icon-atom",
    component: <Category />,
    layout: "/admin",
  },


  {
    path: "/Criteria",
    name: "Criteria",
    rtlName: "لوحة القيادة",
    icon: "tim-icons icon-atom",
    component: <Criteria />,
    layout: "/admin",
  },

  {
    path: "/Simple",
    name: "Simple",
    rtlName: "لوحة القيادة",
    icon: "tim-icons icon-atom",
    component: <Simple />,
    layout: "/admin",
  },

  // Certificate

  {
    path: "/StudentCertificate",
    name: "Student-Certificate",
    rtlName: "لوحة القيادة",
    icon: "tim-icons icon-atom",
    component: <StudentCertificate />,
    layout: "/admin",
  },

  {
    path: "/GenerateCertificate",
    name: "Generate-Certificate",
    rtlName: "لوحة القيادة",
    icon: "tim-icons icon-atom",
    component: <GenerateCertificate />,
    layout: "/admin",
  },


  {
    path: "/StudentCard",
    name: "Student-Card",
    rtlName: "لوحة القيادة",
    icon: "tim-icons icon-atom",
    component: <StudentCard />,
    layout: "/admin",
  },


  {
    path: "/GererateCard",
    name: "Gererate-Card",
    rtlName: "لوحة القيادة",
    icon: "tim-icons icon-atom",
    component: <GererateCard />,
    layout: "/admin",
  },


  {
    path: "/AddStaff",
    name: "Add-Staff",
    rtlName: "لوحة القيادة",
    icon: "tim-icons icon-atom",
    component: <AddStaff />,
    layout: "/admin",

  },


  {
    path: "/GenerateStaff",
    name: "Generate-Staff",
    rtlName: "لوحة القيادة",
    icon: "tim-icons icon-atom",
    component: <GenerateStaff />,
    layout: "/admin",

  },

  // Human rescorse

  {
    path: "/staff-id",
    name: "Staff Id",
    rtlName: "لوحة القيادة",
    icon: "tim-icons icon-atom",
    component: <StaffIdCard />,
    layout: "/admin",
  },

  {
    path: "/AddCome",
    name: "ADD-COME",
    rtlName: "قائمة الجدول",
    icon: "tim-icons icon-atom",
    component: <AddCome />,
    layout: "/admin",
  },

  {
    path: "/GradeList",
    name: "Grade-List",
    rtlName: "قائمة الجدول",
    icon: "tim-icons icon-atom",
    component: <GradeList />,
    layout: "/admin",
  },

  {
    path: "/AddLeave",
    name: "ADD-LEAVE",
    rtlName: "قائمة الجدول",
    icon: "tim-icons icon-atom",
    component: <AddLeave />,
    layout: "/admin",
  },


  {
    path: "/SchoolModel",
    name: "SCHOOL-MODAL",
    rtlName: "قائمة الجدول",
    icon: "tim-icons icon-atom",
    component: <SchoolModel />,
    layout: "/admin",
  },

  {
    path: "/AddExpense",
    name: "Add-Expense",
    rtlName: "قائمة الجدول",
    icon: "tim-icons icon-atom",
    component: <AddExpense />,
    layout: "/admin",
  },

  {
    path: "/TablePayment",
    name: "TABLE-PAYMENT",
    rtlName: "لوحة القيادة",
    icon: "tim-icons icon-atom",
    component: <TablePayment />,
    layout: "/admin",
  },

  {
    path: "/AddSchool",
    name: "ADD-SCHOOL",
    rtlName: "لوحة القيادة",
    icon: "tim-icons icon-atom",
    component: <AddSchool />,
    layout: "/admin",
  },

  {
    path: "/AdmitCard",
    name: "ADMIT-CARD",
    rtlName: "لوحة القيادة",
    icon: "tim-icons icon-atom",
    component: <AdmitCard />,
    layout: "/admin",
  },

  {
    path: "/AddMark",
    name: "ADD-MARK",
    rtlName: "لوحة القيادة",
    icon: "tim-icons icon-atom",
    component: <AddMark />,
    layout: "/admin",
  },


  {
    path: "/StaffDirectory",
    name: "Staff-Directory",
    rtlName: "لوحة القيادة",
    icon: "tim-icons icon-atom",
    component: <StaffDirectory />,
    layout: "/admin",
  },

  {
    path: "/StaffAttendance",
    name: "Staff-Attendance",
    rtlName: "لوحة القيادة",
    icon: "tim-icons icon-atom",
    component: <StaffAttendance />,
    layout: "/admin",
  },

  {
    path: "/Payrol",
    name: "Payrol",
    rtlName: "لوحة القيادة",
    icon: "tim-icons icon-atom",
    component: <Payrol />,
    layout: "/admin",
  },

  {
    path: "/ApproveLeave",
    name: "Approve-Leave",
    rtlName: "لوحة القيادة",
    icon: "tim-icons icon-atom",
    component: <ApproveLeave />,
    layout: "/admin",
  },


  {
    path: "/ApplyLeave",
    name: "Apply-Leave",
    rtlName: "لوحة القيادة",
    icon: "tim-icons icon-atom",
    component: <ApplyLeave />,
    layout: "/admin",
  },


  {
    path: "/LeaveType",
    name: "Leave-Type",
    rtlName: "لوحة القيادة",
    icon: "tim-icons icon-atom",
    component: <LeaveType />,
    layout: "/admin",
  },

  {
    path: "/TeacherRating",
    name: "Teacher-Rating",
    rtlName: "لوحة القيادة",
    icon: "tim-icons icon-atom",
    component: <TeacherRating />,
    layout: "/admin",
  },


  {
    path: "/Department",
    name: "Department",
    rtlName: "لوحة القيادة",
    icon: "tim-icons icon-atom",
    component: <Department />,
    layout: "/admin",
  },


  {
    path: "/Designation",
    name: "Designation",
    rtlName: "لوحة القيادة",
    icon: "tim-icons icon-atom",
    component: <Designation />,
    layout: "/admin",
  },


  {
    path: "/DisableStaff",
    name: "DisableStaff",
    rtlName: "لوحة القيادة",
    icon: "tim-icons icon-atom",
    component: <DisableStaff />,
    layout: "/admin",
  },

  // Fees collection


  {
    path: "/feesForward",
    name: "Fees-forward",
    rtlName: "لوحة القيادة",
    icon: "tim-icons icon-atom",
    component: <Feesforward />,
    layout: "/admin",
  },

  {
    path: "/FeesReminder",
    name: "Fees-Reminder",
    rtlName: "لوحة القيادة",
    icon: "tim-icons icon-atom",
    component: <FeesReminder />,
    layout: "/admin",
  },


  {
    path: "/add-fees-group",
    name: "Add Fees Group",
    rtlName: "إخطارات",
    icon: "tim-icons icon-bell-55",
    component: <AddFeesGroup />,
    layout: "/admin",
  },

  {
    path: "/AddFees",
    name: "ADD-FEES",
    rtlName: "لوحة القيادة",
    icon: "tim-icons icon-atom",
    component: <AddFees />,
    layout: "/admin",
  },

  {
    path: "/FeesDetails",
    name: "Fees- Details",
    rtlName: "قائمة الجدول",
    icon: "tim-icons icon-atom",
    component: <FeesDetails />,
    layout: "/admin",
  },

  {
    path: "/expense-head",
    name: "Expense Head",
    rtlName: "لوحة القيادة",
    icon: "tim-icons icon-atom",
    component: <ExpenseHead />,
    layout: "/admin",
  },

  {
    path: "/exam-group",
    name: "Exam Group",
    rtlName: "لوحة القيادة",
    icon: "tim-icons icon-atom",
    component: <ExamGroup />,
    layout: "/admin",
  },
  {
    path: "/marks-division",
    name: "Marks Division",
    rtlName: "إخطارات",
    icon: "tim-icons icon-bell-55",
    component: <MarksDivision />,
    layout: "/admin",
  },
  {
    path: "/mark-grade",
    name: "Marks Grade",
    rtlName: "إخطارات",
    icon: "tim-icons icon-bell-55",
    component: <MarksGrade />,
    layout: "/admin",
  },


  {
    path: "/exam-group1",
    name: "Exam Group 1",
    rtlName: "إخطارات",
    icon: "tim-icons icon-bell-55",
    component: <ExamGroup1 />,
    layout: "/admin",
  },

  {
    path: "/MarksDivision",
    name: "MarksDivision",
    rtlName: "إخطارات",
    icon: "tim-icons icon-bell-55",
    component: <MarksDivision />,
    layout: "/admin",
  },


  {
    path: "/admission-list",
    name: "Admission List",
    rtlName: "لوحة القيادة",
    icon: "tim-icons icon-atom",
    component: <AdmissionList />,
    layout: "/admin",
  },


  // Behaviour Records

  {
    path: "/AssignIncident",
    name: "Assign-Incident",
    rtlName: "الرموز",
    icon: "tim-icons icon-atom",
    component: <AssignIncident />,
    layout: "/admin",
  },


  // IncomeList

  {
    path: "/IncomeList",
    name: "Income-List",
    rtlName: "الرموز",
    icon: "tim-icons icon-atom",
    component: <IncomeList />,
    layout: "/admin",
  },


  // Expense List

  {
    path: "/AddExpense",
    name: "Add-Expense",
    rtlName: "قائمة الجدول",
    icon: "tim-icons icon-atom",
    component: <AddExpense />,
    layout: "/admin",
  },

  {
    path: "/SearchExpense",
    name: "Search-Expense",
    rtlName: "قائمة الجدول",
    icon: "tim-icons icon-atom",
    component: <SearchExpense />,
    layout: "/admin",
  },

  {
    path: "/PrintAdminCard",
    name: "Print-AdminCard",
    rtlName: "قائمة الجدول",
    icon: "tim-icons icon-atom",
    component: <PrintAdminCard />,
    layout: "/admin",
  },

  {
    path: "/DesignMarkSheet",
    name: "DESIGM-MARKSHEET",
    rtlName: "قائمة الجدول",
    icon: "tim-icons icon-atom",
    component: <DesignMarkSheet />,
    layout: "/admin",
  },


  // Homework

  {
    path: "/Homework",
    name: "Homework",
    rtlName: "قائمة الجدول",
    icon: "tim-icons icon-atom",
    component: <Homework />,
    layout: "/admin",
  },

  {
    path: "/DailyAssigment",
    name: "Daily-Assigment",
    rtlName: "قائمة الجدول",
    icon: "tim-icons icon-atom",
    component: <DailyAssigment />,
    layout: "/admin",
  },

  // Library

  {
    path: "/BookList",
    name: "BookList",
    rtlName: "قائمة الجدول",
    icon: "tim-icons icon-atom",
    component: <BookList />,
    layout: "/admin",
  },

  {
    path: "/IssueReturn",
    name: "Issue-Return",
    rtlName: "قائمة الجدول",
    icon: "tim-icons icon-atom",
    component: <IssueReturn />,
    layout: "/admin",
  },


  {
    path: "/AddStudent",
    name: "Add-Student",
    rtlName: "قائمة الجدول",
    icon: "tim-icons icon-atom",
    component: <AddStudent />,
    layout: "/admin",
  },

  {
    path: "/StaffMember",
    name: "Staff-Member",
    rtlName: "قائمة الجدول",
    icon: "tim-icons icon-atom",
    component: <StaffMember />,
    layout: "/admin",
  },


  //Inventory


  {
    path: "/IssueItem",
    name: "Issue-Item",
    rtlName: "قائمة الجدول",
    icon: "tim-icons icon-atom",
    component: <IssueItem />,
    layout: "/admin",
  },

  {
    path: "/ItemStock",
    name: "Item-Stock",
    rtlName: "قائمة الجدول",
    icon: "tim-icons icon-atom",
    component: <ItemStock />,
    layout: "/admin",
  },

  {
    path: "/AddItem",
    name: "Add-Item",
    rtlName: "قائمة الجدول",
    icon: "tim-icons icon-atom",
    component: <AddItem />,
    layout: "/admin",
  },


  {
    path: "/ItemCategory",
    name: "Item-Category",
    rtlName: "قائمة الجدول",
    icon: "tim-icons icon-atom",
    component: < ItemCategory />,
    layout: "/admin",
  },

  {
    path: "/ItemStore",
    name: "Item-Store",
    rtlName: "قائمة الجدول",
    icon: "tim-icons icon-atom",
    component: < ItemStore />,
    layout: "/admin",
  },

  {
    path: "/ItemSupplier",
    name: "Item-Supplier",
    rtlName: "قائمة الجدول",
    icon: "tim-icons icon-atom",
    component: < ItemSupplier />,
    layout: "/admin",
  },

  // Transport

  {
    path: "/FeesMaster",
    name: "Fees-Master",
    rtlName: "قائمة الجدول",
    icon: "tim-icons icon-atom",
    component: < FeesMaster />,
    layout: "/admin",
  },

  {
    path: "/PickupPoint",
    name: "Pickup-Point",
    rtlName: "قائمة الجدول",
    icon: "tim-icons icon-atom",
    component: < PickupPoint />,
    layout: "/admin",
  },

  {
    path: "/Routes",
    name: "Routes",
    rtlName: "قائمة الجدول",
    icon: "tim-icons icon-atom",
    component: < Routes />,
    layout: "/admin",
  },

  {
    path: "/Vehicles",
    name: "Vehicles",
    rtlName: "قائمة الجدول",
    icon: "tim-icons icon-atom",
    component: < Vehicles />,
    layout: "/admin",
  },



  {
    path: "/AssignVehicle",
    name: "Assign-Vehicle",
    rtlName: "قائمة الجدول",
    icon: "tim-icons icon-atom",
    component: <AssignVehicle />,
    layout: "/admin",
  },


  {
    path: "/RoutePickup",
    name: "Route-Pickup",
    rtlName: "قائمة الجدول",
    icon: "tim-icons icon-atom",
    component: <RoutePickup />,
    layout: "/admin",
  },

  {
    path: "/StudentTransport",
    name: "Student-Transport",
    rtlName: "قائمة الجدول",
    icon: "tim-icons icon-atom",
    component: <StudentTransport />,
    layout: "/admin",
  },

  // Hostel

  {
    path: "/HostelRoom",
    name: "Hostel-Room",
    rtlName: "قائمة الجدول",
    icon: "tim-icons icon-atom",
    component: <HostelRoom />,
    layout: "/admin",
  },

  {
    path: "/RoomType",
    name: "Room-Type",
    rtlName: "قائمة الجدول",
    icon: "tim-icons icon-atom",
    component: <RoomType />,
    layout: "/admin",
  },

  {
    path: "/Hostel",
    name: "Hostel",
    rtlName: "قائمة الجدول",
    icon: "tim-icons icon-atom",
    component: <Hostel />,
    layout: "/admin",
  },

  ///////////
  {
    path: "/OnlineList",
    name: "ONLINE-LIST",
    rtlName: "قائمة الجدول",
    icon: "tim-icons icon-atom",
    component: <OnlineList />,
    layout: "/admin",
  },

  {
    path: "/Purpose",
    name: "PURPOSE",
    rtlName: "إخطارات",
    icon: "tim-icons icon-atom",
    component: <Purpose />,
    layout: "/admin",
  },


  {
    path: "/online-exam",
    name: "Online Exam",
    rtlName: "إخطارات",
    icon: "tim-icons icon-atom",
    component: <OnlineExam />,
    layout: "/admin",
  },


  // {
  //   path: "/icons",
  //   name: "Icons",
  //   rtlName: "الرموز",
  //   icon: "tim-icons icon-atom",
  //   component: <Icons />,
  //   layout: "/admin",
  // },


  // {
  //   path: "/dashboard",
  //   name: "Dashboard",
  //   rtlName: "لوحة القيادة",
  //   icon: "tim-icons icon-chart-pie-36",
  //   component: <Dashboard />,
  //   layout: "/admin",
  // },

  // {
  //   path: "/tables",
  //   name: "Table-List",
  //   rtlName: "قائمة الجدول",
  //   icon: "tim-icons icon-puzzle-10",
  //   component: <TableList />,
  //   layout: "/admin",
  // },

  // {
  //   path: "/notifications",
  //   name: "Notifications",
  //   rtlName: "إخطارات",
  //   icon: "tim-icons icon-bell-55",
  //   component: <Notifications />,
  //   layout: "/admin",
  // },

  // {
  //   path: "/typography",
  //   name: "Typography",
  //   rtlName: "طباعة",
  //   icon: "tim-icons icon-align-center",
  //   component: <Typography />,
  //   layout: "/admin",
  // },
  // {
  //   path: "/rtl-support",
  //   name: "RTL Support",
  //   rtlName: "ار تي ال",
  //   icon: "tim-icons icon-world",
  //   component: <Rtl />,
  //   layout: "/rtl",
  // },
];
export default routes;
