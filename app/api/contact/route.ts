import { NextResponse } from "next/server";
import { ContactFormData } from "@/types";
import { validateContactForm } from "@/lib/validations";

export async function POST(request: Request) {
  try {
    const body: ContactFormData = await request.json();

    // Validate the form data
    const validation = validateContactForm(body);
    if (!validation.isValid) {
      return NextResponse.json(
        { error: "Validation failed", errors: validation.errors },
        { status: 400 }
      );
    }

    // Here you would typically:
    // 1. Send an email notification
    // 2. Store in a database
    // 3. Integrate with a CRM
    // For now, we'll just log it and return success
    console.log("Contact form submission:", body);

    // You can integrate with email services like:
    // - SendGrid
    // - Resend
    // - AWS SES
    // - Nodemailer
    // Example:
    // await sendEmail({
    //   to: "hello@nexio-solutions.tech",
    //   subject: `New ${body.projectType} inquiry from ${body.name}`,
    //   html: `
    //     <h2>New Contact Form Submission</h2>
    //     <p><strong>Name:</strong> ${body.name}</p>
    //     <p><strong>Email:</strong> ${body.email}</p>
    //     <p><strong>Project Type:</strong> ${body.projectType}</p>
    //     <p><strong>Budget:</strong> ${body.budget}</p>
    //     <p><strong>Message:</strong> ${body.message}</p>
    //   `,
    // });

    return NextResponse.json(
      { message: "Form submitted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
