// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: kJshciSJnYYFfXZkFQ39on
// Component: _fa5mVL2su
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
import Logo from "../../Logo"; // plasmic-import: SzZbMNAxr_/component
import Button from "../../Button"; // plasmic-import: t_0Z-tS1oOM/component

import { useScreenVariants as useScreenVariantsq351NNxhIiU } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: Q35_1NNxh_IiU/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_midi_x.module.css"; // plasmic-import: kJshciSJnYYFfXZkFQ39on/projectcss
import sty from "./PlasmicFooter.module.css"; // plasmic-import: _fa5mVL2su/css

import Icon17Icon from "./icons/PlasmicIcon__Icon17"; // plasmic-import: QFjgQnbSgV/icon
import Icon3Icon from "./icons/PlasmicIcon__Icon3"; // plasmic-import: LPwNS5ZgtbG/icon
import Icon18Icon from "./icons/PlasmicIcon__Icon18"; // plasmic-import: v60ReaIjon/icon
import Icon19Icon from "./icons/PlasmicIcon__Icon19"; // plasmic-import: DPjKooRGG7/icon
import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: 8-aKz_yM1IT/icon
import Icon7Icon from "./icons/PlasmicIcon__Icon7"; // plasmic-import: -kqp2bUgPx/icon
import Icon8Icon from "./icons/PlasmicIcon__Icon8"; // plasmic-import: yJFzqf9nY_/icon

export type PlasmicFooter__VariantMembers = {};
export type PlasmicFooter__VariantsArgs = {};
type VariantPropType = keyof PlasmicFooter__VariantsArgs;
export const PlasmicFooter__VariantProps = new Array<VariantPropType>();

export type PlasmicFooter__ArgsType = {};
type ArgPropType = keyof PlasmicFooter__ArgsType;
export const PlasmicFooter__ArgProps = new Array<ArgPropType>();

export type PlasmicFooter__OverridesType = {
  wrapper?: p.Flex<"div">;
  logo?: p.Flex<typeof Logo>;
};

export interface DefaultFooterProps {
  className?: string;
}

