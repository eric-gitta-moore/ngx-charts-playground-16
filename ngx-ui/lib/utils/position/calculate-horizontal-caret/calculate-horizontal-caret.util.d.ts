import { Dimensions } from '../dimensions.interface';
import { AlignmentTypes } from '../alignment-types.enum';
/**
 * Calculate horz caret position
 *
 * @param elDimensions
 * @param popoverDimensions
 * @param caretDimensions
 * @param alignment
 *
 * @returns number
 */
export declare const calculateHorizontalCaret: (elDimensions: Dimensions, popoverDimensions: Dimensions, caretDimensions: Dimensions, alignment: AlignmentTypes) => number;
