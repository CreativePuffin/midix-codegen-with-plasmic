// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type TicketSvgrepoComsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function TicketSvgrepoComsvgIcon(props: TicketSvgrepoComsvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      version={"1.1"}
      x={"0"}
      y={"0"}
      viewBox={"0 0 512 512"}
      xmlSpace={"preserve"}
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

      <path
        d={
          "M492.408 210.307c10.917-.337 19.592-9.284 19.592-20.206v-77.338c0-11.164-9.051-20.216-20.216-20.216H20.216C9.051 92.548 0 101.599 0 112.763v77.287c0 11.164 9.051 20.216 20.216 20.216 25.218 0 45.734 20.516 45.734 45.734s-20.516 45.734-45.734 45.734C9.051 301.734 0 310.786 0 321.95v77.287c0 11.164 9.051 20.216 20.216 20.216h471.569c11.164 0 20.216-9.051 20.216-20.216v-77.338c0-10.922-8.675-19.869-19.592-20.206-24.836-.767-44.29-20.837-44.29-45.693s19.454-44.926 44.289-45.693zM162.745 379.02H40.431v-39.249c37.792-9.12 65.95-43.218 65.95-83.771 0-40.552-28.158-74.652-65.95-83.772v-39.249h122.314V379.02zm269.304-62.995c10.997 11.315 24.617 19.251 39.521 23.217v39.778H203.176V132.979h268.393v39.778c-14.904 3.966-28.524 11.903-39.521 23.217-15.709 16.164-24.361 37.482-24.361 60.027-.001 22.543 8.652 43.86 24.362 60.024z"
        }
      ></path>

      <path
        d={
          "M372.235 198.673H246.198c-11.164 0-20.216 9.051-20.216 20.216s9.051 20.216 20.216 20.216h126.037c11.164 0 20.216-9.051 20.216-20.216s-9.052-20.216-20.216-20.216zm0 74.222H246.198c-11.164 0-20.216 9.051-20.216 20.216s9.051 20.216 20.216 20.216h126.037c11.164 0 20.216-9.051 20.216-20.216s-9.052-20.216-20.216-20.216z"
        }
      ></path>
    </svg>
  );
}

export default TicketSvgrepoComsvgIcon;
/* prettier-ignore-end */
