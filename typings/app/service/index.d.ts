// This file is created by egg-ts-helper@1.25.8
// Do not modify this file!!!!!!!!!

import 'egg';
type AnyClass = new (...args: any[]) => any;
type AnyFunc<T = any> = (...args: any[]) => T;
type CanExportFunc = AnyFunc<Promise<any>> | AnyFunc<IterableIterator<any>>;
type AutoInstanceType<T, U = T extends CanExportFunc ? T : T extends AnyFunc ? ReturnType<T> : T> = U extends AnyClass ? InstanceType<U> : U;
import ExportActor = require('../../../app/service/actor');
import ExportComments from '../../../app/service/comments';
import ExportFavorite from '../../../app/service/favorite';
import ExportFeed from '../../../app/service/feed';
import ExportNews from '../../../app/service/news';
import ExportRedis from '../../../app/service/redis';
import ExportRemind = require('../../../app/service/remind');
import ExportStar = require('../../../app/service/star');
import ExportStory = require('../../../app/service/story');
import ExportSubject from '../../../app/service/subject';
import ExportUser from '../../../app/service/user';

declare module 'egg' {
  interface IService {
    actor: AutoInstanceType<typeof ExportActor>;
    comments: AutoInstanceType<typeof ExportComments>;
    favorite: AutoInstanceType<typeof ExportFavorite>;
    feed: AutoInstanceType<typeof ExportFeed>;
    news: AutoInstanceType<typeof ExportNews>;
    redis: AutoInstanceType<typeof ExportRedis>;
    remind: AutoInstanceType<typeof ExportRemind>;
    star: AutoInstanceType<typeof ExportStar>;
    story: AutoInstanceType<typeof ExportStory>;
    subject: AutoInstanceType<typeof ExportSubject>;
    user: AutoInstanceType<typeof ExportUser>;
  }
}
