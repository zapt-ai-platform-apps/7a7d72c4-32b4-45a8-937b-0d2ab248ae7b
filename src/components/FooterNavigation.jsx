import { FaBrandsLinkedinIn, FaBrandsTwitter } from 'solid-icons/fa';

export default function FooterNavigation() {
  return (
    <div class="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
      <div class="flex space-x-6">
        <a
          href="https://www.linkedin.com/company/zapt-ai/"
          target="_blank"
          class="text-white hover:text-neon-yellow transition duration-300 cursor-pointer"
        >
          <FaBrandsLinkedinIn size={24} class="text-current" />
        </a>
        <a
          href="https://twitter.com/zapt_ai"
          target="_blank"
          class="text-white hover:text-neon-yellow transition duration-300 cursor-pointer"
        >
          <FaBrandsTwitter size={24} class="text-current" />
        </a>
      </div>
      <a
        href="mailto:info@zapt.ai"
        target="_blank"
        class="text-white hover:text-neon-yellow transition duration-300 cursor-pointer"
      >
        info@zapt.ai
      </a>
      <a
        href="https://www.iubenda.com/terms-and-conditions/25363091"
        target="_blank"
        class="text-white hover:text-neon-yellow transition duration-300 cursor-pointer"
      >
        Terms and Conditions
      </a>
      <a
        href="https://www.iubenda.com/privacy-policy/25363091"
        target="_blank"
        class="text-white hover:text-neon-yellow transition duration-300 cursor-pointer"
      >
        Privacy Policy
      </a>
    </div>
  );
}