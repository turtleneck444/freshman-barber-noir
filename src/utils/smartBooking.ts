/**
 * Smart Booking System with Gap Prevention
 * 
 * This system ensures no scheduling gaps smaller than the shortest service duration.
 * Example: If shortest service is 20 minutes (haircut), all gaps must be 0 or ≥20 minutes.
 */

export interface Service {
  id: number;
  name: string;
  duration: number; // in minutes
}

export interface TimeSlot {
  time: string;
  available: boolean;
  endTime?: string;
}

export interface BookingConfig {
  minimumGap: number; // Shortest service duration
  businessHours: {
    start: string; // "09:00"
    end: string;   // "18:00"
  };
  services: Service[];
}

export interface Booking {
  id: number;
  service: Service;
  startTime: Date;
  endTime: Date;
  clientName: string;
}

/**
 * Validates if a booking would create an unusable gap
 * @param proposedEndTime - When the proposed booking would end
 * @param dayEndTime - When the business day ends
 * @param minimumGap - Minimum allowed gap (shortest service duration)
 * @returns true if booking is valid, false if it would create unusable gap
 */
export function validateNoSmallGaps(
  proposedEndTime: Date,
  dayEndTime: Date,
  minimumGap: number
): boolean {
  const remainingMinutes = (dayEndTime.getTime() - proposedEndTime.getTime()) / (1000 * 60);
  
  // Valid if:
  // 1. Booking ends exactly at close time (remainingMinutes === 0)
  // 2. Booking leaves enough time for another service (remainingMinutes >= minimumGap)
  return remainingMinutes === 0 || remainingMinutes >= minimumGap;
}

/**
 * Generate all valid time slots for a given day with gap prevention
 * @param config - Booking configuration
 * @param existingBookings - Already booked appointments
 * @param selectedDate - The date to generate slots for
 * @returns Array of available time slots
 */
export function generateSmartTimeSlots(
  config: BookingConfig,
  existingBookings: Booking[],
  selectedDate: Date
): TimeSlot[] {
  const slots: TimeSlot[] = [];
  
  // Parse business hours
  const [startHour, startMin] = config.businessHours.start.split(':').map(Number);
  const [endHour, endMin] = config.businessHours.end.split(':').map(Number);
  
  const dayStart = new Date(selectedDate);
  dayStart.setHours(startHour, startMin, 0, 0);
  
  const dayEnd = new Date(selectedDate);
  dayEnd.setHours(endHour, endMin, 0, 0);
  
  // Generate slots at minimumGap intervals
  let currentTime = new Date(dayStart);
  
  while (currentTime < dayEnd) {
    const remainingMinutes = (dayEnd.getTime() - currentTime.getTime()) / (1000 * 60);
    
    // Only create slot if there's enough time for at least the shortest service
    if (remainingMinutes >= config.minimumGap) {
      // Check if this slot conflicts with existing bookings
      const isAvailable = !existingBookings.some(booking => {
        return currentTime >= booking.startTime && currentTime < booking.endTime;
      });
      
      slots.push({
        time: currentTime.toLocaleTimeString('en-US', { 
          hour: '2-digit', 
          minute: '2-digit',
          hour12: true 
        }),
        available: isAvailable
      });
    }
    
    // Move to next potential slot
    currentTime = new Date(currentTime.getTime() + config.minimumGap * 60 * 1000);
  }
  
  return slots;
}

/**
 * Get valid booking times for a specific service
 * @param service - The service being booked
 * @param config - Booking configuration
 * @param existingBookings - Already booked appointments
 * @param selectedDate - The date for booking
 * @returns Array of valid time slots that won't create small gaps
 */
export function getValidBookingTimes(
  service: Service,
  config: BookingConfig,
  existingBookings: Booking[],
  selectedDate: Date
): TimeSlot[] {
  const allSlots = generateSmartTimeSlots(config, existingBookings, selectedDate);
  
  const [endHour, endMin] = config.businessHours.end.split(':').map(Number);
  const dayEnd = new Date(selectedDate);
  dayEnd.setHours(endHour, endMin, 0, 0);
  
  // Filter slots that would create small gaps
  return allSlots.filter(slot => {
    // Parse the slot time
    const slotTime = parseTimeSlot(slot.time, selectedDate);
    
    // Calculate when this service would end
    const serviceEndTime = new Date(slotTime.getTime() + service.duration * 60 * 1000);
    
    // Check if it would create a small gap
    return validateNoSmallGaps(serviceEndTime, dayEnd, config.minimumGap);
  });
}

