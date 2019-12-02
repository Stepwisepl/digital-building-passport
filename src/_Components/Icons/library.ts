import { library } from "@fortawesome/fontawesome-svg-core";
import { faHomeLgAlt } from "@fortawesome/pro-solid-svg-icons/faHomeLgAlt";

library.add(faHomeLgAlt);

export enum FontIconType {
  Light = "fal",
  Solid = "fas"
}

export enum IconName {
  Home = "home-lg-alt",
  MapMarker = "map-marker-alt"
}
