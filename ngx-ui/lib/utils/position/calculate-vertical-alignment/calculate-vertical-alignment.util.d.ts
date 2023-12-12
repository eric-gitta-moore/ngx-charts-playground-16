import { Dimensions } from '../dimensions.interface';
import { AlignmentTypes } from '../alignment-types.enum';
/**
 * Calculate vertical alignment position
 *
 * @param elDimensions
 * @param popoverDimensions
 * @param alignment
 *
 * @memberOf PositionHelper
 */
export declare const calculateVerticalAlignment: (elDimensions: Dimensions, popoverDimensions: Dimensions, alignment: AlignmentTypes) => number;
