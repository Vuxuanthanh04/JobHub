import { Form, Input, Button, message, Spin } from "antd";
import React from "react";
import { FirebaseAuthRepositoryImpl } from "../../data/repositories/FirebaseAuthRepositoryImpl";
import type { AuthRepository } from "../../domain/respositories/authRepository";

interface RegisterFormValues {
    email: string;
    password: string;
    confirmPassword: string;
    displayName: string;
}

export default class RegisterPage extends React.Component<{}, { loading: boolean }> {
    private authRepository: AuthRepository = new FirebaseAuthRepositoryImpl();

    constructor(props: {}) {
        super(props);
        this.state = { loading: false };
    }

    onSubmit = async (values: RegisterFormValues) => {
        // Validate passwords match
        if (values.password !== values.confirmPassword) {
            message.error("Mật khẩu không trùng khớp");
            return;
        }

        try {
            this.setState({ loading: true });
            await this.authRepository.register(
                values.email,
                values.password,
                values.displayName
            );
            message.success("Đăng ký thành công!");
            // Navigate to login or home page
            setTimeout(() => {
                window.location.href = "/login";
            }, 1500);
        } catch (error: any) {
            message.error(error.message || "Đăng ký thất bại");
        } finally {
            this.setState({ loading: false });
        }
    };

    render() {
        const { loading } = this.state;

        return (
            <div style={{ maxWidth: 400, margin: "100px auto" }}>
                <h2>Đăng Ký</h2>
                <Spin spinning={loading}>
                    <Form
                        name="register"
                        onFinish={this.onSubmit}
                        layout="vertical"
                    >
                        <Form.Item
                            label="Tên hiển thị"
                            name="displayName"
                            rules={[
                                {
                                    required: true,
                                    message: "Vui lòng nhập tên hiển thị",
                                },
                            ]}
                        >
                            <Input placeholder="Nhập tên của bạn" />
                        </Form.Item>

                        <Form.Item
                            label="Email"
                            name="email"
                            rules={[
                                {
                                    required: true,
                                    message: "Vui lòng nhập email",
                                },
                                {
                                    type: "email",
                                    message: "Email không hợp lệ",
                                },
                            ]}
                        >
                            <Input type="email" placeholder="Nhập email" />
                        </Form.Item>

                        <Form.Item
                            label="Mật khẩu"
                            name="password"
                            rules={[
                                {
                                    required: true,
                                    message: "Vui lòng nhập mật khẩu",
                                },
                                {
                                    min: 6,
                                    message: "Mật khẩu phải có ít nhất 6 ký tự",
                                },
                            ]}
                        >
                            <Input.Password placeholder="Nhập mật khẩu" />
                        </Form.Item>

                        <Form.Item
                            label="Xác nhận mật khẩu"
                            name="confirmPassword"
                            rules={[
                                {
                                    required: true,
                                    message: "Vui lòng xác nhận mật khẩu",
                                },
                            ]}
                        >
                            <Input.Password placeholder="Xác nhận mật khẩu" />
                        </Form.Item>

                        <Form.Item>
                            <Button
                                type="primary"
                                htmlType="submit"
                                block
                                loading={loading}
                            >
                                Đăng Ký
                            </Button>
                        </Form.Item>

                        <p style={{ textAlign: "center" }}>
                            Đã có tài khoản?{" "}
                            <a href="/login">Đăng nhập tại đây</a>
                        </p>
                    </Form>
                </Spin>
            </div>
        );
    }
}
