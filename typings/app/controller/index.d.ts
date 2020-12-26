// This file is created by egg-ts-helper@1.25.8
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportHome = require('../../../app/controller/home');
import ExportNews = require('../../../app/controller/news');
import ExportApiActor = require('../../../app/controller/api/actor');
import ExportApiCaptcha from '../../../app/controller/api/captcha';
import ExportApiFavorite = require('../../../app/controller/api/favorite');
import ExportApiFeed from '../../../app/controller/api/feed';
import ExportApiNews = require('../../../app/controller/api/news');
import ExportApiRemind = require('../../../app/controller/api/remind');
import ExportApiStory = require('../../../app/controller/api/story');
import ExportApiSubject from '../../../app/controller/api/subject';
import ExportApiUser from '../../../app/controller/api/user';

declare module 'egg' {
  interface IController {
    home: ExportHome;
    news: ExportNews;
    api: {
      actor: ExportApiActor;
      captcha: ExportApiCaptcha;
      favorite: ExportApiFavorite;
      feed: ExportApiFeed;
      news: ExportApiNews;
      remind: ExportApiRemind;
      story: ExportApiStory;
      subject: ExportApiSubject;
      user: ExportApiUser;
    }
  }
}
