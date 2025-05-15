import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { name, email, subject, message } = data;
    
    // ในสถานการณ์จริง คุณจะส่งอีเมลด้วย service เช่น SendGrid, AWS SES, หรือเก็บลงฐานข้อมูล
    console.log('Contact Form Submission:', { name, email, subject, message });
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    return NextResponse.json({ 
      success: true,
      message: 'Message sent successfully!'
    });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { 
        success: false,
        message: 'An error occurred while sending your message.'
      },
      { status: 500 }
    );
  }
}