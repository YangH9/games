export default (url, data) => new Promise((resolve, reject) => {
  if (!url) {
    reject(new Error("URL"))
  }
  const script = document.createElement("script")
  script.async = "async"
  script.src = url
  script.onload = res => {
    console.log(res)
    resolve(url)
  }
  console.log(script, data)
  document.head.appendChild(script)
  document.head.removeChild(script)
})
