const download = (url: string): Promise<void> =>
  fetch(url, {
    mode: "no-cors",
  })
    .then((response) => response.blob())
    .then((blob) => {
      let blobUrl = window.URL.createObjectURL(blob);
      let a = document.createElement("a");
      a.download = url.replace(/^.*[\\\/]/, "");
      a.href = blobUrl;
      document.body.appendChild(a);
      a.click();
      a.remove();
    });

export default download;
