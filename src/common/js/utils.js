export const imgProxy = (imgUrl) => {
  return imgUrl && imgUrl.replace(/http\w{0,1}:\/\/p/g, 'https://images.weserv.nl/?url=p')
}
