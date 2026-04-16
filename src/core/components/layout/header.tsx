import React from "react";
import { Button, Col, Layout, Menu, Row } from "antd";
import { itemsHeaderMenu } from "../../router/itemHeaderMenu";
import { Link } from "react-router-dom";
const { Header } = Layout;
export default class MainHeader extends React.Component {

    render() {
        return (
            <Header>
                <Row align="middle">
                    <Col span={6}>
                        <div className="demo-logo" />
                    </Col>
                    <Col span={12} style={{ display: 'flex', justifyContent: 'center' }}>
                        <Menu
                            theme="dark"
                            mode="horizontal"
                            defaultSelectedKeys={['2']}
                            items={itemsHeaderMenu}
                        />
                    </Col>
                    <Col span={6} style={{ textAlign: 'right' }}>
                        <Link to="/login">
                            <Button type="primary">Đăng nhập</Button>
                        </Link>
                    </Col>
                </Row>
            </Header>
        )
    }
}