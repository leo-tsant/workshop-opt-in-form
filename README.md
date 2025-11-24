# Design Loop - Access Request Form

A simple React application for requesting access to Design Loop. Built with React, TypeScript, Vite, and Tailwind CSS.

## Features

- 📝 Simple opt-in form with validation
- 🎨 Glass morphism design with purple theme
- 📹 Video section placeholder
- ✅ Success/error message handling
- 🔗 Webhook integration for form submission
- 📱 Responsive design

## Form Fields

- First Name (required)
- Last Name (required)
- Email (required, validated)
- LinkedIn Profile URL (required, validated)

## Setup

1. Install dependencies:
```bash
npm install
```

2. Configure your webhook URL in `.env`:
```bash
VITE_WEBHOOK_URL=https://your-webhook-url.com/endpoint
```

3. Start the development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

## Project Structure

```
src/
├── components/
│   ├── Header.tsx          # Header with title and subtitle
│   ├── VideoSection.tsx    # Video placeholder section
│   ├── OptInForm.tsx       # Main form component
│   └── Footer.tsx          # Footer component
├── App.tsx                 # Main app layout
├── main.tsx                # React entry point
└── index.css               # Global styles and theme
```

## Customization

### Update Header Text

Edit `src/components/Header.tsx` to change the header and subheader text.

### Add Video

Replace the placeholder in `src/components/VideoSection.tsx` with your video embed code.

### Styling

The color scheme and styling can be customized in `src/index.css` using CSS variables:

```css
:root {
  --primary-purple: #9D4EDD;
  --secondary-purple: #B162F1;
  --accent-purple-light: #C77DFF;
  --accent-purple-dark: #7B2CBF;
  --background: #030C1B;
  --text-primary: #F1F5F9;
  --text-secondary: #94A3B8;
}
```

## Deployment

This project can be deployed to any static hosting service:

- Netlify
- Vercel
- GitHub Pages
- AWS S3 + CloudFront

Make sure to set the `VITE_WEBHOOK_URL` environment variable in your hosting platform's settings.

## License

MIT
