export default async function request(url) {
    const response = await fetch(url);

    if (!response.ok) {
        throw response.statusText;
    }
    const result = await response.json();

    return result;
}