import React from "react";
import { Layout, Menu, Breadcrumb, Icon } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Avatar } from "antd";

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
class SiderDemo extends React.Component {
  state = {
    collapsed: false
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    return (
      <Layout style={{ minHeight: "100vh", direction: "rtl" }}>
        <Sider
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
        >
          <Avatar
            style={{ backgroundColor: "#87d068" }}
            icon="user"
            className="m-3"
          />
          <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
            <Menu.Item key="1">
              <Icon type="user" className="m-1" />
              {/* <i className="fas fa-image" /> */}
              <span>پروفایل</span>
            </Menu.Item>
            <SubMenu
              key="sub1"
              title={
                <span>
                  <Icon type="user" className="m-1" />
                  <span>کاربران</span>
                </span>
              }
            >
              <Menu.Item key="3">لیست کاربران</Menu.Item>
              <Menu.Item key="4">افزودن</Menu.Item>
            </SubMenu>
            <Menu.Item key="9">
              <Icon type="setting" className="m-1" />
              <span>تنظیمات</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          {/* <Header style={{ background: '#fff', padding: 0 }} /> */}
          <div className="d-flex flex-row bg-light">
            <button className="btn btn-primary btn-sm m-2" type="primary">
              ورود
            </button>
            <p className="m-2">خوش آمدید</p>
            {/* <Button type="primary pb-1" onClick={this.toggleCollapsed}>
              <Icon type={this.state.collapsed ? "menu-fold" : "menu-unfold"} />
            </Button> */}
          </div>
          <Content style={{ margin: "0 16px" }}>
            <Breadcrumb style={{ margin: "16px 0" }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{ padding: 24, background: "#fff", minHeight: 360 }}>
              Bill is a cat.
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>حقوق مادی و معنوی</Footer>
        </Layout>
      </Layout>
    );
  }
}

export default SiderDemo;
