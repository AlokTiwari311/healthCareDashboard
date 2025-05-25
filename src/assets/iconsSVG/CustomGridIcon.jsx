// components/icons/CustomGridIcon.jsx
const CustomGridIcon = (props) => (
    <svg
        width="24"
        height="24"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <rect x="5" y="5" width="10" height="10" rx="2" fill="#001F77" />
        <rect x="20" y="5" width="10" height="10" rx="2" fill="#D3D3D3" />
        <rect x="5" y="20" width="10" height="10" rx="2" fill="#001F77" />
        <rect x="20" y="20" width="10" height="10" rx="2" fill="#001F77" />
    </svg>
);

export default CustomGridIcon;
