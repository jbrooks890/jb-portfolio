export default function useMediaQuery(
  requestList = false,
  str = "mobile",
  isQuery = false
) {
  const mobile = 480; //px
  let query;

  switch (str) {
    case "mobile":
      query = `(max-width: ${mobile}px)`;
      break;
    case "tablet":
      break;
    case "desktop":
      break;
    default:
      query = isQuery ? query : null;
  }

  return requestList
    ? window.matchMedia(query)
    : window.matchMedia(query).matches;
}
