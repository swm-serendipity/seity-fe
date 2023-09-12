type SidebarStatsticsSvgProps = {
  color: string;
  className?: string;
};

const SidebarStatsticsSvg = ({ color, ...props }: SidebarStatsticsSvgProps) => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 22 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect x="4" y="10" width="3" height="8" rx="1" fill={color} />
    <rect x="9" y="4" width="3" height="14" rx="1" fill={color} />
    <rect x="14" y="8" width="3" height="10" rx="1" fill={color} />
  </svg>
);

export default SidebarStatsticsSvg;
