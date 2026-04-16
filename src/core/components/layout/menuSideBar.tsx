import { Menu } from "antd";
import React from "react";
import Sider from "antd/es/layout/Sider";
import { appconst } from "../../lib/appconst";
import { itemSideBarMenu } from "../../router/itemSideBarMenu";

export default class MenuSideBar extends React.Component {
    render() {
        return (
            <Sider width={200} style={{ background: appconst.colorBgContainer }}>
                <Menu
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    style={{ height: '100%', borderInlineEnd: 0 }}
                    items={itemSideBarMenu}
                />
            </Sider>
        )
    }
}