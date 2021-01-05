// This file is created by egg-ts-helper@1.25.8
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportAssociation from '../../../app/model/association';
import ExportFavorite from '../../../app/model/favorite';
import ExportFeed from '../../../app/model/feed';
import ExportFollow from '../../../app/model/follow';
import ExportList from '../../../app/model/list';
import ExportMcid from '../../../app/model/mcid';
import ExportSetting from '../../../app/model/setting';
import ExportSubject from '../../../app/model/subject';
import ExportTag from '../../../app/model/tag';
import ExportUser from '../../../app/model/user';

declare module 'egg' {
  interface IModel {
    Association: ReturnType<typeof ExportAssociation>;
    Favorite: ReturnType<typeof ExportFavorite>;
    Feed: ReturnType<typeof ExportFeed>;
    Follow: ReturnType<typeof ExportFollow>;
    List: ReturnType<typeof ExportList>;
    Mcid: ReturnType<typeof ExportMcid>;
    Setting: ReturnType<typeof ExportSetting>;
    Subject: ReturnType<typeof ExportSubject>;
    Tag: ReturnType<typeof ExportTag>;
    User: ReturnType<typeof ExportUser>;
  }
}
