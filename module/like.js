// 喜欢歌曲
// module.exports = (req, res, createWebAPIRequest, request) => {
//   const cookie = req.get("Cookie") ? req.get("Cookie") : "";
//   const trackId = req.query.id;
//   const like = req.query.like || true;
//   const alg = req.query.alg || "itembased";
//   const time = req.query.time || 25;
//   const data = {
//     csrf_token: "",
//     trackId,
//     like
//   };
//   createWebAPIRequest(
//     "music.163.com",
//     `/weapi/radio/like?alg=${alg}&trackId=${trackId}&like=${like}&time=${time}`,
//     "POST",
//     data,
//     cookie,
//     music_req => res.send(music_req),
//     err => res.status(502).send("fetch error")
//   );
// };

module.exports = (query, request) => {
    const data =  {
        trackId: query.id,
        like: query.like || true
    }
    return request(
        'POST', `http://music.163.com/weapi/radio/like?alg=${query.alg || 'itembased'}&trackId=${query.id}&like=${data.like}&time=${query.time || 25}`, data,
        {crypto: 'weapi', cookie: query.cookie, proxy: query.proxy}
    )
}