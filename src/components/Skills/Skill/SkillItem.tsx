import './skillItem.scss'


type skillType = {
    title: string
    image: string
}

const SkillItem: React.FC<skillType> = ({title, image})=> {
    return ( <div className='skill'>
        <h3 className='title'>{title}</h3>
        <img className='imgContainer' src={image} alt={'skill'}></img>
    </div> );
}
 
export default SkillItem;