
export const convertDate = ISODate => {
    const date = new Date(ISODate);
    const convetedDate = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate()
    return convetedDate
}