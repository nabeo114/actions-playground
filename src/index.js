export function formatGreeting(name) {
  return `Hello, ${name}!`;
}

const message = formatGreeting("GitHub Actions");
const debugMessage = "This variable is intentionally unused"

console.log(message);
