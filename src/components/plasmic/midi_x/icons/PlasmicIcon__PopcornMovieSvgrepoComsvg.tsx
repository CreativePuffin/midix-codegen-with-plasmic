// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PopcornMovieSvgrepoComsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PopcornMovieSvgrepoComsvgIcon(
  props: PopcornMovieSvgrepoComsvgIconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      data-name={"24x24/On Light/Media"}
      viewBox={"0 0 24 24"}
      height={"1em"}
      width={"1em"}
      style={{
        fill: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path fill={"none"} d={"M0 0h24v24H0z"}></path>

      <path
        d={
          "M8.716 21.751a2.737 2.737 0 01-2.718-2.332L4.259 8.115a.75.75 0 01.742-.864h.3a2.444 2.444 0 01.474-2.075 2.551 2.551 0 012.369-.87A2.416 2.416 0 019.85 2.633a2.6 2.6 0 012.361.563 2.561 2.561 0 012.539-.869 2.281 2.281 0 011.724 1.762 2.513 2.513 0 012.176 1.662 2.63 2.63 0 01.068 1.5h.283a.75.75 0 01.742.864l-1.74 11.3a2.735 2.735 0 01-2.719 2.336zm6.568-1.5a1.243 1.243 0 001.236-1.06l1.606-10.44h-2.864l-.523 11.5zm-2.046 0l.522-11.5h-3.521l.523 11.5zm-5.758-1.06a1.244 1.244 0 001.236 1.06h.544l-.522-11.5H5.875zm9.675-11.94a1.465 1.465 0 00.095-.96c-.207-.54-.606-.766-1.378-.725a.75.75 0 01-.789-.714c-.031-.661-.242-.956-.695-1.072s-.925.146-1.5.949a.751.751 0 01-1.174.057c-.55-.628-1.016-.823-1.47-.7-.438.117-.694.467-.788 1.212a.751.751 0 01-.975.618c-.765-.248-1.231-.155-1.57.235a1.221 1.221 0 00-.083 1.1z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default PopcornMovieSvgrepoComsvgIcon;
/* prettier-ignore-end */
