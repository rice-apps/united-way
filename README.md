# United Way (Houston) Impact Calculator

Our application is a donation impact calculator for the United Way of Greater Houston. The application caters to two primary user groups: general audiene and the United Way organization employees.

For the general audience, the donation impact calculator allows you to visualize what your donations could make an impact on based on the most recent United Way donation distribution data. For the United Way employees, they can visit the admin page to update the donation-to-cause distribution ratio, which will reflect to this github repository's `public/data.json` file. In particular, the numbers entered should be _ratios_ and not absolute donation amounts.

## How do you access it?

You can access our website at [uway.pages.dev](https://uway.pages.dev/). You can view our Figma for all the design docs in [https://tinyurl.com/uway-riceapps-figma](https://www.figma.com/file/o40E59Fu8lC1mBvqWZiPTj/United-Way?type=design&node-id=0-1&mode=design&t=pkojJ9duHhqwKRvG-0). 

## Maintenance

Our website requires the generation of a new GITHUB token specific to this repository every year. Current expiration date is March 23rd, 2025. This Github token will be added to the `.env` file at the top-level repository, in the format specified by `.env.tmp`. The PRIVATE_KEY field refers to the admin password for United Way employees to update the donation ratios. For more about Github tokens, please refer to this [page](https://docs.github.com/en/actions/security-guides/automatic-token-authentication). 

## Future Directions

For the immediate future, there are some functionalities we are particularly excited about but unable to implement due to time constraints.

- **Adjustable Causes:** Currently, our website assumes some base causes which may not be carried from year to year. In order to enable a more flexible update function, we need to update the `admin` page to allow for modifications of the causes and their descriptions --- in addition to donation proportions.
- **Social Media Sharing:** We laid the groundwork for media sharing via a PDF and image download component. However, proper media sharing requires manipulation of page content into particualr template PDFs or image formats that are beyond the scope of our first-year development. Future developers can find our designed template from the Figma.
- **Adherance to Design:** There remain some detail mismatches of our product with respect to our design. The design can be found at our Figma.

## Building our server from scratch.

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

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn more about our tech stack.

Our team utilized Next.js as our web framework and Tailwind as our CSS framework.

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

To learn more about TailwindCSS, take a look at the following resources:
` [Tailwind CSS: Utility-First Fundamentals](https://tailwindcss.com/docs/utility-first)
