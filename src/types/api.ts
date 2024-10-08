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
}
// 部门接口
export namespace Dept {
  export interface Params {
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
    children?: DeptItem[];
  }
}
