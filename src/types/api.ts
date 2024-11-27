/**
 * 接口请求类型定义
 */
// 返回结果
export interface Result<T = any> {
  code: number;
  data: T;
  msg: string;
}

// 通用分页列表
export interface ResultData<T> {
  list: T[];
  page: {
    pageNum: number;
    pageSize: number;
    total: number | 0;
  };
}
//分页请求参数
export interface PageParams {
  pageNum: number | undefined;
  pageSize?: number | undefined;
}
// 登录
export namespace Login {
  export interface params {
    username: string;
    password: string;
  }
}
// 用户接口
export namespace User {
  export interface Params extends PageParams {
    userId?: number;
    userName?: string;
    state?: number;
  }
  // 创建用户参数
  export interface CreateParams {
    userName: string;
    userEmail: string;
    mobile?: number;
    job?: string;
    state?: number;
    roleList?: string[];
    deptId?: string[];
    userImg?: string;
  }
  // 修改用户参数
  export interface EditParams extends CreateParams {
    userId?: number;
  }
  // 用户对象
  export interface UserItem extends CreateParams {
    userId: number;
    stateName?: string;
    deptName?: string;
    createTime?: number | string;
    lastLoginTime?: number | string;
  }
}
// 订单接口
export namespace OrderType {
  export interface LineData {
    label: string[];
    order: number[];
    money: number[];
  }
  export interface PieData {
    name: string;
    value: number[];
  }
  export interface RadarData {
    indicator: Array<{ name: string; max: number }>;
    data: {
      name: string;
      value: number[];
    };
  }
  export interface ReportData {
    driverCount: number;
    totalMoney: number;
    orderCount: number;
    cityNum: number;
  }
  export interface OrderListParams {
    menuName?: string;
    state?: number;
  }
  export interface DictItem {
    id: number;
    name: string;
  }
  export interface OrderSearchParams {
    orderId: string;
    userName: string;
    state: number;
  }
  export interface OrderItem {
    _id: string;
    orderId: string; //订单ID
    cityName: string;
    userName: string;
    mobile: number;
    startAddress: string; //下单开始地址
    endAddress: string; //下单结束地址
    orderAmount: number; //订单金额
    userPayAmount: number; //支付金额
    driverAmount: number; //支付金额
    // 1: 微信 2：支付宝
    payType: number; //支付方式
    driverName: string; //司机名称
    vehicleName: string; //订单车型
    // 1: 进行中 2：已完成 3：超时 4：取消
    state: number; // 订单状态
    route: Array<{ lng: string; lat: string }>;
    // 用车时间
    useTime: string;
    // 订单结束时间
    endTime: string;
    createTime: string;
    remark: string;
  }
  // 更新订单轨迹
  export interface OrderRoute {
    orderId: string; //订单ID
    route: Array<{ lng: string; lat: string }>;
  }
  export interface OrderData<T> {
    list: T[];
    page: {
      pageNum: number;
      pageSize: number;
      total: number;
    };
  }
  export interface DriverItem {
    driverName: string;
    driverId: number;
    driverPhone: string;
    cityName: string;
    grade: boolean;
    driverLevel: number;
    accountStatus: 0 | 1 | 2 | 3 | 4;
    carNo: string;
    vehicleBrand: string;
    vehicleName: string;
    onlineTime: number;
    driverAmount: number;
    rating: number;
    driverScore: number;
    pushOrderCount: number;
    orderCompleteCount: number;
    createTime: string;
  }
}
// 部门接口
export namespace Dept {
  export interface Params extends PageParams {
    deptName?: string;
  }
  export interface CreateParams {
    parentId?: string;
    deptName: number;
    userName: string;
  }
  export interface EditParams extends CreateParams {
    _id: string;
  }
  export interface DelParams {
    _id: string;
  }
  export interface DeptItem extends CreateParams {
    _id: string;
    createTime?: string;
    updateTime?: string;
    children?: DeptItem[];
  }
}

// 角色
export namespace Role {
  // 搜索参数
  export interface Params extends PageParams {
    roleName?: string;
  }
  export interface CreateParams {
    roleName: string;
    remark: string;
  }
  export interface EditParams extends CreateParams {
    _id: string;
  }
  export interface RoleItem extends CreateParams {
    _id: string;
    permissionList: {
      checkedKeys: string[];
      halfCheckedKeys: string[];
    };
    updateTime: string;
    createTime: string;
  }
  export interface CreatePermission {
    _id: string;
    permissionList: {
      checkedKeys: string[];
      halfCheckedKeys: string[];
    };
  }
}
// 菜单
export namespace MenuType {
  // 搜索参数
  export interface Params {
    menuName?: string;
    state?: number;
  }

  // 删除参数
  export interface DelParams {
    _id: string;
  }

  // 创建参数类型
  export interface CreateParams {
    menuName: string;
    icon?: string;
    menuType: number;
    menuState: number;
    menuCode?: string;
    parentId: string;
    path?: string;
    component?: string;
  }

  // 修改用户参数
  export interface EditParams extends CreateParams {
    _id?: string;
  }

  export interface MenuItem extends CreateParams {
    _id: string;
    buttons?: MenuItem[];
    children?: MenuItem[];
  }
}
