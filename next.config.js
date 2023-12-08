// next.config.js
module.exports = {
  // ...
  exportPathMap: async function () {
    return {
      '/': { page: '/' },
      // tambahkan path halaman lain jika diperlukan
    };
  },
};
