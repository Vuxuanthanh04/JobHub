import type { MenuProps } from "antd";
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';

export const itemSideBarMenu: MenuProps['items'] = [
    {
        key: '1',
        icon: <UserOutlined />,
        label: 'nav 1',
        children: [
            {
                key: 'sub1-1',
                label: 'option1',
            },
        ]
    },
    {
        key: '2',
        icon: <LaptopOutlined />,
        label: 'nav 2'
    },
    {
        key: '3',
        icon: <NotificationOutlined />,
        label: 'nav 3'
    },
];