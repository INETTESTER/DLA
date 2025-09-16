import http from "k6/http";


export function Register(cid) {
  const CustomerID = `${__VU}${__ITER}${cid}`;
  const url = "https://api-dla-local2568.thaijobjob.com/api/customer/register";

  const payload = JSON.stringify({
    form: {
      sector: "ภาคกลาง เขต 2",
      sector_id: "4",
      location: "ปราจีนบุรี",
      location_id: "30",
      type: "ทั่วไป",
      type_id: "1",
      position: "เจ้าพนักงานป้องกันและบรรเทาสาธารณภัย",
      HdPosition: "102",
      name1: "นาง",
      name2: "ธนฉัตร mock",
      name3: "เกตุจันทึก mock",
      sex: "ชาย",
      marry: "โสด",
      national: "ไทย",
      race: "ไทย",
      religion: "พุทธ",
      birth_date: "08-01-2539",
      CustomerID: ""+CustomerID,
      address: "24",
      village: "-",
      moo: "2",
      alleys: "-",
      road: "-",
      sub_district: "ไม้เค็ด",
      district: "เมืองปราจีนบุรี",
      province: "ปราจีนบุรี",
      zipcode: "25230",
      telephone: "0982856421",
      telmobile: "0630955956",
      email: "sittichai.so@inet.co.th",
      regis_address: "24",
      regis_village: "-",
      regis_moo: "2",
      regis_alleys: "-",
      regis_road: "-",
      regis_sub_district: "ไม้เค็ด",
      regis_district: "เมืองปราจีนบุรี",
      regis_province: "ปราจีนบุรี",
      regis_zipcode: "25230",
      degree_position: "ปวช.",
      major: "IT",
      degree_name: "วิทยาศาสตรบัณฑิต",
      university: "มหาวิทยาลัยเคโนโลยีพระจอมเกล้าพระนครเหนือ",
      graduate_date: "16-11-2565",
      gpa: "3.33",
      occupation:
        "ลูกจ้าง / พนักงานราชการ / พนักงานจ้างของส่วนราชการ หรือองค์กรปกครองส่วนท้องถิ่น",
      occupation_workplace: "MakeWebBKK",
      occupation_divisions: "-",
      occupation_phone: "0982856421",
      emer_prefix: "นางสาว",
      emer_firstname: "ชลธิชา",
      emer_lastname: "โสภา",
      emer_relation: "พี่สาว",
      emer_telephone: "0982856421",
      emer_telmobile: "0982856421",
      father_prefix: "นาย",
      father_firstname: "สุชาติ",
      father_lastname: "โสภา",
      father_occupation: "ค้าขาย",
      father_telmobile: "0842801055",
      mother_prefix: "นาง",
      mother_firstname: "นิตยา",
      mother_lastname: "โสภา",
      mother_occupation: "ค้าขาย",
      mother_telmobile: "0899389442",
      disability: "มีความพิการ",
      disability_detail:
        "ขอใช้คอมพิวเตอร์อ่านออกเสียงสำหรับคนตาบอดใช้โปรแกรม NVDA ร่วมกับโปรแกรมตาทิพย์",
      genius: "test test es t",
      consent: "1",
      consent_sec: "1",
      ip2: "203.150.21.70",
      file: [
        { type: "image", name: "2025/image/1250101490433_fileImg.jpeg", status: "1" },
        { type: "House", name: "2025/file/1250101490433_fileHouse.pdf", status: "1" },
        { type: "Idcard", name: "2025/file/1250101490433_fileIdcard.pdf", status: "1" },
        { type: "Qualify", name: "2025/file/1250101490433_fileQualify.pdf", status: "1" },
        { type: "Education", name: "2025/file/1250101490433_fileEducation.pdf", status: "1" },
        { type: "Army", name: "2025/file/1250101490433_fileArmy.pdf", status: "1" },
        { type: "Other", name: "2025/file/1250101490433_fileOther.pdf", status: "1" },
      ],
    },
    sms: {
      PayStatus: "*",
      RefNo1: "",
      status: "1",
      mobile: "0982856421",
      email: "sittichai.so@inet.co.th",
    },
  });

  const params = {
    headers: {
      "Content-Type": "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJETEE2OCIsInBhc3N3b3JkIjoiYXBpLWRsYTY4IiwiaWF0IjoxNzQwOTkyMzYzfQ.FGdbnsTExvQnK4Q0Ia4c41ibq95VsKJyIMQdRAqUHkU",
    },
  };

  const res = http.post(url, payload, params);

  //console.log(`Status: ${res.status}`);
  //console.log(`Response: ${res.body}`);

  return res
}
