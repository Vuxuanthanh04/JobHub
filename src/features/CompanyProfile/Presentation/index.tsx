import React from "react";
import { Button, Form, Input } from "antd";
import type { Company } from "../Domain/Entity/companyEntity";

export default class CompanyProfile extends React.Component{
	onSubmit = async (values: Company) => {
		console.log(values)
	}
	render() {
		return (
			<div>
				<Form onFinish={this.onSubmit}>
					<Form.Item label="Tên doanh nghiệp" name="companyName">
						<Input></Input>
					</Form.Item>
					<Form.Item label="Lĩnh vực" name="companyField">
						<Input></Input>
					</Form.Item>
					<Form.Item label="Ngày thành lập" name="foundingDate">
						<Input></Input>
					</Form.Item>
					<Form.Item >
						<Button htmlType="submit">Đăng ký</Button>
					</Form.Item>
				</Form>				
			</div>
		)
	}
}