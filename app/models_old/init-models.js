var DataTypes = require("sequelize").DataTypes;
var _ff_action = require("./ff_action");
var _ff_actionlog = require("./ff_actionlog");
var _ff_actor = require("./ff_actor");
var _ff_actors = require("./ff_actors");
var _ff_ads = require("./ff_ads");
var _ff_attribute = require("./ff_attribute");
var _ff_auth_extend = require("./ff_auth_extend");
var _ff_auth_group = require("./ff_auth_group");
var _ff_auth_group_access = require("./ff_auth_group_access");
var _ff_auth_rule = require("./ff_auth_rule");
var _ff_card = require("./ff_card");
var _ff_cm = require("./ff_cm");
var _ff_collect = require("./ff_collect");
var _ff_config = require("./ff_config");
var _ff_favorite = require("./ff_favorite");
var _ff_feed = require("./ff_feed");
var _ff_gb = require("./ff_gb");
var _ff_gold = require("./ff_gold");
var _ff_lines = require("./ff_lines");
var _ff_link = require("./ff_link");
var _ff_list = require("./ff_list");
var _ff_mcat = require("./ff_mcat");
var _ff_mcid = require("./ff_mcid");
var _ff_member = require("./ff_member");
var _ff_model = require("./ff_model");
var _ff_msg = require("./ff_msg");
var _ff_music = require("./ff_music");
var _ff_news = require("./ff_news");
var _ff_orders = require("./ff_orders");
var _ff_part = require("./ff_part");
var _ff_picture = require("./ff_picture");
var _ff_play = require("./ff_play");
var _ff_playlog = require("./ff_playlog");
var _ff_remind = require("./ff_remind");
var _ff_role = require("./ff_role");
var _ff_score = require("./ff_score");
var _ff_slide = require("./ff_slide");
var _ff_special = require("./ff_special");
var _ff_star = require("./ff_star");
var _ff_story = require("./ff_story");
var _ff_tag = require("./ff_tag");
var _ff_theme = require("./ff_theme");
var _ff_timming = require("./ff_timming");
var _ff_tmpnews = require("./ff_tmpnews");
var _ff_tmpstar = require("./ff_tmpstar");
var _ff_tmpvod = require("./ff_tmpvod");
var _ff_topic = require("./ff_topic");
var _ff_tv = require("./ff_tv");
var _ff_urls = require("./ff_urls");
var _ff_user = require("./ff_user");
var _ff_usernav = require("./ff_usernav");
var _ff_visitors = require("./ff_visitors");
var _ff_vod = require("./ff_vod");
var _ff_vodtv = require("./ff_vodtv");

function initModels(sequelize) {
  var ff_action = _ff_action(sequelize, DataTypes);
  var ff_actionlog = _ff_actionlog(sequelize, DataTypes);
  var ff_actor = _ff_actor(sequelize, DataTypes);
  var ff_actors = _ff_actors(sequelize, DataTypes);
  var ff_ads = _ff_ads(sequelize, DataTypes);
  var ff_attribute = _ff_attribute(sequelize, DataTypes);
  var ff_auth_extend = _ff_auth_extend(sequelize, DataTypes);
  var ff_auth_group = _ff_auth_group(sequelize, DataTypes);
  var ff_auth_group_access = _ff_auth_group_access(sequelize, DataTypes);
  var ff_auth_rule = _ff_auth_rule(sequelize, DataTypes);
  var ff_card = _ff_card(sequelize, DataTypes);
  var ff_cm = _ff_cm(sequelize, DataTypes);
  var ff_collect = _ff_collect(sequelize, DataTypes);
  var ff_config = _ff_config(sequelize, DataTypes);
  var ff_favorite = _ff_favorite(sequelize, DataTypes);
  var ff_feed = _ff_feed(sequelize, DataTypes);
  var ff_gb = _ff_gb(sequelize, DataTypes);
  var ff_gold = _ff_gold(sequelize, DataTypes);
  var ff_lines = _ff_lines(sequelize, DataTypes);
  var ff_link = _ff_link(sequelize, DataTypes);
  var ff_list = _ff_list(sequelize, DataTypes);
  var ff_mcat = _ff_mcat(sequelize, DataTypes);
  var ff_mcid = _ff_mcid(sequelize, DataTypes);
  var ff_member = _ff_member(sequelize, DataTypes);
  var ff_model = _ff_model(sequelize, DataTypes);
  var ff_msg = _ff_msg(sequelize, DataTypes);
  var ff_music = _ff_music(sequelize, DataTypes);
  var ff_news = _ff_news(sequelize, DataTypes);
  var ff_orders = _ff_orders(sequelize, DataTypes);
  var ff_part = _ff_part(sequelize, DataTypes);
  var ff_picture = _ff_picture(sequelize, DataTypes);
  var ff_play = _ff_play(sequelize, DataTypes);
  var ff_playlog = _ff_playlog(sequelize, DataTypes);
  var ff_remind = _ff_remind(sequelize, DataTypes);
  var ff_role = _ff_role(sequelize, DataTypes);
  var ff_score = _ff_score(sequelize, DataTypes);
  var ff_slide = _ff_slide(sequelize, DataTypes);
  var ff_special = _ff_special(sequelize, DataTypes);
  var ff_star = _ff_star(sequelize, DataTypes);
  var ff_story = _ff_story(sequelize, DataTypes);
  var ff_tag = _ff_tag(sequelize, DataTypes);
  var ff_theme = _ff_theme(sequelize, DataTypes);
  var ff_timming = _ff_timming(sequelize, DataTypes);
  var ff_tmpnews = _ff_tmpnews(sequelize, DataTypes);
  var ff_tmpstar = _ff_tmpstar(sequelize, DataTypes);
  var ff_tmpvod = _ff_tmpvod(sequelize, DataTypes);
  var ff_topic = _ff_topic(sequelize, DataTypes);
  var ff_tv = _ff_tv(sequelize, DataTypes);
  var ff_urls = _ff_urls(sequelize, DataTypes);
  var ff_user = _ff_user(sequelize, DataTypes);
  var ff_usernav = _ff_usernav(sequelize, DataTypes);
  var ff_visitors = _ff_visitors(sequelize, DataTypes);
  var ff_vod = _ff_vod(sequelize, DataTypes);
  var ff_vodtv = _ff_vodtv(sequelize, DataTypes);


  return {
    ff_action,
    ff_actionlog,
    ff_actor,
    ff_actors,
    ff_ads,
    ff_attribute,
    ff_auth_extend,
    ff_auth_group,
    ff_auth_group_access,
    ff_auth_rule,
    ff_card,
    ff_cm,
    ff_collect,
    ff_config,
    ff_favorite,
    ff_feed,
    ff_gb,
    ff_gold,
    ff_lines,
    ff_link,
    ff_list,
    ff_mcat,
    ff_mcid,
    ff_member,
    ff_model,
    ff_msg,
    ff_music,
    ff_news,
    ff_orders,
    ff_part,
    ff_picture,
    ff_play,
    ff_playlog,
    ff_remind,
    ff_role,
    ff_score,
    ff_slide,
    ff_special,
    ff_star,
    ff_story,
    ff_tag,
    ff_theme,
    ff_timming,
    ff_tmpnews,
    ff_tmpstar,
    ff_tmpvod,
    ff_topic,
    ff_tv,
    ff_urls,
    ff_user,
    ff_usernav,
    ff_visitors,
    ff_vod,
    ff_vodtv,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