function PlasmicFooter__RenderFunc(props: {
  variants: PlasmicFooter__VariantsArgs;
  args: PlasmicFooter__ArgsType;
  overrides: PlasmicFooter__OverridesType;

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
      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.columns__k6By)}
      >
        <div className={classNames(projectcss.all, sty.column__vvN3L)}>
          <Logo
            data-plasmic-name={"logo"}
            data-plasmic-override={overrides.logo}
            className={classNames("__wab_instance", sty.logo)}
            onWhite={true}
          />
        </div>

        <div className={classNames(projectcss.all, sty.column__wlwQj)}>
          {true ? (
            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__zEGxq)}
            >
              <Button
                className={classNames("__wab_instance", sty.button__hmChc)}
                color={"whitePop" as const}
                hideLabel={true}
                shape={"rounded" as const}
                showStartIcon={true}
                size={"compact" as const}
                startIcon={
                  <Icon17Icon
                    className={classNames(projectcss.all, sty.svg___4G6Hz)}
                    role={"img"}
                  />
                }
              />

              <Button
                className={classNames("__wab_instance", sty.button__tuMsh)}
                color={"whitePop" as const}
                hideLabel={true}
                shape={"rounded" as const}
                showStartIcon={true}
                size={"compact" as const}
                startIcon={
                  <Icon18Icon
                    className={classNames(projectcss.all, sty.svg___4TMak)}
                    role={"img"}
                  />
                }
              />
            </p.Stack>
          ) : null}
        </div>

        {(hasVariant(globalVariants, "screen", "mobileOnly") ? true : true) ? (
          <div className={classNames(projectcss.all, sty.column__pRVu)}>
            {true ? (
              <div className={classNames(projectcss.all, sty.freeBox___5DGb)}>
                {true ? (
                  <p.Stack
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.freeBox__mMxgn)}
                  >
                    <Button
                      className={classNames(
                        "__wab_instance",
                        sty.button___3Jet7
                      )}
                      color={"whitePop" as const}
                      shape={"rounded" as const}
                      showStartIcon={true}
                      size={"compact" as const}
                      startIcon={
                        <Icon19Icon
                          className={classNames(projectcss.all, sty.svg__qoIvC)}
                          role={"img"}
                        />
                      }
                    >
                      {"Spjallið"}
                    </Button>
                  </p.Stack>
                ) : null}
              </div>
            ) : null}
          </div>
        ) : null}
      </p.Stack>

      <div className={classNames(projectcss.all, sty.columns__oywcy)}>
        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.column___4PoXs)}
        >
          <Button
            className={classNames("__wab_instance", sty.button__cfBss)}
            color={"link" as const}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__htgGs
              )}
            >
              {"Tónleikar"}
            </div>
          </Button>

          <Button
            className={classNames("__wab_instance", sty.button__u4D8K)}
            color={"link" as const}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text___5DTq9
              )}
            >
              {"Sýningar"}
            </div>
          </Button>
        </p.Stack>

        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.column__nTcMf)}
        >
          <Button
            className={classNames("__wab_instance", sty.button__lz53Q)}
            color={"link" as const}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__nn4AG
              )}
            >
              {"Viðburðir"}
            </div>
          </Button>

          <Button
            className={classNames("__wab_instance", sty.button__qzf77)}
            color={"link" as const}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__xaEaz
              )}
            >
              {"Hvað er á næstunni?"}
            </div>
          </Button>
        </p.Stack>

        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.column__ttjDl)}
        >
          <Button
            className={classNames("__wab_instance", sty.button___06PP)}
            color={"link" as const}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__sIhbE
              )}
            >
              {"Um Okkur"}
            </div>
          </Button>

          <Button
            className={classNames("__wab_instance", sty.button__wvm0P)}
            color={"link" as const}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__kcV3C
              )}
            >
              {"Hjálpin"}
            </div>
          </Button>
        </p.Stack>
      </div>

      {true ? (
        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__qQnZx)}
        >
          <Button
            className={classNames("__wab_instance", sty.button__hdFz)}
            color={"whitePop" as const}
            link={"tel:5678004" as const}
            shape={"rounded" as const}
            showStartIcon={true}
            startIcon={
              <Icon7Icon
                className={classNames(projectcss.all, sty.svg__iHwTz)}
                role={"img"}
              />
            }
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text___4Auh
              )}
            >
              {"567 8004"}
            </div>
          </Button>

          <Button
            className={classNames("__wab_instance", sty.button__riZsB)}
            color={"whitePop" as const}
            link={"tel:5678004" as const}
            shape={"rounded" as const}
            showStartIcon={true}
            startIcon={
              <Icon8Icon
                className={classNames(projectcss.all, sty.svg__b5TeK)}
                role={"img"}
              />
            }
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text___4Cgif
              )}
            >
              {"midar@midix.is "}
            </div>
          </Button>
        </p.Stack>
      ) : null}

      <div className={classNames(projectcss.all, sty.freeBox__usfrG)}>
        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__x5Jn
          )}
        >
          {"© 2022 Miðix ehf. kt. 510220-1370 Allur réttur áskilinn."}
        </div>
      </div>

      <div className={classNames(projectcss.all, sty.freeBox__grbVu)}>
        <Button
          className={classNames("__wab_instance", sty.button__g0Jq)}
          color={"link" as const}
          size={"compact" as const}
        >
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__h8F8M
            )}
          >
            {"Persónuverndastefna"}
          </div>
        </Button>

        <div className={classNames(projectcss.all, sty.freeBox__hoH8S)} />

        <Button
          className={classNames("__wab_instance", sty.button__enSxo)}
          color={"link" as const}
        >
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__d60Jy
            )}
          >
            {"Viðskiptaskilmálar"}
          </div>
        </Button>
      </div>
    </p.Stack>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  wrapper: ["wrapper", "logo"],
  logo: ["logo"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  wrapper: "div";
  logo: typeof Logo;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicFooter__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicFooter__VariantsArgs;
    args?: PlasmicFooter__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicFooter__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicFooter__ArgsType,
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
          internalArgPropNames: PlasmicFooter__ArgProps,
          internalVariantPropNames: PlasmicFooter__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicFooter__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "wrapper") {
    func.displayName = "PlasmicFooter";
  } else {
    func.displayName = `PlasmicFooter.${nodeName}`;
  }
  return func;
}

export const PlasmicFooter = Object.assign(
  // Top-level PlasmicFooter renders the root element
  makeNodeComponent("wrapper"),
  {
    // Helper components rendering sub-elements
    logo: makeNodeComponent("logo"),

    // Metadata about props expected for PlasmicFooter
    internalVariantProps: PlasmicFooter__VariantProps,
    internalArgProps: PlasmicFooter__ArgProps
  }
);

export default PlasmicFooter;
/* prettier-ignore-end */