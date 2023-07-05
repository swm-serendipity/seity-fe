type SidebarChatSvgProps = {
  color: string;
  className?: any;
};

const SidebarChatSvg = ({ color, ...props }: SidebarChatSvgProps) => (
  <svg
    width="14"
    height="15"
    viewBox="0 0 14 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M14.0007 6.575C13.9164 5.20999 13.4344 3.8995 12.6143 2.80508C11.7942 1.71066 10.6717 0.880162 9.38531 0.41597C8.09889 -0.0482222 6.70475 -0.125813 5.37477 0.192762C4.04478 0.511337 2.8371 1.21215 1.9006 2.20881C0.9641 3.20546 0.33973 4.45438 0.104463 5.8016C-0.130803 7.14882 0.0333196 8.53544 0.576597 9.79051C1.11988 11.0456 2.01856 12.1142 3.16185 12.8647C4.30514 13.6152 5.64307 14.0147 7.01067 14.014H11.0837C11.857 14.0135 12.5985 13.7061 13.1454 13.1594C13.6923 12.6127 13.9999 11.8713 14.0007 11.098V6.575ZM12.8337 11.097C12.8337 11.5611 12.6493 12.0062 12.3211 12.3344C11.9929 12.6626 11.5478 12.847 11.0837 12.847H7.00967C6.18656 12.8467 5.37275 12.6728 4.62133 12.3368C3.86991 12.0008 3.19775 11.5102 2.64867 10.897C2.09645 10.2845 1.68157 9.56105 1.43183 8.7751C1.18209 7.98916 1.10328 7.1589 1.20067 6.34C1.3547 5.0471 1.93508 3.84236 2.85013 2.91609C3.76518 1.98981 4.96275 1.39478 6.25367 1.225C6.50511 1.19343 6.75826 1.1774 7.01167 1.177C8.37188 1.17507 9.68931 1.65233 10.7327 2.525C11.3426 3.03189 11.8432 3.65737 12.2042 4.36352C12.5652 5.06966 12.779 5.84176 12.8327 6.633L12.8337 11.097Z"
      fill={color}
    />
    <path
      d="M4.66651 5.26514H7.00051C7.15526 5.26514 7.30368 5.20367 7.4131 5.09424C7.52253 4.98481 7.58401 4.8364 7.58401 4.68164C7.58401 4.52689 7.52253 4.37848 7.4131 4.26905C7.30368 4.15962 7.15526 4.09814 7.00051 4.09814H4.66651C4.51175 4.09814 4.36334 4.15962 4.25391 4.26905C4.14448 4.37848 4.08301 4.52689 4.08301 4.68164C4.08301 4.8364 4.14448 4.98481 4.25391 5.09424C4.36334 5.20367 4.51175 5.26514 4.66651 5.26514Z"
      fill={color}
    />
    <path
      d="M9.33351 6.43115H4.66651C4.51175 6.43115 4.36334 6.49263 4.25391 6.60206C4.14448 6.71148 4.08301 6.8599 4.08301 7.01465C4.08301 7.16941 4.14448 7.31782 4.25391 7.42725C4.36334 7.53668 4.51175 7.59815 4.66651 7.59815H9.33351C9.48826 7.59815 9.63668 7.53668 9.7461 7.42725C9.85553 7.31782 9.91701 7.16941 9.91701 7.01465C9.91701 6.8599 9.85553 6.71148 9.7461 6.60206C9.63668 6.49263 9.48826 6.43115 9.33351 6.43115Z"
      fill={color}
    />
    <path
      d="M9.33351 8.76416H4.66651C4.51175 8.76416 4.36334 8.82564 4.25391 8.93506C4.14448 9.04449 4.08301 9.19291 4.08301 9.34766C4.08301 9.50241 4.14448 9.65083 4.25391 9.76026C4.36334 9.86968 4.51175 9.93116 4.66651 9.93116H9.33351C9.48826 9.93116 9.63668 9.86968 9.7461 9.76026C9.85553 9.65083 9.91701 9.50241 9.91701 9.34766C9.91701 9.19291 9.85553 9.04449 9.7461 8.93506C9.63668 8.82564 9.48826 8.76416 9.33351 8.76416Z"
      fill={color}
    />
  </svg>
);

export default SidebarChatSvg;
