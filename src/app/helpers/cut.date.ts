const cutDateToNewFormat = (date: string): string => {
    const splitDateArray: string[] = date.split("-");
    return `${splitDateArray[2]} / ${splitDateArray[1]} / ${splitDateArray[0]}`;
}

export default cutDateToNewFormat;