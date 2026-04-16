import { Content } from "antd/es/layout/layout";
import React from "react";
import { Outlet } from "react-router-dom";
import { appconst } from "../../lib/appconst";

export default class ContentLayout extends React.Component {
    render() {
        return (
            <Content
                style={{
                    padding: 24,
                    margin: 0,
                    minHeight: 280,
                    background: appconst.colorBgContainer,
                    borderRadius: appconst.borderRadiusLG,
                }}
            >
                <Outlet />
            </Content>
        )
    }
}