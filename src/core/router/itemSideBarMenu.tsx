import type { MenuProps } from "antd";
import { CreditCardOutlined, NotificationOutlined, TableOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";

export const itemSideBarMenu: MenuProps['items'] = [
    {
        key: '1',
        icon: <CreditCardOutlined />,
        label: <Link to='/NewManagement' >Quản lí tin tuyển dụng</Link>,
           
    },
    {
        key: '2',
        icon: <TableOutlined />,
        label: <Link to='/CompanyProfile' >Đăng kí doanh nghiệp</Link>
    },
    {
        key: '3',
        icon: <NotificationOutlined />,
        label: 'nav 3'
    },

];