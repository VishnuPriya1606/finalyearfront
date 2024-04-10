document.getElementById("calculateButton").addEventListener("click", async () => {
    const sourceSentence = document.getElementById("sourceSentence").value;
    const comparisonSentences = document.getElementById("comparisonSentences").value.split(",").map(s => s.trim());

    const response = await fetch("http://localhost:4000/api/get_similarity_scores", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            source_sentence: sourceSentence,
            sentences: comparisonSentences
        })
    });

    const similarityScores = await response.json();
    displaySimilarityScores(similarityScores);
});

function displaySimilarityScores(scores) {
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = ""; // Clear previous results

    const ul = document.createElement("ul");
    for (const score of scores) {
        const li = document.createElement("li");
        li.textContent = `Similarity Score: ${score.toFixed(4)}`;
        ul.appendChild(li);
    }
    resultDiv.appendChild(ul);
}
