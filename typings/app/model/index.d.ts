// This file is created by egg-ts-helper@1.25.8
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportAssociation from '../../../app/model/association';
import ExportComments from '../../../app/model/comments';
import ExportFavorite from '../../../app/model/favorite';
import ExportFeed from '../../../app/model/feed';
import ExportFollow from '../../../app/model/follow';
import ExportGold from '../../../app/model/gold';
import ExportList from '../../../app/model/list';
import ExportMcat from '../../../app/model/mcat';
import ExportMcid from '../../../app/model/mcid';
import ExportNews from '../../../app/model/news';
import ExportOmcat from '../../../app/model/omcat';
import ExportOmcid from '../../../app/model/omcid';
import ExportRepty from '../../../app/model/repty';
import ExportSetting from '../../../app/model/setting';
import ExportSubject from '../../../app/model/subject';
import ExportTag from '../../../app/model/tag';
import ExportUser from '../../../app/model/user';
import ExportVod from '../../../app/model/vod';

declare module 'egg' {
  interface IModel {
    Association: ReturnType<typeof ExportAssociation>;
    Comments: ReturnType<typeof ExportComments>;
    Favorite: ReturnType<typeof ExportFavorite>;
    Feed: ReturnType<typeof ExportFeed>;
    Follow: ReturnType<typeof ExportFollow>;
    Gold: ReturnType<typeof ExportGold>;
    List: ReturnType<typeof ExportList>;
    Mcat: ReturnType<typeof ExportMcat>;
    Mcid: ReturnType<typeof ExportMcid>;
    News: ReturnType<typeof ExportNews>;
    Omcat: ReturnType<typeof ExportOmcat>;
    Omcid: ReturnType<typeof ExportOmcid>;
    Repty: ReturnType<typeof ExportRepty>;
    Setting: ReturnType<typeof ExportSetting>;
    Subject: ReturnType<typeof ExportSubject>;
    Tag: ReturnType<typeof ExportTag>;
    User: ReturnType<typeof ExportUser>;
    Vod: ReturnType<typeof ExportVod>;
  }
}
