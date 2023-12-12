import { PlacementTypes } from '../placement-type.enum';
import { Dimensions } from '../dimensions.interface';
import { AlignmentTypes } from '../alignment-types.enum';
/**
 * Determine placement based on flip
 *
 * @param placement
 * @param elmDim
 * @param hostDim
 * @param spacing
 * @param alignment
 *
 * @returns PlacementTypes
 */
export declare const determinePlacement: (placement: PlacementTypes, elmDim: Dimensions, hostDim: Dimensions, spacing: number, alignment: AlignmentTypes) => PlacementTypes;
