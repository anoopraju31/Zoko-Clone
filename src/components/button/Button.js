import './Button.css'

const Button = ({backgroundDark, pseudoElementColor, textColor, text, link}) => {

    return (
        <div 
            className={`
                button
                ${pseudoElementColor? 'button__dark_pseudo' : ''}
                ${textColor? 'button__white_text': ''}
                ${backgroundDark? 'button__background_dark' : ''}
            `}
    
        > { text } </div>
        
    )
}

export default Button