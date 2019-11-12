export const isAdmin = async (user: any) =>
  user.roles.some((role: any) => role.name === 'Admin');
