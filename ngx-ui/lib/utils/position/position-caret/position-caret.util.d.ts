import { PlacementTypes } from '../placement-type.enum';
import { Dimensions } from '../dimensions.interface';
import { AlignmentTypes } from '../alignment-types.enum';
/**
 * Position caret
 *
 * @param placement
 * @param elmDim
 * @param hostDim
 * @param caretDimensions
 * @param alignment
 *
 * @returns ({ top: number; left: number; })
 */
export declare const positionCaret: (placement: PlacementTypes, elmDim: Dimensions, hostDim: Dimensions, caretDimensions: Dimensions, alignment: AlignmentTypes) => {
    top: number;
    left: number;
};
