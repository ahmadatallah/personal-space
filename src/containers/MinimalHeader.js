/** @jsx jsx */
import jsx from "../jsx";
import React from "react";
import Avatar from "../components/Avatar";
import avatarImg from "../assets/images/avatar.png";
import ColorModeApplier from "./ColorModeApplier";
import { useColorMode } from "theme-ui";
import { A } from "../elements";
import { modes } from "../utils/constants";
import Flex from "../components/Flex";

function MinimalHeader() {
  const [colorMode, setColorMode] = useColorMode();

  return (
    <Flex mt={1} px={4} py={2} textAlign="right" justifyContent="center">
      <A display="block" href="/" mr={5}>
        <Avatar src={avatarImg} borderRadius={100} width={[32, 64]} />
      </A>
      <ColorModeApplier
        mode={colorMode}
        onClick={e => {
          const i = modes.indexOf(colorMode);
          const n = (i + 1) % modes.length;
          setColorMode(modes[n]);
        }}
      />
    </Flex>
  );
}

export default MinimalHeader;