export interface DB {
  settings?: Settings;
}

export enum DisplayType {
  ThreeSame = "three-same",
  TwoSmallOneLarge = "two-sm-one-lg",
}

export interface Settings {
  tiles?: Tile[];
  text?: Text;
  display?: DisplayType | null;
}

export interface Text {
  title?: string | null;
  subtitle?: string | null;
}

export interface Tile {
  background?: string | null;
  text?: string | null;
  link?: string | null;
}
