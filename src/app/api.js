export const getItems = () => Promise.resolve(
    new Array(10)
      .fill(1)
      .map((_, index) => ({
        id: index,
        done: !!(index % 2), 
        title: `Some title ${index}`, 
        description: `Some description ${index}`, 
        importance: index % 3, 
        date: new Date() 
      })))