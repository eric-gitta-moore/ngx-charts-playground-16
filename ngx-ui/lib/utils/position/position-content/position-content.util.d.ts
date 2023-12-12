import { PlacementTypes } from '../placement-type.enum';
import { Dimensions } from '../dimensions.interface';
import { AlignmentTypes } from '../alignment-types.enum';
/**
 * Position content
 *
 * @param placement
 * @param elmDim
 * @param hostDim
 * @param spacing
 * @param alignment
 *
 * @returns ({ top: number; left: number; })
 */
export declare const positionContent: (placement: PlacementTypes, elmDim: Dimensions, hostDim: Dimensions, spacing: number, alignment: AlignmentTypes) => {
    top: number;
    left: number;
};
