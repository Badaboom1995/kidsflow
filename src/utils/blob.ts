export const getFileFromBlob = async (blob: string): Promise<File> => {
    const file = await fetch(blob).then(r => r.blob()).then(blobFile => new File([blobFile], "storyImage", { type: "image/png" }))
    return file
}
export const isBlob = (url: string): boolean => url?.includes('blob:http')

