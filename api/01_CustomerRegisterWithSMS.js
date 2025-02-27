import http from 'k6/http';
import { SharedArray } from 'k6/data';


const CustomerID = new SharedArray('CustomerID', function () {
    const jsonData = JSON.parse(open('../file/CustomerID4.json'));
    return jsonData.CustomerID.map(CustomerID => ({ CustomerID: CustomerID }));
  });
  

export function CustomerRegisterWithSMS() {
    const CustomerIDData = CustomerID[__VU % CustomerID.length -1].CustomerID;
    const url = 'https://api-dla-local2568.thaijobjob.com/api/customer/register_sms';
    const payload = JSON.stringify({
      form: {
        sector: 'ภาคเหนือ เขต 1',
        sector_id: '1',
        location: 'พะเยา',
        location_id: '32',
        type: 'วิชาการ',
        type_id: '2',
        position: 'นักวิชาการจัดเก็บรายได้',
        HdPosition: '202',
        name1: 'นาย',
        name2: 'พรชัย',
        name3: 'เลี้ยงจำปา',
        sex: 'ชาย',
        national: 'ไทย',
        race: 'ไทย',
        religion: 'พุทธ',
        birth_date: '18-11-2523',
        CustomerID: CustomerIDData,
        address: '24',
        village: '-',
        moo: '2',
        alleys: '-',
        road: '-',
        sub_district: 'ไม้เค็ด',
        district: 'เมืองปราจีนบุรี',
        province: 'ปราจีนบุรี',
        zipcode: '25230',
        telephone: '0899389442',
        telmobile: '0982856421',
        email: 'sittichai.so@inet.co.th',
        regis_address: '24',
        regis_village: '-',
        regis_moo: '2',
        regis_alleys: '-',
        regis_road: '-',
        regis_sub_district: 'ไม้เค็ด',
        regis_district: 'เมืองปราจีนบุรี',
        regis_province: 'ปราจีนบุรี',
        regis_zipcode: '25230',
        degree_position: 'ปริญญาตรี',
        degree_other: '',
        degree_name: 'วิทยาศาสตร์บัณฑิต',
        degree: '',
        university: 'มหาวิทยาลัยเคโนโลยีพระจอมเกล้าพระนครเหนือ',
        graduate_date: '16-11-2565',
        gpa: '3.33',
        occupation: 'พนักงานบริษัทเอกชน/ธุรกิจส่วนตัว',
        occupation_other: '',
        occupation_workplace: 'MakeWebBKK',
        occupation_divisions: '-',
        occupation_phone: '0982856421',
        emer_prefix: 'นางสาว',
        emer_firstname: 'ชลธิชา',
        emer_lastname: 'โสภา',
        emer_relation: 'พี่สาว',
        emer_telephone: '0988269833',
        emer_telmobile: '0988269833',
        father_prefix: 'นาย',
        father_firstname: 'สุชาติ',
        father_lastname: 'โสภา',
        father_occupation: 'ค้าขาย',
        father_telmobile: '0842801055',
        mother_prefix: 'นาง',
        mother_firstname: 'นิตยา',
        mother_lastname: 'โสภา',
        mother_occupation: 'ค้าขาย',
        mother_telmobile: '0899389442',
        genius: 'โครตเทพซ่า007 โครตจะบ้าอะไรครับเนี่ย',
        disability: 'เเขนซ้ายอ่อนเเรง',
        consent: '1',
        consent_sec: '1',
        ip2: '203.150.21.70',
        file: [
          { type: 'image', name: '2025/image/1250101490433_fileImg.jpeg', status: '1' },
          { type: 'House', name: '2025/file/1250101490433_fileHouse.pdf', status: '1' },
          { type: 'Idcard', name: '2025/file/1250101490433_fileIdcard.pdf', status: '1' },
        ],
      },
      sms: {
        PayStatus: '*',
        RefNo1: '',
        status: '1',
        mobile: '0982856421',
        email: 'sittichai.so@inet.co.th',
      },
    });
  
    const params = {
      timeout:"300s",
      headers: {
        'Content-Type': 'application/json',
      },
    };
  
    const res = http.post(url, payload, params);
    //console.log(CustomerIDData);
    

    return res
}
