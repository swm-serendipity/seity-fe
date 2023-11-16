export default function changeNamdeEntityToKorean(entity: string) {
  // "PERSON", "REGISTRATION_NUMBER", "DRIVER_LICENSE_NUMBER", "PHONE_NUMBER",
  //         "PASSPORT_NUMBER", "EMAIL_ADDRESS", "CAR_NUMBER", "IPV4_ADDRESS", "IPV6_ADDRESS", "MAC_ADDRESS",
  //         "COMPANY_REGISTRATION_NUMBER"
  if (entity === "PERSON") {
    return "이름";
  } else if (entity === "REGISTRATION_NUMBER") {
    return "주민등록번호";
  } else if (entity === "DRIVER_LICENSE_NUMBER") {
    return "운전면허번호";
  } else if (entity === "PHONE_NUMBER") {
    return "전화번호";
  } else if (entity === "PASSPORT_NUMBER") {
    return "여권번호";
  } else if (entity === "EMAIL_ADDRESS") {
    return "이메일 주소";
  } else if (entity === "CAR_NUMBER") {
    return "차량번호";
  } else if (entity === "IPV4_ADDRESS") {
    return "IPv4 주소";
  } else if (entity === "IPV6_ADDRESS") {
    return "IPv6 주소";
  } else if (entity === "MAC_ADDRESS") {
    return "MAC 주소";
  } else if (entity === "COMPANY_REGISTRATION_NUMBER") {
    return "사업자등록번호";
  } else if (entity === "DENY_LIST") {
    return "금칙어";
  }

  return "알 수 없음";
}
