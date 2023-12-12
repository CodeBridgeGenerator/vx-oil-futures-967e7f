const users = require("./users/users.service.js");
const profiles = require("./profiles/profiles.service.js");
// ~cb-add-require-service-name~

// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
    app.configure(users);
  app.configure(profiles);
    // ~cb-add-configure-service-name~
};
