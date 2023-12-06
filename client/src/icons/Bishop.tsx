import { IconProps } from ".";

// Credits to Noah Jacobs for the chess icons - https://noahjacob.us/
export const Bishop = (props: IconProps) => {
  return (
    <svg
      width={props.width ? props.width : "40"}
      height={props.height ? props.height : "40"}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.75926 7.65079L12.1268 3.72195L13.2712 5.72466C13.7488 6.5604 14 7.50631 14 8.46887C14 9.99625 13.3809 11.379 12.38 12.38L14 14V16H2V14L3.62003 12.38C2.61909 11.379 2 9.99625 2 8.46887C2 7.50631 2.2512 6.5604 2.72876 5.72466L6 0H10L11.0732 1.87805L7.24074 6.34921L8.75926 7.65079Z"
        fill={props.color ? props.color : "#FFFFFF"}
      />
    </svg>
  );
};
