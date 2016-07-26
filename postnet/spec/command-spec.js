describe('command', function () {
    it('mainCommand',function () {
        let mainCommand = buildMainCommand();
        let expected = '1. Translate zip code to bar code\n'
            + '2. Translate bar code to zip code\n'
            + '3. Quit\n'
            + 'Please input your choices(1~3)';
        expect(mainCommand).toEqual(expected);
    });
    it('goToZipToBarcodeCommand', function () {
        let inputLine = goToZipToBarcodeCommand();
        let expected = {
            text: 'Please input zip code:',
            reset: false,
            next: transformZipToBarcodeCommand
        };
        expect(inputLine).toEqual(expected);
    });
    it('zipToBarocdeCommand', function () {
        let zipcode = '95713';
        let barcode = transformZipToBarcodeCommand(zipcode);
        let expected = {
            text: '||:|:::|:|:|:::|:::||::||::|:|:|',
            reset: true,
            next: null
        }
        expect(barcode).toEqual(expected);
    });
    it('goToBarcodeToZipCommand', function () {
        let inputLine = goToBarcodeToZipCommand();
        let expected = {
            text: 'Please input bar code:',
            reset: false,
            next: transformBarcodeToZipCommand
        };
        expect(inputLine).toEqual(expected);
    });
    it('barocdeToZipCommand', function () {
        let barcode = '||:|:::|:|:|:::|:::||::||::|:|:|';
        let zipcode = transformBarcodeToZipCommand(barcode);
        let expected = {
            text: '95713',
            reset: true,
            next: null
        }
        expect(zipcode).toEqual(expected);
    });
    it('goQuit',function () {
        let result = goQuit();
        let expected = {
            text: 'Thank you for using',
            reset: true,
            next: null
        }
        expect(result).toEqual(expected);
    });
    it('otherInput', function () {
        let result = otherInput();
        let expected = {
            text: 'Please input right input',
            reset: true,
            next: buildMainCommand
        }
        expect(result).toEqual(expected);
    })
})