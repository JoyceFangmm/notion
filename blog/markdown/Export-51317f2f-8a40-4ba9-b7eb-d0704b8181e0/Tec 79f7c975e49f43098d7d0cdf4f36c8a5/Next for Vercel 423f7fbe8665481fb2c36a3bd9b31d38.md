# Next for Vercel

date: 2021/03/11
slug: next-for-vercel
status: Published
tags: Website
summary: What's Next
type: Post

Following our [Series A announcement in April](https://rauchg.com/2020/vercel), I'm happy to announce a new **Vercel $40M Series B** round led by [GV](https://www.gv.com/), with [Greenoaks](http://www.greenoakscap.com/), [Bedrock](https://www.bedrockcap.com/), [Geodesic](https://www.geodesiccap.com/), existing investors [Accel](https://www.accel.com/) & [CRV](https://www.crv.com/).

Reflecting on the growth of our business, which in 2020 alone added the likes of Airbnb, The Washington Post, Trip Advisor, Scale and Hashicorp as flagship customers, I'm sharing 7 tailwinds behind our acceleration.

Why are teams of all sizes choosing to develop, preview and ship their websites with [Next.js](https://nextjs.org/) and [Vercel](https://vercel.com/)? Where are we going next?

Jeff Bezos' famous [Day 1 letter to shareholders](https://www.aboutamazon.com/news/company-news/2016-letter-to-shareholders) goes:

> There are many ways to center a business. You can be competitor focused, you can be product focused, you can be technology focused, you can be business model focused, and there are more. But in my view, obsessive customer focus is by far the most protective of Day 1 vitality.
> 

Applying this to web development, focusing on the frontend is the most customer-obsessive way to build your products.

Every interaction with your customer goes through your frontend, from their first contact with your brand, every purchase, every signup, every article, every form submission.

And each time, your frontend has an opportunity to impress, delight, perform, be accessible and memorable.

What's more, frontend is an area of **technological and [artistic](https://www.fastcompany.com/90521691/first-look-kanye-wests-new-website-turns-shopping-into-art) differentiation**, while backend becomes increasingly commoditized, turnkey and undifferentiated.

For Vercel, being customer focused represents a unique challenge: to delight our developer customer, and to give them the tools and platform to delight **their customer**.

Next.js pioneered the concept of **zero configuration** in the React space, letting you focus exclusively on your product.

However, it wasn't just about developer experience. We shipped a lot of the essential preconfiguration to meet the needs of **users**.

That included out-of-the-box server rendering for fast page boots and optimal SEO, code splitting, production bundle optimization and minification.

This has enabled the frontend developer, motivated by a better experience, to succeed in production.

A key ingredient of being customer focused is not being dogmatic, meeting the customer where they are and [enabling incremental adoption](https://nextjs.org/blog/incremental-adoption) of the promising new technology.

At the time of its release four years ago, and unlike contemporaries, Next.js took some contrarian bets.

Multi page over single page (SPA). Server rendering (SSR) over spinners. Dynamism everywhere instead of just the client side.

Over time, new optimization opportunities emerged, like static site generation (SSG), which concretely means [pre-rendering pages and automatically caching them at the edge](https://rauchg.com/2020/static-hoisting).

Pure server rendering wouldn't have been enough. Pure static (Jamstack) is not enough. Giving the developer the power and optionality of SSR and SSG on a per-page basis? That works.

JavaScript is the *lingua franca* of the frontend world, but it also has the unique property that it can run everywhere.

Everywhere as in the build process (SSG), the origin (SSR), the edge, and the final frontier: the client's device.

Vercel embraces this serverless ***everywhere* computing model**. When you push to Git, we automatically start building your project. At that time, frameworks like Next.js run your code to *pre-render* pages before they're ever accessed by the user.

But the computation doesn't stop there. The build process is capable of outputting **serverless functions** in addition to static assets. These will execute code on demand as users access them, enabling greater personalization and dynamism.

Further down the lifecycle of the request, React brings components alive after the page boots, once again enabling you to run code to enrich the experience with interactivity, [realtime data fetching and caching](https://swr.vercel.app/), animation and more.

With Vercel, your frontend also lives everywhere. Your app is automatically pushed to our global edge network, with no management, no overhead, no configuration and… really fast page loads.

As far as frontend performance goes, a CDN is a key ingredient. However, in reality it only represents a minor contribution to what makes a site exceptionally fast.

The time it takes to download the HTML from the edge is just the tip of an entire iceberg of complexity that represents a challenge to performance.

This oversimplification stems from the fact that performance as it relates to user experience is technically very challenging to measure.

In the world of backend, we can just open up a dashboard and look at our [p99 and p999 times](http://latencytipoftheday.blogspot.com/2014/06/latencytipoftheday-most-page-loads.html) and say: this API response takes 42ms. Onto the next one.

When it comes to frontend, we might be compelled to make the same observation about our CDN latency or, worse, [PoPs](https://www.fastly.com/blog/why-having-more-pops-isnt-always-better). We would then say: my page loaded in 42ms. Onto the next page.

Measuring how good your pages are has been, until recently, a daunting task because we didn't know what to measure, and therefore, what to optimize.

A breakthrough was recently made by the W3C Web Performance Working Group and Google in the introduction of the **[Core Web Vitals](https://web.dev/vitals/) metrics**: LCP, CLS and FID.

These metrics help you ascertain how good your *actual* user experience is, by focusing on the actual end-user outcomes: how fast the content is put in front of the user's eyes, how little it jitters around, and how fast it reacts to input.

How vital are these metrics in practice? So vital that they'll become a Google search ranking signal starting [May 2021](https://www.searchenginejournal.com/google-core-web-vitals-ranking-signals/387142/).

There are two strategies you can take to prepare.

One is **austerity**: get rid of all the chat widgets, analytics, advertisements, GDPR cookie popups, and all your JS code. You might also want to shut down your business.

The other one is to **address reality**, embracing the real mass of the problem. For example, optimizing oversized and slow images with the [Next.js image component](https://nextjs.org/docs/api-reference/next/image).

Furthermore, instead of relying solely on synthetic lighthouse tests, our [built-in Analytics offering](https://vercel.com/analytics) helps you by computing a **real experience score** based on the web vitals of your actual visitors.

When you link your project to Vercel, even before it makes it into production, you have a unique opportunity to share your work.

Development is not confined to `localhost:3000`, bespoke VMs or a monolithic staging server.

With every push of code and every proposed content change, you get a hyperlink that you can share with anyone in the world. Your frontend is served from the same serverless infrastructure with production capabilities.

This introduces a unique opportunity for **collaboration**. Everyone from your clients, to fellow team members, [to robots](https://rauchg.com/2020/develop-preview-test), can visit your website and provide early feedback or report bugs.

Furthermore, the decoupling of frontend from backend allows us to integrate systems that enable others **to contribute content and data without coding skills**.

Want to empower your marketing or technical writing team? Link your [Next.js data fetching functions](https://nextjs.org/docs/basic-features/data-fetching) to your favorite Headless CMS. Want to empower your product team? Integrate a feature flagging system and decouple deploy from release.

Vercel is built in conjunction with our great community of developers, contributors and partners.

While we consider Next.js to be our lighthouse framework, Vercel is designed to be completely agnostic to it.

Advanced capabilities like our ability to [push and update static pages without rebuilding the entire site](https://twitter.com/KukicAdo/status/1298792983244857345), to [preview proposed data changes](https://next-preview.vercel.app/), [serverless functions](https://vercel.com/docs/serverless-functions/introduction), [image optimization](https://vercel.com/docs/next.js/image-optimization) and even our [analytics system](https://vercel.com/docs/analytics) are capabilities that any framework can tap into.

The web is an open medium that's constantly evolving and changing and we wanted our platform to embrace that. Whether it's Svelte, Nuxt.js or Gridsome, our commitment is to serve developers and their teams to build a better web.

[Our mantra](https://vercel.com/home) until today has been **Develop → Preview → Ship**.

We will continue to invest to make this process the most delightful, ensuring **top performance** every step of the way, doubling down on putting computation **everywhere**, and help you tackle the iceberg of frontend complexity.

Being customer focused requires a mindset of **experimentation** coupled with constant **feedback**. We want Vercel to empower you to ship and **Iterate**, by helping you discover what to develop next.