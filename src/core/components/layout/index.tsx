import { Layout } from "antd";
import React from "react";
import MainHeader from "./header";
import MenuSideBar from "./menuSideBar";
import ContentLayout from "./content";


export default class AppLayout extends React.Component {
  render() {
    return (
      <Layout>
        <MainHeader />
        <Layout>
          <MenuSideBar />
          <Layout style={{ padding: '0 24px 24px' }}>
            <ContentLayout />
          </Layout>
        </Layout>
      </Layout>
    );
  };
}