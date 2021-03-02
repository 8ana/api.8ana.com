// This file is created by egg-ts-helper@1.25.8
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportHome from '../../../app/controller/home';
import ExportNews from '../../../app/controller/news';
import ExportApiCaptcha from '../../../app/controller/api/captcha';
import ExportApiComments from '../../../app/controller/api/comments';
import ExportApiFavorite from '../../../app/controller/api/favorite';
import ExportApiFeed from '../../../app/controller/api/feed';
import ExportApiList from '../../../app/controller/api/list';
import ExportApiMcat from '../../../app/controller/api/mcat';
import ExportApiNews from '../../../app/controller/api/news';
import ExportApiRe from '../../../app/controller/api/re';
import ExportApiSubject from '../../../app/controller/api/subject';
import ExportApiTag from '../../../app/controller/api/tag';
import ExportApiUser from '../../../app/controller/api/user';

declare module 'egg' {
  interface IController {
    home: ExportHome;
    news: ExportNews;
    api: {
      captcha: ExportApiCaptcha;
      comments: ExportApiComments;
      favorite: ExportApiFavorite;
      feed: ExportApiFeed;
      list: ExportApiList;
      mcat: ExportApiMcat;
      news: ExportApiNews;
      re: ExportApiRe;
      subject: ExportApiSubject;
      tag: ExportApiTag;
      user: ExportApiUser;
    }
  }
}
