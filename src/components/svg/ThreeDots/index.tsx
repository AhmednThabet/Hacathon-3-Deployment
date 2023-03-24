import type { SvgType } from "../../types";

export const ThreeDots: SvgType = ({
  id = "Layer_1",
  width,
  height,
  ...props
}) => {
  return (
    <svg
      id={id}
      data-name="Layer 1"
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 29.96 122.88"
      fill="currentcolor"
      {...props}
    >
      <defs></defs>
      <title>More actions</title>
      <path
        fill="currentcolor"
        d="M15,0A15,15,0,1,1,0,15,15,15,0,0,1,15,0Zm0,92.93a15,15,0,1,1-15,15,15,15,0,0,1,15-15Zm0-46.47a15,15,0,1,1-15,15,15,15,0,0,1,15-15Z"
      />
    </svg>
  );
};
