export default function HamburgerIcon(props) {
  return (
    <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        class={`${props.isOpen() ? 'hidden' : 'block'}`}
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M4 8h16M4 16h16"
      />
      <path
        class={`${props.isOpen() ? 'block' : 'hidden'}`}
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  );
}