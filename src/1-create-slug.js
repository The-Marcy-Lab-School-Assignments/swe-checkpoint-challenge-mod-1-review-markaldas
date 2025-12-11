// Return a URL-friendly "slug": lowercase with hyphens instead of spaces.
// Return null if the title contains banned characters: "!", "#", "?"
const createSlug = (title) => {
  if (title.split('').find((hyphen) => hyphen === '#' || hyphen === '!' || hyphen === '?')) {
    return null;
  }
  const allLower = title.toLowerCase();
  const replaceSpaces = allLower.replaceAll(' ', '-')
  return replaceSpaces
};

module.exports = {
  createSlug,
};
