'use strict';

module.exports = app => {
  class Controller extends app.Controller {
    async disconnect() {
      const message = this.ctx.args[0];
      console.log(message);
    }
  }
  return Controller;
};
