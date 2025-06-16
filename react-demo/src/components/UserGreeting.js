export const UserGreeting = () => {
  const isLoggedIn = true;
  return <div>Welcome {isLoggedIn? 'Raghav' : 'Guest'}</div>;
};
