import { createSignal } from 'solid-js';
import HamburgerIcon from './HamburgerIcon';
import NavigationLinks from './NavigationLinks';

export default function NavigationMenu() {
  const [isOpen, setIsOpen] = createSignal(false);

  const toggleMenu = (e) => {
    if (e.type === 'click' || e.key === 'Enter' || e.key === ' ') {
      setIsOpen(!isOpen());
    }
  };

  return (
    <nav class="relative" aria-label="Main Navigation">
      <div class="flex items-center justify-between p-6">
        <img
          src="https://supabase.zapt.ai/storage/v1/render/image/public/icons/7a7d72c4-32b4-45a8-937b-0d2ab248ae7b/95f5ce22-ae3f-4ad8-af77-d0c3884ee556.png?width=512&height=512"
          alt="ZAPT Logo"
          class="h-10 cursor-pointer"
        />
        <button
          class="text-white md:hidden focus:outline-none"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen() ? 'true' : 'false'}
          onClick={toggleMenu}
          onKeyDown={toggleMenu}
          tabindex="0"
        >
          <HamburgerIcon isOpen={isOpen} />
        </button>
        <ul class="hidden md:flex space-x-6">
          <NavigationLinks />
        </ul>
      </div>
      <div class={`md:hidden ${isOpen() ? 'block' : 'hidden'}`}>
        <ul
          class="absolute top-full left-0 w-full bg-dark-navy text-white flex flex-col items-center space-y-4 py-4"
          role="menu"
        >
          <NavigationLinks onLinkClick={() => setIsOpen(false)} />
        </ul>
      </div>
    </nav>
  );
}