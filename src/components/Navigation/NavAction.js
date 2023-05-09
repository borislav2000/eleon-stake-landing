import React, { useState } from "react";

import {
  StyledCTAContainer,
  StyledBurgerMenuNavigationLinks,
  StyledButton,
} from "./elements";
import { MenuOutlined } from "@ant-design/icons";
import { Drawer } from "antd";

const NavigationDrawer = () => {
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState("right");
  const showDrawer = () => {
    setOpen(true);
  };
  const onChange = (e) => {
    setPlacement(e.target.value);
  };
  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <MenuOutlined
        style={{ fontSize: "16px" }}
        className="md:hidden"
        onClick={showDrawer}
        onChange={onChange}
      />
      <Drawer
        placement={placement}
        width={350}
        onClose={onClose}
        open={open}
        drawerStyle={{ backgroundColor: `#F4F2ED`, border: "none" }}
      >
        <StyledBurgerMenuNavigationLinks />
      </Drawer>
    </>
  );
};

const NavAction = () => {
  return (
    <StyledCTAContainer>
      <StyledButton
        className="font-inter font-medium bg-test rounded-md px-5 py-3  w-full md:inline-block text-center hidden"
        buttonText="Try Staking"
        href="https://eleon.io/stake"
      />
      <NavigationDrawer />
    </StyledCTAContainer>
  );
};

export default NavAction;
