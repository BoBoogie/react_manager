import request from '@/utils/request.ts';
import { Login, User, OrderType, ResultData, Dept, MenuType, Role } from '@/types/api.ts';

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
  },
  /**
   * 新增用户
   * @param params
   */
  userCreate(params: User.CreateParams) {
    return request.post('/users/create', params);
  },
  /**
   * 编辑用户
   * @param params
   */
  userEdit(params: User.EditParams) {
    return request.post('/users/edit', params);
  },
  /**
   * 删除用户
   * @param params
   */
  userDel(params: { userIds: number[] }) {
    return request.post('/users/delete', params);
  },
  /**
   * 获取部门列表
   * @param params
   */
  getDeptList(params?: Dept.Params) {
    return request.get<Dept.DeptItem[]>('/dept/list', params);
  },
  /**
   * 创建部门列表
   * @param params
   */
  createDept(params: Dept.CreateParams) {
    return request.post('/dept/create', params);
  },
  /**
   * 编辑部门
   * @param params
   */
  editDept(params: Dept.EditParams) {
    return request.post('/dept/edit', params);
  },
  /**
   * 删除部门
   * @param params
   */
  delDeptById(params: Dept.DelParams) {
    return request.post('/dept/delete', params);
  },
  /**
   * 获取全量用户列表
   * @param params
   */
  getAllUserList(params?: User.Params) {
    return request.get<User.UserItem[]>('/users/all/list', params);
  },
  /**
   * 获取菜单列表
   * @param params
   */
  getMenuList(params?: MenuType.Params) {
    return request.get<MenuType.MenuItem[]>('/menu/list', params);
  },
  /**
   * 创建菜单
   * @param params
   */
  createMenu(params: MenuType.CreateParams) {
    return request.post('/menu/create', params);
  },
  /**
   * 修改菜单
   * @param params
   */
  editMenu(params: MenuType.EditParams) {
    return request.post('/menu/edit', params);
  },
  /**
   * 删除菜单
   * @param params
   */
  delMenuById(params: MenuType.DelParams) {
    return request.post('/menu/delete', params);
  },
  /**
   * 获取角色列表
   * @param params
   */
  getRoleList(params?: Role.Params) {
    return request.get<ResultData<Role.RoleItem>>('/role/list', params);
  },
  /**
   * 创建角色
   * @param params
   */
  createRole(params: Role.CreateParams) {
    return request.post('/role/create', params);
  },
  /**
   * 修改角色
   * @param params
   */
  editRole(params: Role.EditParams) {
    return request.post('/role/edit', params);
  },
  /**
   * 删除角色
   * @param params
   */
  delRoleById(params: Role.EditParams) {
    return request.post('/role/delete', params);
  }
};
