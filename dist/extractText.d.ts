type StartEndAnchor = {
    startAnchor: '{{START_NOTE}}';
    endAnchor: '{{END_NOTE}}';
} | {
    startAnchor: '{{DATE}}';
    endAnchor: '{{END_DATE}}';
};
/**
 * extracts all notes from a template (contents in between )
 * @param param0
 * @returns string[]
 */
export declare const extractContentBetweenAnchors: ({ text, startAnchor, endAnchor }: {
    text: string;
} & StartEndAnchor) => (string | undefined)[];
export {};
