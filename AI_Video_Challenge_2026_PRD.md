**Product Requirements Document**

**AI Video Challenge 2026**

Landing Page Development

  ---------------------- ------------------------------------------------
  **Document Type**      Product Requirements Document

  **Project Name**       AI Video Challenge 2026 Landing Page

  **Version**            1.0

  **Date**               January 21, 2026

  **Prepared By**        Jooy Media / AI 365

  **Status**             Draft
  ---------------------- ------------------------------------------------

*This PRD contains 15 comprehensive sections covering all aspects of the AI Video Challenge 2026 landing page development, from business objectives to technical requirements, testing, and launch planning.*

1\. Executive Summary

The AI Video Challenge 2026 landing page serves as the primary conversion platform for a collaborative educational initiative between Jooy Media and Rtist. This landing page will drive registration for a free 3-hour AI Video Workshop and subsequent contest offering RM3,800 in prizes.

The page must achieve a 70%+ conversion rate from 100+ qualified participants while maintaining excellent user experience across all devices. Success metrics include registration completion rates, page performance scores, and workshop attendance rates.

2\. Product Overview

2.1 Purpose

Create a high-converting landing page that effectively communicates the AI Video Challenge opportunity and drives qualified registrations through a seamless, mobile-optimized user experience.

2.2 Target Audience

-   Students interested in AI and content creation

-   Creative professionals (designers, videographers, content creators)

-   Marketing professionals seeking AI skills

-   Founders and entrepreneurs looking to leverage AI for content

-   General public interested in learning AI video creation

3\. Business Objectives

3.1 Primary Goals

-   Achieve 100+ qualified workshop registrations

-   Minimum 70% conversion rate from page visit to registration

-   Build email list of AI-interested audience for future marketing

-   Generate awareness for Jooy Media AI 365 brand

-   Strengthen partnership visibility between Rtist and Jooy Media

3.2 Success Metrics

-   Number of unique page visitors

-   Registration completion rate (target: 70%+)

-   Average time on page (target: 2+ minutes)

-   Bounce rate (target: \<40%)

-   Form abandonment rate (target: \<3%)

-   Social media shares and referral traffic

-   Mobile vs desktop conversion rates

4\. Functional Requirements

4.1 Page Sections & Content Structure

4.1.1 Hero Section

-   Prominent headline: AI Video Challenge 2026

-   Subheadline: Upskill in 2026 - Learn AI video creation and win prizes

-   Co-organizer logos: Jooy Media and Rtist prominently displayed

-   Primary CTA button: Register for Free Workshop (bright, contrasting color)

-   Hero image/illustration from provided PDF

-   Value highlight: FREE 3-Hour Workshop (worth RMXXX) - Limited to 100 Seats

4.1.2 Program Overview Section

-   Section headline: What You\'ll Get

-   Four key benefits presented as cards or icons

-   Guarantee statement: You\'ll complete at least one AI video after this workshop

4.1.3 Workshop Details Section

-   Venue: Online (Live)

-   Duration: 3 hours

-   Date: \[To be confirmed\]

-   Fee: FREE (Limited to 100 seats)

-   Urgency indicator: Seats filling fast

-   Secondary CTA: Secure Your Spot Now

4.1.4 Contest Details Section

-   Submit 30-second to 1-minute AI video

-   Submission deadline: Within 7 days after workshop

-   Theme: Upskill in 2026

-   Judging criteria: Creativity, AI prompt quality, visual impact, relevance

4.1.5 Prizes Section

**1st Prize:**

-   RM2,000 Cash

-   AI Class (Advanced)

-   Rtist Premium Membership (Worth RM1,200)

**2nd Prize:**

-   RM1,000 Cash

-   AI Class

-   Rtist Plus Membership (Worth RM360)

**3rd Prize:**

-   RM800 Cash

-   AI Class

-   Rtist Plus Membership (Worth RM360)

4.1.8 Registration Form Section

Form fields required:

-   Full Name (required)

