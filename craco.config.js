// How to globally access sass scss variable in react
// url: https://medium.com/@zaeemkhaliq/how-to-globally-access-sass-scss-variables-in-react-app-563212667ae

module.exports = {
    style: {
      sass: {
        loaderOptions: {
          additionalData: `          
            @import "src/assets/styles/common.scss";
          `,
        },
      },
    },
  };
  