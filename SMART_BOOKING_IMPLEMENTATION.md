# Smart Booking System - Implementation Guide

## 🎯 Problem Solved
This system prevents scheduling gaps that are too small to be useful. If your shortest service is 20 minutes (haircut), the system ensures no booking creates a gap smaller than 20 minutes.

## 📋 Your Requirements
- **Haircut**: 20 minutes
- **Haircut + Beard**: 30 minutes
- **Business Hours**: 9:00 AM - 6:00 PM
- **Minimum Gap**: 20 minutes (shortest service)

## ✅ How It Works

### The Rule
Every booking must either:
1. End exactly at closing time, OR
2. Leave at least 20 minutes for another service

### Examples

#### ✅ GOOD - Ends at close
- Book 30-min service at 5:30 PM → Ends at 6:00 PM (perfect!)
- **Gap left**: 0 minutes ✓

#### ✅ GOOD - Leaves enough time
- Book 30-min service at 5:00 PM → Ends at 5:30 PM
- **Gap left**: 30 minutes (enough for haircut!) ✓

#### ❌ BLOCKED - Creates unusable gap
- Book 30-min service at 5:20 PM → Would end at 5:50 PM
- **Gap left**: 10 minutes (too small for any service!) ✗
- **System blocks this booking**

## 🚀 Implementation Steps

### Step 1: Import the Smart Booking Utilities

```typescript
import {
  generateSmartTimeSlots,
  getValidBookingTimes,
  validateBooking,
  type BookingConfig,
  type Service,
  type Booking
} from '@/utils/smartBooking';
```

### Step 2: Configure Your Services

```typescript
const bookingConfig: BookingConfig = {
  minimumGap: 20, // Shortest service duration
  businessHours: {
    start: '09:00',
    end: '18:00'
  },
  services: [
    { id: 1, name: 'Haircut', duration: 20 },
    { id: 2, name: 'Haircut + Beard', duration: 30 }
  ]
};
```

### Step 3: Generate Available Time Slots

```typescript
// Get all valid time slots for a day
const availableSlots = generateSmartTimeSlots(
  bookingConfig,
  existingBookings, // Your current bookings
  selectedDate      // Date to check
);

// Result: Only shows slots that won't create small gaps
// Example: 9:00 AM, 9:20 AM, 9:40 AM, 10:00 AM, etc.
```

### Step 4: Show Only Valid Times for Selected Service

```typescript
// When user selects "Haircut + Beard" (30 min)
const validTimes = getValidBookingTimes(
  selectedService,     // The service they want
  bookingConfig,
  existingBookings,
  selectedDate
);

// System automatically filters out times that would create small gaps
// Example: Won't show 5:20 PM if it would leave 10-minute gap
```

### Step 5: Validate Before Confirming

```typescript
const validation = validateBooking(
  proposedStartTime,
  selectedService,
  bookingConfig,
  existingBookings
);

if (!validation.isValid) {
  // Show error to user
  alert(validation.reason);
  // Example: "This booking would leave a 10-minute gap, 
  //           which is too small for any service (minimum 20 minutes required)"
} else {
  // Proceed with booking
  createBooking(...);
}
```

## 🎨 Integration with Booking UI

### In Your Booking Component

```typescript
import { useState } from 'react';
import { getValidBookingTimes, validateBooking } from '@/utils/smartBooking';

function BookingForm() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  
  // Get valid time slots when service is selected
  const validTimeSlots = selectedService 
    ? getValidBookingTimes(selectedService, config, bookings, selectedDate)
    : [];
  
  const handleBooking = () => {
    if (!selectedService || !selectedTime) return;
    
    const startTime = parseTimeString(selectedTime, selectedDate);
    const validation = validateBooking(startTime, selectedService, config, bookings);
    
    if (!validation.isValid) {
      showError(validation.reason);
      return;
    }
    
    // Create the booking
    confirmBooking({ service: selectedService, time: selectedTime });
  };
  
  return (
    <div>
      {/* Service selection */}
      <select onChange={(e) => setSelectedService(services[e.target.value])}>
        <option>Select Service</option>
        <option value="0">Haircut (20 min)</option>
        <option value="1">Haircut + Beard (30 min)</option>
      </select>
      
      {/* Time slot selection - only shows valid times */}
      <div className="time-slots">
        {validTimeSlots.map(slot => (
          <button
            key={slot.time}
            disabled={!slot.available}
            onClick={() => setSelectedTime(slot.time)}
          >
            {slot.time}
          </button>
        ))}
      </div>
      
      <button onClick={handleBooking}>Confirm Booking</button>
    </div>
  );
}
```

## 📊 Admin Configuration Page

The `BookingSettings.tsx` component provides a UI for:
- ✅ Viewing gap prevention status
- ✅ Configuring service durations
- ✅ Setting business hours
- ✅ Previewing available time slots
- ✅ Understanding how the system works

Access it through: Admin Dashboard → Settings

## 🧪 Testing the System

Run the built-in test scenarios:

```typescript
import { runTestScenarios } from '@/utils/smartBooking';

// In browser console or component:
runTestScenarios();
```

**Output:**
```
=== Smart Booking System Test Scenarios ===

Scenario 1: 30-min service at 5:30 PM (ends 6:00 PM)
Result: ✓ VALID

Scenario 2: 30-min service at 5:00 PM (ends 5:30 PM, leaves 30 min)
Result: ✓ VALID

Scenario 3: 30-min service at 5:20 PM (would end 5:50 PM, leaving 10 min)
Result: ✗ INVALID - This booking would leave a 10-minute gap, which is too 
                    small for any service (minimum 20 minutes required)
```

## 🔧 Customization

### Change Minimum Gap
Update the `minimumGap` in your config to match your shortest service:

```typescript
const config = {
  minimumGap: 15, // If shortest service becomes 15 minutes
  // ...
};
```

### Add Buffer Time (Optional)
Add extra time between appointments:

```typescript
const config = {
  minimumGap: 20,
  bufferTime: 5, // 5 minute break between appointments
  // ...
};
```

### Adjust Business Hours
```typescript
const config = {
  businessHours: {
    start: '10:00', // Open at 10 AM
    end: '20:00'    // Close at 8 PM
  },
  // ...
};
```

## 🎯 Key Functions Reference

### `generateSmartTimeSlots(config, bookings, date)`
Generates all possible time slots with gap prevention.

### `getValidBookingTimes(service, config, bookings, date)`
Returns only time slots that won't create small gaps for the specific service.

### `validateBooking(startTime, service, config, bookings)`
Validates if a booking attempt is allowed. Returns `{ isValid, reason }`.

### `validateNoSmallGaps(endTime, dayEndTime, minimumGap)`
Core logic that checks if remaining time meets requirements.

## 💡 Benefits

1. **No Wasted Time** - Every gap can accommodate a service
2. **Automatic** - System handles all validation
3. **Clear Errors** - Users see why a time isn't available
4. **Flexible** - Easy to adjust for different service durations
5. **Efficient** - Maximum schedule utilization

## 📝 Notes

- The system uses your shortest service as the minimum gap
- Time slots are generated in increments of the minimum gap
- All validation happens before booking confirmation
- Compatible with any front-end booking UI
- No database changes required - pure logic layer

## 🚨 Important

Always use `validateBooking()` before confirming any booking, even if using the smart time slot generation. This ensures data integrity and prevents edge cases.

---

**Ready to implement?** Start with Step 1 and integrate the functions into your existing booking flow!
