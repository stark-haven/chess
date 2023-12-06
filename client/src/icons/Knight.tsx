import { IconProps } from ".";

// Credits to Noah Jacobs for the chess icons - https://noahjacob.us/
export const Knight = (props: IconProps) => {
  return (
    <svg
      width={props.width ? props.width : "40"}
      height={props.height ? props.height : "40"}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M2.68328 9.36656L4 12L2 14V16H14V14L10 9H14L15 5L9 2V0H8.47214C4.89767 0 2 2.89767 2 6.47214C2 7.4769 2.23394 8.46787 2.68328 9.36656ZM10 5C10 5.55228 9.55228 6 9 6C8.44772 6 8 5.55228 8 5C8 4.44772 8.44772 4 9 4C9.55228 4 10 4.44772 10 5Z"
        fill={props.color ? props.color : "#FFFFFF"}
      />
    </svg>
  );
};
