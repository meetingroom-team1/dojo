function buildMainCommand() {
    return '1. Translate zip code to bar code\n'
        + '2. Translate bar code to zip code\n'
        + '3. Quit\n'
        + 'Please input your choices(1~3)';
}
function goToZipToBarcodeCommand() {
    return {
        text: 'Please input zip code:',
        reset: false,
        next: transformZipToBarcodeCommand
    }
}
function transformZipToBarcodeCommand(zipcode) {
    let barcodes = parseZipcode(zipcode);
    if(barcodes.type){
        return{
            text: barcodes.barcode,
            reset: true,
            next: null
        }
    }else{
        return{
            text: "Please input right input:",
            reset: false,
            next: goToZipToBarcodeCommand
        }
    }
}
function goToBarcodeToZipCommand() {
    return{
        text: 'Please input bar code:',
        reset: false,
        next: transformBarcodeToZipCommand
    }
}
function transformBarcodeToZipCommand(barcode) {
    let zipcodes = parseBarcode(barcode);
    if(zipcodes.type){
        return{
            text: zipcodes.zipcode,
            reset: true,
            next: null
        }
    }else{
        return{
            text: "Please input right input:",
            reset: false,
            next: goToBarcodeToZipCommand
        }
    }
}
function goQuit() {
    return {
        text: 'Thank you for using',
        reset: true,
        next: null
    }
}
function otherInput() {
    return {
        text: 'Please input right input',
        reset: true,
        next: buildMainCommand
    }
}