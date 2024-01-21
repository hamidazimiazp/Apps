const TextShortener = (txt, len) => {
  if (txt.length > len) {
    return txt.slice(0, len) + "...";
  } else {
    return txt;
  }
};

export { TextShortener };
