import {iconNavbar} from "../interfaces/navbar-icon";

export const NavbarIcons: iconNavbar[] = [
  {
    iconId: 1,
    iconClass: 'icon-search',
    iconName: 'Tìm kiếm'
  },
  {
    iconId: 2,
    iconClass: 'icon-bell',
    iconName: 'Thông báo'
  },
  {
    iconId: 3,
    iconClass: 'icon-info',
    iconName: 'Trợ giúp'
  },
  {
    iconId: 4,
    iconClass: 'icon-detail',
    iconName: 'Cài đặt'
  }
]
export const NavbarDropdownIcons: iconNavbar[] = [
  {
    iconId: 0,
    iconClass: 'icon-add-department',
    iconName: 'Thêm phòng ban'
  },
  {
    iconId: 1,
    iconClass: 'icon-add-project',
    iconName: 'Thêm dự án/nhóm'
  }
]

export const NavbarTexts =
  {
    Edit: "Tùy chỉnh",
    PersonalProject: "Tùy chỉnh",
    List: "Danh sách",
    Report: "Báo cáo",
    Add:"Thêm công việc"
  }
