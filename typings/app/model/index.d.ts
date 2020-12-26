// This file is created by egg-ts-helper@1.25.8
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportActor = require('../../../app/model/actor');
import ExportActors = require('../../../app/model/actors');
import ExportCaptcha = require('../../../app/model/captcha');
import ExportFavorite = require('../../../app/model/favorite');
import ExportFeed from '../../../app/model/feed';
import ExportHistory = require('../../../app/model/history');
import ExportLines = require('../../../app/model/lines');
import ExportList = require('../../../app/model/list');
import ExportMcat from '../../../app/model/mcat';
import ExportMcid = require('../../../app/model/mcid');
import ExportMusic = require('../../../app/model/music');
import ExportNews = require('../../../app/model/news');
import ExportPart = require('../../../app/model/part');
import ExportPicture = require('../../../app/model/picture');
import ExportPlay from '../../../app/model/play';
import ExportRemind = require('../../../app/model/remind');
import ExportRole = require('../../../app/model/role');
import ExportStar = require('../../../app/model/star');
import ExportStory = require('../../../app/model/story');
import ExportSubject from '../../../app/model/subject';
import ExportTag = require('../../../app/model/tag');
import ExportTopic = require('../../../app/model/topic');
import ExportUser from '../../../app/model/user';

declare module 'egg' {
  interface IModel {
    Actor: ReturnType<typeof ExportActor>;
    Actors: ReturnType<typeof ExportActors>;
    Captcha: ReturnType<typeof ExportCaptcha>;
    Favorite: ReturnType<typeof ExportFavorite>;
    Feed: ReturnType<typeof ExportFeed>;
    History: ReturnType<typeof ExportHistory>;
    Lines: ReturnType<typeof ExportLines>;
    List: ReturnType<typeof ExportList>;
    Mcat: ReturnType<typeof ExportMcat>;
    Mcid: ReturnType<typeof ExportMcid>;
    Music: ReturnType<typeof ExportMusic>;
    News: ReturnType<typeof ExportNews>;
    Part: ReturnType<typeof ExportPart>;
    Picture: ReturnType<typeof ExportPicture>;
    Play: ReturnType<typeof ExportPlay>;
    Remind: ReturnType<typeof ExportRemind>;
    Role: ReturnType<typeof ExportRole>;
    Star: ReturnType<typeof ExportStar>;
    Story: ReturnType<typeof ExportStory>;
    Subject: ReturnType<typeof ExportSubject>;
    Tag: ReturnType<typeof ExportTag>;
    Topic: ReturnType<typeof ExportTopic>;
    User: ReturnType<typeof ExportUser>;
  }
}
