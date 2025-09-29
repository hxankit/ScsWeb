import { Resend } from 'resend';

// Initialize Resend client using the API key from environment variables
// Ensure RESEND_API_KEY is set in your .env file
const resend = new Resend(process.env.RESEND_API_KEY);

export const contactDetails = async (req, res) => {
  const { name, email, mobile, message } = req.body;

  // Basic validation
  if (!name || !email || !mobile || !message) {
    return res.status(400).json({ error: "All fields are required." });
  }

  try {
    
    const resendMailOptions = {
      from: "onboarding@resend.dev", 
      
      to: process.env.EMAIL_RECEIVER,
      
      subject: "📩 New Inquiry from Website Contact Form",

      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
          <h2 style="color: #2E86C1;">New Contact Request Received</h2>

          <p>You have received a new inquiry through the SCS Technologies website contact form. Below are the details submitted by the user:</p>

          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px; font-weight: bold; width: 120px;">Name:</td>
              <td style="padding: 8px;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px; font-weight: bold;">Email:</td>
              <td style="padding: 8px;">${email}</td>
            </tr>
            <tr>
              <td style="padding: 8px; font-weight: bold;">Mobile:</td>
              <td style="padding: 8px;">${mobile}</td>
            </tr>
            <tr>
              <td style="padding: 8px; font-weight: bold;">Message:</td>
              <td style="padding: 8px;">${message}</td>
            </tr>
          </table>

          <p style="margin-top: 20px;">Please reach out to the individual as soon as possible.</p>

          <hr style="margin-top: 30px;">
          <p style="font-size: 12px; color: #888;">This message was sent automatically by your website’s contact system. Please do not reply to this email.</p>
        </div>
      `,
    };

    await resend.emails.send(resendMailOptions);

    return res.status(200).json({ message: "Your message has been sent successfully!" });
  } catch (error) {
    console.error("❌ Error sending email:", error.name || error);
    return res.status(500).json({ error: "Failed to send email." });
  }
};


export const testApi = (req, res) => {
  res.json("API Working fine");
};