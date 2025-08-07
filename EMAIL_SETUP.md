# Email Setup Instructions (Resend)

This project uses Resend for sending emails, which is perfect for Vercel deployments.

## Step 1: Sign Up for Resend

1. Go to [resend.com](https://resend.com) and create a free account
2. Verify your email address
3. Get your API key from the dashboard

## Step 2: Create Environment File

Create a `.env.local` file in the root directory with the following content:

```env
# Resend API Key
RESEND_API_KEY=re_your_api_key_here

# Database URL (if not already set)
DATABASE_URL="file:./dev.db"
```

## Step 3: Set Up Environment Variables on Vercel

When deploying to Vercel, add this environment variable:

- `RESEND_API_KEY` = Your Resend API key (starts with `re_`)

## Step 4: Customize Sender Email (Optional)

By default, emails are sent from `onboarding@resend.dev`. To use your own domain:

1. Add your domain in Resend dashboard
2. Verify your domain
3. Update the `from` field in `app/api/contact/route.ts`

## Important Notes

- The contact form will send emails to `amar.2609@gmail.com`
- Resend offers 3,000 free emails per month
- No app passwords or complex setup required
- Perfect for serverless deployments

## Testing

After setting up the environment variables, restart your development server:

```bash
npm run dev
```

The contact form should now send emails when submitted.

## Benefits of Resend

- ✅ No app passwords needed
- ✅ Better deliverability
- ✅ Built for serverless functions
- ✅ Free tier (3,000 emails/month)
- ✅ Professional email service
- ✅ Easy setup 