-   Email Address (required)

-   Phone Number (required)

-   Occupation/Role dropdown: Student / Creative / Marketer / Founder / Other

-   How did you hear about us? (optional)

-   Consent checkbox for workshop details and updates

-   Submit button: Confirm Registration

5\. User Experience Requirements

5.1 Design Requirements

-   Modern, clean, and professional design aesthetic

-   AI/tech-themed visual elements (futuristic but accessible)

-   Brand colors: Incorporate Jooy Media and Rtist brand colors

-   High contrast CTA buttons (orange or bright blue recommended)

-   Generous white space for readability

-   Clear visual hierarchy with size, weight, and color

-   Engaging illustrations or graphics from provided PDF assets

-   Consistent typography (maximum 2 font families)

5.2 Responsive Design

-   Mobile-first approach (60%+ traffic expected from mobile)

-   Optimized for Mobile: 320px-767px, Tablet: 768px-1023px, Desktop: 1024px+

-   Touch-friendly tap targets (minimum 44x44px)

-   Readable font sizes on all devices (minimum 16px body text)

-   Optimized images for different screen sizes

5.3 Accessibility

-   WCAG 2.1 Level AA compliance

-   Semantic HTML structure

-   Alt text for all images

-   Keyboard navigation support

-   Sufficient color contrast ratios (minimum 4.5:1)

-   Screen reader friendly form labels

-   Focus indicators on interactive elements

6\. Technical Requirements

6.1 Technology Stack Recommendations

**Frontend:**

-   HTML5, CSS3, JavaScript

-   React.js or Next.js for better performance and SEO

-   Tailwind CSS or styled-components for styling

**Backend & Form Handling:**

-   Option 1: Google Forms (easiest setup)

-   Option 2: Typeform/Tally (better UX)

-   Option 3: Custom API with Google Sheets integration using n8n

-   Option 4: Email service provider form (Mailchimp, ConvertKit)

**Hosting:**

-   Vercel, Netlify, or AWS S3 + CloudFront

-   Custom domain: aivideochallenge.jooy.media

-   SSL certificate (HTTPS required)

6.2 Performance Requirements

-   Page load time: \<3 seconds on 4G

-   First Contentful Paint (FCP): \<1.8 seconds

-   Largest Contentful Paint (LCP): \<2.5 seconds

-   Cumulative Layout Shift (CLS): \<0.1

-   Image optimization: WebP format with lazy loading

-   Minified CSS and JavaScript

-   CDN for static assets

6.3 SEO Requirements

-   Meta title: AI Video Challenge 2026 \| Free Workshop + RM3,800 Prizes

-   Meta description: Join the FREE 3-hour AI Video Workshop and compete for RM3,800 in prizes

-   Open Graph tags for social sharing

-   Twitter Card tags

-   Structured data (JSON-LD) for Event schema

-   Canonical URL

-   XML sitemap

-   Robots.txt file

6.4 Analytics & Tracking

-   Google Analytics 4 (GA4) implementation

-   Event tracking: page views, CTA clicks, form interactions, submissions, errors

-   Facebook Pixel (if running Facebook ads)

-   Conversion tracking for registration completion

-   UTM parameter tracking for campaign attribution

6.5 Security Requirements

-   HTTPS encryption (SSL certificate)

-   GDPR compliance for data collection

-   PDPA compliance (Malaysia Personal Data Protection Act)

-   Spam protection: reCAPTCHA or honeypot field

-   Input sanitization to prevent XSS attacks

-   Rate limiting on form submissions

7\. Integration Requirements

7.1 Email Marketing Integration

-   Automatic addition of registrants to email list

-   Welcome email sequence: confirmation, 24-hour reminder, workshop access

-   Email template design consistent with landing page branding

7.2 Data Collection & Storage

-   All submissions stored in Google Sheets and email marketing platform

-   Automatic timestamp for each registration

-   Registration number assignment

-   Source tracking (referral URL, UTM parameters)

7.3 Social Media Integration

