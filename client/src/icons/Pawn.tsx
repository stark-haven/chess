import { IconProps } from ".";

// Credits to Noah Jacobs for the chess icons - https://noahjacob.us/
export const Pawn = (props: IconProps) => {
  return (
    <svg
      width={props.width ? props.width : "40"}
      height={props.height ? props.height : "40"}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11 3C11 3.76835 10.7111 4.46924 10.2361 5H12V7H10.5714L12 12L14 14V16H2V14L4 12L5.42857 7H4V5H5.76389C5.28885 4.46924 5 3.76835 5 3C5 1.34315 6.34315 0 8 0C9.65685 0 11 1.34315 11 3Z"
        fill={props.color ? props.color : "#FFFFFF"}
      />
    </svg>
  );
};
