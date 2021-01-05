import * as dayjs from 'dayjs';

export default {
  errCodes: {
    200: '服务器成功返回请求的数据。',
    201: '新建或修改数据成功。',
    202: '一个请求已经进入后台排队（异步任务）。',
    204: '删除数据成功。',
    400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
    401: '用户没有权限（令牌、用户名、密码错误）。',
    403: '用户得到授权，但是访问是被禁止的。',
    404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
    406: '请求的格式不可得。',
    410: '请求的资源被永久删除，且不会再得到的。',
    422: '当创建一个对象时，发生一个验证错误。',
    500: '服务器发生错误，请检查服务器。',
    502: '网关错误。',
    503: '服务不可用，服务器暂时过载或维护。',
    504: '网关超时。',
    510: '余额不足。',
    511: '不是VIP，无法暂停VIP服务。',
  },
  enums: {
    prefix: {
      socketId: 'sock:',
    },
  },
  async getSatr(arr, service) {
    let starObj = {};
    const star = await service.star.list(arr);
    star.forEach(item => {
      starObj = Object.assign({}, starObj, { [item.star_name]: item });
    });
    const starList = arr.map(item => {
      return starObj[item] ? { id: starObj[item].star_id, title: item } : { title: item };
    });
    return starList;
  },
  // 日 周 月 总 统计
  async hits({ arr, model }, app) {
    const h = [];
    // 初始化值
    const hit = `hits`;
    const month = `hits_month`;
    const week = `hits_week`;
    const day = `hits_day`;
    const lasttime = `hits_lasttime`;
    const last = typeof arr[lasttime] === 'number' && String(arr[lasttime]).length === 10 ? arr[lasttime] * 1000 : dayjs(arr[lasttime]).valueOf();
    const rid = `id`;
    const now = new Date();
    const old = new Date(last);
    h[hit] = arr[hit];
    h[month] = arr[month];
    h[week] = arr[week];
    h[day] = arr[day];
    // 月
    if (now.getFullYear() === old.getFullYear() && now.getMonth() === old.getMonth()) {
      h[month]++;
    } else {
      h[month] = 1;
    }
    // 周
    const weekStart = dayjs().startOf('week').valueOf();
    const weekEnd = dayjs().endOf('week').valueOf();
    if (last >= weekStart && last <= weekEnd) {
      h[week]++;
    } else {
      h[week] = 1;
    }
    // 日
    if (now.getFullYear() === old.getFullYear() && now.getMonth() === old.getMonth() && now.getDate() === old.getDate()) {
      h[day]++;
    } else {
      h[day] = 1;
    }
    h[rid] = arr[rid];
    h[hit] = arr[hit] + 1;
    h[lasttime] = typeof arr[lasttime] === 'number' ? new Date().getTime() : dayjs().format();
    await app.model[model].update(h, { where: { [rid]: arr[rid] } });
    delete h[rid];
    delete h[lasttime];
    return { ...h };
  },
};
