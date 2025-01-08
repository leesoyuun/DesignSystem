import { ReactNode } from "react";
import { jsx } from "react/jsx-runtime";

import * as S from "./style";
import { theme } from "../../../styles/theme";

type TypographTypoType =
  | "H5"
  | "H6"
  | "Subtitle1"
  | "Subtitle2"
  | "Button"
  | "Body1"
  | "Body2"
  | "Caption"
  | "Overline";

type ColorType =
  | keyof typeof theme.colors
  | keyof (typeof theme.colors)["primary"]
  | keyof (typeof theme.colors)["neutral"]
  | keyof (typeof theme.colors)["neutralVarient"];

const TypoMap = {
  H5: S.H5,
  H6: S.H6,
  Subtitle1: S.Subtitle1,
  Subtitle2: S.Subtitle2,
  Button: S.Button,
  Body1: S.Body1,
  Body2: S.Body2,
  Caption: S.Caption,
  Overline: S.Overline,
};

const Typography = ({
  color,
  typoSize,
  children,
}: {
  color?: ColorType;
  typoSize: TypographTypoType;
  children: ReactNode;
}) => {
  const Typo = TypoMap[typoSize];

  const Color = color
    ? theme.colors.primary[color as keyof typeof theme.colors.primary] ||
      theme.colors.neutral[color as keyof typeof theme.colors.neutral] ||
      theme.colors.neutralVarient[
        color as keyof typeof theme.colors.neutralVarient
      ]
    : theme.colors.primary.primary50;

  return jsx(Typo, { style: { color: Color }, children });
};
export default Typography;
