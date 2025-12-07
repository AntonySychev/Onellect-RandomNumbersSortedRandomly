import { SERVER_URL } from "./httpconfig.ts";

export class HttpArraySender {
    async sendNumberArray(array: Array<number>) {
        try {
            let response = await fetch(SERVER_URL, {
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