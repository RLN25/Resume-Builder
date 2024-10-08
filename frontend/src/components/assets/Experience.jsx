export default function Experience({ isHover, isActive }) {
  return (
    <div>
      <svg
        width="30"
        height="30"
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M25 7.5H20V5C20 3.6125 18.8875 2.5 17.5 2.5H12.5C11.1125 2.5 10 3.6125 10 5V7.5H5C3.6125 7.5 2.5125 8.6125 2.5125 10L2.5 23.75C2.5 25.1375 3.6125 26.25 5 26.25H25C26.3875 26.25 27.5 25.1375 27.5 23.75V10C27.5 8.6125 26.3875 7.5 25 7.5ZM17.5 7.5H12.5V5H17.5V7.5Z"
          fill={isActive ? "white" : "#4E4D4D"}
        />
      </svg>
    </div>
  );
}
