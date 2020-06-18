export default (text, size) => (text.length < size ? text : `${text.slice(0, size)} ...`);
