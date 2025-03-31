import { Resend } from 'resend';
import * as Sentry from "@sentry/node";

// Initialize Sentry
Sentry.init({
  dsn: process.env.VITE_PUBLIC_SENTRY_DSN,
  environment: process.env.VITE_PUBLIC_APP_ENV,
  initialScope: {
    tags: {
      type: 'backend',
      projectId: process.env.VITE_PUBLIC_APP_ID
    }
  }
});

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    console.log('Received email send request:', req.body);
    
    const { name, email, company, description } = req.body;
    
    if (!name || !email || !description) {
      return res.status(400).json({ error: 'Missing required fields' });
    }
    
    const resend = new Resend(process.env.RESEND_API_KEY);
    
    const { data, error } = await resend.emails.send({
      from: 'ZAPT.AI <noreply@zapt.ai>',
      to: 'info@zapt.ai',
      subject: `Consultancy Request from ${name}`,
      html: `
        <h2>New Consultancy Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company || 'Not provided'}</p>
        <h3>Project Description:</h3>
        <p>${description}</p>
      `,
    });
    
    if (error) {
      console.error('Error sending email:', error);
      throw new Error(error.message);
    }
    
    console.log('Email sent successfully:', data);
    
    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Error in sendEmail API:', error);
    Sentry.captureException(error);
    return res.status(500).json({ error: error.message });
  }
}