module.exports = (options) => {
  const healthy = options?.healthy;
  const path = options?.path;

  return async (ctx, next) => {
    if (path !== ctx.path) {
      await next();
    } else {
      await healthy();

      ctx.body = {
        uptime: process.uptime(),
      };
    }
  };
};
