export const highlightedDetectionList = ({
  text,
  detectionList,
}: {
  text: string;
  detectionList: DetectionListItem[];
}) => {
  let lastIndex = 0;
  const parts = [];

  detectionList.forEach((det) => {
    parts.push({
      text: text.slice(lastIndex, det.index),
      deIdentified: det.deIdentified,
      highlight: false,
    });

    parts.push({
      text: text.slice(det.index, det.index + det.length),
      deIdentified: det.deIdentified,
      highlight: true,
    });

    lastIndex = det.index + det.length;
  });

  parts.push({
    text: text.slice(lastIndex),
    deIdentified: false,
    highlight: false,
  });
  return parts;
};
