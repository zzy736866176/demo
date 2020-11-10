import React, { Component } from "react";
import Viewer from "cesium/Source/Widgets/Viewer/Viewer";
import { createWorldTerrain } from "cesium";
import DropdownMenu from "./components/DropdownMenu";

import styles from "./App.scss";

class App extends Component {
  componentDidMount() {
    this.viewer = new Viewer(this.cesiumContainer, {
      animation: false, //左下角的动画仪表盘
      baseLayerPicker: false, //右上角的图层选择按钮
      geocoder: false, //搜索框
      homeButton: false, //home按钮
      sceneModePicker: false, //模式切换按钮
      timeline: false, //底部的时间轴
      navigationHelpButton: false, //右上角的帮助按钮，
      fullscreenButton: false, //右下角的全屏按钮
      infoBox: true,
      shouldAnimate: true,
      vrButton: false,
      terrainProvider: createWorldTerrain(), //加入地形
    });
  }
  render() {
    return (
      <div className={styles.App}>
        <div
          id="cesiumContainer"
          ref={(element) => (this.cesiumContainer = element)}
        ></div>

        <DropdownMenu />
      </div>
    );
  }
}

export default App;
