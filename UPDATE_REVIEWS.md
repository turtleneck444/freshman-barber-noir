# Quick Guide: Update Your Google Reviews

## Step 1: Get Your Reviews
1. Open: https://maps.app.goo.gl/rHei2LZrgqScz75k9
2. Click "All reviews"
3. Copy your top 8 reviews

## Step 2: Update the Testimonials File
Open: `/Users/hunainqureshi/freshman-barber-noir/src/components/Testimonials.tsx`

## Step 3: Find and Replace the Testimonials Array (Line ~72)

Replace the entire `testimonials` array with your real reviews using this template:

```typescript
const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'John D.',  // ← Customer name from Google
    service: 'High Fade + Beard Trim',  // ← What service they got
    rating: 5,  // ← Star rating
    review: 'Paste the actual review text here...',  // ← Full review text
    date: '2 weeks ago',  // ← Date from Google
    verified: true,
    location: 'Mississauga, ON',  // ← Location from Google
    helpful: 12,  // ← Number of "helpful" votes (optional)
    gradient: 'from-red-500 to-red-600',  // ← Keep alternating red/gray
    initials: 'JD',  // ← First letter first name + last name
    response: {  // ← If you replied to the review
      owner: 'The FRESHMEN Barbershop',
      message: 'Your response text here...',
      date: '2 weeks ago'
    }
  },
  {
    id: '2',
    name: 'Sarah M.',
    service: 'Skin Fade + Styling',
    rating: 5,
    review: 'Another review text...',
    date: '1 month ago',
    verified: true,
    location: 'Brampton, ON',
    helpful: 8,
    gradient: 'from-gray-600 to-gray-700',  // ← Alternate with gray
    initials: 'SM',
    response: {
      owner: 'The FRESHMEN Barbershop',
      message: 'Your response...',
      date: '1 month ago'
    }
  },
  // Add up to 8 reviews for best results
];
```

## Tips:
- **Alternate gradients**: Use `'from-red-500 to-red-600'` for odd reviews, `'from-gray-600 to-gray-700'` for even reviews
- **Initials**: First letter of first name + first letter of last name (e.g., "John Smith" = "JS")
- **Location**: Copy from Google review if shown, otherwise use "Mississauga, ON"
- **Service**: Try to identify what service they're talking about in the review
- **Response**: Only include if you actually replied to the review on Google

## Example with Real Data:
```typescript
{
  id: '1',
  name: 'Mike Thompson',
  service: 'High Fade',
  rating: 5,
  review: 'Best fade in Mississauga! Shoaib is a master at his craft. Always consistent and professional.',
  date: '1 week ago',
  verified: true,
  location: 'Mississauga, ON',
  helpful: 5,
  gradient: 'from-red-500 to-red-600',
  initials: 'MT',
  response: {
    owner: 'The FRESHMEN Barbershop',
    message: 'Thank you Mike! We appreciate your loyalty!',
    date: '1 week ago'
  }
}
```

## Need Help?
Just copy and paste your Google reviews and I'll format them for you!
