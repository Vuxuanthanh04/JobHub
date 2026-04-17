import { Form, Input, Button, Card } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import { FirebaseAuthRepositoryImpl } from "../../data/repositories/FirebaseAuthRepositoryImpl";
import type { AuthRepository } from "../../domain/respositories/authRepository";

export default class LoginPage extends React.Component {

    private authRepository: AuthRepository = new FirebaseAuthRepositoryImpl();

    onSubmit = async (values: { email: string, password: string }) => {
        try {
            await this.authRepository.login(values.email, values.password);
            console.log("Login successful");
        } catch (error) {
            console.error("Login failed", error);
        }
    }
    render() {
        return (
            <div
                style={{
                    width: "100vw",
                    minHeight: "100vh",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundImage: "url('/backgroundLogin.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                }}
            >
                <Card style={{
                    width: 420,
                    backdropFilter: "blur(10px)",
                    background: "rgba(255, 255, 255, 0.2)",
                    border: "1px solid rgba(255,255,255,0.3)",
                    borderRadius: "12px"
                }}>
                    <Form name="login" onFinish={this.onSubmit}>
                        <Form.Item label="Email" name="email" rules={[{ required: true, message: "Vui lòng nhập email" }]}>
                            <Input type="email" />
                        </Form.Item>
                        <Form.Item label="Password" name="password" rules={[{ required: true, message: "Vui lòng nhập mật khẩu" }]}>
                            <Input type="password" />
                        </Form.Item>
                        <Form.Item>
                            <div style={{ display: "flex", gap: "10px" }}>
                                <Link to="/" style={{ width: "50%", display: "block" }}>
                                    <Button type="primary" block>
                                        Đăng Nhập
                                    </Button>
                                </Link>
                                <Button type="primary" danger style={{ flex: 1 }}>
                                    <Link to="/register" style={{ color: "inherit", width: "100%", display: "block" }}>
                                        Đăng Kí
                                    </Link>
                                </Button>
                            </div>
                        </Form.Item>
                    </Form>
                </Card>
            </div>
        )
    }
}