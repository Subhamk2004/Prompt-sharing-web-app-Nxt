import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
// do checkout next js docs for more on layout.js


// anythng we do here wil be visible on all the pages of our next app



// Certainly. The layout.js file in Next.js is a crucial component of the app router introduced in Next.js 13. It allows you to define a common layout that wraps multiple pages, providing a consistent structure across your application. Here's a detailed explanation:

// Purpose: The main layout.js file defines the UI that is shared between multiple pages. This can include elements like headers, footers, navigation menus, or any other components that should appear on every page.
// Location: It's typically placed in the app directory. For example: app/layout.js.
// Key Features:

// It wraps the children prop, which represents the page content.
// It must return a <html> and <body> tag.
// It's the top-most layout in your application.
// Server Components:
// By default, layout.js is a Server Component, but you can make it a Client Component by adding 'use client'; at the top if needed.
// Nesting:
// You can create nested layouts by adding layout.js files in subdirectories.
// Static Rendering:
// Layouts are statically rendered by default, improving performance.
// Data Fetching:
// You can fetch data in layouts, and this data will be accessible to all pages that use this layout.
// Styling:
// It's a common place to import global styles that apply to your entire application.


// The layout.js file is powerful because it allows you to maintain a consistent structure across your app while keeping your page components focused on their specific content. It's an essential part of creating well-structured, maintainable Next.js applications.