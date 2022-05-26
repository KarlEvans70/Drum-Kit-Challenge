const keys = "asdfghjkl".split("");
const elements = keys.map((key) => document.getElementsByClassName(key)[0]);

const audioFiles = [
  "boom",
  "hihat",
  "openhat",
  "clap",
  "kick",
  "ride",
  "snare",
  "tom",
  "tink",
]
  .map((sound) => `sounds/${sound}.wav`)
  .map((filePath) => new Audio(filePath));

elements.forEach((e, index) =>
  e.addEventListener("click", () => {
    audioFiles[index].play();
  })
);

document.addEventListener("keypress", (e) => {
  const keyIndex = keys.indexOf(e.key);
  if (keyIndex != -1) {
    audioFiles[keyIndex].play();
  }
});
