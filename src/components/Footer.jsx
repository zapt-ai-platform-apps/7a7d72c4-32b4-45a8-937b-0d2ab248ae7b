import FooterInfo from './FooterInfo';
import FooterNavigation from './FooterNavigation';

export default function Footer() {
  return (
    <footer class="w-full bg-dark-navy py-8">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col md:flex-row justify-between items-center gap-8">
          <FooterInfo />
          <FooterNavigation />
        </div>
        <div class="text-center mt-4">
          <a
            href="https://www.zapt.ai"
            target="_blank"
            rel="noopener noreferrer"
            class="text-light-gray hover:text-neon-yellow transition-colors underline"
          >
            Made on ZAPT
          </a>
        </div>
      </div>
    </footer>
  );
}