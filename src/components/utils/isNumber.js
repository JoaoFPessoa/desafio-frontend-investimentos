export default function isNumber(props) {
  const regex = /^[0-9]*$/;
  return regex.test(props);
}
