export default function NavigationLinks(props) {
  return (
    <>
      <li>
        <a
          href="https://home.zapt.ai/"
          class="text-light-gray hover:text-neon-yellow transition-colors cursor-pointer"
          onClick={() => {
            if (props.onLinkClick) props.onLinkClick();
            console.log('Login / Sign Up link clicked');
          }}
        >
          Login / Sign Up
        </a>
      </li>
      {/* Add more links here if needed */}
    </>
  );
}