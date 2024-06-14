const verses = [
    "'I can do all things through Christ who strengthens me.' - Philippians 4:13", "'For I know the plans I have for you, declares the Lord, plans for welfare and not for evil, to give you a future and a hope.' - Jeremiah 29:11:",
    "'The Lord is my shepherd; I shall not want.' - Psalm 23:1:","'I have no special talent. I am only passionately curious.'- Albert Einstein","'I have a dream that one day this nation will rise up and live out the true meaning of its creed.'- Martin Luther King Jr.",
    "'I dream of painting and then I paint my dream.'- Vincent van Gogh","'I count him braver who overcomes his desires than him who conquers his enemies; for the hardest victory is over self.'- Aristotle",
    "'Trust in the Lord with all your heart, and do not lean on your own understanding. In all your ways acknowledge him, and he will make straight your paths.'-Proverbs 3:5-6","'Be strong and courageous. Do not be afraid or terrified because of them, for the Lord your God goes with you; he will never leave you nor forsake you.'-Deuteronomy 31:6",
    "'The most worth-while thing is to try to put happiness into the lives of others.'-Lord Robert Baden-Powell","'A Scout smiles and whistles under all circumstances.'-Lord Robert Baden-Powell","'The uniform makes for brotherhood, since when universally adopted it covers up all differences of class and country.'-Lord Robert Baden-Powell"  
];

function generateVerse() {
    const verseDisplay = document.getElementById("verseDisplay");
    const randomIndex = Math.floor(Math.random() * verses.length);
    verseDisplay.textContent = verses[randomIndex];
}
