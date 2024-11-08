import ContentCopyRoundedIcon from "@mui/icons-material/ContentCopyRounded";
import { IconButton } from "@mui/material";

export default function NpmStart() {
  return (
    <div className="relative flex gap-2 justify-center items-center rounded-lg py-2 px-4 text-[#868287]">
      <p>$ ~ npm install nalu-table</p>
      <IconButton size="small">
        <ContentCopyRoundedIcon
          fontSize="small"
          style={{
            color: "#868287",
          }}
        />
      </IconButton>
    </div>
  );
}
