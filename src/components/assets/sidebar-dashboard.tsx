type SidebarDashboardSvgProps = {
  color: string;
  className?: string;
};

const SidebarDashboardSvg = ({ color, ...props }: SidebarDashboardSvgProps) => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 22 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect x="4" y="4" width="6" height="6" rx="2" fill={color} />
    <rect x="4" y="12" width="6" height="6" rx="2" fill={color} />
    <rect x="12" y="4" width="6" height="6" rx="2" fill={color} />
    <rect x="12" y="12" width="6" height="6" rx="2" fill={color} />
  </svg>
);

export default SidebarDashboardSvg;
