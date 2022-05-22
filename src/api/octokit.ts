import { Octokit } from 'octokit';

const accessToken = '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';

export const octokit = new Octokit({ auth: accessToken });

export default octokit;
