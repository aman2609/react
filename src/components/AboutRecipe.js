import {useState} from 'react'
const Section = ({title,content,isVisible,setIsVisible}) => {
    // const [isVisible,setIsVisible] = useState(true)
    return(
        <div className='my-7'>
            <div className='flex justify-between text-2xl'><p>{title}</p>
            {isVisible?<p className='right-1 text-2xl cursor-pointer' onClick={()=>setIsVisible(false)}>-</p>:<p className='right-1 text-2xl cursor-pointer' onClick={()=>setIsVisible(true)}>+</p>}</div>
            {isVisible && <p className='p-4 text-xl'>{content}</p>}
        </div>
    )
}
const AboutRecipe= () => {
    const [visibleSection,setVisibleSection] = useState(null)
    const [sectionConfig, setSectionConfig] = useState({
        whoWeAre:true,
        whatWeDo:false,
        whyWeDoIt:false,
        whatWeWantToAchieve:false,
        howWeDoIt:false
    })
    

    return (
        <div className='mx-[21%]'>
            <Section setIsVisible={(booleanValue)=>{
                booleanValue?setVisibleSection('whoWeAre'):setVisibleSection(null)
            }} isVisible={visibleSection=='whoWeAre'} title='WHO WE ARE' content='We are a passionate team dedicated to transforming the way people think about food and cooking. Our mission is to provide innovative solutions that help reduce food waste and promote sustainable living. By offering recipes based on the ingredients you have on hand, we aim to make cooking more accessible, enjoyable, and environmentally friendly.'/>
            <Section setIsVisible={(booleanValue)=>{
                booleanValue?setVisibleSection('whatWeDo'):setVisibleSection(null)
            }} isVisible={visibleSection=='whatWeDo'} title='WHAT WE DO' content='We provide a unique platform where users can find recipes based on the ingredients they already have. Simply enter the ingredients you have at home, and our system will generate a variety of delicious recipes tailored to your needs. Whether you’re looking for a quick meal or a gourmet dish, we’ve got you covered.'/>
            <Section setIsVisible={(booleanValue)=>{
                booleanValue?setVisibleSection('whyWeDoIt'):setVisibleSection(null)
            }} isVisible={visibleSection=='whyWeDoIt'} title='WHY WE DO IT' content='Food waste is a significant global issue, with millions of tons of edible food being discarded every year. We believe that by helping people make the most of the ingredients they have, we can contribute to reducing food waste and promoting a more sustainable lifestyle. Our goal is to empower individuals to cook creatively and efficiently, minimizing waste and maximizing flavor.'/>
            <Section setIsVisible={(booleanValue)=>{
                booleanValue?setVisibleSection('whatWeWantToAchieve'):setVisibleSection(null)
            }} isVisible={visibleSection=='whatWeWantToAchieve'} title='WHAT WE WANT TO ACHIEVE' content='Our vision is to create a world where food waste is a thing of the past. We strive to be the go-to resource for anyone looking to make the most of their ingredients and reduce their environmental footprint. By fostering a community of mindful cooks, we hope to inspire positive change and make a lasting impact on the way we approach food and cooking.'/>
            <Section setIsVisible={(booleanValue)=>{
                booleanValue?setVisibleSection('howWeDoIt'):setVisibleSection(null)
            }} isVisible={visibleSection=='howWeDoIt'} title='HOW WE DO IT' content='Our platform leverages advanced algorithms and a vast database of recipes to match your available ingredients with the best possible dishes. By continuously updating our recipe collection and refining our ingredient-matching technology, we ensure that you always have access to fresh, exciting, and practical meal ideas. Our user-friendly interface makes it easy to input ingredients and discover new recipes, helping you make the most of what you have and reduce food waste effortlessly.'/>
        </div>
    )
}

export default AboutRecipe;