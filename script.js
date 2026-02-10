function generatePrompt() {
    const style = document.getElementById("style").value;
    const subject = document.getElementById("subject").value;
    const mood = document.getElementById("mood").value;

    const result = `Create a video about ${subject}, in ${style} style, with a ${mood} atmosphere.`;

    document.getElementById("output").value = result;
}

function randomPrompt() {
    let styles = ["Cinematic", "Anime", "Cyberpunk", "Realistic", "Fantasy"];
    let subjects = ["A Dragon", "A Samurai", "A Future City", "A Peaceful Forest"];
    let moods = ["Dark", "Happy", "Mystical", "Energetic"];

    const result = `Create a video about ${subjects[Math.floor(Math.random()*subjects.length)]}, in ${styles[Math.floor(Math.random()*styles.length)]} style, with a ${moods[Math.floor(Math.random()*moods.length)]} atmosphere.`;

    document.getElementById("output").value = result;
}
