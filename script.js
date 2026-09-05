// Linyon Compatibility Score Function
function calculateCompatibility(userA, userB) {
    let score = 0;

    // Age difference (smaller difference = higher score)
    const ageDiff = Math.abs(userA.age - userB.age);
    score += Math.max(0, 30 - ageDiff);

    // Location match (same city = +20)
    if (userA.city === userB.city) {
        score += 20;
    }

    // Interests overlap (each match = +10)
    const sharedInterests = userA.interests.filter(interest =>
        userB.interests.includes(interest)
    );
    score += sharedInterests.length * 10;

    // Religion match (Catholic, Christian, etc.)
    if (userA.religion && userA.religion === userB.religion) {
        score += 15;
    }

    // Haitian cultural alignment (kompa, creole, food, etc.)
    const haitianTags = ["kompa", "creole", "haitian food", "culture", "zouk"];
    const culturalMatch = userA.interests.filter(interest =>
        haitianTags.includes(interest) && userB.interests.includes(interest)
    );
    score += culturalMatch.length * 5;

    // Cap score at 100
    return Math.min(score, 100);
}
