// 1.Create a program that fetches and displays data from a public API (e.g., news 
    // headlines, quotes, random facts)


async function fetchQuote() {
    
    const apiUrl = "https://type.fit/api/quotes";
    const rs = await fetch(apiUrl)
    const res = await rs.json();
    console.log(res);
}
fetchQuote();

