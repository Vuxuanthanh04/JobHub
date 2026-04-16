import type { MenuProps } from "antd";
import { Link } from "react-router-dom";

export const itemsHeaderMenu: MenuProps['items'] = [
    {
        key: '1',
        label: <Link to="/">Home</Link>,
    },
    {
        key: '2',
        label: <Link to="/about">About</Link>,
    },
    {
        key: '3',
        label: <Link to="/contact">Contact</Link>,
    },
];