export const getEpisodeTitle = (title: string) => {
  const html = title.replace(/\*([^\*]+)\*/g, (_, match) => {
    return `<strong>${match}</strong>`;
  });
  return html;
};
