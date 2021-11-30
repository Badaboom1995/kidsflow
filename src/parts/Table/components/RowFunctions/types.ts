export type TRowFunction = {
    name: string,
    method: (id: string) => void
};
export type TRowFunctions = { functions: TRowFunction[] }