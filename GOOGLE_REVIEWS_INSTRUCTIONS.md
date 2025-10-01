# How to Add Your Actual Google Reviews

## Step 1: Access Your Google Reviews
1. Go to: https://www.google.com/maps/place/The+FRESHMEN+Barbershop/@43.5823631,-79.7144503
2. Scroll down to the "Reviews" section
3. Click "All reviews" to see all of them

## Step 2: Copy Review Information
For each review, copy:
- Customer name (e.g., "John D.")
- Star rating (1-5)
- Review text
- Date posted (e.g., "2 weeks ago")
- Service mentioned (if any)

## Step 3: Update Testimonials.tsx
Open: `src/components/Testimonials.tsx`

Find the `testimonials` array (around line 72) and replace with your actual reviews:

```typescript
const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'YOUR_CUSTOMER_NAME',
    service: 'SERVICE_THEY_GOT',
    rating: 5,
    review: 'PASTE_REVIEW_TEXT_HERE',
    date: 'DATE_FROM_GOOGLE',
    verified: true,
    location: 'Mississauga, ON',
    helpful: 0,
    gradient: 'from-red-500 to-red-600',
    initials: 'XX', // First letter of first and last name
    response: {
      owner: 'Shoaib Ghori',
      message: 'YOUR_RESPONSE_IF_ANY',
      date: 'DATE_OF_RESPONSE'
    }
  },
  // Add more reviews...
];
```

## Your Business Info
- **Name**: The FRESHMEN Barbershop
- **Address**: 167 Queen St S, Mississauga, ON L5M 1L2, Canada
- **Phone**: (905) 483-7374
- **Google Maps**: https://www.google.com/maps/place/The+FRESHMEN+Barbershop/@43.5823631,-79.7144503

## Notes
- Alternate gradients between 'from-red-500 to-red-600' and 'from-gray-600 to-gray-700' for visual variety
- Use first letter of first name + first letter of last name for initials
- Keep customer names abbreviated for privacy (e.g., "John D." instead of full name)
