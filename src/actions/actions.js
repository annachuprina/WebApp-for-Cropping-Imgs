export const addImg = src => ({
    type: 'ADD_IMG',
    src
  })
 
export const removeImg = ({ src } = {}) => ({
    type: 'REMOVE_IMG',
    src
});