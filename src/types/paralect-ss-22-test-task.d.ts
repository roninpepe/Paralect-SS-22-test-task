interface IAPIResponse {
  status: boolean;
}
interface IAPIRequestStatus extends IAPIResponse {
  pending: boolean;
}
export interface IElementProps {
  className?: string;
  key?: string;
}

export interface IProfile {
  avatar_url: string;
  name: string | null;
  login: string;
  html_url: string;
  followers: number;
  following: number;
}
export interface IRepository {
  html_url: string;
  name: string;
  description: string | null;
}
export interface IRepositories {
  login: string;
}
export interface IRepositoriesPagination {
  repositories: IRepository[];
}

export interface IProfileAPIResponse extends IAPIResponse {
  response?: IProfile;
}
export interface IRepositoriesAPIResponse extends IAPIResponse {
  response?: IRepository[];
}

export interface IProfileAPIRequestStatus
  extends IAPIRequestStatus,
    IProfileAPIResponse {}
export interface IRepositoriesAPIRequestStatus
  extends IAPIRequestStatus,
    IRepositoriesAPIResponse {}

export interface IProfileProps extends IElementProps, IProfile {}
export interface IRepositoryProps extends IElementProps, IRepository {}
export interface IRepositoriesProps extends IElementProps, IRepositories {}
export interface IRepositoriesPaginationProps
  extends IElementProps,
    IRepositoriesPagination {}
