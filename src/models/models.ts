export type ProfileType = {
  aboutMe: string;
  contacts: {};
  lookingForAJob: boolean;
  lookingForAJobDescription: string;
  fullName: string;
  userId: string;
  photos: {
    small: string;
    large: string;
  };
  status: string;
  posts: any;
};

export type LoginDataType = {
  email: string;
  password: string;
  rememberMe: string;
};

export type UserType = {
  id: number | null;
  login: string | null;
  email: string | null;
};

export interface IAction {
  type: string;
  isLoading: boolean;
  user?: UserType;
  messageText?: string;
  id?: number;
  profile?: ProfileType;
  status?: string;
  posts?: Array<PostType>;
  postText?: string;
  lang?: LanguageType;
  theme?: ThemeType;
  users?: Array<UserType>;
  page?: number;
  text?: string;
  qty?: number;
}

export type DialogType = {
  id: number;
  name: string;
  messages: Array<string>;
};

export type PostType = {
  text: string;
  id: number;
  likes: number;
};

export type LanguageType = 'RU' | 'EN' | 'FR' | 'SP' | 'GER';

export type ThemeType = 'DARK' | 'LIGHT';
