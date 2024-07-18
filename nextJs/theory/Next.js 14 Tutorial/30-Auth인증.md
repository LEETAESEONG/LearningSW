1. complex-dashboard폴더에 @login 폴더 생성
2. page.tsx
3. complex-dashboard폴더의 layout에 login 추가
    1. login 파라미터 추가
    2. const isLoggedIn
```tsx
  const isLoggdedIn = true;
  return isLoggdedIn ? (
    <div>
      <div>{children}</div>
      <div style={{ display: "flex" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div>{users}</div>
          <div>{revenue}</div>
        </div>
        <div style={{ display: "flex", flex: 1 }}>{notifications}</div>
      </div>

      {/* <UserAnalytics />
      <RevenueMetrics />
      <Notifications /> */}
    </div>
  ) : (
    login
  );
```
- 로그인 해달라는 표시가 안뜬다면 서버를 다시 켠다.