import { CalendarMonth } from '../../calendar-month.type';
import { CalendarDay } from '../../calendar-day.interface';
/**
 * Gets a array of days split by week
 *
 * @param days
 * @param offset
 * @return days by week
 */
export declare function getWeeksForDays(days: CalendarDay[], startDay: number): CalendarMonth;
