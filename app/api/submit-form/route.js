import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    console.error('Missing environment variables:', {
      hasUser: !!process.env.EMAIL_USER,
      hasPass: !!process.env.EMAIL_PASS
    });
    return NextResponse.json({ 
      success: false, 
      error: 'Email configuration missing' 
    }, { status: 500 });
  }

  try {
    const data = await request.json();
    
    // Add a preview parameter check
    const isPreview = request.headers.get('x-preview-email') === 'true';
    
    
    // Create an HTML template for the email with better styling
    const htmlContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap');
          </style>
        </head>
        <body style="margin: 0; padding: 0; background-color: #0A3B2E; font-family: 'Inter', sans-serif;">
          <div style="max-width: 600px; margin: 0 auto; padding: 40px 20px;">
            <!-- Main Card -->
            <div style="background-color: rgba(30, 235, 122, 0.1); border-radius: 16px; overflow: hidden;">
              <!-- Header -->
              <div style="background-color: #000000; padding: 30px; text-align: center;">
                <img src="https://rage-neon.vercel.app/mailer.png" alt="Merchant Rebellion" style="width: 180px; margin-bottom: 20px;">
                <h1 style="color: #1EEB7A; font-size: 28px; margin: 0;">New Rebellion Application</h1>
              </div>

              <!-- Content -->
              <div style="padding: 30px;">
                <table style="width: 100%; border-collapse: collapse;">
                  <tr>
                    <td style="padding: 12px 0; color: #1EEB7A; width: 180px; border-bottom: 1px solid rgba(30, 235, 122, 0.2);">Full Name</td>
                    <td style="padding: 12px 0; color: white; border-bottom: 1px solid rgba(30, 235, 122, 0.2);">${data.firstName} ${data.lastName}</td>
                  </tr>
                  <tr>
                    <td style="padding: 12px 0; color: #1EEB7A; border-bottom: 1px solid rgba(30, 235, 122, 0.2);">Email</td>
                    <td style="padding: 12px 0; color: white; border-bottom: 1px solid rgba(30, 235, 122, 0.2);">${data.email}</td>
                  </tr>
                  <tr>
                    <td style="padding: 12px 0; color: #1EEB7A; border-bottom: 1px solid rgba(30, 235, 122, 0.2);">Phone</td>
                    <td style="padding: 12px 0; color: white; border-bottom: 1px solid rgba(30, 235, 122, 0.2);">${data.phone}</td>
                  </tr>
                  <tr>
                    <td style="padding: 12px 0; color: #1EEB7A; border-bottom: 1px solid rgba(30, 235, 122, 0.2);">Company</td>
                    <td style="padding: 12px 0; color: white; border-bottom: 1px solid rgba(30, 235, 122, 0.2);">${data.company}</td>
                  </tr>
                  <tr>
                    <td style="padding: 12px 0; color: #1EEB7A; border-bottom: 1px solid rgba(30, 235, 122, 0.2);">Payment Processing</td>
                    <td style="padding: 12px 0; color: white; border-bottom: 1px solid rgba(30, 235, 122, 0.2);">${data.step1 === 'yes' ? 'Yes' : 'No'}</td>
                  </tr>
                  <tr>
                    <td style="padding: 12px 0; color: #1EEB7A; border-bottom: 1px solid rgba(30, 235, 122, 0.2);">US-Based Business</td>
                    <td style="padding: 12px 0; color: white; border-bottom: 1px solid rgba(30, 235, 122, 0.2);">${data.step2 === 'yes' ? 'Yes' : 'No'}</td>
                  </tr>
                  <tr>
                    <td style="padding: 12px 0; color: #1EEB7A; border-bottom: 1px solid rgba(30, 235, 122, 0.2);">Business Type</td>
                    <td style="padding: 12px 0; color: white; border-bottom: 1px solid rgba(30, 235, 122, 0.2);">${data.step5 || 'Not specified'}</td>
                  </tr>
                  <tr>
                    <td style="padding: 12px 0; color: #1EEB7A;">Job Title</td>
                    <td style="padding: 12px 0; color: white;">${data.step6 || 'Not specified'}</td>
                  </tr>
                </table>

                <!-- Call to Action -->
                <div style="margin-top: 30px; text-align: center; padding-top: 20px; border-top: 1px solid rgba(30, 235, 122, 0.2);">
                  <p style="color: white; margin: 0 0 15px; font-size: 16px;">
                    For immediate assistance, contact our U.S.-based concierge service
                  </p>
                  <a href="tel:18009411544" style="display: inline-block; background-color: #1EEB7A; color: #0A3B2E; text-decoration: none; padding: 12px 30px; border-radius: 24px; font-weight: bold; font-size: 16px;">
                    Call 1 (800) 941-1544
                  </a>
                </div>
              </div>
            </div>

            <!-- Footer -->
            <div style="text-align: center; margin-top: 20px;">
              <p style="color: #1EEB7A; margin: 0; font-size: 14px;">
                Supported by Transaction Acceptance Corp.
              </p>
            </div>
          </div>
        </body>
      </html>
    `;

    // If preview mode, return the HTML content directly
    if (isPreview) {
      return NextResponse.json({ 
        success: true, 
        preview: htmlContent 
      });
    }

    // Otherwise, proceed with sending email
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    // Get the absolute path to the SVG file and convert to base64
   

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: 'New Merchant Rebellion Application',
      html: htmlContent,
      
    };

    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Form submission error:', error);
    return NextResponse.json({ success: false, error: 'Failed to process form' }, { status: 500 });
  }
} 