import http from 'k6/http';

export function news() {
    const url = 'https://api-dla-local2568.thaijobjob.com/api/news/m';
    const params = {
        timeout: '300s' // กำหนด Timeout เป็น 300 วินาที (5 นาที)
    };
    const res = http.get(url, params);
    //console.log(res.body);
    return res
}
