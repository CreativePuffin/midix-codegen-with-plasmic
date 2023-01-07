// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: kJshciSJnYYFfXZkFQ39on
// Component: ajXkiB3_J8
import * as React from "react";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/host";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import MainMenu from "../../MainMenu"; // plasmic-import: NK-nIR9-HV/component

import { useScreenVariants as useScreenVariantsq351NNxhIiU } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: Q35_1NNxh_IiU/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_midi_x.module.css"; // plasmic-import: kJshciSJnYYFfXZkFQ39on/projectcss
import sty from "./PlasmicToggleMenuButton.module.css"; // plasmic-import: ajXkiB3_J8/css

import MenuSvgrepoComsvgIcon from "./icons/PlasmicIcon__MenuSvgrepoComsvg"; // plasmic-import: R3afhS8X6/icon
import Icon10Icon from "./icons/PlasmicIcon__Icon10"; // plasmic-import: 7FDGBH8Op_/icon

export type PlasmicToggleMenuButton__VariantMembers = {
  vanilla: "vanilla";
  showLabel: "showLabel";
  toggled: "toggled";
};
export type PlasmicToggleMenuButton__VariantsArgs = {
  vanilla?: SingleBooleanChoiceArg<"vanilla">;
  showLabel?: SingleBooleanChoiceArg<"showLabel">;
  toggled?: SingleBooleanChoiceArg<"toggled">;
};
type VariantPropType = keyof PlasmicToggleMenuButton__VariantsArgs;
export const PlasmicToggleMenuButton__VariantProps = new Array<VariantPropType>(
  "vanilla",
  "showLabel",
  "toggled"
);

export type PlasmicToggleMenuButton__ArgsType = {
  children?: React.ReactNode;
};
type ArgPropType = keyof PlasmicToggleMenuButton__ArgsType;
export const PlasmicToggleMenuButton__ArgProps = new Array<ArgPropType>(
  "children"
);

export type PlasmicToggleMenuButton__OverridesType = {
  wrapper?: p.Flex<"div">;
  link?: p.Flex<"a">;
  svg?: p.Flex<"svg">;
  freeBox?: p.Flex<"div">;
  menuWrapper?: p.Flex<"div">;
  mainMenu?: p.Flex<typeof MainMenu>;
};

export interface DefaultToggleMenuButtonProps {
  children?: React.ReactNode;
  vanilla?: SingleBooleanChoiceArg<"vanilla">;
  showLabel?: SingleBooleanChoiceArg<"showLabel">;
  toggled?: SingleBooleanChoiceArg<"toggled">;
  className?: string;
}

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());
const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    await promise;
  });

