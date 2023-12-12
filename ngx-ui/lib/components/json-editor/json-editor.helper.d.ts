import { JSONSchema7, JSONSchema7TypeName } from 'json-schema';
export declare const requiredIndicatorIcon = "\n  <svg width=\"11\" height=\"11\" viewBox=\"0 0 11 11\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n    <path d=\"M3.38411 10L2.19205 9.10616L3.89073 6.2089L1 4.97603L1.44702 3.55822L4.48676 4.32877L4.75497 1H6.21523L6.48344 4.29795L9.55298 3.55822L10 4.97603L7.10927 6.2089L8.77815 9.10616L7.61589 10L5.5 7.34931L3.38411 10Z\" fill=\"#72819F\" stroke=\"#72819F\" stroke-width=\"0.5\"/>\n  </svg>";
export interface JSONEditorSchema extends JSONSchema7 {
    $meta?: any;
    properties?: {
        [key: string]: JSONEditorSchema;
    };
    patternProperties?: {
        [key: string]: JSONEditorSchema;
    };
    items?: JSONEditorSchema;
    nameEditable?: boolean;
    propertyName?: string;
    currentType?: JSONSchema7TypeName | JSONSchema7TypeName[];
    id?: number;
}
export interface PropertyIndex extends JSONEditorSchema {
    [id: number]: JSONEditorSchema;
}
export interface JsonSchemaDataType {
    name: string;
    defaultValue: () => any;
    schema: {
        type: string;
        format?: string;
    };
    icon: string;
    matchType: (value: string) => boolean;
}
export declare const propTypes: string[];
export declare const jsonSchemaDataTypes: JsonSchemaDataType[];
export declare const jsonSchemaDataFormats: JsonSchemaDataType[];
export declare const dataTypeMap: Record<string, any>;
export declare function createValueForSchema(schema: JSONEditorSchema): any;
/**
 * Infers the schema type of the value
 *
 * @param value the value to infer the schema for
 * @param overrides an object with overridden inference functions for various schema types
 * @param allowedTypes the allowed schema types to consider
 */
export declare function inferType(value: any, overrides?: any, allowedTypes?: string[]): any;
/**
 * Returns the icon for the schema
 */
export declare function getIcon(schema: JSONEditorSchema): string;
/**
 * Returns a string for the schema.$meta.currentType property in the following format:
 * string, string=code, object, etc.
 *
 * @param schema
 */
export declare function getCurrentType(schema: JSONEditorSchema): string;
