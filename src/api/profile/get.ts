import { octokit } from 'api/octokit';
import { IProfile, IProfileAPIResponse } from 'types/paralect-ss-22-test-task';

export const getProfile = async (
  username: string
): Promise<IProfileAPIResponse> => {
  const APIResponse = await octokit.request('GET /users/{username}', {
    username,
  });

  const { status } = APIResponse;
  const {
    avatar_url: avatarURL,
    name,
    login,
    html_url: URL,
    followers,
    following,
  } = <IProfile>APIResponse.data;

  const response: IProfileAPIResponse = {
    status: status === 200 ? true : false,
    response: APIResponse.data
      ? {
          avatar_url: avatarURL,
          name,
          login,
          html_url: URL,
          followers,
          following,
        }
      : undefined,
  };

  return response;
};

export default getProfile;
