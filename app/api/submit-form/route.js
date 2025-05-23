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
                <img src="https://rage-neon.vercel.app/hero1.png" alt="Merchant Rebellion" style="width: 180px; height: auto; margin-bottom: 20px; display: block; margin-left: auto; margin-right: auto;">
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
                    <td style="padding: 12px 0; color: #1EEB7A; border-bottom: 1px solid rgba(30, 235, 122, 0.2);">Annual Processing Volume</td>
                    <td style="padding: 12px 0; color: white; border-bottom: 1px solid rgba(30, 235, 122, 0.2);">${data.step3 || 'Not specified'}</td>
                  </tr>
                  <tr>
                    <td style="padding: 12px 0; color: #1EEB7A; border-bottom: 1px solid rgba(30, 235, 122, 0.2);">Business Type</td>
                    <td style="padding: 12px 0; color: white; border-bottom: 1px solid rgba(30, 235, 122, 0.2);">${data.step4 || 'Not specified'}</td>
                  </tr>
                  <tr>
                    <td style="padding: 12px 0; color: #1EEB7A; border-bottom: 1px solid rgba(30, 235, 122, 0.2);">E-Commerce Type</td>
                    <td style="padding: 12px 0; color: white; border-bottom: 1px solid rgba(30, 235, 122, 0.2);">${data.step5 || 'Not specified'}</td>
                  </tr>
                  <tr>
                    <td style="padding: 12px 0; color: #1EEB7A; border-bottom: 1px solid rgba(30, 235, 122, 0.2);">Years in Business</td>
                    <td style="padding: 12px 0; color: white; border-bottom: 1px solid rgba(30, 235, 122, 0.2);">${data.step7 || 'Not specified'}</td>
                  </tr>
                  <tr>
                    <td style="padding: 12px 0; color: #1EEB7A;">Job Title</td>
                    <td style="padding: 12px 0; color: white;">${data.step6 || 'Not specified'}</td>
                  </tr>
                </table>

              
                
                </div>
              </div>
            </div>

           
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
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      },
      tls: {
        rejectUnauthorized: true
      }
    });

    // Verify SMTP connection configuration
    try {
      await transporter.verify();
      console.log('SMTP connection verified successfully');
    } catch (verifyError) {
      console.error('SMTP Verification failed:', verifyError);
      return NextResponse.json({ 
        success: false, 
        error: 'Email server connection failed' 
      }, { status: 500 });
    }

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: [" inquiries@merchantrebellion.com , Josh@merchantrebellion.com , Corey@merchantrebellion.com , Sergio@merchantrebellion.com , Harley@merchantrebellion.com , dion@timeless.nyc"],
      subject: 'New Merchant Rebellion Application',
      html: htmlContent,
    };

    try {
      const info = await transporter.sendMail(mailOptions);
      console.log('Email sent successfully:', info);
      return NextResponse.json({ success: true });
    } catch (emailError) {
      console.error('Failed to send email:', {
        error: emailError.message,
        code: emailError.code,
        command: emailError.command
      });
      return NextResponse.json({ 
        success: false, 
        error: 'Failed to send email: ' + emailError.message 
      }, { status: 500 });
    }
  } catch (error) {
    console.error('Form submission error:', error);
    return NextResponse.json({ success: false, error: 'Failed to process form' }, { status: 500 });
  }
} 