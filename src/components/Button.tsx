import { ButtonHTMLAttributes } from "react";

type customButtonProps = {
  className?: "button-primary",
}

function Button(props: customButtonProps & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button {...props} className={'p-2 text-white rounded-sm border border-white'} />
  )
} 

export default Button;
