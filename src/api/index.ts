import request from '@/utils/request.ts';
import { Login, User } from '@/types/api.ts';

export default {
  /**
   * 登录
   * @param params
   */
  login(params: Login.params) {
    return request.post<string>('/users/login', params, { showLoading: false });
  },
  /**
   * 获取用户信息
   */
  getUserInfo() {
    return request.get<User.UserItem>('/users/getUserInfo');
  }
};
