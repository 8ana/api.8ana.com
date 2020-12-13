'use strict';

module.exports = app => {
  // 获取数据类型
  const { model } = app;

  const storySchema = require('../schema/story')(app);
  const Story = model.define(`${app.config.prefix}story`, storySchema);

  Story.associate = () => {
    Story.hasMany(model.Part, { foreignKey: 'part_vid', sourceKey: 'story_vid', as: 'part' });
  };

  return Story;
};
