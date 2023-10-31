import MessageManagementCallingRequest from "./message-management-calling-request";
import MessageManagementNotice from "./message-management-notice";

export default function MessageManagementLeftSection() {
  return (
    <div className="flex flex-col gap-5">
      {/* <MessageManagementNotice /> */}
      <MessageManagementCallingRequest />
    </div>
  );
}