-   Social sharing buttons: Facebook, Twitter/X, LinkedIn, WhatsApp

-   Pre-populated share text

-   Social proof: Show number of registrations

8\. Content Requirements

8.1 Copywriting Tone

-   Friendly and approachable

-   Enthusiastic but not overly promotional

-   Clear and concise

-   Action-oriented

-   Benefit-focused rather than feature-focused

-   Use of urgency and scarcity (Limited seats, deadline-driven)

8.2 Key Messaging

**Primary message:** Learn AI video creation from scratch and win amazing prizes

**Value propositions:**

-   100% FREE workshop (usually worth RMXXX)

-   No prior experience needed

-   Hands-on learning - create a video during the workshop

-   Win RM3,800 in prizes

-   Limited to 100 participants (exclusivity)

9\. Testing Requirements

9.1 Functional Testing

-   All CTAs link to correct sections

-   Form submission works correctly

-   Form validation works for all fields

-   Error messages display correctly

-   Success message appears after submission

-   Confirmation email sent correctly

-   Data stored correctly in backend/spreadsheet

-   Social sharing buttons work correctly

9.2 Cross-Browser & Device Testing

-   Chrome, Safari, Firefox, Edge (desktop and mobile)

-   iPhone (multiple models and iOS versions)

-   Android devices (Samsung, Huawei, etc.)

-   iPad and other tablets

-   Desktop (various screen sizes)

10\. Launch Plan

10.1 Pre-Launch Checklist

-   All content finalized and proofread

-   All testing completed and issues resolved

-   Analytics and tracking configured

-   Email automation sequences set up

-   Custom domain configured with SSL

-   SEO meta tags verified

-   Social sharing preview tested

-   Form submission tested end-to-end

-   Terms & Conditions page created

-   Privacy Policy page created

10.2 Marketing Channels

-   Jooy Media social media channels

-   Rtist platform and community

-   Email newsletters (both organizations)

-   Facebook/Instagram ads (if budget allows)

-   WhatsApp groups and communities

-   LinkedIn posts

-   Relevant Facebook groups

11\. Success Criteria

The landing page will be considered successful if it achieves:

-   100+ qualified registrations within launch period

-   Conversion rate of 70%+ (visitors to registrations)

-   Less than 3% form abandonment rate

-   Average time on page: 2+ minutes

-   Bounce rate under 40%

-   Mobile conversion rate within 10% of desktop

-   Google PageSpeed score 90+ on mobile and desktop

-   At least 70% workshop attendance rate from registrants

12\. Estimated Development Timeline

-   **Planning:** 2 days - PRD review, content gathering, asset collection

-   **Design:** 3-4 days - Wireframes, mockups, design system

-   **Development:** 5-7 days - Frontend development, form integration, responsiveness

-   **Content:** 2-3 days - Copywriting, proofreading, image optimization

-   **Testing:** 2-3 days - QA testing, bug fixes, cross-browser/device testing

-   **Launch:** 1 day - Deployment, final checks, go-live

**Total Estimated Time: 15-20 days**

13\. Stakeholders & Responsibilities

**Jooy Media:** Content creation, workshop delivery, marketing, email automation

**Rtist:** Community outreach, promotion, membership prizes, judging

**Web Developer:** Landing page development, form integration, testing, deployment

**Designer:** Visual design, graphics, mockups, brand compliance

**Content Writer:** Copywriting, proofreading, SEO optimization

14\. Appendix

14.1 Reference Documents

-   AI Video Challenge 2026.pdf (original proposal)

-   Jooy Media brand guidelines

-   Rtist brand guidelines

14.2 Key Terms

**CTA:** Call-to-Action button designed to prompt immediate response

**Conversion Rate:** Percentage of visitors who complete registration

**Bounce Rate:** Percentage of visitors who leave after viewing only one page

**LCP:** Largest Contentful Paint - measures loading performance

**CLS:** Cumulative Layout Shift - measures visual stability

*\-\-- End of Document \-\--*
