'use strict';

import UserIdentityService from './UserIdentityService';

let instance;

export default UserIdentityServiceProvider;

function UserIdentityServiceProvider() {
  if (!instance) {
    instance = new UserIdentityService();
  }

  return instance;
}
