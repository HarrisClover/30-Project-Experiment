const API_URL = 'https://api.github.com';

export async function getUserData(username) {
  const response = await fetch(`${API_URL}/users/${username}`);
  const data = await response.json();

  const reposResponse = await fetch(data.repos_url);
  const repos = await reposResponse.json();

  return {
    ...data,
    repositories: repos,
  };
}
