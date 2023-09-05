import * as React from "react";
import { styled } from "@mui/material/styles";
import Badge from "@mui/material/Badge";
import Avatar from "@mui/material/Avatar";

const SmallAvatar = styled(Avatar)(() => ({
  width: 21,
  height: 21,
}));

export default function BadgeAvatars({ mainImg, smallImg }) {
  return (
    <Badge
      overlap="circular"
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      badgeContent={<SmallAvatar alt="Remy Sharp" src={smallImg} />}
    >
      <Avatar
        alt="Travis Howard"
        src={mainImg}
        style={{ width: "76px", height: "76px", opacity: "1" }}
      />
    </Badge>
  );
}
