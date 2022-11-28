export default function VButton(props) {
    const buttonBgColor = props.buttonBgColor
    const buttonTextColor = props.buttonTextColor
    const buttonBorderColor = props.buttonBorderColor
    const buttonText = props.buttonText

    return (
        <button className={`${props.className} px-4 py-3  hover:bg-[${buttonBgColor}] text-${buttonTextColor} rounded-xl border-${buttonBorderColor} border-l-[2px] border-r-[2px] border-t-[2px] border-b-[5px] hover:border-b-2`}>
            {buttonText}
        </button>
    )
}