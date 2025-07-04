const headlines = [
  "Why {name} is {location}'s Sweetest Spot in 2025",
  "Discover the Magic of {name} in {location}",
  "{name}: The Go-To Place for Locals in {location}",
  "How {name} is Changing the Game in {location}",
  "Top Reasons to Visit {name} in {location} This Year"
];

function getRandomHeadline(name, location) {
  const template = headlines[Math.floor(Math.random() * headlines.length)];
  return template.replace('{name}', name).replace('{location}', location);
}

module.exports = { getRandomHeadline };
