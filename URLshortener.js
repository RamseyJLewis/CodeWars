// URL Shortener
// Write a function urlShortener(longUrl), which receives a long URL and returns an URL consisting only of lowercase letters (and one dot and one slash).

// Every short URL has to include short.ly/ and must not be longer than 13.

// Note: short.ly/ is not a valid short URL.

// Redirect URL
// Write a function urlRedirector(shortUrl), which receives the shortened URL and returns the corresponding long URL.

// Performance
// There are 475_000 random tests. You don't need a complicated algorithm to solve this kata, but iterating each time through the whole database to check if a URL was used before or generating short URLs based on randomness, won't pass.


// short.ly/ 9 char long


const SHORTENED_PREFIX = 'short.ly/';
const MAX_SHORTENED_LENGTH = 4;
const ALPHABETS = 'abcdefghijklmnopqrstuvwxyz';

const memo = [{}, {}];

const urlShortener = (longURL) => {
  if (typeof memo[0][longURL] !== 'undefined') return SHORTENED_PREFIX.concat (memo[0][longURL]);
  
  let shortened = '';
  const chars = Array.from (ALPHABETS);
  for (let i = 0; i < MAX_SHORTENED_LENGTH; i += 1) {
    const roll = Math.round (Math.random () * (chars.length - 1));
    shortened += chars[roll];
  }

  memo[0][longURL] = shortened;
  memo[1][shortened] = longURL;
  
  return SHORTENED_PREFIX.concat (shortened);
}

const urlRedirector = (shortURL) => {
  const key = shortURL.split ('/')[1];
  return memo[1][key];
}