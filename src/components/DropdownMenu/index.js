import React, { Component } from "react";
import { Menu, Dropdown } from "antd";
import styles from "./index.module.scss";
import dropdown_biaozhu from "../../imgs/dropdown_biaozhu.png";
import dropdown_biaozhu2 from "../../imgs/dropdown_biaozhu(2).png";
import dropdown_celiang from "../../imgs/dropdown_celiang.png";
import dropdown_celiang2 from "../../imgs/dropdown_celiang(2).png";
import { DownOutlined } from "@ant-design/icons";
class DropdownMenu extends Component {
  render() {
    const menu = (
      <Menu className={styles.menu}>
        <Menu.Item key="a" className={styles.menu_items}>
          <div className={styles.link}>
            <img className={styles.linkicon} src={dropdown_celiang} />
            <p className={styles.linkname}>长度测量</p>
          </div>
        </Menu.Item>
        <Menu.Item key="b" className={styles.menu_items}>
          <div className={styles.link}>
            <img className={styles.linkicon} src={dropdown_celiang2} />
            <p className={styles.linkname}>高度测量</p>
          </div>
        </Menu.Item>
        <Menu.Item key="c" className={styles.menu_items}>
          <div className={styles.link}>
            <img className={styles.linkicon} src={dropdown_celiang2} />
            <p className={styles.linkname}>面积测量</p>
          </div>
        </Menu.Item>
        <Menu.Item key="d" className={styles.menu_items}>
          <div className={styles.link}>
            <img className={styles.linkicon} src={dropdown_biaozhu} />

            <p className={styles.linkname}>文本标注</p>
          </div>
        </Menu.Item>
        <Menu.Item key="e" className={styles.menu_items}>
          <div className={styles.link}>
            <img className={styles.linkicon} src={dropdown_biaozhu2} />
            <p className={styles.linkname}>图片标注</p>
          </div>
        </Menu.Item>

        <Menu.Item key="f">
          关闭
        </Menu.Item>
      </Menu>
    );
    return (
      <div className={styles.dropdown_box}>
        <Dropdown
          overlay={menu}
          trigger={["click"]}
          overlayStyle={{ minWidth: "70px", textAlign: "center" }}
        >
          <a
            className={styles.ant_dropdown_link}
            onClick={(e) => e.preventDefault()}
          >
            基础功能
          </a>
        </Dropdown>
      </div>
    );
  }
}

export default DropdownMenu;
