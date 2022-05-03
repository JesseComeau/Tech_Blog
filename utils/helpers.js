module.exports = {
    get_posts: () => {
        for (let i = 0; i <= 4; i++) {
            const randomNum = Math.random();
            console.log(randomNum);
            
          }
            
        },

  format_date: (date) => {
    return `${new Date(date).getMonth() + 1}/${new Date(date).getDate()}/${
      new Date(date).getFullYear()
    }`;
  },

  format_time: (date) => {
    return date.toLocaleTimeString();
  },
};
