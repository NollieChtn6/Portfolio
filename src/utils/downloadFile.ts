// Source code from: https://www.geeksforgeeks.org/how-to-download-pdf-file-in-reactjs/
export function downloadFile(file: string, outputTitle: string) {
  fetch(file).then((response) => {
    response.blob().then((blob) => {
      const fileURL = window.URL.createObjectURL(blob);
      const alink = document.createElement("a");
      alink.href = fileURL;
      alink.download = outputTitle;
      alink.click();
    });
  });
}
