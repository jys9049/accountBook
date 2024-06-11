'use client';

import React from 'react';

const LoginPage = () => {
  const handleLoginClick = () => {
    const url = `${process.env.NEXT_PUBLIC_GOOGLE_OAUTH_URL}?client_id=${process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}&redirect_uri=${process.env.NEXT_PUBLIC_GOOGLE_REDIRECT_URL}&response_type=code&scope=email profile`;

    window.location.href = url;
  };
  return (
    <div>
      <button onClick={handleLoginClick}>로그인</button>
    </div>
  );
};

export default LoginPage;
