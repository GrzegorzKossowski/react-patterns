/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { PropsWithChildren } from "react";
import { styled } from "styled-components";

const Component = styled.div`
  display: flex;
`;

type SplitPanelT = {
  $flex: number;
};

const SplitPanel = styled.div<SplitPanelT>`
  flex: ${({ $flex }) => $flex};
`;

type Props = {
  Left: React.ElementType;
  Right: React.ElementType;
  leftWidth?: number;
  rightWidth?: number;
};

const SplitScreen = ({ Left, Right, leftWidth = 1, rightWidth = 1 }: Props) => {
  return (
    <Component>
      <SplitPanel $flex={leftWidth}>
        {leftWidth} - <Left />
      </SplitPanel>
      <SplitPanel $flex={rightWidth}>
        {rightWidth} - <Right />
      </SplitPanel>
    </Component>
  );
};

const SplitChildren = ({
  children,
  leftWidth = 1,
  rightWidth = 1,
}: { leftWidth?: number; rightWidth?: number } & PropsWithChildren) => {
  const [one, two] = React.Children.toArray(children);
  return (
    <Component>
      <SplitPanel $flex={leftWidth}>{one}</SplitPanel>
      <SplitPanel $flex={rightWidth}>{two}</SplitPanel>
    </Component>
  );
};

export default function SplitScreenExample() {
  return (
    <>
    {/* using props */}
      <SplitScreen
        Left={() => <>Left</>}
        Right={() => <>Right</>}
        leftWidth={1}
        rightWidth={2}
      />
      {/* using children */}
      <SplitChildren leftWidth={1} rightWidth={2}>
        <>Left</>
        <>Rigth</>
      </SplitChildren>
    </>
  );
}
