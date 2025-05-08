{
    function formatString(input: string, toUpper?: boolean): string {

        if (typeof input === "string" && toUpper === false) {
            return input
        }

        if (typeof input === "string") {
            return input.toUpperCase()
        }

        else {
            return input;
        }
    }

    console.log(formatString("Mostafiz", true));


}