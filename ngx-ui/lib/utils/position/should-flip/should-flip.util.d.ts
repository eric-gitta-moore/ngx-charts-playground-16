import { Dimensions } from '../dimensions.interface';
import { AlignmentTypes } from '../alignment-types.enum';
import { PlacementTypes } from '../placement-type.enum';
/**
 * Checks if the element's position should be flipped
 *
 * @param elDimensions
 * @param popoverDimensions
 * @param placement
 * @param alignment
 * @param spacing
 *
 * @returns boolean
 */
export declare const shouldFlip: (elDimensions: Dimensions, popoverDimensions: Dimensions, placement: PlacementTypes, alignment: AlignmentTypes, spacing: number) => boolean;
