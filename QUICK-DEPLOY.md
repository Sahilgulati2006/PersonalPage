# 🚀 Deploy Your Portfolio in 5 Minutes

Your personalized portfolio is ready to go live! Here's the fastest way to deploy:

## Step 1: Initialize Git (if not already done)

```bash
cd /Users/sahilgulati/Desktop/PersonalPage
git init
git add .
git commit -m "Initial commit: My personal portfolio"
```

## Step 2: Create GitHub Repository

1. Go to [github.com/new](https://github.com/new)
2. Name it: `portfolio` or `sahilgulati.github.io`
3. Keep it Public
4. **Don't** initialize with README (we already have one)
5. Click "Create repository"

## Step 3: Push to GitHub

```bash
git branch -M main
git remote add origin https://github.com/Sahilgulati2006/YOUR-REPO-NAME.git
git push -u origin main
```

## Step 4: Deploy on Vercel (2 minutes)

1. Visit [vercel.com/new](https://vercel.com/new)
2. Sign in with GitHub
3. Click "Import Project"
4. Select your `portfolio` repository
5. Click "Deploy" (Vercel auto-detects Next.js settings)
6. Done! 🎉

Your site will be live at: `https://your-project-name.vercel.app`

### Add Custom Domain (Optional)

1. In Vercel Dashboard → Settings → Domains
2. Add your custom domain (e.g., `sahilgulati.com`)
3. Update DNS records as instructed
4. SSL certificate automatically configured

---

## What's Included in Your Portfolio

✅ **Hero Section** with your name and introduction
✅ **Core Expertise** showcasing 4 key skill areas
✅ **Professional Experience** - 3 positions (UMass, Outamation, TruBridge)
✅ **Featured Projects** - Stock Analysis, Wildfire Detection, UAV System
✅ **Contact Section** with your real email and social links
✅ **Responsive Design** - looks great on all devices
✅ **Smooth Animations** - professional Framer Motion effects

## Your Current Details

- **Email**: sahilgulati241@gmail.com
- **GitHub**: https://github.com/Sahilgulati2006
- **LinkedIn**: https://www.linkedin.com/in/sahil-gulati-b991a62a2/

## Need to Make Changes?

Edit `app/page.tsx` to update:
- Skills, experience, or projects
- Descriptions and tech stacks
- Contact information

Then rebuild:
```bash
npm run build
git add .
git commit -m "Update portfolio content"
git push
```

Vercel will automatically redeploy! 🚀

---

**Questions?** Check DEPLOYMENT.md for more deployment options or troubleshooting.

