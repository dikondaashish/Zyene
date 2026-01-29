'use server'

interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  message: string;
}

interface ActionResponse {
  success: boolean;
  message: string;
}

export async function submitContactForm(data: ContactFormData): Promise<ActionResponse> {
  const apiKey = process.env.WEB3FORMS_ACCESS_KEY;

  if (!apiKey) {
    console.error('WEB3FORMS_ACCESS_KEY is not defined in environment variables');
    return { success: false, message: 'Server configuration error' };
  }

  try {
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        access_key: apiKey,
        name: data.name,
        email: data.email,
        company: data.company,
        message: data.message,
        botcheck: false, // Hidden field for bot protection provided by Web3Forms
      }),
    });

    const result = await response.json();

    if (result.success) {
      return { success: true, message: result.message || 'Message sent successfully' };
    } else {
      console.error('Web3Forms error:', result);
      return { success: false, message: result.message || 'Failed to send message' };
    }
  } catch (error) {
    console.error('Submission error:', error);
    return { success: false, message: 'An unexpected error occurred' };
  }
}
