// This file is created by egg-ts-helper@1.25.8
// Do not modify this file!!!!!!!!!

import 'egg';
type AnyClass = new (...args: any[]) => any;
type AnyFunc<T = any> = (...args: any[]) => T;
type CanExportFunc = AnyFunc<Promise<any>> | AnyFunc<IterableIterator<any>>;
type AutoInstanceType<T, U = T extends CanExportFunc ? T : T extends AnyFunc ? ReturnType<T> : T> = U extends AnyClass ? InstanceType<U> : U;
import ExportComments from '../../../app/service/comments';
import ExportFavorite from '../../../app/service/favorite';
import ExportFeed from '../../../app/service/feed';
import ExportList from '../../../app/service/list';
import ExportMcat from '../../../app/service/mcat';
import ExportNews from '../../../app/service/news';
import ExportRe from '../../../app/service/re';
import ExportRedis from '../../../app/service/redis';
import ExportSubject from '../../../app/service/subject';
import ExportTag from '../../../app/service/tag';
import ExportUser from '../../../app/service/user';

declare module 'egg' {
  interface IService {
    comments: AutoInstanceType<typeof ExportComments>;
    favorite: AutoInstanceType<typeof ExportFavorite>;
    feed: AutoInstanceType<typeof ExportFeed>;
    list: AutoInstanceType<typeof ExportList>;
    mcat: AutoInstanceType<typeof ExportMcat>;
    news: AutoInstanceType<typeof ExportNews>;
    re: AutoInstanceType<typeof ExportRe>;
    redis: AutoInstanceType<typeof ExportRedis>;
    subject: AutoInstanceType<typeof ExportSubject>;
    tag: AutoInstanceType<typeof ExportTag>;
    user: AutoInstanceType<typeof ExportUser>;
  }
}
