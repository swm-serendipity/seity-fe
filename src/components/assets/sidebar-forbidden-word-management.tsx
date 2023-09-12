type SidebarForbiddenWordManagementSvgProps = {
  color: string;
  className?: string;
};

const SidebarForbiddenWordManagementSvg = ({
  color,
  ...props
}: SidebarForbiddenWordManagementSvgProps) => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 22 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19C15.4183 19 19 15.4183 19 11C18.9952 6.58369 15.4163 3.00478 11 3ZM11 5C12.2451 5.00012 13.4589 5.38991 14.4713 6.11466L6.11466 14.4707C4.19269 11.7776 4.81781 8.03638 7.51088 6.11441C8.52906 5.38778 9.74913 4.99809 11 5ZM11 17C9.75509 16.9999 8.54147 16.6102 7.52934 15.8853L15.8853 7.52869C17.8077 10.2215 17.1831 13.9628 14.4902 15.8851C13.4718 16.6121 12.2513 17.002 11 17Z"
      fill={color}
    />
  </svg>
);

export default SidebarForbiddenWordManagementSvg;
