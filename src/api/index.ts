import request from '@/utils/request.ts';
import { Login, User, OrderType, ResultData } from '@/types/api.ts';

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
  },
  /**
   * 获取统计信息
   */
  getReportData() {
    return request.get<OrderType.ReportData>('/order/dashboard/getReportData');
  },
  /**
   * 获取折线图数据
   */
  getLineData() {
    return request.get<OrderType.LineData>('/order/dashboard/getLineData');
  },
  /**
   * 获取饼图1数据
   */
  getPieCityData() {
    return request.get<OrderType.PieData[]>('/order/dashboard/getPieCityData');
  },
  /**
   * 获取饼图2数据
   */
  getPieAgeData() {
    return request.get<OrderType.PieData[]>('/order/dashboard/getPieAgeData');
  },
  /**
   * 获取雷达图数据
   */
  getRadarData() {
    return request.get<OrderType.RadarData>('/order/dashboard/getRadarData');
  },
  /**
   * 获取用户列表
   * @param params
   */
  getUserList(params?: User.Params) {
    return request.get<ResultData<User.UserItem>>('/users/list', params);
  }
};
