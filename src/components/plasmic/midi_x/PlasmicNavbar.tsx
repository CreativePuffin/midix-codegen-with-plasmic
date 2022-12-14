// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: kJshciSJnYYFfXZkFQ39on
// Component: W4rdttX1TF
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
import ToggleMenuButton from "../../ToggleMenuButton"; // plasmic-import: ajXkiB3_J8/component
import Logo from "../../Logo"; // plasmic-import: SzZbMNAxr_/component
import Button from "../../Button"; // plasmic-import: t_0Z-tS1oOM/component

import { useScreenVariants as useScreenVariantsq351NNxhIiU } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: Q35_1NNxh_IiU/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_midi_x.module.css"; // plasmic-import: kJshciSJnYYFfXZkFQ39on/projectcss
import sty from "./PlasmicNavbar.module.css"; // plasmic-import: W4rdttX1TF/css

import Icon13Icon from "./icons/PlasmicIcon__Icon13"; // plasmic-import: dZlb7SIaoZ/icon
import Icon3Icon from "./icons/PlasmicIcon__Icon3"; // plasmic-import: LPwNS5ZgtbG/icon
import Icon4Icon from "./icons/PlasmicIcon__Icon4"; // plasmic-import: ThX7Zo7yQv/icon
import Icon12Icon from "./icons/PlasmicIcon__Icon12"; // plasmic-import: XL8tHAy8i5/icon
import Icon6Icon from "./icons/PlasmicIcon__Icon6"; // plasmic-import: i36Dxs6GrK/icon
import Icon5Icon from "./icons/PlasmicIcon__Icon5"; // plasmic-import: he7aeO-L0I/icon

export type PlasmicNavbar__VariantMembers = {};
export type PlasmicNavbar__VariantsArgs = {};
type VariantPropType = keyof PlasmicNavbar__VariantsArgs;
export const PlasmicNavbar__VariantProps = new Array<VariantPropType>();

export type PlasmicNavbar__ArgsType = {};
type ArgPropType = keyof PlasmicNavbar__ArgsType;
export const PlasmicNavbar__ArgProps = new Array<ArgPropType>();

export type PlasmicNavbar__OverridesType = {
  wrapper?: p.Flex<"div">;
  menuToggle?: p.Flex<typeof ToggleMenuButton>;
  link?: p.Flex<"a">;
  logo?: p.Flex<typeof Logo>;
};

export interface DefaultNavbarProps {
  className?: string;
}

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());
const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    await promise;
  });

