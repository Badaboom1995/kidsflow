const fakeService = {
  ping: (data: any) =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(data);
      }, 1000);
    }),
};

export default fakeService;
