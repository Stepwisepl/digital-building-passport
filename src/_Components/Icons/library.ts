import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faHomeLgAlt,
  faChartBar,
  faTools,
  faBoxFull,
  faMapMarkerAlt
} from "@fortawesome/pro-light-svg-icons";
import { faHomeLgAlt as solidFaHomeLgAlt } from "@fortawesome/pro-solid-svg-icons";

library.add(faChartBar);
library.add(faTools);
library.add(faBoxFull);
library.add(faMapMarkerAlt);

library.add(faHomeLgAlt);
library.add(solidFaHomeLgAlt);

export enum FontIconType {
  Light = "fal",
  Solid = "fas"
}

export enum IconName {
  Home = "home-lg-alt",
  MapMarker = "map-marker-alt",
  ChartBar = "chart-bar",
  Tools = "tools",
  BoxFull = "box-full"
}
