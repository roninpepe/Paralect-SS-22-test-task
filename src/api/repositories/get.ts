import { octokit } from 'api/octokit';
import { IRepositoriesAPIResponse } from 'types/paralect-ss-22-test-task';

export const getRepositories = async (
  username: string
): Promise<IRepositoriesAPIResponse> => {
  const APIResponse = await octokit.request('GET /users/{username}/repos', {
    username,
  });

  const { status, data } = APIResponse;

  const response: IRepositoriesAPIResponse = {
    status: status === 200 ? true : false,
    response: data,
  };

  return response;
};

export default getRepositories;
