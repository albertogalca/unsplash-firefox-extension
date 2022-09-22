import React from "react";
import { Popover as TinyPopover, ArrowContainer } from "react-tiny-popover";
import styled from "styled-components";

type PopoverProps = {
  position?: "top" | "bottom" | "left" | "right";
  isOpen?: boolean;
  popoverContent: React.ReactElement;
  popoverTrigger: React.ReactElement;
};

const Container = styled.div`
  z-index: 9;
  padding: 8px 0;
  background-clip: padding-box;
  border-radius: 2px;
  background-color: white;
  transition: overflow 0.1 ease-out;
  box-shadow: 0 1px 6px rgb(0 0 0 / 12%), 0 1px 4px rgb(0 0 0 / 12%);
`;

const Popover = ({
  position = "top",
  isOpen = false,
  popoverContent,
  popoverTrigger,
}: PopoverProps) => {
  const [isPopoverOpen, setIsPopoverOpen] = React.useState<boolean>(isOpen);

  return (
    <TinyPopover
      isOpen={isPopoverOpen}
      positions={[position]}
      padding={18}
      onClickOutside={() => setIsPopoverOpen(false)}
      content={({ position, childRect, popoverRect }) => (
        <ArrowContainer
          position={position}
          childRect={childRect}
          popoverRect={popoverRect}
          arrowColor={"white"}
          arrowSize={8}
          className="popover-arrow-container"
          arrowClassName="popover-arrow"
        >
          <Container onClick={() => setIsPopoverOpen(!isPopoverOpen)}>
            {popoverContent}
          </Container>
        </ArrowContainer>
      )}
    >
      <div onClick={() => setIsPopoverOpen(!isPopoverOpen)}>
        {popoverTrigger}
      </div>
    </TinyPopover>
  );
};

export default Popover;
