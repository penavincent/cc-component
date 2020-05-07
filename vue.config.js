module.exports = {
  chainWebpack: (config) => {
    config.plugin("html").tap((args) => {
      args[0].title = "The Ascent - Joe's Component";
      return args;
    });
  },
};
