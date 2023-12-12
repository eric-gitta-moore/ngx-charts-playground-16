import { Dimensions } from '../dimensions.interface';
import { AlignmentTypes } from '../alignment-types.enum';
/**
 * Calculate horz alignment position
 *
 * @param elDimensions
 * @param popoverDimensions
 * @param alignment
 *
 * @returns number
 */
export declare const calculateHorizontalAlignment: (elDimensions: Dimensions, popoverDimensions: Dimensions, alignment: AlignmentTypes) => number;
