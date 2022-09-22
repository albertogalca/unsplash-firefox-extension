import styled from "styled-components";

type TextProps = {
  as?: "xs" | "sm" | "base";
  color?: string;
  children: string;
};

const ExtraSmall = styled.p`
  font-size: 11px;
  line-height: 1.3;
  margin: 0;
  padding: 0;

  color: ${(props: TextProps) => props.color};
`;

const SmallMedium = styled.p`
  font-size: 13px;
  font-weight: 500;
  line-height: 1.3;
  margin: 0;
  padding: 0;

  color: ${(props: TextProps) => props.color};
`;

const Base = styled.p`
  font-size: 15px;
  line-height: 1.3;
  margin: 0;
  padding: 0;

  color: ${(props: TextProps) => props.color};
`;

const Text = ({
  as = "base",
  color = "#111",
  children,
  ...props
}: TextProps) => {
  switch (as) {
    case "xs":
      return (
        <ExtraSmall color={color} {...props}>
          {children}
        </ExtraSmall>
      );
    case "sm":
      return (
        <SmallMedium color={color} {...props}>
          {children}
        </SmallMedium>
      );
    case "base":
    default:
      return (
        <Base color={color} {...props}>
          {children}
        </Base>
      );
  }
};

export default Text;
