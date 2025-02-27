import http from 'k6/http';
import { SharedArray } from 'k6/data';


const CustomerID = new SharedArray('CustomerID', function () {
    const jsonData = JSON.parse(open('../file/CustomerID4.json'));
    return jsonData.CustomerID.map(CustomerID => ({ CustomerID: CustomerID }));
  });


export function searchbyid() {
    const CustomerIDData = CustomerID[__VU % CustomerID.length -1].CustomerID;
    const url = 'https://api-dla-local2568.thaijobjob.com/api/search';
    const payload = JSON.stringify({
        "CustomerID": CustomerIDData,
        "birth_date": "18-11-2523",
        "tel": "0982856421"
    });

    const params = {
        timeout:"300s",
        headers: {
            'Content-Type': 'application/json',
                }
    };

    const res = http.post(url, payload, params);
    //console.log(CustomerIDData);
    

    return res
}
