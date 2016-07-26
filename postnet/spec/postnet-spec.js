describe('postnet', function () {
    it('checkBarcode', function () {
        let barcodeString = "|:|::|:|:|:||::::|:|::||:::::||::|:|::||::|::|||:::|";
        let checkedBarcode = checkBarcode(barcodeString);
        let expected = {
            barcode: "|:|::|:|:|:||::::|:|::||:::::||::|:|::||::|::|||:::|",
            type: true
        }
        expect(checkedBarcode).toEqual(expected);
    });
    it('formatBarcode', function () {
        let checkedBarcode = {
            barcode: "|:|::|:|:|:||::::|:|::||:::::||::|:|::||::|::|||:::|",
            type: true
        };
        let formattedBarcode = formatBarcode(checkedBarcode);
        let expected = {
            barcode: ":|::|:|:|:||::::|:|::||:::::||::|:|::||::|::|||:::",
            type: true
        }
        expect(formattedBarcode).toEqual(expected);
    });
    it('buildBarcodeArray', function () {
        let formattedBarcode = {
            barcode: ":|::|:|:|:||::::|:|::||:::::||::|:|::||::|::|||:::",
            type: true
        };
        let barcodeArray = buildBarcodeArray(formattedBarcode);
        let expected = [':|::|', ':|:|:', '||:::', ':|:|:', ':||::', ':::||', "::|:|", "::||:", ":|::|", "||:::"];
        expect(barcodeArray).toEqual(expected);
    });
    it('matchDigital', function () {
        let barcodeArray = [':|::|', ':|:|:', '||:::', ':|:|:', ':||::', ':::||', "::|:|", "::||:", ":|::|", "||:::"];
        let allCodes = loadAllCodes();
        let matchedDigital = matchDigital(barcodeArray, allCodes);
        let expected = {
                zipcodeArray: ['4', '5', '0', '5', '6', '1', '2', '3', '4', '0'],
                type: true
            }
            ;
        expect(matchedDigital).toEqual(expected);
    })
    it('transformBarcode', function () {
        let checkedBarcode = {
            barcode: "|:|::|:|:|:||::::|:|::||:::::||::|:|::||::|::|||:::|",
            type: true
        };
        let transformedBarcode = transformBarcode(checkedBarcode);
        let expected = {
            zipcodeArray: ['4', '5', '0', '5', '6', '1', '2', '3', '4', '0'],
            type: true
        }
        expect(transformedBarcode).toEqual(expected);
    });
    it('recheckZipcode', function () {
        let transformedBarcode = {
            zipcodeArray: ['4', '5', '0', '5', '6', '1', '2', '3', '4', '0'],
            type: true
        }
        let recheckedZipcode = recheckZipcode(transformedBarcode);
        let expected = {
            zipcodeArray: ['4', '5', '0', '5', '6', '1', '2', '3', '4', '0'],
            type: true
        }
        expect(recheckedZipcode).toEqual(expected);
    });
    it('buildPrintZipcode', function () {
        let recheckedZipcode = {
            zipcodeArray: ['4', '5', '0', '5', '6', '1', '2', '3', '4', '0'],
            type: true
        }
        let printZipcode = buildPrintZipcode(recheckedZipcode);
        let expected = "45056-1234";
        expect(printZipcode).toEqual(expected);
    });
    it('parseBarcode', function () {
        //let barcodeString = "|:|::|:|:|:||::::|:|::||:::::||::|:|::||::|::|||:::|";
        let barcodeString = "||:|:::|:|:|:::|:::||::||::|:|:|";
        let parsedBarcode = parseBarcode(barcodeString);
        //let expected = "45056-1234";
        let expected = "95713";
        expect(parsedBarcode).toEqual(expected);
    })
    it('checkZipcode', function () {
        let barcodeString = "957133";
        let checkedZipcode = checkZipcode(barcodeString);
        let expected = {
            //zipcode: "95713",
            type: false
        }
        expect(checkedZipcode).toEqual(expected);
    });
    it('formatZipcode', function () {
        let checkedZipcode = {
            zipcode: "95713",
            type: true
        }
        let formattedZipcode = formatZipcode(checkedZipcode);
        let expected = {
            zipcode: "95713"
        }
        expect(formattedZipcode).toEqual(expected);
    });
    it('buildZipcodeArray', function () {
        let formattedZipcode = {
            zipcode: "95713"
        }
        let zipcodeArray = buildZipcodeArray(formattedZipcode);
        let expected = ["9", "5", "7", "1", "3"];
        expect(zipcodeArray).toEqual(expected);
    });
    it('calculateCD', function () {
        let zipcodeArray = ["9", "5", "7", "1", "3"];
        let zipcodeAndCDArray = calculateCD(zipcodeArray);
        let expected = ["9", "5", "7", "1", "3", "5"];
        expect(zipcodeAndCDArray).toEqual(expected);
    });
    it('matchString', function () {
        let allcodes = loadAllCodes();
        let zipcodeAndCDArray = ["9", "5", "7", "1", "3", "5"];
        let matchedString = matchString(zipcodeAndCDArray, allcodes);
        let expected = {
            barcodeArray: ['|:|::', ':|:|:', '|:::|', ':::||', '::||:', ':|:|:'],
            type: true
        };
        expect(matchedString).toEqual(expected);
    });
    it('transformZipcode', function () {
        let checkedZipcode = {
            zipcode: "95713",
            type: true
        }
        let transformedZipcode = transformZipcode(checkedZipcode);
        let expected = {
            barcodeArray: ['|:|::', ':|:|:', '|:::|', ':::||', '::||:', ':|:|:'],
            type: true
        }
        expect(transformedZipcode).toEqual(expected);
    });
    it('buildPrintZipcode', function () {
        let transformedZipcode = {
            barcodeArray: ['|:|::', ':|:|:', '|:::|', ':::||', '::||:', ':|:|:'],
            type: true
        }
        let printBarcode = buildPrintBarcode(transformedZipcode);
        let expected = "||:|:::|:|:|:::|:::||::||::|:|:|";
        expect(printBarcode).toEqual(expected);
    });
    it('parseZipcode', function () {
        let barcodeString = "95713";
        let parsedZipcode = parseZipcode(barcodeString);
        let expected = "||:|:::|:|:|:::|:::||::||::|:|:|";
        expect(parsedZipcode).toEqual(expected);
    })
});