/**
 * Helper function to parse time slot string back to Date
 */
function parseTimeSlot(timeString: string, date: Date): Date {
  const [time, period] = timeString.split(' ');
  let [hours, minutes] = time.split(':').map(Number);
  
  // Convert to 24-hour format
  if (period === 'PM' && hours !== 12) hours += 12;
  if (period === 'AM' && hours === 12) hours = 0;
  
  const result = new Date(date);
  result.setHours(hours, minutes, 0, 0);
  return result;
}

/**
 * Check if a specific booking attempt is valid
 * @param startTime - Proposed start time
 * @param service - Service being booked
 * @param config - Booking configuration
 * @param existingBookings - Current bookings
 * @returns Object with isValid flag and reason if invalid
 */
export function validateBooking(
  startTime: Date,
  service: Service,
  config: BookingConfig,
  existingBookings: Booking[]
): { isValid: boolean; reason?: string } {
  // Calculate end time
  const endTime = new Date(startTime.getTime() + service.duration * 60 * 1000);
  
  // Get day end time
  const [endHour, endMin] = config.businessHours.end.split(':').map(Number);
  const dayEnd = new Date(startTime);
  dayEnd.setHours(endHour, endMin, 0, 0);
  
  // Check if booking extends past business hours
  if (endTime > dayEnd) {
    return {
      isValid: false,
      reason: 'Service duration extends past business hours'
    };
  }
  
  // Check for conflicts with existing bookings
  const hasConflict = existingBookings.some(booking => {
    return (
      (startTime >= booking.startTime && startTime < booking.endTime) ||
      (endTime > booking.startTime && endTime <= booking.endTime) ||
      (startTime <= booking.startTime && endTime >= booking.endTime)
    );
  });
  
  if (hasConflict) {
    return {
      isValid: false,
      reason: 'Time slot conflicts with existing booking'
    };
  }
  
  // Check if it would create a small gap
  if (!validateNoSmallGaps(endTime, dayEnd, config.minimumGap)) {
    const remainingMinutes = (dayEnd.getTime() - endTime.getTime()) / (1000 * 60);
    return {
      isValid: false,
      reason: `This booking would leave a ${remainingMinutes}-minute gap, which is too small for any service (minimum ${config.minimumGap} minutes required)`
    };
  }
  
  return { isValid: true };
}

/**
 * Example usage and test scenarios
 */
export function runTestScenarios() {
  const config: BookingConfig = {
    minimumGap: 20,
    businessHours: {
      start: '09:00',
      end: '18:00'
    },
    services: [
      { id: 1, name: 'Haircut', duration: 20 },
      { id: 2, name: 'Haircut + Beard', duration: 30 }
    ]
  };
  
  const testDate = new Date('2025-10-04T12:00:00');
  
  console.log('=== Smart Booking System Test Scenarios ===\n');
  
  // Scenario 1: Good - ends exactly at close
  const test1Start = new Date(testDate);
  test1Start.setHours(17, 30, 0);
  const result1 = validateBooking(test1Start, config.services[1], config, []);
  console.log('Scenario 1: 30-min service at 5:30 PM (ends 6:00 PM)');
  console.log(`Result: ${result1.isValid ? '✓ VALID' : '✗ INVALID'} ${result1.reason || ''}\n`);
  
  // Scenario 2: Good - leaves 30 minutes
  const test2Start = new Date(testDate);
  test2Start.setHours(17, 0, 0);
  const result2 = validateBooking(test2Start, config.services[1], config, []);
  console.log('Scenario 2: 30-min service at 5:00 PM (ends 5:30 PM, leaves 30 min)');
  console.log(`Result: ${result2.isValid ? '✓ VALID' : '✗ INVALID'} ${result2.reason || ''}\n`);
  
  // Scenario 3: Bad - would leave 10-minute gap
  const test3Start = new Date(testDate);
  test3Start.setHours(17, 20, 0);
  const result3 = validateBooking(test3Start, config.services[1], config, []);
  console.log('Scenario 3: 30-min service at 5:20 PM (would end 5:50 PM, leaving 10 min)');
  console.log(`Result: ${result3.isValid ? '✓ VALID' : '✗ INVALID'} ${result3.reason || ''}\n`);
}
