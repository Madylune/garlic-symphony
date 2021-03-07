export const getPath = (routeName, params = {}) => {
  switch (routeName) {
    case 'home':
      return '/'
    case 'lobby':
      return '/lobby'
    case 'game':
      return `/game/${params.id}`
    default:
      return routeName
  }
};
