//@ts-nocheck
export const handleStatusCodes = (code) => {
  switch (code) {
    case 204:
    case 401:
      return true;
    default:
      return false;
  }
};
