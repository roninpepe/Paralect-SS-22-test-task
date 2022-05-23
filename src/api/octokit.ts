import { Octokit } from 'octokit';

const accessToken = 'ghp_4HEader'; // Put your private GitHub API key here

export const octokit = new Octokit({ auth: accessToken });

export default octokit;
