type SidebarPopularPromptSvgProps = {
  color: string;
};

const SidebarPopularPromptSvg = ({ color }: SidebarPopularPromptSvgProps) => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 22 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M11 19.811H10.96C9.10945 19.8036 7.3374 19.0625 6.0326 17.7502C4.7278 16.4379 3.99682 14.6616 4.00001 12.811C4.0454 11.3097 4.49897 9.84903 5.31201 8.58604C5.47118 8.3267 5.70966 8.12553 5.99211 8.01234C6.27456 7.89914 6.58597 7.87995 6.88019 7.9576C7.1744 8.03525 7.43578 8.20561 7.62559 8.44345C7.8154 8.68128 7.92355 8.97393 7.93401 9.27804C8.00001 11.196 8.46101 13.487 10.27 13.511C10.616 13.5262 10.9549 13.4095 11.2183 13.1846C11.4816 12.9596 11.6498 12.6432 11.689 12.299C11.7038 11.5991 11.523 10.9089 11.167 10.306C10.6124 9.24675 10.3154 8.07163 10.3 6.87604C10.2977 5.84308 10.4594 4.81631 10.779 3.83404C10.8594 3.60204 11.0068 3.39912 11.2027 3.251C11.3985 3.10288 11.6339 3.01624 11.879 3.00204C12.1325 2.98959 12.3841 3.0521 12.6023 3.18174C12.8205 3.31139 12.9957 3.50244 13.106 3.73104C13.7138 4.84427 14.425 5.89791 15.23 6.87804C16.611 8.67104 18.038 10.525 18 12.818C17.9882 14.6697 17.2465 16.442 15.9359 17.7501C14.6253 19.0582 12.8517 19.7967 11 19.805V19.811Z"
      fill={color}
    />
  </svg>
);

export default SidebarPopularPromptSvg;
