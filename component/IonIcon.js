import * as IonIcons from 'react-icons/io5';

export default function IonIcon({name, className}){
    const {...icons} = IonIcons;
    const TheIcon = icons[name];
    return(
        <TheIcon className={className}/>
    )
}