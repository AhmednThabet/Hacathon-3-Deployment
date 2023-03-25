import { Button } from "components";
import { useState } from "react";

export const LinkCopy = ({ linkId, disabled = false }: any) => {
  const [serviceLink, setServiceLink] = useState(
    `http://localhost:3111/hackathon3/previewService/${linkId}`
  );
  return (
    <div className="flex gap-3">
      <input
        className="border-none w-full"
        type="text"
        value={
          disabled ? "Once Approved. Link will Show up here." : serviceLink
        }
        readOnly
        disabled
      />
      <Button
        disabled={disabled}
        buttonSize="large"
        onClick={() => {
          navigator.clipboard.writeText(serviceLink);
        }}
      >
        copy
      </Button>
    </div>
  );
};
