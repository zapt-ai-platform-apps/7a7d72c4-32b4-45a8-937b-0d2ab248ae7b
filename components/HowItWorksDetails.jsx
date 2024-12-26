export default function Details() {
  return (
    <>
      <h2>What Happens in Each Step</h2>
      <ol>
        <li>
          <strong>Request an Update</strong>
          <ul>
            <li>
              <strong>User Interface:</strong>
              <ul>
                <li>Users can access a user-friendly form to specify the changes they wish to make.</li>
                <li>
                  The form includes fields for describing the update, selecting relevant options, and attaching any necessary files.
                </li>
              </ul>
            </li>
            <li>
              <strong>Backend Processing:</strong>
              <ul>
                <li>The update request is sent to the backend API.</li>
                <li>User authentication is verified to ensure secure processing of requests.</li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <strong>LLM Generates Code</strong>
          <ul>
            <li>
              <strong>Automated Processing:</strong>
              <ul>
                <li>The LLM interprets the user's update request.</li>
                <li>
                  Generates accurate and efficient code snippets based on the provided specifications.
                </li>
              </ul>
            </li>
            <li>
              <strong>Quality Assurance:</strong>
              <ul>
                <li>
                  The generated code undergoes automated testing to ensure functionality and compatibility.
                </li>
                <li>Any issues are flagged, and notifications are sent to the user for review.</li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <strong>Transparent Billing</strong>
          <ul>
            <li>
              <strong>Invoicing:</strong>
              <ul>
                <li>Users receive invoices detailing the API usage and associated costs.</li>
                <li>Invoices are accessible through the user dashboard for transparency.</li>
              </ul>
            </li>
            <li>
              <strong>Payment Processing:</strong>
              <ul>
                <li>
                  Payments are handled securely through integrated payment gateways.
                </li>
                <li>
                  Users can manage their billing information and view past invoices at any time.
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ol>

      <h2>User Interface and Experience</h2>
      <ul>
        <li>
          <strong>Clarity and Simplicity:</strong>
          <ul>
            <li>Each step is clearly defined with descriptive icons and concise text.</li>
            <li>
              The layout is clean and easy to navigate, ensuring users understand the process effortlessly.
            </li>
          </ul>
        </li>
        <li>
          <strong>Feedback and Notifications:</strong>
          <ul>
            <li>
              Users receive real-time notifications about the status of their update requests.
            </li>
            <li>Progress indicators show the current stage of processing.</li>
          </ul>
        </li>
        <li>
          <strong>Accessibility:</strong>
          <ul>
            <li>All interactive elements are accessible via keyboard navigation.</li>
            <li>
              ARIA labels are used to support screen readers, ensuring the section is usable by all users.
            </li>
          </ul>
        </li>
      </ul>

      <h2>Important Information and Warnings</h2>
      <ul>
        <li>
          <strong>Data Security:</strong>
          <ul>
            <li>
              All update requests are processed securely, ensuring user data integrity and confidentiality.
            </li>
          </ul>
        </li>
        <li>
          <strong>Cost Transparency:</strong>
          <ul>
            <li>Users are informed about the costs associated with their requests upfront.</li>
            <li>There are no hidden fees; users pay only for the actual API usage.</li>
          </ul>
        </li>
        <li>
          <strong>Support:</strong>
          <ul>
            <li>
              If users encounter issues during the update process, they can reach out to support via the provided contact channels.
            </li>
          </ul>
        </li>
      </ul>

      <h2>Benefits of Understanding "How It Works"</h2>
      <ul>
        <li>
          <strong>Enhanced Trust:</strong>
          <ul>
            <li>
              Users gain confidence in the platform by understanding the transparent and efficient update process.
            </li>
          </ul>
        </li>
        <li>
          <strong>Informed Decisions:</strong>
          <ul>
            <li>
              Clear information about billing helps users manage their budgets and plan future updates accordingly.
            </li>
          </ul>
        </li>
        <li>
          <strong>Improved User Experience:</strong>
          <ul>
            <li>
              A well-explained process reduces confusion and enhances overall satisfaction with the platform.
            </li>
          </ul>
        </li>
      </ul>
    </>
  );
}