function PlasmicNavbar__RenderFunc(props: {
  variants: PlasmicNavbar__VariantsArgs;
  args: PlasmicNavbar__ArgsType;
  overrides: PlasmicNavbar__OverridesType;

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

  const [$queries, setDollarQueries] = React.useState({});

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsq351NNxhIiU()
  });

  return (
    <p.Stack
      as={"div"}
      data-plasmic-name={"wrapper"}
      data-plasmic-override={overrides.wrapper}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.wrapper
      )}
    >
      {true ? (
        <div className={classNames(projectcss.all, sty.freeBox__s9PZp)}>
          {true ? (
            <div className={classNames(projectcss.all, sty.freeBox___1Borr)}>
              {(
                hasVariant(globalVariants, "screen", "mobileOnly") ? true : true
              ) ? (
                <ToggleMenuButton
                  data-plasmic-name={"menuToggle"}
                  data-plasmic-override={overrides.menuToggle}
                  className={classNames("__wab_instance", sty.menuToggle)}
                >
                  {"Valmynd"}
                </ToggleMenuButton>
              ) : null}
            </div>
          ) : null}
          {true ? (
            <div className={classNames(projectcss.all, sty.freeBox__sf17)}>
              {true ? (
                <a
                  data-plasmic-name={"link"}
                  data-plasmic-override={overrides.link}
                  className={classNames(projectcss.all, projectcss.a, sty.link)}
                  href={`/`}
                >
                  <Logo
                    data-plasmic-name={"logo"}
                    data-plasmic-override={overrides.logo}
                    className={classNames("__wab_instance", sty.logo)}
                    onWhite={true}
                  />
                </a>
              ) : null}
            </div>
          ) : null}
        </div>
      ) : null}
      {(hasVariant(globalVariants, "screen", "mobileOnly") ? true : true) ? (
        <div className={classNames(projectcss.all, sty.freeBox__c1AL1)}>
          {(
            hasVariant(globalVariants, "screen", "mobileOnly") ? true : true
          ) ? (
            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__wgxXr)}
            >
              <Button
                className={classNames("__wab_instance", sty.button__kHuIg)}
                color={"whitePop" as const}
                link={`/vidburdir`}
                showStartIcon={true}
                startIcon={
                  <Icon13Icon
                    className={classNames(projectcss.all, sty.svg__iwTjt)}
                    role={"img"}
                  />
                }
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__wtmHs
                  )}
                >
                  {"Allir Vi??bur??ir"}
                </div>
              </Button>

              {(
                hasVariant(globalVariants, "screen", "mobileOnly") ? true : true
              ) ? (
                <Button
                  className={classNames("__wab_instance", sty.button__g7BpX)}
                  color={"whitePop" as const}
                  link={`/vidburdir`}
                  showStartIcon={true}
                  startIcon={
                    <Icon4Icon
                      className={classNames(projectcss.all, sty.svg__knmee)}
                      role={"img"}
                    />
                  }
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__nrnaL
                    )}
                  >
                    {"T??nleikar"}
                  </div>
                </Button>
              ) : null}

              <Button
                className={classNames("__wab_instance", sty.button__veg8A)}
                color={"whitePop" as const}
                link={`/vidburdir`}
                showStartIcon={true}
                startIcon={
                  <Icon12Icon
                    className={classNames(projectcss.all, sty.svg__muIt5)}
                    role={"img"}
                  />
                }
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__bytFj
                  )}
                >
                  {"S??ningar"}
                </div>
              </Button>
            </p.Stack>
          ) : null}
        </div>
      ) : null}

      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox__mqRej)}
      >
        <Button
          className={classNames("__wab_instance", sty.button__lR0Wc)}
          color={"whitePop" as const}
          hideLabel={
            hasVariant(globalVariants, "screen", "mobileOnly")
              ? true
              : undefined
          }
          shape={
            hasVariant(globalVariants, "screen", "mobileOnly")
              ? ("round" as const)
              : ("rounded" as const)
          }
          showStartIcon={true}
          startIcon={
            <Icon6Icon
              className={classNames(projectcss.all, sty.svg__rSLaz)}
              role={"img"}
            />
          }
        >
          {"Leita"}
        </Button>

        <Button
          className={classNames("__wab_instance", sty.button__y8O0X)}
          color={"whitePop" as const}
          hideLabel={true}
          shape={"rounded" as const}
          showStartIcon={true}
          size={"compact" as const}
          startIcon={
            <Icon5Icon
              className={classNames(projectcss.all, sty.svg__lqa9)}
              role={"img"}
            />
          }
        />
      </p.Stack>
    </p.Stack>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  wrapper: ["wrapper", "menuToggle", "link", "logo"],
  menuToggle: ["menuToggle"],
  link: ["link", "logo"],
  logo: ["logo"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  wrapper: "div";
  menuToggle: typeof ToggleMenuButton;
  link: "a";
  logo: typeof Logo;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicNavbar__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicNavbar__VariantsArgs;
    args?: PlasmicNavbar__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicNavbar__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicNavbar__ArgsType,
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
          internalArgPropNames: PlasmicNavbar__ArgProps,
          internalVariantPropNames: PlasmicNavbar__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicNavbar__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "wrapper") {
    func.displayName = "PlasmicNavbar";
  } else {
    func.displayName = `PlasmicNavbar.${nodeName}`;
  }
  return func;
}

export const PlasmicNavbar = Object.assign(
  // Top-level PlasmicNavbar renders the root element
  makeNodeComponent("wrapper"),
  {
    // Helper components rendering sub-elements
    menuToggle: makeNodeComponent("menuToggle"),
    link: makeNodeComponent("link"),
    logo: makeNodeComponent("logo"),

    // Metadata about props expected for PlasmicNavbar
    internalVariantProps: PlasmicNavbar__VariantProps,
    internalArgProps: PlasmicNavbar__ArgProps
  }
);

export default PlasmicNavbar;
/* prettier-ignore-end */
