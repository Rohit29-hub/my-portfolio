import { skillData } from '@/utils/skill'
import Image from 'next/image';
import SectionBanner from './ui/SectionBanner';

const Skill = () => {
    const skillInfo = skillData();
    return (
        <div className='w-full h-auto lg:mt-12 sm:mt-10 mt-6'>
           <SectionBanner title={'Skills'}/>
            <div style={{ marginTop: '3rem' }} className='w-full sm:h-[40vh] lg:h-auto makeContainer grid md:grid-cols-3 grid-cols-2 lg:grid-cols-4 sm:gap-2 gap-1'>
                {Array.from(skillInfo).map(([category, skills]: [string, object[]]) => (
                    <div key={category} className='col-span-1 w-full h-full border-2 border-solid border-[#000000d8] rounded-md'>
                        <div className="w-full h-min py-3">
                            <h1 className="skillTitle text-4xl font-bold text-center capitalize text-[#000000d8]">{category}</h1>
                            <div className="w-full h-full px-2 py-4 grid grid-cols-2  md:grid-cols-3 gap-y-4 gap-x-2">
                                {skills.map((skill: any, index: number) => (
                                    <span key={index} className={`flex items-center justify-center col-span-1 gap-x-1.5 py-1.5 p-1 rounded-md text-xs font-medium border ${skill.level === 'basic' ? 'border-red-400' : skill.level === 'intermediate' ? 'border-green-400' : skill.level === 'advance' ? 'border-yellow-300' : 'border-blue-300'} text-gray-800 `}>{skill.title}</span>
                                ))}
                            </div>
                            <div className='w-full hidden md:flex h-44 items-center justify-center p-4 relative'>
                                {
                                    category == 'frontend' ? (
                                        <Image className='grayscale md:absolute md:top-[-3rem]' src={"https://cdn3d.iconscout.com/3d/premium/thumb/web-development-5171264-4316413.png"} alt='frontend' objectFit='cover'  width={250} height={250} priority/>
                                    ) : category == 'backend' ? (
                                        <Image className='grayscale' src={"https://cdn3d.iconscout.com/3d/premium/thumb/web-development-5402863-4521476.png?f=webp"} alt='backend' objectFit='contain' width={200} height={200} priority/>
                                    ) : category == 'databases' ? (
                                        <Image className='grayscale' src={"https://cdn3d.iconscout.com/3d/premium/thumb/database-search-5380665-4497639.png?f=webp"} alt='databases' objectFit='contain'  width={200} height={200} priority/>
                                    ) : null
                                }
                            </div>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default Skill