function PlasmicToggleMenuButton__RenderFunc(props: {
  variants: PlasmicToggleMenuButton__VariantsArgs;
  args: PlasmicToggleMenuButton__ArgsType;
  overrides: PlasmicToggleMenuButton__OverridesType;

  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants
  };

  const currentUser = p.useCurrentUser?.() || {};

  const stateSpecs = React.useMemo(
    () => [
      {
        path: "vanilla",
        type: "private",
        initFunc: ($props, $state, $ctx) => $props.vanilla
      },
      {
        path: "showLabel",
        type: "private",
        initFunc: ($props, $state, $ctx) => $props.showLabel
      },
      {
        path: "toggled",
        type: "private",
        initFunc: ($props, $state, $ctx) => $props.toggled
      }
    ],
    [$props, $ctx]
  );
  const $state = p.useDollarState(stateSpecs, $props, $ctx);

  const [$queries, setDollarQueries] = React.useState({});

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsq351NNxhIiU()
  });

  return (
    (hasVariant($state, "toggled", "toggled") ? true : true) ? (
      <div
        data-plasmic-name={"wrapper"}
        data-plasmic-override={overrides.wrapper}
        data-plasmic-root={true}
        data-plasmic-for-node={forNode}
        className={classNames(
          projectcss.all,
          projectcss.root_reset,
          projectcss.plasmic_default_styles,
          projectcss.plasmic_mixins,
          projectcss.plasmic_tokens,
          sty.wrapper,
          {
            [sty.wrappershowLabel]: hasVariant(
              $state,
              "showLabel",
              "showLabel"
            ),
            [sty.wrappertoggled]: hasVariant($state, "toggled", "toggled")
          }
        )}
      >
        {(hasVariant(globalVariants, "screen", "mobileOnly") ? true : true) ? (
          <p.Stack
            as={"a"}
            data-plasmic-name={"link"}
            data-plasmic-override={overrides.link}
            hasGap={true}
            className={classNames(projectcss.all, projectcss.a, sty.link, {
              [sty.linkshowLabel]: hasVariant($state, "showLabel", "showLabel"),
              [sty.linkshowLabel_toggled]:
                hasVariant($state, "showLabel", "showLabel") &&
                hasVariant($state, "toggled", "toggled"),
              [sty.linktoggled]: hasVariant($state, "toggled", "toggled")
            })}
            href={"#" as const}
          >
            <p.PlasmicIcon
              data-plasmic-name={"svg"}
              data-plasmic-override={overrides.svg}
              PlasmicIconType={
                hasVariant($state, "toggled", "toggled")
                  ? Icon10Icon
                  : MenuSvgrepoComsvgIcon
              }
              className={classNames(projectcss.all, sty.svg, {
                [sty.svgshowLabel_toggled]:
                  hasVariant($state, "showLabel", "showLabel") &&
                  hasVariant($state, "toggled", "toggled"),
                [sty.svgtoggled]: hasVariant($state, "toggled", "toggled")
              })}
              role={"img"}
            />

            {(
              hasVariant($state, "showLabel", "showLabel")
                ? true
                : hasVariant($state, "vanilla", "vanilla")
                ? true
                : true
            ) ? (
              <div
                data-plasmic-name={"freeBox"}
                data-plasmic-override={overrides.freeBox}
                className={classNames(projectcss.all, sty.freeBox, {
                  [sty.freeBoxshowLabel]: hasVariant(
                    $state,
                    "showLabel",
                    "showLabel"
                  ),
                  [sty.freeBoxvanilla]: hasVariant($state, "vanilla", "vanilla")
                })}
              >
                {(hasVariant($state, "showLabel", "showLabel") ? true : true)
                  ? p.renderPlasmicSlot({
                      defaultContents: "Loka",
                      value: args.children,
                      className: classNames(sty.slotTargetChildren, {
                        [sty.slotTargetChildrenshowLabel]: hasVariant(
                          $state,
                          "showLabel",
                          "showLabel"
                        ),
                        [sty.slotTargetChildrenshowLabel_toggled]:
                          hasVariant($state, "showLabel", "showLabel") &&
                          hasVariant($state, "toggled", "toggled"),
                        [sty.slotTargetChildrenvanilla]: hasVariant(
                          $state,
                          "vanilla",
                          "vanilla"
                        )
                      })
                    })
                  : null}
              </div>
            ) : null}
          </p.Stack>
        ) : null}
        {true ? (
          <div
            data-plasmic-name={"menuWrapper"}
            data-plasmic-override={overrides.menuWrapper}
            className={classNames(projectcss.all, sty.menuWrapper, {
              [sty.menuWrappertoggled]: hasVariant($state, "toggled", "toggled")
            })}
          >
            {(hasVariant($state, "toggled", "toggled") ? true : true) ? (
              <MainMenu
                data-plasmic-name={"mainMenu"}
                data-plasmic-override={overrides.mainMenu}
                className={classNames("__wab_instance", sty.mainMenu, {
                  [sty.mainMenushowLabel_toggled]:
                    hasVariant($state, "showLabel", "showLabel") &&
                    hasVariant($state, "toggled", "toggled"),
                  [sty.mainMenutoggled]: hasVariant(
                    $state,
                    "toggled",
                    "toggled"
                  )
                })}
              />
            ) : null}
          </div>
        ) : null}
      </div>
    ) : null
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  wrapper: ["wrapper", "link", "svg", "freeBox", "menuWrapper", "mainMenu"],
  link: ["link", "svg", "freeBox"],
  svg: ["svg"],
  freeBox: ["freeBox"],
  menuWrapper: ["menuWrapper", "mainMenu"],
  mainMenu: ["mainMenu"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  wrapper: "div";
  link: "a";
  svg: "svg";
  freeBox: "div";
  menuWrapper: "div";
  mainMenu: typeof MainMenu;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicToggleMenuButton__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicToggleMenuButton__VariantsArgs;
    args?: PlasmicToggleMenuButton__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicToggleMenuButton__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicToggleMenuButton__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicToggleMenuButton__ArgProps,
          internalVariantPropNames: PlasmicToggleMenuButton__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicToggleMenuButton__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "wrapper") {
    func.displayName = "PlasmicToggleMenuButton";
  } else {
    func.displayName = `PlasmicToggleMenuButton.${nodeName}`;
  }
  return func;
}

export const PlasmicToggleMenuButton = Object.assign(
  // Top-level PlasmicToggleMenuButton renders the root element
  makeNodeComponent("wrapper"),
  {
    // Helper components rendering sub-elements
    link: makeNodeComponent("link"),
    svg: makeNodeComponent("svg"),
    freeBox: makeNodeComponent("freeBox"),
    menuWrapper: makeNodeComponent("menuWrapper"),
    mainMenu: makeNodeComponent("mainMenu"),

    // Metadata about props expected for PlasmicToggleMenuButton
    internalVariantProps: PlasmicToggleMenuButton__VariantProps,
    internalArgProps: PlasmicToggleMenuButton__ArgProps
  }
);

export default PlasmicToggleMenuButton;
/* prettier-ignore-end */
