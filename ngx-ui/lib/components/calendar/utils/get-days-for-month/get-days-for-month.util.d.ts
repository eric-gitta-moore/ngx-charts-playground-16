import moment from 'moment';
import { CalendarDay } from '../../calendar-day.interface';
/**
 * Get the days for the month
 *
 * @param active
 * @return array of days
 */
export declare function getDaysForMonth(active: moment.Moment): CalendarDay[];
