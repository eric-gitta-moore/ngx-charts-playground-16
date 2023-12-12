import { Dimensions } from '../dimensions.interface';
import { AlignmentTypes } from '../alignment-types.enum';
/**
 * Calculate vertical caret position
 *
 * @param elDimensions
 * @param popoverDimensions
 * @param caretDimensions
 * @param alignment
 *
 * @memberOf PositionHelper
 */
export declare const calculateVerticalCaret: (elDimensions: Dimensions, popoverDimensions: Dimensions, caretDimensions: Dimensions, alignment: AlignmentTypes) => number;
