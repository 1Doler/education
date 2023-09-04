type Modes = Record<string, boolean | string>;


export function classNames(cls: string, mods: Modes, additional: string[]): string {
    return [
        cls,
        ...additional,
        Object.entries(mods)
            .filter(([cls, value]) => Boolean(value))
            .map(([cls]) => cls)
    ].join(" ");
}