export default function FeaturesSection() {
  return (
    <div class="bg-dark-navy text-light-gray py-16">
      <div class="max-w-6xl mx-auto px-6">
        <div class="text-center mb-12">
          <h3 class="text-4xl font-semibold">
            Why Choose ZAPT?
          </h3>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div class="flex flex-col items-center">
            <img src="https://images.unsplash.com/photo-1579273166629-ef19c29b11fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NjQ4Nzh8MHwxfHNlYXJjaHw1fHxJbGx1c3RyYXRpb24lMjByZXByZXNlbnRpbmclMjBBSS1wb3dlcmVkJTIwZGV2ZWxvcG1lbnR8ZW58MHx8fHwxNzM0NDUwNTQ1fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="AI-Powered Development" class="w-24 h-24 mb-6" data-image-request="Illustration representing AI-powered development" />
            <h3 class="text-2xl font-semibold mb-4">AI-Powered Development</h3>
            <p class="text-lg text-center">
              Using AI, our platform lets users create apps just by describing their ideas in plain English.
            </p>
          </div>
          <div class="flex flex-col items-center">
            <img src="https://images.unsplash.com/photo-1578924824780-b7c49930e310?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NjQ4Nzh8MHwxfHNlYXJjaHw3fHxJbGx1c3RyYXRpb24lMjBvZiUyMGElMjBwZXJzb24lMjBjcmVhdGluZyUyMHNvbWV0aGluZyUyMGVhc2lseSUyMHdpdGhvdXQlMjBjb2Rpbmd8ZW58MHx8fHwxNzM0NDUwNTQ2fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="No Technical Skills Required" class="w-24 h-24 mb-6" data-image-request="Illustration of a person creating something easily without coding" />
            <h3 class="text-2xl font-semibold mb-4">No Technical Skills Required</h3>
            <p class="text-lg text-center">
              Users simply tell ZAPT what they want to create, and our platform handles all the technical complexity automatically—like databases, user accounts, and payment systems.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}