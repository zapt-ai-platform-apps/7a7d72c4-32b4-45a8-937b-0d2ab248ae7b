export default function FooterNavigation() {
  return (
    <div class="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
      <div class="flex space-x-6">
        <a
          href="https://www.linkedin.com/company/zapt-ai/"
          target="_blank"
          class="text-light-gray hover:text-neon-yellow transition duration-300"
        >
          <i class="fab fa-linkedin-in fa-lg"></i>
        </a>
        <a
          href="https://twitter.com/zapt_ai"
          target="_blank"
          class="text-light-gray hover:text-neon-yellow transition duration-300"
        >
          <i class="fab fa-twitter fa-lg"></i>
        </a>
        <a
          href="https://www.reddit.com/r/ZAPT/"
          target="_blank"
          class="text-light-gray hover:text-neon-yellow transition duration-300"
        >
          <i class="fab fa-reddit fa-lg"></i>
        </a>
        <a
          href="https://discord.gg/KwzvM7P7Xw"
          target="_blank"
          class="text-light-gray hover:text-neon-yellow transition duration-300"
        >
          <i class="fab fa-discord fa-lg"></i>
        </a>
      </div>
      <a
        href="mailto:info@zapt.ai"
        target="_blank"
        class="text-light-gray hover:text-neon-yellow transition duration-300"
      >
        info@zapt.ai
      </a>
      <a
        href="https://www.iubenda.com/terms-and-conditions/25363091"
        target="_blank"
        class="text-light-gray hover:text-neon-yellow transition duration-300"
      >
        Terms and Conditions
      </a>
      <a
        href="https://www.iubenda.com/privacy-policy/25363091"
        target="_blank"
        class="text-light-gray hover:text-neon-yellow transition duration-300"
      >
        Privacy Policy
      </a>
    </div>
  );
}