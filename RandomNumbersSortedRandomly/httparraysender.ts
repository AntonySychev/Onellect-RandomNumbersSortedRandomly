export class HttpArraySender {
    async sendNumberArray(array: Array<number>) {
        try {
            let response = await fetch("http://somesite.com.ru.com/randomarray", {
                method: "POST",
                body: JSON.stringify(array),
                headers: { 'Content-Type': "application/json" }
            });

            if (!response.ok) {
                console.log(`"Error during http response: status = ${response.status}, statusText = ${response.statusText}, text = ${response.text}"`);
            }
        }
        catch (exception) {
            console.log(exception);
        }
    }
}