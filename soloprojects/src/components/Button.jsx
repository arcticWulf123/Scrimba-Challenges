import mailIcon from "../assets/mail.svg";

export default function Button({ className }) {
  return (
    <button
      className={className}
      style={{
        display: "flex",
        alignItems: "center",
        gap: "8px",
      }}
    >
      <img src={mailIcon} alt="" />
      <p>Email</p>
    </button>
  );
}
