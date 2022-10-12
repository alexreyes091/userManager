import { useEffect } from 'react';
import profile1 from '../assets/img/profile-1.png';
import profile2 from '../assets/img/profile-2.png';
import profile3 from '../assets/img/profile-3.png';
import profile4 from '../assets/img/profile-4.png';
import profile5 from '../assets/img/profile-5.png';

export const ChooseImg = ({setImg}) => {

    useEffect(() => {
        setImg(profile1);
    }, []);

    const getImages = [
        profile1,
        profile2,
        profile3,
        profile4,
        profile5,
    ]

    const handleChoose = (e) => {
        setImg(e.target.src);
    }

    return (
        <div className='flex md:flex-col lg:flex-row gap-2 mx-auto justify-center'>{
            getImages.map((img)=>(
                <img
                    key={img}
                    src={img}
                    className='rounded-full'
                    width="50" height="50"
                    onClick={handleChoose}
                />
            ))
        }
        </div>
    )
}
