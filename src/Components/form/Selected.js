import styles from './Selected.module.css'

function Selected({text, name, options, handleOnChange, value}){
    return(
        <div className={styles.form_control}>
            <label htmlFor={name}>{text}:</label>
            <select name={name} id={name}>
                <option>Selecione uma opção</option>
            </select>
            </div>
    )
}
export default Selected