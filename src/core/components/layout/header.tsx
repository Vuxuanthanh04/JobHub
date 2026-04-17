import React from "react";
import { Avatar, Button, Col, Layout, Menu, Row } from "antd";
import { itemsHeaderMenu } from "../../router/itemHeaderMenu";
import { Link } from "react-router-dom";
import { UserOutlined } from '@ant-design/icons';
const { Header } = Layout;
export default class MainHeader extends React.Component {
    token: string | null = localStorage.getItem("token")
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
                        {!this.token ?
                            <Link to="/login">
                                <Button type="primary">Đăng nhập</Button>
                            </Link>
                            :
                            <Avatar size={64} icon={<UserOutlined />} />
                        }
                    </Col>
                </Row>
            </Header>
        )
    }
}