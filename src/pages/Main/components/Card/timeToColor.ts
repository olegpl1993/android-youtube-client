export const timeToColor = (publishedAt: string) => {
  const currentDate = new Date();
  const publishedDate = new Date(publishedAt);
  const timeDifference = currentDate.getTime() - publishedDate.getTime();
  const daysDifference = Math.floor(timeDifference / (1000 * 3600 * 24));

  if (daysDifference > 180) {
    return "red";
  } else if (daysDifference >= 30) {
    return "yellow";
  } else if (daysDifference >= 7) {
    return "green";
  } else {
    return "blue";
  }
};
