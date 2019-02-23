//adds css class for fading last letters of article's headings and leads
export const letterFade = (txtList) => {

    for (let i = 0; i < txtList.length; i++) {
        let stringToFade = txtList[i].innerHTML;
        stringToFade = stringToFade.slice(0, -4) +
        '<span class="cut">' + stringToFade.substring(stringToFade.length - 4) +
        '</span>';
        txtList[i].innerHTML = stringToFade;
    }
}