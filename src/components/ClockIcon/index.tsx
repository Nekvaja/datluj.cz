import "./style.css"

export const ClockIcon = () => {
  return (
    <svg 
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{ marginRight: "4px", verticalAlign: "middle" }}
  >
    <circle cx="12" cy="13" r="8"></circle>
    <polyline points="12 9 12 13 15 14"></polyline>
    <line x1="5" y1="3" x2="2" y2="6"></line>
    <line x1="22" y1="6" x2="19" y2="3"></line>
  </svg>
  )
}