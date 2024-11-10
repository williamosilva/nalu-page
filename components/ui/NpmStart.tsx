import { useState } from "react";
import ContentCopyRoundedIcon from "@mui/icons-material/ContentCopyRounded";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import { IconButton } from "@mui/material";

export default function NpmStart() {
  const [copied, setCopied] = useState(false);
  const textToCopy = "npm install nalu-table";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      setCopied(true);

      // Reset back to copy icon after 2 seconds
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (err) {
      console.error("Failed to copy text:", err);
    }
  };

  return (
    <div className="relative flex gap-4 justify-center items-center rounded-lg py-2 px-4 text-[#868287]">
      <p>$ ~ {textToCopy}</p>
      <IconButton size="medium" onClick={handleCopy}>
        {copied ? (
          <CheckRoundedIcon
            fontSize="medium"
            style={{
              color: "#4CAF50",
            }}
          />
        ) : (
          <ContentCopyRoundedIcon
            fontSize="medium"
            style={{
              color: "#a9a6aa",
            }}
          />
        )}
      </IconButton>
    </div>
  );
}
