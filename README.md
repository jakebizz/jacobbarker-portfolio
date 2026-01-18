# Jacob Barker - Portfolio

A modern, multimedia-focused portfolio website showcasing videojournalism work from CBC Windsor.

## Features

- **Projects Showcase** - Display video, audio, text, and interactive journalism pieces
- **About Page** - Professional bio and coverage areas
- **Blog** - Articles about journalism, storytelling, and process
- **Contact Form** - Get story tips and collaboration requests
- **Responsive Design** - Optimized for all devices
- **Media Optimized** - Configured for video, audio, and image content

## Tech Stack

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS
- React 19

## Getting Started

Install dependencies and run the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see your portfolio.

## Project Structure

- `app/` - Pages and routing (home, projects, about, blog, contact)
- `components/` - Reusable React components
- `public/` - Static assets (images, videos, etc.)

## Customization

### Adding Projects

Edit `app/projects/page.tsx` to add your journalism pieces. Each project can include:
- Title, description, and date
- Media type (video, audio, text, interactive)
- Tags and categories
- Links to published work

### Updating Content

- Homepage: `app/page.tsx`
- About page: `app/about/page.tsx`
- Blog posts: `app/blog/page.tsx`
- Contact info: `app/contact/page.tsx`

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
