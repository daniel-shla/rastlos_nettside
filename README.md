This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Mobile Optimizations

This project includes several optimizations for mobile users:

### Performance Improvements
- **Lazy Loading Images**: Using `ImageWithLazyLoading` component to defer loading of off-screen images
- **Optimized Assets**: Removal of unused image files to reduce bundle size

### User Experience Enhancements
- **Mobile-specific CSS**: Dedicated stylesheet (`mobile-enhancements.css`) with mobile-specific improvements
- **Touch-friendly Elements**: Larger touch targets for buttons and interactive elements
- **Swipe Gestures**: Image galleries support swipe navigation via the `SwipeHandler` component
- **Back-to-Top Button**: Mobile users can easily return to the top of long pages

### Accessibility
- **Improved Typography**: Enhanced readability on smaller screens
- **Better Form Elements**: Optimized input fields that prevent unwanted zooming on iOS
- **Page Indicators**: Visual indicators for paginated content

To disable any of these optimizations, you can remove the import for `mobile-enhancements.css` from `app/layout.tsx`.
