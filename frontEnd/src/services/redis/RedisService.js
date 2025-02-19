export default class RedisService {
    persistDataSection = async (data) => {
        const request = new Request("http://localhost:5151/redis", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: data
        })

        const result = await fetch(request);

        return result;
    }
}