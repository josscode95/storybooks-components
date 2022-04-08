import './mylabel.css';

export interface MyLabelProps{
  /** Este es el mensaje a mostrar en la etiqueta */
  label:string;
  /** Este es el tamaño de la etiqueta */
  size:'normal'|'h1'|'h2'|'h3';
  /** Este capitaliza en minusculas todo */
  allCaps?:boolean;
  /** Indica los colores del boton*/
  color?:'primary'|'secondary'|'tertiary';
  /** Colores opcionales del boton */
  fontColor?:string;
}

export const MyLabel = ({
  label = 'No Label',
  size = 'normal',
  allCaps = false,
  color = 'primary',
  fontColor
}:MyLabelProps) => {
  return (
    <span 
      className={`label ${size} text-${color}`}
      style={{color:fontColor}}
    >
      { allCaps ? label.toUpperCase(): label }
    </span>
  )
}

export default MyLabel;
