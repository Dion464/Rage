import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
  // Debug log to check environment variables
  console.log('Environment variables check:', {
    emailUser: process.env.EMAIL_USER,
    hasEmailPass: !!process.env.EMAIL_PASS
  });

  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    console.error('Missing environment variables:', {
      hasUser: !!process.env.EMAIL_USER,
      hasPass: !!process.env.EMAIL_PASS
    });
    return NextResponse.json({ 
      success: false, 
      error: 'Email configuration missing. Please check environment variables.' 
    }, { status: 500 });
  }

  try {
    const data = await request.json();
    
    // Create transporter with OAuth2
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        type: 'OAuth2',
        user: 'curridion31@gmail.com',
        clientId: '1234567890-abcdefghijklmnopqrstuvwxyz.apps.googleusercontent.com', // You need this
        clientSecret: 'ABCDEF-GHIJKLMNOP-1234567890', // You need this
        refreshToken: 'YOUR_REFRESH_TOKEN', // You need this
        accessToken: 'YOUR_ACCESS_TOKEN' // You need this
      }
    });

    const mailOptions = {
      from: 'curridion31@gmail.com',
      to: 'curridion31@gmail.com',
      subject: 'New Merchant Rebellion Form Submission',
      html: `
        <h2>New Form Submission</h2>
        <h3>Personal Information:</h3>
        <p>Name: ${data.firstName} ${data.lastName}</p>
        <p>Email: ${data.email}</p>
        <p>Phone: ${data.phone}</p>
        <p>Company: ${data.company}</p>
        
        <h3>Business Information:</h3>
        <p>Looking for payment processing: ${data.step1}</p>
        <p>US-based business: ${data.step2}</p>
        <p>Annual processing volume: ${data.step3}</p>
        <p>Business type: ${data.step4}</p>
        <p>Business model: ${data.step5}</p>
        <p>Job title: ${data.step6}</p>
      `
    };

    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Email error:', error);
    return NextResponse.json({ 
      success: false, 
      error: error.message 
    }, { status: 500 });
  }
}