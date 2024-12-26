export default function Steps() {
  return (
    <>
      <h2>Steps</h2>
      <ol>
        <li>
          <strong>Request an Update</strong>
          <ul>
            <li><strong>Icon:</strong> Gear or tool symbol.</li>
            <li>
              <strong>Description:</strong> Submit a request to update your app using our intuitive interface.
            </li>
          </ul>
          <h4>Action:</h4>
          <ul>
            <li>Navigate to the "How It Works" section on the landing page.</li>
            <li>Click on the "Request an Update" button.</li>
            <li>Fill in the necessary details about the changes you want to make to your app.</li>
            <li>Click "Submit" to send your update request.</li>
          </ul>
        </li>
        <li>
          <strong>LLM Generates Code</strong>
          <ul>
            <li><strong>Icon:</strong> Artificial Intelligence or robot symbol.</li>
            <li>
              <strong>Description:</strong> Our advanced LLM processes your request and generates the updated code seamlessly.
            </li>
          </ul>
          <h4>Action:</h4>
          <ul>
            <li>Once your request is submitted, our backend system receives the update details.</li>
            <li>
              The Large Language Model (LLM) analyzes your request and generates the corresponding code changes.
            </li>
            <li>
              You can monitor the progress of your request in the "My Updates" section of your account dashboard.
            </li>
          </ul>
        </li>
        <li>
          <strong>Transparent Billing</strong>
          <ul>
            <li><strong>Icon:</strong> Wallet or dollar sign symbol.</li>
            <li>
              <strong>Description:</strong> You are only charged for the API costs associated with the changes, ensuring you pay solely for what you use.
            </li>
          </ul>
          <h4>Action:</h4>
          <ul>
            <li>After the code is generated and the update is applied, you will receive a detailed invoice.</li>
            <li>The invoice lists the API costs incurred for processing your update.</li>
            <li>
              Payment is processed automatically, and you can view your billing history in the "Billing" section of your account.
            </li>
          </ul>
        </li>
      </ol>
    </>
  );
}