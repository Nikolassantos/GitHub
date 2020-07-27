import React, { useState, useEffect } from 'react';
import api from '../src/services/connection';

const user = () => {
  const [user, setUser] = useState<User>();

  interface User {
    login: String;
    id: Number;
    avatar_url: String;
    url: String;
    html_url: String;
    name: String;
  }

  var UserName = 'filipedeschamps';

  useEffect(() => {
    async function loadUser() {
      const response = await api.get(`/users/${UserName}`);

      setUser(response.data);
    }
    loadUser();
  }, []);
};
export default user;
