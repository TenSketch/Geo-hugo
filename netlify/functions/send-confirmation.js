const sgMail = require('@sendgrid/mail');

exports.handler = async (event) => {
  const payload = JSON.parse(event.body).payload;
  
  const name = payload.data.Name;
  const email = payload.data.Email;  // Add Email field in your form!
  const service = payload.data.Service;
  const contact = payload.data["Contact #"];

  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  const msg = {
    to: email,
    from: 'yourstudio@yourdomain.com',
    subject: `Tattoo Appointment Confirmation`,
    html: `
      <p>Hi ${name},</p>
      <p>Thank you for booking an appointment for <strong>${service}</strong>.</p>
      <p>We will contact you at ${contact} soon.</p>
      <p>Love, <br> Your Tattoo Studio Team</p>
    `,
  };

  try {
    await sgMail.send(msg);
    return { statusCode: 200, body: "Confirmation email sent!" };
  } catch (error) {
    console.error(error);
    return { statusCode: 500, body: "Failed to send email." };
  }
};
