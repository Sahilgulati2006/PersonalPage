# Deployment Guide

Your portfolio is ready to deploy! Here are three easy options:

## Option 1: Vercel (Recommended - Easiest)

Vercel is made by the creators of Next.js and offers the best experience:

1. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Personal portfolio"
   git branch -M main
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

2. **Deploy on Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js settings
   - Click "Deploy"
   - Done! Your site will be live in ~2 minutes

3. **Custom Domain (Optional):**
   - In Vercel dashboard, go to Settings → Domains
   - Add your custom domain
   - Follow DNS configuration instructions

## Option 2: Netlify

1. **Build your site:**
   ```bash
   npm run build
   ```

2. **Deploy:**
   - Go to [app.netlify.com](https://app.netlify.com)
   - Drag and drop the `out` folder
   - Done!

   Or connect to GitHub:
   - Click "Add new site" → "Import an existing project"
   - Connect your GitHub repository
   - Build command: `npm run build`
   - Publish directory: `out`

## Option 3: GitHub Pages

1. **Update next.config.js** (if deploying to username.github.io/repo):
   ```javascript
   const nextConfig = {
     output: 'export',
     basePath: '/your-repo-name',
     images: {
       unoptimized: true,
     },
   };
   ```

2. **Build and deploy:**
   ```bash
   npm run build
   git add out -f
   git commit -m "Deploy to GitHub Pages"
   git subtree push --prefix out origin gh-pages
   ```

3. **Enable GitHub Pages:**
   - Go to repository Settings → Pages
   - Source: Deploy from branch `gh-pages`
   - Save

## Customizing Your Portfolio

Before deploying, make sure to update:

1. **Personal Information** (in `app/page.tsx`):
   - Name, title, description
   - Email address
   - GitHub and LinkedIn URLs

2. **Skills Section**:
   - Update the `skills` array with your expertise

3. **Projects Section**:
   - Replace with your actual projects
   - Add real project links

4. **Metadata** (in `app/layout.tsx`):
   - Update the title and description

5. **Styling** (optional):
   - Adjust colors in `tailwind.config.ts`
   - Modify gradients in `app/globals.css`

## Environment Variables

No environment variables are needed for the basic setup!

## Support

For issues with:
- **Vercel**: [vercel.com/docs](https://vercel.com/docs)
- **Netlify**: [docs.netlify.com](https://docs.netlify.com)
- **Next.js**: [nextjs.org/docs](https://nextjs.org/docs)

---

**Quick Start:**
```bash
npm run dev    # Start development server
npm run build  # Build for production
npm run start  # Start production server locally
```

🎉 Your impressive portfolio is ready to go live!

